import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, ArticleContent, Heading } from "./BlogDetail.elements";
import { Article1, Article2, Article3, Article4 } from "./Data/BlogData";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  return (
    <>
      {id === "1" && (
        <Container>
          <Heading>{Article1.title}</Heading>
          <ArticleContent>{Article1.content}</ArticleContent>
          <Link className="btn btnGoBack" to={`/blog`}>
            Go Back
          </Link>
        </Container>
      )}
      {id === "2" && (
        <Container>
          <Heading>{Article2.title}</Heading>
          <ArticleContent>{Article2.content}</ArticleContent>
          <Link className="btn btnGoBack" to={`/blog`}>
            Go Back
          </Link>
        </Container>
      )}
      {id === "3" && (
        <Container>
          <Heading>{Article3.title}</Heading>
          <ArticleContent>{Article3.content}</ArticleContent>
          <Link className="btn btnGoBack" to={`/blog`}>
            Go Back
          </Link>
        </Container>
      )}
      {id === "4" && (
        <Container>
          <Heading>{Article4.title}</Heading>
          <ArticleContent>{Article4.content}</ArticleContent>
          <Link className="btn btnGoBack" to={`/blog`}>
            Go Back
          </Link>
        </Container>
      )}
    </>
  );
};

export default BlogDetail;
