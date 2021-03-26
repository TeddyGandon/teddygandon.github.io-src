import React from "react"
import Layout from "../components/layout"
import Timeline from "../components/timeline"
import Skill from "../components/skill"
import data from '../data'

export default function Home() {
  return <Layout className="coffee">
    <div className="p-12">
      <h1 className="font-bold text-white text-5xl text-teal-400">About</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Timeline></Timeline>
        </div>
        <div>
          <p className="text-white text-3xl">Hey! I am Teddy, a developer with 15+ years of experience.</p>
          <p className="text-white text-1xl mt-12">I worked in marketing agencies, did fundraising solutions, and even algorithms for media traders. In my free time, I am developing my own card game. Have a look, almost everything is open source!</p>
        <div className="mt-12">
          {
            data.skills.soft.map((skill) => {
              return <Skill name={skill.name} level="3"></Skill>
            })
          }
        </div>
        </div>
      </div>
    </div>
  </Layout>
}
