import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useSpring, animated } from 'react-spring'
import { useState } from "react"

const Greeting = () => {
  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  })

  // useSpring and animated from react-spring used for h1 animation.
  return (
    <div className="block pt-20 greeting-block">
      <div className="text-9xl flex justify-center name-text my-5" onClick={() => toggle(!state)}>
        <animated.div
        style={{
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
        })
        }}>
          Sarah A. Picard
        </animated.div>
      </div>
      <p className="flex justify-center role-text text-5xl mb-12 mt-10">Fullstack Software Developer</p>
      <div className="flex justify-center space-x-12 social-links">
        <a href="https://www.linkedin.com/in/sarah-picard/">
          <FontAwesomeIcon icon={faLinkedin} size='3x' />
        </a>
        <a href="https://github.com/sarahpicard">
          <FontAwesomeIcon icon={faGithub} size='3x' />
        </a>
      </div>
    </div>
  )
}

export default Greeting