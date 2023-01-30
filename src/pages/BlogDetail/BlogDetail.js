import React from "react";
import { useParams } from "react-router-dom";
import { Container, ArticleContent, Heading } from "./BlogDetail.elements";
import { Article1, Article2, Article3, Article4 } from "./Data/BlogData";

const BlogDetail = () => {
  const { id } = useParams();
  return (
    <>
      {id === "1" && (
        <Container>
          <Heading>{Article1.title}</Heading>
          <ArticleContent>{Article1.content}</ArticleContent>
        </Container>
      )}
      {id === "2" && (
        <Container>
          <Heading>{Article2.title}</Heading>
          <ArticleContent>{Article2.content}</ArticleContent>
        </Container>
      )}
      {id === "3" && (
        <Container>
          <Heading>{Article3.title}</Heading>
          <ArticleContent>{Article3.content}</ArticleContent>
        </Container>
      )}
      {id === "4" && (
        <Container>
          <Heading>{Article4.title}</Heading>
          <ArticleContent>{Article4.content}</ArticleContent>
        </Container>
      )}
    </>
  );
};

export default BlogDetail;
