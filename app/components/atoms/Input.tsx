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
      className,
      ...props
    },
    ref
  ) =>
  <input
    id={id}
    type={type}
    ref={ref}
    className={cx(
        'relative inline-flex w-full py-6 px-4 text-base bg-light text-dark placeholder:text-gray focus:outline-none focus:ring focus:ring-light-blue',
      className,
    )}
    {...props}
  />
)

Input.displayName = 'input'

export default Input
