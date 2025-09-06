import type { Metadata } from 'next'
import { Inter, Nanum_Gothic, Source_Code_Pro } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })
const nanumGothic = Nanum_Gothic({ 
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--font-nanum-gothic'
})
const sourceCodePro = Source_Code_Pro({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-source-code-pro'
})

export const metadata: Metadata = {
  title: 'Portfolio - Magic UI Components',
  description: 'A beautiful portfolio showcasing Magic UI components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${nanumGothic.variable} ${sourceCodePro.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
