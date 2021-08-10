import React from "react"

import Layout from "../components/Layout/Layout"
import Contact from "../components/Contact"
import Intro from "../components/Intro"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import About from "../components/About"
import Seo from "../components/SEO"


const MainPage = () => {

  const sections = ["about","skills","projects","contact"]

  return(
    <Layout sections={sections}>
      <Seo title="Home" />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default MainPage