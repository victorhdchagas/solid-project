import BoxAtom from '~/components/atom/Boxes/box'
import packageJson from '../../package.json'
import Runtime from '~/lib/classes/runtime'
import { cache, createAsync } from '@solidjs/router'
import { Suspense } from 'solid-js'
import TitleAtom from '~/components/atom/Labels/title'

const getServerData = cache(async () => {
  'use server'
  return {
    uptime: Runtime.create().getUptimeTime(),
    version: packageJson.version,
    name: packageJson.name,
    createdAt: Runtime.create().getStartTime(),
  }
}, 'info')

export const route = {
  load: () => getServerData(),
}
export default function Info() {
  const data = createAsync(() => getServerData())

  return (
    <BoxAtom direction="column" marginCenter>
      <Suspense>
        <TitleAtom color="sigma" weight="bold">
          Dados sobre o servidor
        </TitleAtom>
        {data() && (
          <BoxAtom direction="column">
            <span>Nome: {data()!.name}</span>
            <span>Uptime: {data()!.uptime}</span>
            <span>Versão: {data()!.version}</span>
            <span>Criado: {new Date(data()!.createdAt).toLocaleString()}</span>
          </BoxAtom>
        )}
      </Suspense>
    </BoxAtom>
  )
}
