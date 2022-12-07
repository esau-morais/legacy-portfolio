import { Input } from '@/components/atoms'

import type { TInputProps } from '../atoms/Input'

type TFormInputProps = {
  name: string
  errors?: object & string
} & TInputProps

const FormInput = ({ id, name, label, errors, className, ...props }: TFormInputProps) => {
  const hasErrors = !!errors?.[name]

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        name={name}
        label={label}
        aria-describedby={name}
        aria-invalid={hasErrors}
        {...props}
      />

      <small className="mt-1 block text-left text-sm text-red-500" role="alert">{errors?.[name]}</small>
    </div>
  )
}

export default FormInput
