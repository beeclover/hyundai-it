import Spacer from "components/Spacer";
import _ from "lodash"
import { useForm, SubmitHandler } from "react-hook-form";
import tw, { styled } from "twin.macro";
import { useEffect, useState } from "react";
import SearchBar from "components/AutoComplete";
import RadioCircleStyle from "components/Radio";

type Inputs = {
  agree: boolean,
  'your-name': string,
  'your-email': string,
  'your-phone': string,
  'message': string,
  'subject': string,
};

export default function App() {
  const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    fetch('/wp-json/contact-form-7/v1/contact-forms/31/feedback')
  };

  // ======================
  // 이메일
  // ======================
  const [emailValue, setEmailValue] = useState({
    name: '',
    domain: '',
    domain2: '',
  });
  const [emailListOn, setEmailListOn] = useState(true);
  useEffect(() => {
    setValue('your-email', `${emailValue.name}@${emailListOn ? emailValue.domain : emailValue.domain2}`)
  }, [emailValue.name, emailValue.domain, emailValue.domain2, emailListOn])

  return (
    <>
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)} tw="font-pretendard">
        <div>
          <Heading>개인정보 수집 및 이용약관</Heading>
          <Spacer tw="h-[30px]" />
          <div tw="p-[45px] border border-[#707070]">
            ㈜현대아이티는 기업/단체 및 개인의 정보 수집 및 이용 등 처리에 있어<br />
            아래의 사항을 관계법령에 따라 아래와 같이 고지하고 안내해 드립니다.<br />
            <br />
            1. 정보수집의 이용 목적<br />
            제품 구매 상담, 마케팅 및 광고에 활용 신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 전달<br />
            <br />
            2. 수집/이용 항목<br />
            이름(담당자명), 연락처, 이메일, 문의내용<br />
            <br />
            3. 보유 및 이용기간<br />
            홈페이지 제작 상담 종료후 6개월, 제작 완료 종료 후 1년, 정보제공자의 삭제 요청 시 즉시<br />
            <br />
            4. 개인정보처리담당<br />
            전화 1566-7713<br />
          </div>
          <Spacer tw="h-[20px]" />
          <div>
            <div tw="flex gap-x-[20px]">
              <input type="checkbox" tw="hidden" {...register('agree', { required: true })} />
              <div tw="flex items-center gap-x-[10px]">
                <RadioCircleStyle onClick={() => setValue('agree', true)} checked={watch("agree")} />
                <button type="button" onClick={() => setValue('agree', true)}>약관에 동의합니다.</button>
              </div>
              <div tw="flex items-center gap-x-[10px]">
                <RadioCircleStyle onClick={() => setValue('agree', false)} checked={!watch("agree")} />
                <button type="button" onClick={() => setValue('agree', false)}>동의하지 않습니다.</button>
              </div>
            </div>
            {errors.agree && <div tw="text-red-500 mt-[4px]">개인정보 수집 및 이용약관에 동의해주세요.</div>}
          </div>
        </div>
        <Spacer tw="h-[60px]" />
        <div>
          <Heading>문의내용</Heading>
          <Spacer tw="h-[30px]" />
          <div tw="grid grid-cols-2 gap-y-[9px] gap-x-[50px]">
            <div tw="col-span-2 h-px bg-[#d5d5d5] first:mb-[8px] last:mt-[8px]" />
            <div>
              <div tw="grid grid-cols-[90px_1fr]">
                <label tw="mt-[0.5em]" htmlFor="your-name">
                  <div tw="flex items-center">
                    <Require>*</Require>
                    이름
                  </div>
                </label>
                <div tw="grid gap-y-[4px]">
                  <input type="text" id="your-name" {...register('your-name', { required: true, pattern: /^[가-힣]{2,4}$/ })} />
                  {errors['your-name'] && <div tw="text-red-500">이름을 입력해주세요.</div>}
                </div>
              </div>
            </div>
            <div>
              <div tw="grid grid-cols-[90px_1fr]">
                <label tw="mt-[0.5em]" htmlFor="your-phone">
                  <div tw="flex items-center">
                    <Require>*</Require>
                    연락처
                  </div>
                </label>
                <div tw="grid gap-y-[4px]">
                  <input type="text" id="your-phone" {...register('your-phone', { required: true, pattern: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/ })} />
                  {errors['your-phone'] && <div tw="text-red-500">정확한 휴대전화를 입력해주세요.</div>}
                </div>
              </div>
            </div>
            <div tw="col-span-2 h-px bg-[#d5d5d5] first:mb-[8px] last:mt-[8px]" />
            <div>
              <div tw="grid grid-cols-[90px_1fr]">
                <label tw="mt-[0.5em]" htmlFor="your-email">
                  <div tw="flex items-center">
                    <Require>*</Require>
                    이메일
                  </div>
                </label>
                <div tw="grid gap-y-[4px]">
                  <input type="text" hidden {...register('your-email', { required: true, pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/ })} />
                  <div tw="grid gap-x-[10px] grid-cols-[1fr_1em_1fr_108px]">
                    <input
                      tw="min-w-0"
                      type="text"
                      id="your-email"
                      value={emailValue.name}
                      autoComplete="off"
                      onChange={(e) => setEmailValue({ ...emailValue, name: e.target.value })}
                    />
                    <div tw="flex items-center">
                      <span>@</span>
                    </div>
                    {emailListOn ?
                      (
                        <>
                          <SearchBarWrap>
                            <SearchBar
                              onChange={(e) => setEmailValue({ ...emailValue, domain: e })}
                              items={[
                                "gmail.com",
                                "naver.com",
                                "hanmail.net",
                                "daum.net",
                                "nate.com",
                                "hotmail.com",
                                "kakao.com"
                              ]}
                              initialInputValue={emailValue.domain}
                            />
                          </SearchBarWrap>
                          <button type="button" tw="bg-[#5a5a5a] text-white text-[14px]" onClick={() => setEmailListOn(false)}>
                            직접입력
                          </button>
                        </>
                      ) : (
                        <>
                          <input tw="min-w-0" type="text" value={emailValue.domain2} onChange={(e) => setEmailValue({ ...emailValue, domain2: e.target.value })} />
                          <button type="button" tw="bg-[#5a5a5a] text-white text-[14px]" onClick={() => setEmailListOn(true)}>
                            목록선택
                          </button>
                        </>
                      )
                    }
                  </div>
                  {errors['your-email'] && <div tw="text-red-500">입력한 이메일을 확인해주세요.</div>}
                </div>
              </div>
            </div>
            <div tw="col-span-2 h-px bg-[#d5d5d5] first:mb-[8px] last:mt-[8px]" />
            <div tw="col-span-2">
              <div tw="grid grid-cols-[90px_1fr]">
                <label tw="mt-[0.5em]" htmlFor="subject">
                  <div tw="flex items-center">
                    <Require>*</Require>
                    제목
                  </div>
                </label>
                <div tw="grid gap-y-[4px]">
                  <input type="text" id="subject" {...register('subject', { required: true })} />
                  {errors['subject'] && <div tw="text-red-500">제목을 입력해주세요.</div>}
                </div>
              </div>
            </div>
            <div tw="col-span-2 h-px bg-[#d5d5d5] first:mb-[8px] last:mt-[8px]" />
            <div tw="col-span-2">
              <div tw="grid grid-cols-[90px_1fr]">
                <label tw="mt-[0.5em]" htmlFor="message">
                  <div tw="flex items-center">
                    <Require>*</Require>
                    내용
                  </div>
                </label>
                <div tw="grid gap-y-[4px]">
                  <textarea id="message" {...register('message', { required: true })} />
                  {errors['message'] && <div tw="text-red-500">내용을 입력해주세요.</div>}
                </div>
              </div>
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

      {process.env.NODE_ENV === "development" && (
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
              setValue('agree', true);
              setValue('your-name', '홍길동');
              setValue('your-phone', '010-1234-5678');
              setEmailValue({ name: 'test', domain: 'gmail.com', domain2: '' });
              setValue('subject', '제목입니다.');
              setValue('message', '내용입니다.');
            }}
          >
            set dumy data
          </button>
        </div>
      )}
    </>
  );
}

const Require = styled.span`
  color: #ff0000;
  margin-right: 6px;
  line-height: 1;
  display: inline-block;
  margin-top: 0.2em;
  font-size: 20px;
`

const Heading = tw.h2`text-[28px] font-extrabold`
const SearchBarWrap = styled.div`
  > div {
    height: 100%;
  }
`