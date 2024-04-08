import { createSignal } from 'solid-js'
import { Motion } from 'solid-motionone'
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = createSignal(false)

  return (
    <Motion.nav animate={isOpen() ? 'open' : 'closed'} variants={variants}>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>-</button>
      <div>Sidebar</div>
    </Motion.nav>
  )
}
