import React, { Fragment, useEffect } from "react";
import Navbar from "../component/Navbar";

function Contact() {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <Fragment>
      <Navbar />
      <section className="section">
        <h1 className="section-title">
          Kamu bisa menghubungi saya melalui kontak dibawah
        </h1>
        <p className="section-description">Email: yoprayogap@gmail.com</p>
      </section>
    </Fragment>
  );
}

export default Contact;
