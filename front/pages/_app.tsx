import { AppProps } from "next/app"
import "./../styles/home.css"
import "./../styles/searchpage.css"
import "./profil/styles.css"
import "./profil/graph.css"

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}