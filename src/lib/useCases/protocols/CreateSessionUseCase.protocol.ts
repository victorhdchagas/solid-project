import { type SessionFingerprint } from '@prisma/client'
import { type Session } from '~/lib/schemas/SessionSchema'

export interface CreateSessionUseCaseProtocol {
  execute(session: Session): Promise<SessionFingerprint>
}
