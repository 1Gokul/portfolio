import React from "react"

import Layout from "../components/Layout/Layout"
import Contact from "../components/Contact"
import Intro from "../components/Intro"
import Projects from "../components/Projects"
import Toolbox from "../components/Toolbox"
import About from "../components/About"
import Seo from "../components/Layout/SEO"


const MainPage = () => {

  return(
    <Layout type="home">
      <Seo title="Home" />
      <Intro />
      <About />
      <Projects />
      <Toolbox />
      <Contact />
    </Layout>
  )
}

export default MainPage