import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Greeting = () => {
  return (
    <div className="block pt-20 greeting-block">
      <h1 className="text-8xl flex justify-center name-text my-5">Sarah A. Picard</h1>
      <p className="flex justify-center role-text text-4xl mb-12">Fullstack Software Developer</p>
      <div className="flex justify-center space-x-12 social-links">
        <a href="https://www.linkedin.com/in/sarah-picard/">
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </a>
        <a href="https://github.com/sarahpicard">
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
      </div>
    </div>
  )
}

export default Greeting