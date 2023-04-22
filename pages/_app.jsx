import "@/styles/globals.css";
import { RecoilRoot } from "recoil";

export default function ({ Component, pageProps }) {
  return(
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
