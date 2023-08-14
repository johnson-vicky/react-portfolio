import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo v.png'
import logotitle1 from '../../assets/images/logo k.png'
import Logo from './Logo'
import './index.scss'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['i', 'g', 'n', 'e', 's', 'h',] 
  const nameArray1 =['u','m','a','r']
  const jobArray = ['w','e','b',' ','d', 'e','v','e','l','o','p','e','r','.',]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)}, [])

  return (

    <>

      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />

            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              id='v_1'
              src={LogoTitle}
              
              alt="JavaScript Developer Name, Web Developer Name"/>
            

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15} />
              
              <img
              id='v_2'
              src={logotitle1}
              
              alt="JavaScript Developer Name, Web Developer Name"/>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray1}
              idx={15} />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22} />

          </h1>
          <h2>Front End Developer / UI Designer / Youtuber</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>

        </div>

        <Logo />

      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
