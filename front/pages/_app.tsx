import { AppProps } from "next/app"
import "./styles.css"
import "./../styles/searchpage.css"

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}