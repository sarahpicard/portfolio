import './Projects.css'
import ReactPlayer from 'react-player'

const Projects = () => {
  return (
    <div className='container mx-auto'>
      <div className='w-8/12 mx-auto'>
        <h1>IndexCRM</h1>
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=zEBr8YSF3T8' playing={true} loop={true}/>
        </div>
      </div>
    </div>
  )
}

export default Projects