import Badge from "react-simple-badges"

const About = () => {
  return(
    <div>
      <img id="headshot" src="headshot2.png" alt="headshot" />
      <h1>New Hampshire-based lover of gardening, food, and exploring new places.</h1>
      <p>I'm a goal-oriented software engineer who loves solving complex challenges and working within team structures to accomplish project progression. I'm a believer in laughter and positive thinking.</p>
      <p>With a non-traditional degree path in Neuropsychology, I bring a fresh prospective to my development projects and am constantly utilizing my skills in teamwork, leadership, project management, and flexibility. </p>
      <p>With a number of years in team-based leadership positions, I have a strong foundation in communication, an effective eye for detail, and a passion for mentorship and teaching.</p>
      <p>I have an active interest in user experience, and creation of tangible solutions making an impact on users.</p>
      <p>When I'm not busy writing code, you are likely to find me in my vegetable garden during the summer months, or enjoying a hot cup of tea and a good book when it's a bit cooler.</p>
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