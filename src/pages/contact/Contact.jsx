import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <div className="flex justify-center">
      <div className="footer block text-center">
        <h4 className="text-4xl">Let's get in touch.</h4>
        <a className="footer-icons ml-8" href="https://www.linkedin.com/in/sarah-picard/">
          <FontAwesomeIcon icon={faLinkedin} size='2x' /> sarah-picard
        </a>
        <a className="footer-icons px-12" href="https://github.com/sarahpicard">
          <FontAwesomeIcon icon={faGithub} size='2x' /> sarahpicard
        </a>
        <FontAwesomeIcon icon={faEnvelope} size='2x' /> sarahannrey225@gmail.com
      </div>
    </div>
  )
}

export default Contact