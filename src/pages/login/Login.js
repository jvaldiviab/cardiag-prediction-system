import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { Helmet } from 'react-helmet'

// css
import './Login.css'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()

    login(email, password)
  }

  return (
    <div>
      <Helmet>
        <title>Ingresar | CardiagService</title>
      </Helmet>

      <div className="outer">
        <div className="inner">
          <form onSubmit={handleSubmit}>

            <h3>Ingresar</h3>

            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}
                value={email}
                required />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}
                value={password}
                required />
            </div>

            {isPending && <button type="submit" className="btn btn-dark btn-lg btn-block" disabled>Cargando...</button>}
            {!isPending && <button className="btn btn-dark btn-lg btn-block">Ingresar</button>}
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>


    </div>
  )
}
