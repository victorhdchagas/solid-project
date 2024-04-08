import { A } from '@solidjs/router'
import Counter from '~/components/Counter'
import { ActionComponent } from '~/components/actionComponent'
import BoxAtom from '~/components/atom/Boxes/box'
import Sidebar from '~/components/atom/Boxes/sidebar'

export default function Home() {
  return (
    <main class="text-center mx-auto ">
      <Sidebar />
      <BoxAtom
        backgroundColor="alpha"
        size="screen"
        alignment="center"
        marginCenter
        direction="column"
        gap="small"
      >
        <h1 class="max-6-xs text-6xl text-white font-thin uppercase my-16">
          Eleanora World
        </h1>
        <Counter />
        <ActionComponent />
        <p class="my-4">
          <span>Home</span>
          {' - '}
          <A href="/about" class="text-sky-600 hover:underline">
            About Page
          </A>{' '}
        </p>
      </BoxAtom>
    </main>
  )
}
