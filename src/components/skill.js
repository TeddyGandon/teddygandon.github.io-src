import React from "react"
import "@fortawesome/fontawesome-free/css/all.css"

export default function Layout({ name, level }) {
  level = level ? level : 0;
  const classesPerLevel = {
    0: [
      'bg-teal-300',
      'border',
      'border-teal-500',
    ],
    1: [
      'bg-teal-100',
      'opacity-50',
    ],
    2: [
      'bg-teal-100',
      'opacity-75',
    ],
    3: [
      'bg-teal-100',
    ],
  }

  return (
    <span className={
      [
        'inline-block',
        'bg-gray-200',
        'rounded-full',
        'px-3',
        'py-1',
        'text-sm',
        'font-semibold',
        'text-gray-700',
        'mr-2 mb-2',
        ...classesPerLevel[level]
      ].join(' ')
    }>
      {
        level === 3 ?
        <i className="fas fa-star mr-2"></i> : ''
      }
      { name }
    </span>
  )
}
