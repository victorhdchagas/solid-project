import { JSX } from 'solid-js'
import { twMerge } from 'tailwind-merge'
import { VariantProps, tv } from 'tailwind-variants'

const titleVariants = tv({
  base: '',
  variants: {
    size: {
      sm: 'text-lg',
      base: 'text-xl',
      md: 'text-2xl',
      lg: 'text-4xl',
      xl: 'text-6xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
    color: {
      alpha: 'text-slate-400',
      omega: 'text-emerald-800',
      sigma: 'text-indigo-950',
    },
    center: {
      true: 'text-center w-full',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'alpha',
  },
})
type TitleProps = { children?: JSX.Element; class?: string } & VariantProps<
  typeof titleVariants
>
export default function TitleAtom({
  children,
  class: className,
  ...props
}: TitleProps) {
  return (
    <span class={twMerge(titleVariants(props), className)}>{children}</span>
  )
}
