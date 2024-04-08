import { PrismaClient } from '@prisma/client'
import { createAsync } from '@solidjs/router'
import { Suspense, createResource } from 'solid-js'
import BoxAtom from '~/components/atom/Boxes/box'
import Database from '~/lib/classes/database'
import { For } from 'solid-js'
import TitleAtom from '~/components/atom/Labels/title'

async function getAllSessions() {
  'use server'
  const prisma = Database.create().prisma
  try {
    const data = await prisma.sessionFingerprint.findMany()
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}
export const route = {
  load: () => getAllSessions(),
}

export default function Sessions() {
  const sessions = createAsync(() => getAllSessions())
  return (
    <BoxAtom paddingCenter direction="column" marginCenter>
      <TitleAtom color="sigma" weight="bold">
        Generated Sessions
      </TitleAtom>
      <BoxAtom gap="small" direction="column">
        <Suspense fallback={<BoxAtom>Loading...</BoxAtom>}>
          {sessions() &&
            sessions()!.map((session) => <BoxAtom>{session.id}</BoxAtom>)}
        </Suspense>
      </BoxAtom>
    </BoxAtom>
  )
}
