import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <div className="flex justify-center">
      <div className="footer block text-center">
        <h4 className="text-4xl mb-12 mt-12">Let's get in touch.</h4>
        <a className="footer-icons ml-8 text-2xl" href="https://www.linkedin.com/in/sarah-picard/">
          <FontAwesomeIcon icon={faLinkedin} size='2x' /> sarah-picard
        </a>
        <a className="footer-icons px-12 text-2xl" href="https://github.com/sarahpicard">
          <FontAwesomeIcon icon={faGithub} size='2x' /> sarahpicard
        </a>
        <FontAwesomeIcon icon={faEnvelope} size='2x' /> <span className="text-2xl">sarahannrey225@gmail.com</span>
      </div>
    </div>
  )
}

export default Contact