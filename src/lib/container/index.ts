import { container } from 'tsyringe'
import PrismaRepository from '../repositories/PrismaRepository'
container.registerSingleton<PrismaRepository>(
  'PrismaRepository',
  PrismaRepository,
)
