// @refresh reload
import { mount, StartClient } from '@solidjs/start/client'

import 'reflect-metadata'
mount(() => <StartClient />, document.getElementById('app')!)
