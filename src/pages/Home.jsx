import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Greeting = () => {
  return (
    <div className="container mx-auto block">
      <h1 className="text-7xl flex justify-center name-text my-5">Sarah A. Picard</h1>
      <p className="flex justify-center role-text text-3xl mb-12">Fullstack Software Developer</p>
      <div className="flex justify-center space-x-9">
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