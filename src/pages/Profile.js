import React, { Fragment, useEffect } from "react";
import Navbar from "../component/Navbar";

function Profile() {
  useEffect(() => {
    document.title = "Profile";
  });
  return (
    <Fragment>
      <Navbar />
      <section className="section">
        <h1 className="section-title">Hallo, nama saya Rio Prayoga</h1>
        <p className="section-description">
          Saya adalah seorang fullstack Developer
        </p>
      </section>
    </Fragment>
  );
}

export default Profile;
