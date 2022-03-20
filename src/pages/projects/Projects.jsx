import './Projects.css'
import ReactPlayer from 'react-player'

const Projects = () => {
  return (
    <div className='container mx-auto'>
      <div className='w-9/12 mx-auto'>
        <h1>IndexCRM</h1>
        <h2>A customer relationship management application</h2>
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=zEBr8YSF3T8' playing={true} loop={true}/>
        </div>
        <p>IndexCRM is a full CRUD application, developed independently using MEN stack technologies (MongoDB, Express.js & Node.js). This CRM application is meant for professional tracking of client contact information, recording of client conversations, and tracking of daily to-do items. The application is also fully mobile responsive for enhanced user experience.</p>
        <p>MongoDB was utilized in this project to implement a multi-schema database</p>
        <p>Along with MEN stack technologies, the application was developed using RESTful architecture principles, JavaScript, HTML, CSS, and Bootstrap</p>
        <p>To view a live, deployed version of this project, <a className="in-text-links"  href="https://index-crm-system.herokuapp.com/">Visit IndexCRM Here</a></p>
        <p>For detailed instructions on using this applciation, please visit this <a className="in-text-links" href="https://github.com/sarahpicard/crm-system">GitHub Repository</a> (here you can also find detailed screenshots of all application functionality)</p>
      </div>
    </div>
  )
}

export default Projects