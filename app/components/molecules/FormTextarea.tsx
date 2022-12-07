import type { TextareaHTMLAttributes } from 'react'

type TFormTextAreaProps = {
  id: string
  name: string
  label: string
  errors?: object & string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const FormTextarea = ({ id, name, label, errors, className, ...props }: TFormTextAreaProps) => {
  const hasErrors = !!errors?.[name]

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <textarea
        aria-invalid={hasErrors}
        className="relative inline-flex w-full py-6 px-4 text-base bg-light text-dark placeholder:text-gray"
        id={id}
        name={name}
        rows={5}
        {...props}
      />

      <small className="block text-left text-sm text-red-500">{errors?.[name]}</small>
    </div>
  )
}

export default FormTextarea
