import { createMiddleware } from '@solidjs/start/middleware'
import { useSession } from 'vinxi/http'
import Runtime from './lib/classes/runtime'
import { taskCaptureSession } from './lib/utils/SessionUtils'
export default createMiddleware({
  onBeforeResponse: [
    async (event) => {
      const runtime = Runtime.create()

      //   console.log('GLOBAL', event.response.status)
    },
  ],
  onRequest: [
    async (event) => {
      const session = await useSession({
        password:
          '12345123451234512345123451234512345123451234512345123451234512345123451234512345',
      })
      taskCaptureSession({ ...event, id: session.id })
      //   console.log('GLOBAL', event.request.url)
    },
  ],
})

export function parseUserAgent(userAgent: string | undefined): {
  browser: string
  version: string
  os: string
} {
  if (!userAgent)
    return { browser: 'unknown', version: 'unknown', os: 'unknown' }
  const regex = /(\w+)\/(\d+\.\d+) \((\w+)/
  const match = userAgent.match(regex)
  if (!match) {
    throw new Error(`Invalid user agent format: ${userAgent}`)
  }
  const [_, browser, version, os] = match
  return { browser, version, os }
}
