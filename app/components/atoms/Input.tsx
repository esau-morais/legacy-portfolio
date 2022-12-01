import { type FC, forwardRef, type InputHTMLAttributes, type DetailedHTMLProps } from 'react'

import { cx } from '@/utils/classNames'

export type TInputProps = {
  id: string
  label: string
  type?: 'text' | 'email'
  } & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, | 'ref'>

const Input: FC<TInputProps> = forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      id,
      label,
      type = 'text',
      placeholder,
      className,
      ...props
    },
    ref
  ) =>
  <input
    id={id}
    aria-label={label}
    type={type}
    ref={ref}
    placeholder={placeholder}
    className={cx(
      'relative inline-flex w-full py-6 px-4 text-base bg-light text-dark placeholder:text-gray border border-white',
      className,
    )}
    {...props}
  />
)

Input.displayName = 'input'

export default Input
