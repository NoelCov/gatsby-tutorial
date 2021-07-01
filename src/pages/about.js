import * as React from "react";

import Layout from "../components/layout";

import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle={"About Page"}>
      <p>This is the about page</p>
      <StaticImage src="../images/money.png" alt="Money stack" />
    </Layout>
  );
};

export default AboutPage;
