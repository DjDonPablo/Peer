import { AppProps } from "next/app"
import "./styles.css"
import "./profil/styles.css"
import "./profil/graph.css"

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}