const Nav = () => {
  
  return(
    <div className="flex justify-end space-x-10 pr-12 py-8 nav-text text-3xl nav-bar-total">
      <div className="home-nav-button">
        <a href="/">SP</a>
      </div>
      <a href="/projects">Projects</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
  )
}

export default Nav