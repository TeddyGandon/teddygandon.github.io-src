import React from "react"
import Layout from "../components/layout"
import Skill from '../components/skill'
import data from '../data'

export default function Home() {
  return <Layout className="keyboard">
    <div className="p-12">
      <h1 className="font-bold text-white text-5xl text-teal-400">Skills</h1>
      <p className="text-white my-4">
        The main area of my expertise is backend development with PHP, Node & MySQL.
      </p>
      <p className="text-white my-4">
        I also have frontend & infrastructure experience.
      </p>
      <h2 className="font-bold text-white text-xl text-teal-400 my-4">Languages</h2>
      <div>
        {
          data.skills.hard.languages.map((skill) => {
            return <Skill name={skill.name} level={skill.level}></Skill>
          })
        }
      </div>
      <h2 className="font-bold text-white text-xl text-teal-400 my-4">Tools & technologies</h2>
      {
        data.skills.hard.toolsAndTechnologies.map((skill) => {
          return <Skill name={skill.name} level={skill.level}></Skill>
        })
      }
      <h2 className="font-bold text-white text-xl text-teal-400 my-4">Frameworks</h2>
      {
        data.skills.hard.frameworks.map((skill) => {
          return <Skill name={skill.name} level={skill.level}></Skill>
        })
      }
    </div>
  </Layout>
}
