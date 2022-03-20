import Badge from "react-simple-badges"

import './About.css'

const About = () => {
  return (
    <div className="about-page container mt-12 pt-12 mx-auto">
      <div className="h-2/4 w-8/12 mx-auto">
        <img id="headshot" src="headshot2.png" alt="headshot" className="float-left m-5 mr-10" />
          <p className="p-4"><span className="block text-center text-xl about-headline">New Hampshire-based lover of gardening, food, and exploring new places.</span> <br /> I'm a goal-oriented software engineer who loves solving complex challenges and working within team structures to accomplish project progression. <br /><br /> I'm a believer in laughter and positive thinking. With a non-traditional degree path in Neuropsychology, I bring a fresh prospective to my development projects and am constantly utilizing my skills in teamwork, leadership, project management, and flexibility. With a number of years in team-based leadership positions, I have a strong foundation in communication, an effective eye for detail, and a passion for mentorship and teaching. <br /><br /> I have an active interest in user experience, and creation of tangible solutions making an impact on users. <br /><br /> When I'm not busy writing code, you are likely to find me in my vegetable garden during the summer months, or enjoying a hot cup of tea and a good book when it's a bit cooler.</p>
      </div>
          <div>
            <h2>Skills in my Toolbox!</h2>
            <h3>Languages</h3>
              <Badge name="CSS3" />
              <Badge name="HTML5" />
              <Badge name="JavaScript" />
              <Badge name="Markdown" />
            <h3>Libraries & Frameworks</h3>
              <Badge name="React" />
              <Badge name="React Router" />
              <Badge name="jQuery" />
              <Badge name="Bootstrap" />
            <h3>Version Control</h3>
              <Badge name="Git" />
              <Badge name="GitHub" />
            <h3>Miscellaneous</h3>
              <Badge name="Heroku" />
              <Badge name="JSON" />
              <Badge name="Visual Studio Code" />
            <h3>Backend Technologies</h3>
              <Badge name="MongoDB" />
              <Badge name="Express" />
              <Badge name="Node.js" />
              <Badge name="NPM" />
              <Badge name="Postman" />
              <Badge name="Microsoft Azure" />
          </div>
    </div>
  )
}

export default About 