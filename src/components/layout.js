import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "@fortawesome/fontawesome-free/css/all.css"

export default function Layout({ children, className }) {
  return (
    <div>
      <div className={'md:flex md:h-screen layout ' + className}>
        <div className="md:flex-shrink-0 md:h-screen menu flex md:flex-col flex-row">
          <AniLink fade to="/" className="button text-teal-400" bg="#111" duration={1} activeClassName="active">
            <i className="fas fa-home"></i>
          </AniLink>
          <AniLink fade to="/about" className="button text-teal-400" bg="#111" duration={1} activeClassName="active">
            <i className="fas fa-user"></i>
          </AniLink>
          <AniLink fade to="/skills" className="button text-teal-400" bg="#111" duration={1} activeClassName="active">
            <i className="fas fa-cogs"></i>
          </AniLink>
          <AniLink fade to="/work" className="button text-teal-400" bg="#111" duration={1} activeClassName="active">
            <i className="fas fa-book"></i>
          </AniLink>
          <a href="https://www.linkedin.com/in/teddygandon/" target="_blank" rel="noreferrer" className="button text-teal-400">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/teddygandon" target="_blank" rel="noreferrer" className="button text-teal-400">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 md:overflow-auto md:h-screen">
          {children}
        </div>
      </div>
      <div className="hidden">
        <img src="/bulb.png" alt="bulb" />
        <img src="/coffee.png" alt="coffee" />
        <img src="/keyboard.png" alt="keyboard" />
        <img src="/stars.png" alt="stars" />
        <img src="/wood.png" alt="wood" />
      </div>
    </div>
  )
}
