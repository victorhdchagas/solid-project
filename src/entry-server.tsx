// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server'
import dotenv from 'dotenv'
import Runtime from './lib/classes/runtime'
import 'reflect-metadata'

export default createHandler(() => {
  dotenv.config({ path: '.env' })

  Runtime.create()
  return (
    <StartServer
      document={({ assets, children, scripts }) => (
        <html lang="pt-BR">
          <head>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
            {assets}
          </head>
          <body class="bg-slate-700 text-white">
            <div id="app">{children}</div>
            {scripts}
          </body>
        </html>
      )}
    />
  )
})
