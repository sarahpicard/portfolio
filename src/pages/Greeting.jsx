import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Greeting = () => {
  return(
    <div className="greeting-head">
      <h1>Sarah A. Picard</h1>
      <p>Fullstack Software Developer</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/sarah-picard/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/sarahpicard">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  )
}

export default Greeting