import { action, useAction, useSubmission } from '@solidjs/router'

const echo = action(async (message: string) => {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000))
  return message
})

export function ActionComponent() {
  const myEcho = useAction(echo)
  const echoing = useSubmission(echo)
  myEcho('Hello from solid!')
  setTimeout(() => myEcho('This is a second submission!'), 1500)
  return <pre>{JSON.stringify(echoing.url, null, 2)}</pre>
  return <p>{echoing.result}</p>
}
