import React from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from 'styles/GlobalStyle'
import Spacer from "components/Spacer"
import _ from "lodash"
import { useForm, SubmitHandler } from "react-hook-form"
import tw from "twin.macro"
import { useEffect, useState } from "react"
import LoadingWrap from "components/LoadingWrap"
import SuccessAnimation from "components/SuccessAnimation"
import ErrorAnimation from "components/ErrorAnimation"
import ReactLoading from "react-loading"
import PrivacyPolicy from 'form/PrivacyPolicy'
import YourName from 'form/YourName'
import YourPhone from 'form/YourPhone'
import YourEmail from 'form/YourEmail'
import YourSubject from 'form/YourSubject'
import YourMessage from 'form/YourMessage'

interface Inputs {
  'privacy-policy': boolean,
  'your-name': string,
  'your-email': string,
  'your-phone': string,
  'your-message': string,
  'your-subject': string,
};

export default function App() {
  const {
    control,
    setValue,
    handleSubmit,
    watch,
  } = useForm<Inputs>({ mode: 'onChange' });

  // ======================
  // 제출
  // ======================
  const [response, setResponse] = useState({
    loading: false,
    status: '' as 'success' | 'error' | '',
    message: `<div id='gform_confirmation_wrapper_1' class='gform_confirmation_wrapper '><div id='gform_confirmation_message_1' class='gform_confirmation_message_1 gform_confirmation_message'>연락 해주셔서 감사합니다! 곧 연락드리겠습니다.<\/div><\/div>`,
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setResponse(_.merge(response, { loading: true }));
    // 키 매칭
    let overrideData = _.mapKeys(data, (_value, key) => {
      if (key === 'privacy-policy') return 'input_3.1';
      if (key === 'your-name') return 'input_4';
      if (key === 'your-email') return 'input_9';
      if (key === 'your-phone') return 'input_8';
      if (key === 'your-subject') return 'input_6';
      if (key === 'your-message') return 'input_7';
      return key;
    })
    // 키 매칭
    overrideData = _.mapValues(overrideData, (_value, key) => {
      if (key === 'input_3.1' && _value) return '동의함';
      return _value;
    });

    const formData = new FormData();
    _.forOwn(overrideData, (value, key) => {
      formData.set(key, value as string);
    });

    const res = await fetch(
      `${process.env.DOMAIN}/wp-json/gf/v2/forms/1/submissions`,
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
    if (res?.is_valid) {
      setResponse(_.merge(response, { loading: false, status: 'success', message: res.confirmation_message }));
    } else {
      setResponse(_.merge(response, { loading: false, status: 'error', message: '죄송합니다<br/>시스템에 문제가 생겼습니다.' }));
    }
  };

  return (
    <>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)} tw="font-pretendard relative" encType="multipart/form-data">
        <LoadingWrap isOpen={response.loading || response.status !== ''}>
          <div tw="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-50 z-50 text-center">
            <div>
              {/* 로딩중일 때만 보여진다. */}
              <div css={[response.status === '' ? tw`block` : tw`hidden`]}>
                <ReactLoading type="bubbles" color="#3c92ff" />
              </div>
              <div tw="flex flex-col items-center gap-[24px]">
                {/* 결과값이 200 */}
                <SuccessAnimation isOpen={response.status === 'success'} />
                {/* rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
                {response.status === 'success' && <div tw="text-[18px]" dangerouslySetInnerHTML={{ __html: response.message }} />}
              </div>
              <div tw="flex flex-col items-center gap-[24px]">
                {/* 결과값이 400, 404, 401, 500 일때 */}
                <ErrorAnimation isOpen={response.status === 'error'} />
                {/* rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
                {response.status === 'error' && <div tw="text-[18px] text-red-400" dangerouslySetInnerHTML={{ __html: response.message }} />}
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

      {process.env.NODE_ENV !== "production" && (
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
      )}
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
