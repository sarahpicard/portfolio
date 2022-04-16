import './Projects.css'
import ReactPlayer from 'react-player'

const Projects = () => {
  return (
    <div className='container mx-auto mt-12'>
      <div className='w-8/12 mx-auto whole-project-container'>
        <h1 className='text-5xl'>IndexCRM</h1>
        <h2 className='italic text-sm'>A customer relationship management application</h2>
        <div className='float-left mr-5 mb-2 mt-2'>
          <ReactPlayer url='https://www.youtube.com/watch?v=zEBr8YSF3T8' playing={true} loop={true}/>
        </div>
        <div className='text-lg'>
          <p>IndexCRM is a fullstack CRUD application, developed independently using MEN stack technologies (MongoDB, Express.js & Node.js). <br /><br />This CRM application is meant for professional tracking of client contact information, recording of client conversations, and tracking of daily to-do items. The application is also fully mobile responsive for enhanced user experience.</p><br />
          <p>MongoDB was utilized in this project to implement a multi-schema database. Along with MEN stack technologies, the application was developed using RESTful architecture principles, JavaScript, HTML, CSS, and Bootstrap.</p><br />

          <p>To view a live, deployed version of this project, <a className="in-text-links"  href="https://index-crm-system.herokuapp.com/">Visit IndexCRM Here</a></p>
          <p>For detailed instructions on using this application, please visit this <a className="in-text-links" href="https://github.com/sarahpicard/crm-system">GitHub Repository</a> (here you can also find detailed screenshots of all application functionality)</p>
        </div>
      </div>
      <div className="mx-auto w-8/12 whole-project container">
        <h1 className='text-5xl'>ShOwCIAL</h1>
        <h2 className='italic text-sm'>A social platform for concert attendees</h2>
        <div className="float-left mr-5 mb-2 mt-2">
          <ReactPlayer url='https://www.youtube.com/watch?v=-LQCExlJVjI' playing={true} loop={true} />
        </div>
        <div className="text-lg">
          <p>ShOwCIAL is a fullstack CRUD application, created in a two-developer group during a week-long sprint period using MERN stack technologies (MongoDB, Express.js, ReactJS, & Node.js). <br /><br />This application is meant for concert attendees to search for and save events they are interested in, connect with friends, and see concerts that friends are interested in as well. </p><br />
          <p>MongoDB was utilized in this project to implement a multi-schema database. Along with MERN stack technologies, the application was developed using RESTful architecture principles, JavaScript, HTML, CSS, and Bootstrap.</p>
          <p>To view a live, deployed version of this project, <a className='in-text-links' href="https://nconcert-front-end.herokuapp.com/">Visit ShOwCIAL Here</a></p>
          <p>For detailed instructions on using this application, please visit this <a className='in-text-links' href="https://github.com/sarahpicard/NConcert-front-end">GitHub Repository</a> (here you can also find detailed screenshots of all application functionality)</p>
        </div>
      </div>
    </div>
  )
}

export default Projects