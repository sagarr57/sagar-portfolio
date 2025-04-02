import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sagar05.ms@gmail.com',
    pass: process.env.EMAIL_PASSWORD, // Make sure to set this in your environment variables
  },
})

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Send email to your address
    await transporter.sendMail({
      from: email,
      to: 'sagar05.ms@gmail.com',
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    )
  }
}
