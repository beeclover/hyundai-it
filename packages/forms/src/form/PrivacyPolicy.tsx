import RadioCircleStyle from 'components/Radio';
import Spacer from 'components/Spacer';
import React, { DOMAttributes, useLayoutEffect } from 'react'
import { useController } from 'react-hook-form';

interface PrivacyPolicyProps extends DOMAttributes<HTMLDivElement> {
  control: any
}
const PrivacyPolicy = ({ control, ...props }: PrivacyPolicyProps) => {
  const { field, formState } = useController({
    control,
    name: 'privacy-policy',
    rules: {
      required: true,
    }
  })
  const [value, setValue] = React.useState(field.value);

  useLayoutEffect(() => {
    field.onChange(value);
  }, [value])

  return (
    <>
      <div tw="p-[45px] border border-[#707070] max-h-[calc(11em+90px)] overflow-auto" >
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
      <div {...props}>
        <input type="checkbox" tw="hidden" ref={field.ref} value={value} />
        <div tw="flex gap-x-[20px]">
          <div tw="flex items-center gap-x-[10px]">
            <RadioCircleStyle onClick={() => setValue(true)} checked={value} />
            <button type="button" onClick={() => setValue(true)}>약관에 동의합니다.</button>
          </div>
          <div tw="flex items-center gap-x-[10px]">
            <RadioCircleStyle onClick={() => setValue(false)} checked={!value} />
            <button type="button" onClick={() => setValue(false)}>동의하지 않습니다.</button>
          </div>
        </div>
        {formState.errors['privacy-policy'] && <div tw="text-red-500">개인정보 수집 및 이용약관에 동의해주세요.</div>}
      </div>
    </>
  )
}

export default PrivacyPolicy
