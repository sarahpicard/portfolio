import Badge from "react-simple-badges"

import './About.css'

const About = () => {
  return (
    <div className="about-page container mt-4 pt-12 mx-auto h-screen">
      <div className="h-2/4 w-8/12 mx-auto">
        <img id="headshot" src="headshot2.png" alt="headshot" className="float-left m-5 mr-10" />
        <p className="p-4"><span className="block text-center text-xl about-headline">New Hampshire-based lover of gardening, food, and exploring new places.</span> <br /> I'm a goal-oriented software engineer who loves solving complex challenges and working within team structures to accomplish project progression. <br /><br /> I'm a believer in laughter and positive thinking. With a non-traditional degree path in Neuropsychology, I bring a fresh prospective to my development projects and am constantly utilizing my skills in teamwork, leadership, project management, and flexibility. With a number of years in team-based leadership positions, I have a strong foundation in communication, an effective eye for detail, and a passion for mentorship and teaching. <br /><br /> I have an active interest in user experience, and creation of tangible solutions making an impact on users. <br /><br /> When I'm not busy writing code, you are likely to find me in my vegetable garden during the summer months, or enjoying a hot cup of tea and a good book when it's a bit cooler.</p>
      </div>
      <div className="text-center mb-8 mt-4 toolbox-headline">
        <h2>Skills in my Toolbox...</h2>
      </div>
      <div className="columns-4 w-8/12 mx-auto px-4 pl-12 mb-12">
        <h3>Languages</h3>
        <Badge name="CSS3" backgroundColor="#c18c5d" />
        <Badge name="HTML5" backgroundColor="#495867" />
        <Badge name="JavaScript" backgroundColor="#ce796b" />
        <Badge name="Python" backgroundColor="#c18c5d" />
        <Badge name="Markdown" backgroundColor="#e7ad99" className="break-after-column" />
        <h3>Backend Technologies</h3>
        <Badge name="MongoDB" backgroundColor="#495867" />
        <Badge name="Express" backgroundColor="#e7ad99" />
        <Badge name="Node.js" backgroundColor="#c18c5d" />
        <Badge name="NPM" backgroundColor="#ce796b" />
        <Badge name="Postman" backgroundColor="#495867" />
        <Badge name="Flask" backgroundColor="#e7ad99" />
        <Badge name="Microsoft Azure" backgroundColor="#c18c5d" className="break-after-column" />
        <h3>Version Control</h3>
        <Badge name="Git" backgroundColor="#ce796b" />
        <Badge name="GitHub" backgroundColor="#495867" />
        <h3>Miscellaneous</h3>
        <Badge name="Heroku" backgroundColor="#e7ad99" />
        <Badge name="JSON" backgroundColor="#c18c5d" />
        <Badge name="Netlify" backgroundColor="#495867" />
        <Badge name="Visual Studio Code" backgroundColor="#ce796b" className="break-after-column" />
        <h3>Libraries & Frameworks</h3>
        <Badge name="React" backgroundColor="#495867" />
        <Badge name="React Router" backgroundColor="#C18c5d" />
        <Badge name="jQuery" backgroundColor="#ce796b" />
        <Badge name="Tailwind CSS" backgroundColor="#495867" />
        <Badge name="Bootstrap" backgroundColor="#e7ad99" className="break-after-column" />
      </div>
    </div>
  )
}

export default About 