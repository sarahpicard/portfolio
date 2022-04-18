import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <div className="flex justify-center">
      <div className="footer block text-center">
        <h4 className="text-4xl mb-12 mt-12">Let's get in touch.</h4>
        <a className="footer-icons ml-8 text-md lg:text-2xl" href="https://www.linkedin.com/in/sarah-picard/">
          <FontAwesomeIcon icon={faLinkedin} size='2xl' /> sarah-picard
        </a>
        <a className="footer-icons px-6 text-md lg:text-2xl lg:px-12" href="https://github.com/sarahpicard">
          <FontAwesomeIcon icon={faGithub} size='2xl' /> sarahpicard
        </a><br />
        <FontAwesomeIcon icon={faEnvelope} size='2xl' className="mt-8"/> <span className="text-md lg:text-2xl">sarahannrey225@gmail.com</span>
      </div>
    </div>
  )
}

export default Contact