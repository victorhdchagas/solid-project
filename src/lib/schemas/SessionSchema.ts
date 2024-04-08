import { z } from 'zod'

enum SessionStatus {
  active = 'active',
  inactive = 'inactive',
}
enum SessionAgents {
  desktop = 'desktop',
  unknown = 'unknown',
  mobile = 'mobile',
}

enum SessionBrowser {
  chrome = 'chrome',
  edge = 'edge',
  firefox = 'firefox',
  mozilla = 'mozilla',
  unknown = 'unknown',
  opera = 'opera',
  safari = 'safari',
}

enum SessionRole {
  user = 'user',
  admin = 'admin',
  guest = 'guest',
}

export const SessionSchema = z
  .object({
    id: z
      .string()
      .uuid()
      .default(crypto.randomUUID())
      .optional()
      .refine((val) => (!val ? crypto.randomUUID() : val)),
    address: z.string().ip().optional(),
    status: z.nativeEnum(SessionStatus).optional(),
    agent: z.nativeEnum(SessionAgents).optional(),
    browser: z.nativeEnum(SessionBrowser).optional(),
    role: z.nativeEnum(SessionRole).optional(),
    createdAt: z.date().optional().default(new Date()),
    updatedAt: z.date().optional().default(new Date()),
  })
  .transform((session) => ({
    ...session,
    id: !session.id ? crypto.randomUUID() : session.id,
  }))

export type Session = z.infer<typeof SessionSchema>
