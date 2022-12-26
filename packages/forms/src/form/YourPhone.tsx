import SearchBar from 'components/AutoComplete';
import React, { DOMAttributes, useLayoutEffect } from 'react'
import { useController } from 'react-hook-form';
import Require from './styleRequire'

interface YourPhoneProps extends DOMAttributes<HTMLDivElement> {
  control: any
}
const YourPhone = ({ control, ...props }: YourPhoneProps) => {
  const { field, formState } = useController({
    control,
    name: 'your-phone',
    rules: {
      required: true,
      pattern: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
    }
  })
  const [value, setValue] = React.useState(String(field.value));
  const [phoneValue, setPhoneValue] = React.useState({
    head: '010',
    body: '',
    tail: '',
  })

  useLayoutEffect(() => {
    field.onChange(`${phoneValue.head}-${phoneValue.body}-${phoneValue.tail}`);
  }, [phoneValue.head, phoneValue.body, phoneValue.tail])

  return (
    <div {...props}>
      <input
        hidden
        readOnly
        type="text"
        ref={field.ref}
        value={`${phoneValue.head}-${phoneValue.body}-${phoneValue.tail}`}
      />
      <label tw="mt-[0.5em]" htmlFor="your-phone">
        <div tw="flex items-center">
          <Require>*</Require>
          연락처
        </div>
      </label>
      <div tw="grid gap-y-[4px]">
        <div tw="grid grid-cols-[1fr,auto,1fr,auto,1fr] gap-x-[4px] items-center">
          <SearchBar
            onChange={(e) => setPhoneValue({
              ...phoneValue,
              head: e,
            })}
            items={[
              "010",
              "011",
              "016",
              "017",
              "018",
              "019"
            ]}
            initialInputValue={phoneValue.head}
            tw="h-full"
          />
          <div>-</div>
          <input
            type="text"
            tw="min-w-0"
            value={phoneValue.body}
            onChange={e => setPhoneValue({
              ...phoneValue,
              body: e.target.value,
            })}
          />
          <div>-</div>
          <input
            type="text"
            tw="min-w-0"
            value={phoneValue.tail}
            onChange={e => setPhoneValue({
              ...phoneValue,
              tail: e.target.value,
            })}
          />
        </div>
        {formState.errors['your-phone'] && <div tw="text-red-500">정확한 휴대전화를 입력해주세요.</div>}
      </div>
    </div>
  )
}

export default YourPhone