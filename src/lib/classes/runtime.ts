import moment from 'moment'
import { Session } from '../schemas/SessionSchema'

export default class Runtime {
  private static _instance: Runtime
  private startAt: Date
  private sessions: Session[] = []
  private constructor() {
    this.startAt = new Date()
    console.log('Runtime created at', this.startAt)
  }
  public getUptimeTime() {
    return moment(this.startAt, undefined, 'pt-BR').fromNow()
  }
  public getStartTime() {
    return this.startAt
  }

  public publishSession(session: Session) {
    this.sessions.push(session)
    return this
  }

  public getSession(id: string | undefined) {
    return this.sessions.find((session) => session.id === id)
  }
  public getAllSessions() {
    return this.sessions
  }

  static create() {
    if (!Runtime._instance) {
      Runtime._instance = new Runtime()
    }
    return Runtime._instance
  }
}
