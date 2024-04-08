import { inject, injectable } from 'tsyringe'
import { Session } from '../schemas/SessionSchema'
import PrismaRepository from '../repositories/PrismaRepository'
import { CreateSessionUseCaseProtocol } from './protocols/CreateSessionUseCase.protocol'
@injectable()
export default class CreateSessionUserCase
  implements CreateSessionUseCaseProtocol
{
  constructor(@inject('PrismaRepository') readonly prisma: PrismaRepository) {}
  execute(session: Session) {
    return this.prisma.sessionFingerprint.create({ data: session })
  }
}
