import { HTMLAttributes } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const cardVariants = tv({
  base: 'bg-white border border-gray-200 rounded-lg shadow-sm',
  variants: {
    padding: {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    },
    shadow: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg'
    }
  },
  defaultVariants: {
    padding: 'md',
    shadow: 'sm'
  }
})

const cardHeaderVariants = tv({
  base: 'mb-4'
})

const cardTitleVariants = tv({
  base: 'text-lg font-semibold text-gray-900'
})

const cardContentVariants = tv({
  base: 'text-gray-700'
})

interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  children: React.ReactNode
}

const Card = ({ className, padding, shadow, children, ...props }: CardProps) => {
  return (
    <div
      className={cardVariants({ padding, shadow, className })}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardHeader = ({ className, children, ...props }: CardHeaderProps) => {
  return (
    <div
      className={cardHeaderVariants({ className })}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

const CardTitle = ({ className, children, ...props }: CardTitleProps) => {
  return (
    <h3
      className={cardTitleVariants({ className })}
      {...props}
    >
      {children}
    </h3>
  )
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardContent = ({ className, children, ...props }: CardContentProps) => {
  return (
    <div
      className={cardContentVariants({ className })}
      {...props}
    >
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Title = CardTitle
Card.Content = CardContent

export default Card