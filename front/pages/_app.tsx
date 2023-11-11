import { AppProps } from "next/app"
import "./../styles/home.css"
import "./../styles/subject.css"
import "./../styles/profile.css"
import "./../styles/basicTablePropsDifficulty.css"

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}