import './globals.css'

export const metadata = {
  title: 'Happy Valentine\'s Day 💌',
  description: 'A special Valentine\'s Day message',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}