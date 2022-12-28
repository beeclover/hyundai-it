import ErrorAnimation from 'components/ErrorAnimation';
import Spacer from 'components/Spacer';
import _ from 'lodash';
import { DOMAttributes, useLayoutEffect, useState } from 'react'
import { useController } from 'react-hook-form';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Modal from 'react-modal';
import Require from './styleRequire'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'grid',
    justifyItems: 'center',
    rowGap: '1rem',
    border: 'none',
    borderRadius: '8px',
  },
};

Modal.setAppElement('#root');

interface FilesProps extends DOMAttributes<HTMLDivElement> {
  control: any
}
const Files = ({ control, ...props }: FilesProps) => {
  const { field, formState } = useController({
    control,
    name: 'files',
  })
  const [file, setFile] = useState<File[]>([]);
  const [totalFileSize, setTotalFileSize] = useState(0);
  const [isError, setIsError] = useState(false);
  const maxFileCount = 5;

  const handle = (files: FileList) => {
    const arr = Object.values(files);
    const dd = file.concat(arr);
    setFile(dd);
  };

  const CheckFileSize = (files: FileList) => {
    let pass = true;
    _.forEach(files, file => {
      // 10MB 이상일 경우
      if (file.size >= 10485760) {
        setIsError(true);
        pass = false;
        return;
      }
      // 20MB 이상일 경우
      if (totalFileSize + file.size >= 20971520) {
        setIsError(true);
        pass = false;
        return;
      }
      setTotalFileSize(totalFileSize + file.size);
      return;
    })

    return pass;
  }

  const limitFileCount = (files: FileList | null) => {
    if (!files) return;

    // 누적된 업로드 파일갯수가 5개 이상일 경우
    if (file.length >= maxFileCount) {
      setIsError(true);
      return;
    }

    // 초기에 한번에 업로드하는 파일 갯수가 5개 이상일 경우
    if (files?.length >= maxFileCount) {
      setIsError(true);
      return;
    }

    // 용량체크 && 파일 상태값으로 저장
    CheckFileSize(files) && handle(files);
  }

  useLayoutEffect(() => {
    field.onChange(file);
  }, [file])

  useLayoutEffect(() => {
    if (isError) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [isError])

  return (
    <div {...props}>
      <Modal
        isOpen={isError}
        style={customStyles}
        onRequestClose={() => setIsError(false)}
      >
        <ErrorAnimation isOpen={true} />
        <div tw="text-center">
          <ul>
            <li>최대 5개까지 업로드 가능합니다.</li>
            <li>파일 한개당 10mb이하</li>
            <li>전체 파일의 용량은 20mb이하</li>
          </ul>
        </div>
        <button type="button" onClick={() => setIsError(false)} tw="absolute cursor-pointer right-[14px] top-[14px] p-0 border-none shadow-none ring-0 bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" tw="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </Modal>
      <Spacer tw="h-[20px]" />
      <Spacer tw="h-[8px] col-span-2" />
      <input
        type="file"
        id="files"
        ref={field.ref}
        multiple
        hidden
        accept='image/*,.pdf'
        onChange={e => {
          limitFileCount(e.target.files);
        }}
      />
      <div tw="mt-[0.5em]">
        <div tw="flex items-center">
          <Require>*</Require>
          첨부파일
        </div>
      </div>
      <div tw="grid">
        <label tw="flex cursor-pointer" htmlFor="files">
          <div tw="flex-1 border border-[#707070]" />
          <div
            tw="bg-[#5a5a5a] py-[14px] px-[33px] text-white text-[14px]"
          >
            파일찾기
          </div>
        </label>
        <Spacer tw="h-[18px]" />
        <div tw="text-[#666666]">파일 한개당 10mb이하, 전체 파일의 용량은 20mb이하여야 하며, exe 형식의 파일은 첨부할 수 없습니다.</div>
        <Spacer tw="h-[35px]" />
        {file.length > 0 && (
          <>
            <div tw="h-px bg-[#d5d5d5]" />
            <Spacer tw="h-[26px]" />
            <ul>
              {file.map((f, i) => (
                <li key={i}>
                  <div tw="flex items-center gap-x-[13px] justify-start">
                    <button
                      type="button"
                      tw="w-[16px] h-[16px] border border-black rounded-[4px] flex items-center justify-center"
                      onClick={e => {
                        e.preventDefault();
                        const arr = file.filter((_, index) => index !== i);
                        setFile(arr);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div>{f.name}</div>
                  </div>
                </li>
              ))}
            </ul>
            <Spacer tw="h-[26px]" />
            <div tw="h-px bg-[#d5d5d5]" />
          </>
        )}
      </div>
    </div>
  )
}

export default Files