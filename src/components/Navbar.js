import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// statics
import './Navbar.css'
import Heart from '../assets/heart-logo.svg'
// import ActivityIcon from '../assets/activity_icon.svg'

export default function Navbar() {

  const { isPending, logout } = useLogout()
  const { user } = useAuthContext()

  let handleClick = e => e.preventDefault();

  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark top bg-dark fixed-top mr-auto">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Cardiag Predict System</a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between float-left" id="navbarSupportedContent">

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle cd" href="/" onClick={handleClick} id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                <img src={Heart} alt="cd.foundation" draggable="false" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="https://cd.foundation/">Quienes somos?</a></li>
                <li><a className="dropdown-item" href="https://jenkins-x.io/">Sobre el proyecto</a></li>
                <li><a className="dropdown-item" href="https://cloud.google.com/tekton/">Contacto</a></li>
              </ul>
            </li>

            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">


              {user &&
                <>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="https://www.jenkins.io/node/">Blog</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="https://www.jenkins.io/node/">Service</a>
                  </li>
                </>
              }


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" onClick={handleClick} id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                  English
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="">(ES) Spanish</a></li>
                </ul>
              </li>


              {!user &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-outline-secondary" to="/login">Login</Link>
                  </li>
                </>
              }

              {!user &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-outline-secondary" to="/signup">Signup</Link>
                  </li>
                </>
              }

              <li className="nav-item">
                {!isPending && user &&
                  <button
                    className="nav-link btn btn-outline-secondary"
                    onClick={logout}
                  >
                    Logout
                  </button>
                }
                {isPending && user &&
                  <button
                    className="nav-link btn btn-outline-secondary"
                    onClick={logout}
                    disabled
                  >
                    Logging out...
                  </button>
                }
              </li>

            </ul>
          </div>
        </div>
      </nav>
      {/* It will fixed Navbar space and other elements after this, will take space below */}
      <div className="pt-4"> &nbsp; </div>
    </div>
  );
}
