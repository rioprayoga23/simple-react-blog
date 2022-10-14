// @ts-nocheck
import React, { Fragment, useEffect } from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

function Blog() {
  const [articles, setArticles] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    document.title = "Blog";
    const getArticles = async () => {
      const req = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res = await req.json();
      setArticles(res);
      setLoading(false);
    };
    getArticles();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <section className="section">
        <h1 className="section-title">Blog</h1>
        <p className="section-description">
          Ini adalah tulisan-tulisan ku(Tapi boong Wlee ...)
        </p>
        {loading ? (
          <i>Loading articles ...</i>
        ) : (
          <section className="articles">
            {articles.map((e) => {
              return (
                <section key={e.id} className="article">
                  <h2 className="article-title">
                    <Link to={`/blog/${e.id}`}>{e.title}</Link>
                  </h2>
                </section>
              );
            })}
          </section>
        )}
      </section>
    </Fragment>
  );
}

export default Blog;
