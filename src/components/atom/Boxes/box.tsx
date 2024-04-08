import { JSX } from 'solid-js'
import { twMerge } from 'tailwind-merge'
import { VariantProps, tv } from 'tailwind-variants'

const BoxVariant = tv({
  base: 'flex',
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    },
    backgroundColor: {
      alpha: `bg-slate-700`,
      omega: 'bg-emerald-800',
      sigma: `bg-indigo-950`,
    },
    size: {
      default: 'w-fit h-fit',
      '1/2': 'w-1/2 h-1/2',
      '1/3': 'w-1/3 h-1/3',
      '1/4': 'w-1/4 h-1/4',
      full: 'w-full h-full',
      'w-full': 'w-full',
      'h-full': 'h-full',
      sm: 'w-60',
      md: 'w-80',
      lg: 'w-96',
      xl: 'w-1/2',
      screen: 'w-screen h-[calc(100vh-64px)]',
    },
    position: {
      fixed: 'fixed',
      absolute: 'absolute',
      sticky: 'sticky',
      relative: 'relative',
      'inset-0': 'inset-0',
    },
    overflow: {
      hidden: 'overflow-hidden',
      auto: 'overflow-auto',
      'x-auto': 'overflow-x-auto',
      'y-auto': 'overflow-y-auto',
    },
    alignment: {
      center: 'justify-center items-center ',
      start: 'justify-start items-start',
      end: 'justify-end items-end',
      stretch: 'justify-stretch items-stretch',
      baseline: 'justify-baseline items-baseline',
      around: 'justify-around items-around',
      evenly: 'justify-evenly items-evenly',
      between: 'justify-between items-between',
    },
    rotate: {
      '0': 'rotate-0',
      '45': 'rotate-45',
      '65': 'rotate-[65deg]',
      '15': 'rotate-[15deg]',
      '195': '-rotate-[15deg]',
      '90': 'rotate-90',
      '135': '-rotate-45',
      '180': 'rotate-180',
      '270': '-rotate-90',
    },
    marginCenter: {
      true: 'm-auto',
    },
    paddingCenter: {
      true: 'p-auto',
    },
    gap: {
      small: 'gap-2',
      medium: 'gap-4',
      large: 'gap-6',
      xlarge: 'gap-8',
      xxlarge: 'gap-10',
    },
    grow: {
      true: 'grow',
    },
    noGrow: {
      true: 'grow-0',
    },
    opacity: {
      sm: 'opacity-25',
      md: 'opacity-50',
      lg: 'opacity-75',
      xl: 'opacity-90',
      full: 'opacity-100',
    },
  },
  defaultVariants: {
    direction: 'row',
    size: 'default',
    alignment: 'between',
    opacity: 'full',
    rounded: 'lg',
    overflow: 'auto',
    backgroundColor: 'alpha',
  },
})

type BoxProps = { children?: JSX.Element; class?: string } & VariantProps<
  typeof BoxVariant
>

export default function BoxAtom({
  children,
  class: className,
  ...props
}: BoxProps) {
  return <div class={twMerge(BoxVariant(props), className)}>{children}</div>
}
