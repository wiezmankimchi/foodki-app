import TextareaAutosize from 'react-autosize-textarea'

import { FieldError, useRegister } from '@redwoodjs/forms'

type SpanInputFieldProps = {
  name: string
  className?: string
  placeHolder?: string
  validation?
}

const SpanInputField = ({
  name,
  className,
  placeHolder,
  validation,
}: SpanInputFieldProps) => {
  const register = useRegister({
    name,
    validation: { ...validation },
  })

  // const { className: labelClassName, style: labelStyle } = useErrorStyles({
  //   className: `my-label-class`,
  //   errorClassName: `my-label-error-class`,
  //   name,
  // })
  // const { className: inputClassName, style: inputStyle } = useErrorStyles({
  //   className: `my-input-class`,
  //   errorClassName: `my-input-error-class`,
  //   name,
  // })

  return (
    <div>
      <TextareaAutosize
        name={name}
        {...register}
        className={`w-full ${className}`}
        placeholder={placeHolder}
      />
    </div>
  )
}

export default SpanInputField
