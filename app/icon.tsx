import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'sans-serif',
        letterSpacing: '-0.5px',
      }}
    >
      S
    </div>,
    { ...size },
  )
}
