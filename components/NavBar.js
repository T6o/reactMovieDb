//https://github.com/mpolinowski/next-start#03-bootstrap-4
import Link from 'next/link'

const NavBar = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top mb">
      <img style={{height:'50px', marginRight:'20px'}} src="https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="INSTAR Wiki" />

      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#TopNavbar" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="TopNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-item nav-link">Home</a>
            </Link>
          </li>
            <Link href="/about">
              <a className="nav-item nav-link">My Shows</a>
            </Link>
        </ul>
      </div>
    </nav>
  </div>

)

export default NavBar
