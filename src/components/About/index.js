import { useEffect, useState } from 'react'
import{faCss3,faHtml5,faJsSquare,faReact} from '@fortawesome/free-brands-svg-icons'
import Logotitle from '../../assets/images/adobe.png'
import Logotitle1 from '../../assets/images/figma.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => { return setTimeout(() =>
     {setLetterClass('text-animate-hover') }, 3000) }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <p>
          Front-End Developer with entry-level experience specializing in web development, user 
                        interface design, HTML, and ReactJs. 
          </p>

          <p align="LEFT">
          Adept at identifying opportunities to enhance front-end design and improve the user experience.
          And I'm Expertise to photoshop Maker,video Editing using tools in Pr,Ps,capcut&more...
          </p>

          <p>
          I own create  some projects learning.
           And I  have Many editing Videos and advertising poster works done too much...
          </p>
          
        </div>

        

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
             <img
             src={Logotitle}/>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
            <img
             src={Logotitle1}/>
              
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
