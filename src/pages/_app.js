import "@/styles/globals.css";
import Layout from "@/components/Layout";
// import "tw-elements/dist/css/tw-elements.min.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// import "@/styles/globals.css";
// import Layout from "@/components/Layout";
// // import type { AppProps } from "next/app";
// import { Roboto } from "next/font/google";
// import "tw-elements/dist/css/tw-elements.min.css";
// import { Fragment, useEffect } from "react";

// const roboto = Roboto({ weight: "400", subsets: ["latin"] });

// export default function App({ Component, pageProps }) {
//   useEffect(() => {
//     const use = async () => {
//       (await import("tw-elements")).default;
//     };
//     use();
//   }, []);

//   return (
//     <Fragment>
//       <style jsx global>{`
//         html {
//           font-family: ${roboto.style.fontFamily};
//         }
//       `}</style>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </Fragment>
//   );
// }
