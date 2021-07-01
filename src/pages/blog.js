import * as React from "react";

import Layout from "../components/layout";

import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  const nodes = data.allFile.nodes;

  return (
    <Layout pageTitle="Blog Page">
      <ul>
        {nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
