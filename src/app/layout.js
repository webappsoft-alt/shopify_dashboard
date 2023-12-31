import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/components/style/main.css'
import '@/components/style/font_Sizes.css'
import '@shopify/polaris/build/esm/styles.css';
import IndexLayout from '@/components/sidebar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <IndexLayout>
          {children}
        </IndexLayout>
      </body>
    </html>
  )
}
