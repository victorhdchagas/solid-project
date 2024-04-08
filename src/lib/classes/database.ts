import moment from 'moment'
import { PrismaClient } from '@prisma/client'

export default class Database {
  private static _instance: Database
  prisma: PrismaClient
  private constructor() {
    this.prisma = new PrismaClient()
  }

  static create() {
    if (!Database._instance) {
      Database._instance = new Database()
    }
    return Database._instance
  }
}
