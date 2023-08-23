import Layout from "@/layouts/Layout";
import "@/styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
      <div>
        {
          Component.PageLayout ? (
            <Component {...pageProps} />
          ) : 
          <Layout >
            <Component {...pageProps} />
          </Layout>
        }
      </div>
  )
}
