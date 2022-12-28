import React, { DOMAttributes, useEffect, useLayoutEffect, useState } from 'react'
import { useController } from 'react-hook-form';
import { styled } from 'twin.macro';
import Require from './styleRequire'
import SearchBar from "components/AutoComplete"

interface YourEmailProps extends DOMAttributes<HTMLDivElement> {
  control: any
}
const YourEmail = ({ control, ...props }: YourEmailProps) => {
  const { field, formState } = useController({
    control,
    name: 'your-email',
    rules: {
      required: true,
      pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    }
  })
  const [emailValue, setEmailValue] = useState({
    name: '',
    domain: '',
    domain2: '',
    result: '',
  });
  const [emailListOn, setEmailListOn] = useState(true);

  useLayoutEffect(() => {
    field.onChange(`${emailValue.name}@${emailListOn ? emailValue.domain : emailValue.domain2}`)
  }, [emailValue.name, emailValue.domain, emailValue.domain2, emailListOn])

  return (
    <div {...props}>
      <input hidden readOnly ref={field.ref} value={`${emailValue.name}@${emailListOn ? emailValue.domain : emailValue.domain2}`} />
      <label tw="mt-[0.5em]" htmlFor="your-email">
        <div tw="flex items-center">
          <Require>*</Require>
          이메일
        </div>
      </label>
      <div tw="grid gap-y-[4px]">
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
        {formState.errors['your-email'] && <div tw="text-red-500">입력한 이메일을 확인해주세요.</div>}
      </div>
    </div>
  )
}

export default YourEmail

const SearchBarWrap = styled.div`
  > div {
    height: 100%;
  }
`
