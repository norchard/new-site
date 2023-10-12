import Nav from "./Nav";
import Footer from "./Footer";
import { Fragment } from "react";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Nav />
      <main className="h-full">{children}</main>
      <Footer />
    </Fragment>
  );
}
