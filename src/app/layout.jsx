import './globals.scss'
import { Inter } from 'next/font/google'
import Header from './header/Header';
import { getAPIKey } from "./API/SpotifyCompleteAPI";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YFITOPS',
  description: 'Clone de Spotify',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>
          <div className='appContainer'>
            <p>{getAPIKey()}</p>
          </div>
        </div>
        {children}</body>
    </html>
  )
}
