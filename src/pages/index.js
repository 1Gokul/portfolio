import React from "react"
import Contact from "../components/Contact"
import Intro from "../components/Intro"
import Layout from "../components/Layout"
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