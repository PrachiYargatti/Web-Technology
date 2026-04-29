import {useState, useEffect} from 'react'
import {ThreeDots} from 'react-loader-spinner'
import './App.css'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const App = () => {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [projectsList, setProjectsList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getProjects = async () => {
    setApiStatus(apiStatusConstants.inProgress)

    const url = `https://apis.ccbp.in/ps/projects?category=${activeCategory}`
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.projects.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
      }))

      setProjectsList(updatedData)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getProjects()
  }, [activeCategory])

  const onChangeCategory = event => {
    setActiveCategory(event.target.value)
  }

  const renderLoader = () => (
    <div data-testid="loader">
      <ThreeDots type="ThreeDots" color="#328af2" height="50" width="50" />
    </div>
  )

  const renderProjects = () => (
    <ul className="projects-list">
      {projectsList.map(project => (
        <li key={project.id} className="project-item">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="project-img"
          />
          <p>{project.name}</p>
        </li>
      ))}
    </ul>
  )

  const renderFailure = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button type="button" onClick={getProjects}>
        Retry
      </button>
    </div>
  )

  const renderContent = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoader()
      case apiStatusConstants.success:
        return renderProjects()
      case apiStatusConstants.failure:
        return renderFailure()
      default:
        return null
    }
  }

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
        alt="website logo"
        className="logo"
      />

      <select value={activeCategory} onChange={onChangeCategory}>
        {categoriesList.map(category => (
          <option key={category.id} value={category.id}>
            {category.displayText}
          </option>
        ))}
      </select>

      {renderContent()}
    </div>
  )
}

export default App
