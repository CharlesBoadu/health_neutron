import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";

export default function ({ Component, pageProps }) {
  return (
    // <Router>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    // </Router>
  );
}
