import React, { DOMAttributes, useLayoutEffect } from 'react'
import { useController } from 'react-hook-form';
import Require from './styleRequire'

interface YourSubjectProps extends DOMAttributes<HTMLDivElement> {
  control: any
}
const YourSubject = ({ control, ...props }: YourSubjectProps) => {
  const { field, formState } = useController({
    control,
    name: 'your-subject',
    rules: {
      required: true,
      pattern: /^[가-힣]{2,4}$/,
    }
  })
  const [value, setValue] = React.useState(String(field.value));

  useLayoutEffect(() => {
    field.onChange(value);
  }, [value])

  return (
    <div {...props}>
      <label tw="mt-[0.5em]" htmlFor="your-subject">
        <div tw="flex items-center">
          <Require>*</Require>
          제목
        </div>
      </label>
      <div tw="grid gap-y-[4px]">
        <input
          type="text"
          ref={field.ref}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {formState.errors['your-subject'] && <div tw="text-red-500">제목을 입력해주세요.</div>}
      </div>
    </div>
  )
}

export default YourSubject