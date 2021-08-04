import React from "react"

import Layout from "../components/Layout/Layout"
import Contact from "../components/Contact"
import Intro from "../components/Intro"
import Projects from "../components/Projects"
import Skills from "../components/Skills"


const MainPage = () => {

  return(
    <Layout>
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default MainPage