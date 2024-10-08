import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css'

export default ({
    Component,
    pageProps: {
        session,
        ...pageProps
    }
}) =>
    <SessionProvider session={session}>
        <Component {...pageProps} />
    </SessionProvider>
