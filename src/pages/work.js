import React from "react"
import Layout from "../components/layout"
import Skill from "../components/skill"
import data from '../data'

export default function Home() {
  return <Layout className="bulb">
    <div className="p-12">
      <h1 className="font-bold text-white text-5xl text-teal-400">Work</h1>
      <div className="my-4 flex content-start flex-wrap align-top">
        {
          data.projects.map((project) => {
            return (
              <a 
              className="inline-block m-4 cursor-pointer max-w-sm rounded overflow-hidden shadow-lg bg-gray-400"
                href={project.link} target="_blank" rel="noreferrer">
                <img className="w-full" src={project.image} alt={project.name} />
                <div className="px-6 py-4">
                  <p className="font-bold text-xl mb-2">{ project.name }</p>
                  <p className="text-gray-700 text-base">
                    { project.description }
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2 hidden md:block">
                  {
                    project.skills.map((skill) => {
                      return <Skill name={skill.name} level={skill.level}></Skill>
                    })
                  }
                </div>
              </a>
            )
          })
        }
      </div>
    </div>
  </Layout>
}
