import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import { Helmet } from 'react-helmet'

// css
import './Signup.css'

export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [rol, setRol] = useState('normal')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  const { signup, error, isPending } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()

    signup(email, password, displayName, thumbnail, rol)
  }

  const handleThumbnail = (e) => {
    setThumbnail(null)
    let selectedFile = e.target.files[0]

    // file validations
    if (!selectedFile) {
      setThumbnailError('No file selected')
      return
    }

    if (!selectedFile.type.includes('image')) {
      setThumbnailError('Must be an image file')
      return
    }

    if (!selectedFile.size > 100000) {
      setThumbnailError('File size must be below 100kB')
      return
    }

    setThumbnailError(null)
    setThumbnail(selectedFile)
  }

  return (
    <div>
      <Helmet>
        <title>Registrar | CardiagService</title>
      </Helmet>

      <div className="outer">
        <div className="inner">
          <form onSubmit={handleSubmit}>
            <h3>Register</h3>

            <div className="form-group">
              <label>Nombres</label>
              <input type="text" className="form-control" placeholder="Ingrese sus nombres"
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
                required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Ingrese su email" onChange={(e) => setEmail(e.target.value)}
                value={email}
                required />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" className="form-control" placeholder="Ingrese su contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required />
            </div>
            <div className="form-group">
              <label>Imagen de Perfil:</label>
              <input
                type="file"
                onChange={handleThumbnail}
              />
              {thumbnailError && <div className="error">{thumbnailError}</div>}
            </div>

            {isPending && <button type="submit" className="btn btn-dark btn-lg btn-block" disabled>Cargando...</button>}
            {!isPending && <button className="btn btn-dark btn-lg btn-block">Registrarse</button>}
            {error && <div className="error">{error}</div>}

          </form>
        </div>
      </div>

    </div>
  )
}
