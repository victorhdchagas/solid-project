import { useLocation } from '@solidjs/router'
import BoxAtom from '~/components/atom/Boxes/box'

export default function Nav() {
  const location = useLocation()
  const NODE_ENV = process.env
  const active = (path: string) =>
    path == location.pathname
      ? 'border-sky-600'
      : 'border-transparent hover:border-sky-600'
  return (
    <BoxAtom
      gap="large"
      alignment="evenly"
      backgroundColor="sigma"
      size="w-full"
      rounded="sm"
      position="relative"
    >
      {NODE_ENV.NODE_ENV == 'development' && (
        <BoxAtom
          rotate="195"
          position="fixed"
          alignment="center"
          class="min-w-[100px] translate-y-1/2 top-2 right-10 z-30 py-4 px-2 border border-opacity-10 opacity-75 border-dashed hover:opacity-0 transition-all cursor-none before:duration-1000"
        >
          Desenvolvimento
        </BoxAtom>
      )}
      <ul class="container flex items-center p-3 text-gray-200">
        <li class="w-20">
          <img src="/Eleanora_logo.png" class="w-10 h-10" />
        </li>
        <li class={`border-b-2 ${active('/')} mx-1.5 sm:mx-6`}>
          <a href="/">Home</a>
        </li>
        <li class={`border-b-2 ${active('/about')} mx-1.5 sm:mx-6`}>
          <a href="/about">About</a>
        </li>
        {NODE_ENV.NODE_ENV == 'development' && (
          <>
            <li class={`border-b-2 ${active('/info')} mx-1.5 sm:mx-6`}>
              <a href="/info">Info</a>
            </li>
            <li class={`border-b-2 ${active('/sessions')} mx-1.5 sm:mx-6`}>
              <a href="/sessions">Session</a>
            </li>
          </>
        )}
        <li class={`border-b-2 ${active('/hogwarts')} mx-1.5 sm:mx-6`}>
          <a href="/hogwarts">Hogwarts</a>
        </li>
      </ul>
    </BoxAtom>
  )
}
