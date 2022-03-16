import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Greeting = () => {
  return (
    <div className="greeting-head">
      <h1>Sarah A. Picard</h1>
      <p>Fullstack Software Developer</p>
      <div className="social-button">
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