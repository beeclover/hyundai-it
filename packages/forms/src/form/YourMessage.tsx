import React, { DOMAttributes, useLayoutEffect } from 'react'
import { useController } from 'react-hook-form';
import Require from './styleRequire'

interface YourMessageProps extends DOMAttributes<HTMLDivElement> {
  control: any
}
const YourMessage = ({ control, ...props }: YourMessageProps) => {
  const { field, formState } = useController({
    control,
    name: 'your-message',
    rules: {
      required: true,
    }
  })
  const [value, setValue] = React.useState(String(field.value));

  useLayoutEffect(() => {
    field.onChange(value);
  }, [value])

  return (
    <div {...props}>
      <label tw="mt-[0.5em]" htmlFor="your-message">
        <div tw="flex items-center">
          <Require>*</Require>
          내용
        </div>
      </label>
      <div tw="grid gap-y-[4px]">
        <textarea
          id="your-message"
          ref={field.ref}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {formState.errors['your-message'] && <div tw="text-red-500">내용을 입력해주세요.</div>}
      </div>
    </div>
  )
}

export default YourMessage