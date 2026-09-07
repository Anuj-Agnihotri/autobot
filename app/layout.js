import './globals.css'

export const metadata = {
  title: 'Hello World | AI Plan Prices',
  description: 'A quick comparison of ChatGPT and Claude plan prices in USD.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
