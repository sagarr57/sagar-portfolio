import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // TODO: Implement actual email sending logic here
    console.log('Contact form submitted:', { name, email, message })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in contact form:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
