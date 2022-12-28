import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from 'styles/GlobalStyle'
import Spacer from "components/Spacer"
import _ from "lodash"
import { useForm, SubmitHandler } from "react-hook-form"
import tw from "twin.macro"
import { useState } from "react"
import LoadingWrap from "components/LoadingWrap"
import SuccessAnimation from "components/SuccessAnimation"
import ErrorAnimation from "components/ErrorAnimation"
import ReactLoading from "react-loading"
import YourName from 'form/YourName'
import YourPhone from 'form/YourPhone'
import YourEmail from 'form/YourEmail'
import YourSubject from 'form/YourSubject'
import YourMessage from 'form/YourMessage'
import PrivacyPolicy from 'form/PrivacyPolicy'
import Files from 'form/Files'

export type Inputs = {
  'privacy-policy': boolean,
  'your-name': string,
  'your-email': string,
  'your-phone': string,
  'your-message': string,
  'your-subject': string,
  'files': FileList | File | null,
};

export default function App() {
  const {
    control,
    setValue,
    handleSubmit,
    watch,
  } = useForm<Inputs>({
    mode: 'onChange',
    defaultValues: {
      'privacy-policy': false,
      'your-name': '',
      'your-phone': '',
      'your-message': '',
      'your-subject': '',
      'files': null,
    }
  });

  // ======================
  // 제출
  // ======================
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    // 키 매칭
    let overrideData = _.mapKeys(data, (_value, key) => {
      if (key === 'privacy-policy') return 'acceptance-596';
      return key;
    })

    // 파일 분리
    const files = ['file-1', 'file-2', 'file-3', 'file-4', 'file-5'];
    overrideData = _.merge(overrideData, _.zipObject(files, (data.files) as FileList));

    const formData = new FormData();
    _.forOwn(overrideData, (value, key) => {
      formData.set(key, value as string);
    });

    const res = await fetch(
      `${import.meta.env.VITE_DOMAIN}/wp-json/contact-form-7/v1/contact-forms/579/feedback`,
      {
        method: 'POST',
        body: formData,
      }
    )
      .then(res => res.json())
      .catch(error => {
        console.log(error)
      });

    /**
     * https://docs.gravityforms.com/rest-api-v2/#h-post-forms-form-id-submissions
     */
    if (res?.status !== "validation_failed") {
      setMessage(res.message)
    } else {
      setMessage('죄송합니다<br/>시스템에 문제가 생겼습니다.');
    }
    setLoading(false);
    setStatus(res.status);
  };

  return (
    <>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)} tw="font-pretendard relative" encType="multipart/form-data">
        <LoadingWrap isOpen={loading || status !== ''}>
          <div tw="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-50 z-50 text-center">
            <div>
              {/* 로딩중일 때만 보여진다. */}
              <div css={[loading ? tw`block` : tw`hidden`]}>
                <ReactLoading type="bubbles" color="#3c92ff" />
              </div>
              <div tw="flex flex-col items-center gap-[24px]">
                {/* 결과값이 200 */}
                <SuccessAnimation isOpen={status === 'mail_sent'} />
                {/* rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
                {status !== '' && <div tw="text-[18px]" dangerouslySetInnerHTML={{ __html: message }} />}
              </div>
              <div tw="flex flex-col items-center gap-[24px]">
                {/* 결과값이 400, 404, 401, 500 일때 */}
                <ErrorAnimation isOpen={status === 'validation_failed'} />
                {/* rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
                {status === 'validation_failed' && <div tw="text-[18px] text-red-400" dangerouslySetInnerHTML={{ __html: message }} />}
              </div>
            </div>
          </div>
        </LoadingWrap>
        <div>
          <Heading>개인정보 수집 및 이용약관</Heading>
          <Spacer tw="h-[30px]" />
          <PrivacyPolicy control={control} />
        </div>
        <Spacer tw="h-[60px]" />
        <div>
          <Heading>문의내용</Heading>
          <Spacer tw="h-[30px]" />
          <div tw="grid grid-cols-2 gap-y-[9px] gap-x-[50px]">
            <div tw="col-span-2 h-px bg-[#d5d5d5] first:mb-[8px] last:mt-[8px]" />
            <div>
              <YourName control={control} tw="grid grid-cols-[90px_1fr]" />
            </div>
            <div>
              <YourPhone control={control} tw="grid grid-cols-[90px_1fr]" />
            </div>
            <div tw="col-span-2 h-px bg-[#d5d5d5] first:mb-[8px] last:mt-[8px]" />
            <div>
              <YourEmail control={control} tw="grid grid-cols-[90px_1fr]" />
            </div>
            <div tw="col-span-2 h-px bg-[#d5d5d5] first:mb-[8px] last:mt-[8px]" />
            <div tw="col-span-2">
              <YourSubject control={control} tw="grid grid-cols-[90px_1fr]" />
            </div>
            <div tw="col-span-2 h-px bg-[#d5d5d5] first:mb-[8px] last:mt-[8px]" />
            <div tw="col-span-2">
              <YourMessage control={control} tw="grid grid-cols-[90px_1fr]" />
            </div>
            <div tw="col-span-2 h-px bg-[#d5d5d5] first:mb-[8px] last:mt-[8px]" />
            <div tw="col-span-2">
              <Files control={control} tw="grid grid-cols-[90px_1fr]" />
            </div>
          </div>
          <Spacer tw="h-[60px]" />
          <div tw="flex justify-center">
            <input
              tw="pt-[20px] pb-[19px] px-[55px] rounded-[4px] bg-[#3c92ff] text-white text-[22px] font-bold"
              type="submit"
              value="문의보내기"
            />
          </div>
        </div>
      </form>

      {
        process.env.NODE_ENV !== "production" && (
          <div tw="fixed bottom-0 right-0 p-[6px] bg-red-200 grid text-[12px]">
            <button
              type="button"
              onClick={() => console.log(watch())}
            >
              watch
            </button>
            <button
              type="button"
              onClick={() => {
                setValue('privacy-policy', true);
                setValue('your-name', '홍길동');
                setValue('your-phone', '010-1234-5678');
                setValue('your-email', 'test@beeclover.pro');
                setValue('your-subject', '제목입니다.');
                setValue('your-message', '내용입니다.');
              }}
            >
              set dumy data
            </button>
          </div>
        )
      }
    </>
  );
}

const Heading = tw.h2`text-[28px] font-extrabold`

// render
const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
