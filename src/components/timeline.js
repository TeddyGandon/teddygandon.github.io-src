import React from "react"
import "@fortawesome/fontawesome-free/css/all.css"

export default function Layout({ name, level }) {
  return (
    <div>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">2007</h1>
          </div>
          <div className="order-1 bg-black rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">Cho You</h3>
            <p className="text-sm leading-snug tracking-wide text-white">PHP / JS / Action Script & Flex developer.</p>
          </div>
        </div>
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2011</h1>
          </div>
          <div className="order-1 bg-black rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">One Heart Channel</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white">Web developer.</p>
          </div>
        </div>
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">2015</h1>
          </div>
          <div className="order-1 bg-black rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">One Heart Communication</h3>
            <p className="text-sm leading-snug tracking-wide text-white">Chief Technology Officer. Platform development director.</p>
          </div>
        </div>
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2017</h1>
          </div>
          <div className="order-1 bg-black rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">Jellyfish France (formely Tradelab)</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Senior backend developer.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
