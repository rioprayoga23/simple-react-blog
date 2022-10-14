import React, { Fragment, useEffect } from "react";
import Navbar from "../component/Navbar";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <Fragment>
      <Navbar />
      <section className="section">
        <h1 className="section-title">Selamat datang di website ku</h1>
        <p className="section-description">
          Website ini dibuat menggunakan react
        </p>
      </section>
    </Fragment>
  );
}

export default Home;
