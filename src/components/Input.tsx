import { InputHTMLAttributes, forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const inputVariants = tv({
  base: 'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 disabled:opacity-50 disabled:bg-gray-50',
  variants: {
    state: {
      default: 'border-gray-300 focus:ring-blue-500 focus:border-blue-500',
      error: 'border-red-500 focus:ring-red-500 focus:border-red-500'
    }
  },
  defaultVariants: {
    state: 'default'
  }
})

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, state, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 11)}`
    const inputState = error ? 'error' : state

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={inputVariants({ state: inputState, className })}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input