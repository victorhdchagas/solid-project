import Runtime from './runtime'

describe('Runtime class', () => {
  let runtime: Runtime
  beforeEach(() => {
    runtime = Runtime.create()
  })

  it('should have a startAt date', () => {
    expect(runtime.getStartTime()).toBeInstanceOf(Date)
  })

  it('should get uptime time', () => {
    expect(runtime.getUptimeTime()).toMatch(/^[\w, ]+$/)
  })

  it('should get all sessions', () => {
    expect(runtime.getAllSessions()).toEqual([])
  })
})
