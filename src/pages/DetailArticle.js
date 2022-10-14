// @ts-nocheck
import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
export default function DetailArticle() {
  const [article, setArticle] = useState({});
  const [loading, setloading] = useState(true);
  const [notFound, setnotFound] = useState(false);

  const params = useParams();

  useEffect(() => {
    const getArticle = async () => {
      const req = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      if (!req.ok) {
        setnotFound(true);
      }
      const res = await req.json();
      document.title = res.title;
      setArticle(res);
      setloading(false);
    };
    getArticle();
  }, [params]);

  if (notFound) {
    return (
      <Fragment>
        <Navbar />
        <p>Data tidak ditemukan</p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <section>
        {loading ? (
          <i>Loading article ...</i>
        ) : (
          <section className="section">
            <h1 className="section-title">{article.title}</h1>
            <p>{article.body}</p>
          </section>
        )}
      </section>
    </Fragment>
  );
}
