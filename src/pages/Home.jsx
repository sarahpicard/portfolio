import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Greeting = () => {
  return (
    <div className="container mx-auto block">
      <h1 className="text-5xl flex justify-center">Sarah A. Picard</h1>
      <p className="flex justify-center">Fullstack Software Developer</p>
      <div className="social-button flex justify-center">
        <a className="social-icons" href="https://www.linkedin.com/in/sarah-picard/">
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </a>
        <a className="social-icons" href="https://github.com/sarahpicard">
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
      </div>
    </div>
  )
}

export default Greeting