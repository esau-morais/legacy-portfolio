import type { ButtonHTMLAttributes, ComponentProps, ReactElement } from 'react'

import { cx } from '@/utils/classNames'

type TTheme = 'primary' | 'secondary' | 'success' | 'danger'
type TSize = 'large' | 'medium' | 'small'

type TButtonProps =  {
  type: 'submit' | 'button'
  label?: string
  icon?: ComponentProps<'svg'> | ReactElement
  theme?: TTheme
  size?: TSize
} & ButtonHTMLAttributes<HTMLButtonElement>

const deepThemeMap: Record<TTheme, string> = {
  primary: 'bg-gradient-to-r from-dark-blue via-blue to-light-blue',
  secondary: 'bg-transparent border border-solid border-light',
  success: 'bg-green-500',
  danger: 'bg-red-500'
}

const deepSizeMap: Record<TSize, string> = {
  large: 'px-12 py-6',
  medium: 'px-9 py-4',
  small: 'px-6 py-2'
}

const Button = ({
  type,
  label,
  icon,
  theme = 'primary',
  size = 'medium',
  className,
  ...props
}: TButtonProps) => {
  return (
    <button
      aria-label={label ?? 'Button with icon'}
      type={type}
      className={cx(
        className,
        'block tems-center mt-4 transform duration-200 text-base text-black font-semibold hover:shadow-retro focus:outline-none focus:ring focus:ring-light-blue focus:ring-offset-2 disabled:opacity-50',
        icon ? 'p-1' : deepSizeMap[size],
        deepThemeMap[theme],
      )}
      {...props}
    >
      <span
        data-testid="button_icon"
        className={cx(icon && !!label ? 'mr-2' : null)}
      >
        {<>{icon}</>}
      </span>
      <span>{label}</span>
    </button>
  )
}

export default Button
