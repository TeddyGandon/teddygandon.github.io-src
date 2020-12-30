import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return <Layout className="coffee">
    <div className="flex items-center justify-center h-screen">
      <div className="p-12">
        <p className="font-bold text-white text-5xl text-shadow-md">
          Hello, my name is Teddy.
        </p>
        <p className="text-lg uppercase text-teal-400 tracking-widest text-shadow">
          Fullstack web developer & designer
        </p>
      </div>
    </div>
  </Layout>
}
