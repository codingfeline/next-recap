import WelcomeTemplate from '@/emails/WelcomeTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  await resend.emails.send({
    from: 'info@nextfeline.uk',
    to: 'postnaz@gmail.com',
    subject: 'test from react email',
    react: '<WelcomeTemplate />'
  })

  return NextResponse.json({})
}