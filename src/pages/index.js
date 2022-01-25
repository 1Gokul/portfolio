import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/SEO";
import Contact from "../sections/Contact";
import Intro from "../sections/Intro";
import Projects from "../sections/Projects";
import Toolbox from "../sections/Toolbox";
import About from "../sections/About";

const MainPage = () => {
  return (
    <Layout type="home">
      <Seo title="Home" />
      <Intro />
      <About />
      <Projects />
      <Toolbox />
      <Contact />
    </Layout>
  );
};

export default MainPage;
