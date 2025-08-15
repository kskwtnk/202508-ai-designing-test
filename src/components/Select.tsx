import { SelectHTMLAttributes, forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const selectVariants = tv({
  base: 'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 disabled:opacity-50 disabled:bg-gray-50 bg-white',
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

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, VariantProps<typeof selectVariants> {
  label?: string
  error?: string
  options: SelectOption[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, state, options, placeholder, ...props }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substring(2, 11)}`
    const selectState = error ? 'error' : state

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <select
          id={selectId}
          className={selectVariants({ state: selectState, className })}
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select