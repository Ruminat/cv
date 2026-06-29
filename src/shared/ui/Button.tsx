import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { isValidElement, type ReactNode } from 'react'

import { cn } from '@/shared/lib/Cn'
import { buttonVariants, type ButtonVariantProps } from '@/shared/ui/ButtonVariants'

type ButtonProps = Omit<ButtonPrimitive.Props, 'render'> &
  ButtonVariantProps & {
    asChild?: boolean
    children?: ReactNode
  }

function Button({
  asChild = false,
  children,
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  const render = asChild && isValidElement(children) ? children : undefined

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      render={render}
      {...props}
    >
      {asChild ? null : children}
    </ButtonPrimitive>
  )
}

export { Button }
