import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection'
import { useState } from 'react'

// statics
import './Navbar.css'
import Heart from '../assets/heart-logo.svg'
// import ActivityIcon from '../assets/activity_icon.svg'


const Helper = (user, documents) => {

  if (user === null) return false
  for (let key in documents) {
    if (user.uid === documents[key].id) {
      if (documents[key].rol === 'doctor') {
        return true
      }
    }
  }

  return false

}

export default function Navbar() {

  const { isPending, logout } = useLogout()
  const { user } = useAuthContext()

  const { error, documents } = useCollection('users')


  let handleClick = e => e.preventDefault();

  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark top bg-dark fixed-top mr-auto">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Cardiag Service</a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between float-left" id="navbarSupportedContent">

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle cd" href="/" onClick={handleClick} id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                Menú
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="https://cd.foundation/">¿Quienes somos?</a></li>
                <li><a className="dropdown-item" href="https://jenkins-x.io/">Sobre el proyecto</a></li>
                <li><a className="dropdown-item" href="https://cloud.google.com/tekton/">Contacto</a></li>
              </ul>
            </li>

            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

              {
                Helper(user, documents) &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/dashboard">Dashboard</Link>
                  </li>
                </>
              }
              {user &&
                <>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="https://www.jenkins.io/node/">Blog</a>
                  </li>


                </>
              }
              <li className="nav-item">

                <Link className="nav-link" to="/service">Service</Link>
              </li>
              {!user &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-outline-secondary" to="/login">Ingresar</Link>
                  </li>
                </>
              }
              {!user &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-outline-secondary" to="/signup">Registrar</Link>
                  </li>
                </>
              }

              <li className="nav-item">
                {!isPending && user &&
                  <button
                    className="nav-link btn btn-outline-secondary"
                    onClick={logout}
                  >
                    Salir
                  </button>
                }
                {isPending && user &&
                  <button
                    className="nav-link btn btn-outline-secondary"
                    onClick={logout}
                    disabled
                  >
                    Regresa Pronto...
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
