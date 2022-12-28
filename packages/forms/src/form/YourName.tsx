import React, { DOMAttributes, useLayoutEffect } from 'react'
import { useController } from 'react-hook-form';
import Require from './styleRequire'

interface YourNameProps extends DOMAttributes<HTMLDivElement> {
  control: any
}
const YourName = ({ control, ...props }: YourNameProps) => {
  const { field, formState } = useController({
    control,
    name: 'your-name',
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
      <label tw="mt-[0.5em]" htmlFor="your-name">
        <div tw="flex items-center">
          <Require>*</Require>
          이름
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
        {formState.errors['your-name'] && <div tw="text-red-500">이름을 입력해주세요.</div>}
      </div>
    </div>
  )
}

export default YourName