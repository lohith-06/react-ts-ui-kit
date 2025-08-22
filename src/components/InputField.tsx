import React from 'react'
import { clsx } from 'clsx'

export type InputVariant = 'filled' | 'outlined' | 'ghost'
export type InputSize = 'sm' | 'md' | 'lg'

export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  helperText?: string
  errorMessage?: string
  invalid?: boolean
  variant?: InputVariant
  size?: InputSize
  loading?: boolean
  clearable?: boolean
  passwordToggle?: boolean
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { id, value, onChange, label, placeholder, helperText, errorMessage, disabled, invalid,
      variant = 'outlined', size = 'md', loading = false, clearable = false,
      passwordToggle = false, type = 'text', className, ...rest }, ref
  ) => {
    const [localType, setLocalType] = React.useState(type)
    const inputId = id || React.useId()

    const sizeCls = {
      sm: 'h-9 text-sm px-3 rounded-lg',
      md: 'h-10 text-base px-3.5 rounded-xl',
      lg: 'h-12 text-lg px-4 rounded-2xl'
    }[size]

    const base = 'w-full outline-none transition-[box-shadow,background,border] disabled:opacity-60 disabled:cursor-not-allowed'

    const variantCls: Record<InputVariant, string> = {
      filled: 'bg-slate-100/70 dark:bg-slate-800/60 border border-transparent focus:bg-white dark:focus:bg-slate-900 focus:ring-2 ring-brand-500',
      outlined: 'bg-transparent border border-slate-300 dark:border-slate-700 focus:border-brand-500 focus:ring-2 ring-brand-500',
      ghost: 'bg-transparent border border-transparent focus:ring-2 ring-brand-500 hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
    }

    const invalidCls = invalid ? 'border-red-500 focus:border-red-500 ring-red-500' : ''

    return (
      <div className={clsx('w-full', className)}>
        {label && (
          <label htmlFor={inputId} className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
            {label}
          </label>
        )}
        <div className={clsx('flex items-center gap-2 group', sizeCls, variantCls[variant], invalidCls, 'focus-within:shadow-sm')}>
          <input
            id={inputId}
            ref={ref}
            className={clsx(
              base,
              'bg-transparent flex-1 placeholder:text-slate-400 text-slate-900 dark:text-slate-100'
            )}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            type={localType}
            aria-describedby={helperText ? `${inputId}-help` : undefined}
            aria-errormessage={invalid ? `${inputId}-error` : undefined}
            {...rest}
          />
        </div>
        {helperText && !invalid && (
          <p id={`${inputId}-help`} className="mt-1 text-xs text-slate-500 dark:text-slate-400">{helperText}</p>
        )}
        {invalid && errorMessage && (
          <p id={`${inputId}-error`} className="mt-1 text-xs text-red-600">{errorMessage}</p>
        )}
      </div>
    )
  }
)

InputField.displayName = 'InputField'
