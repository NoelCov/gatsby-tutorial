import * as React from "react";

import Layout from "../components/layout";

import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm learning Gatsby!!!!</p>
      <StaticImage
        alt="GatsbyJS Logo"
        src="https://www.whitespectre.com/uploads/gatsby.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
