import { FetchEvent } from '@solidjs/start/server'
import Runtime from '../classes/runtime'
import { parseUserAgent } from '~/middleware'
import { SessionSchema } from '../schemas/SessionSchema'
import { PrismaClient } from '@prisma/client'
import Database from '../classes/database'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

const prisma = Database.create().prisma
export async function taskCaptureSession(event: FetchEvent & { id?: string }) {
  const runtime = Runtime.create()
  const session = runtime.getSession(event.id)
  if (session) return
  const { browser } = parseUserAgent(
    event.request.headers.get('user-agent')?.toLowerCase(),
  )
  const validatedData = SessionSchema.safeParse({
    address: event.clientAddress,
    status: 'active',
    browser: browser,
    agent: 'desktop',
    role: 'guest',
    id: event.id,
  })
  if ('error' in validatedData) {
    console.log('error', validatedData.error.flatten().fieldErrors)
    return
  }
  runtime.publishSession({
    ...validatedData.data,
    id: event.id || validatedData.data.id,
  })
 
  try {
    await prisma.sessionFingerprint.create({
      data: {
        ...validatedData.data,
        id: event.id || validatedData.data.id,
      },
    })
  } catch (error) {
    if(error instanceof PrismaClientKnownRequestError){
      return 
    }
    console.error(error)
  }
}
