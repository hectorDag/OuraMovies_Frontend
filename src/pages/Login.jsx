import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const { user, isError, isSuccess, message } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email, password
        }

        dispatch(login(userData))

    }

  return (
      <>
          <section className="tarjeta">
              <form className="form" onSubmit={onSubmit}>
                  
                <h3>Favor de llenar el Formulario</h3> 

                  <div className="form-group">
                      <input
                          type="email"
                          className='form-control'
                          id='email'
                          name='email'
                          value={email}
                          placeholder='Teclea tu email'
                          onChange={onChange}
                      />
                  </div>
                  <div className="form-group">
                      <input
                          type="password"
                          className='form-control'
                          id='password'
                          name='password'
                          value={password}
                          placeholder='Teclea tu password'
                          onChange={onChange}
                      />
                  </div>

                  <div className="form-group">
                      <button type="submit" className='btn btn-block'>Entrar</button>
                  </div>
                  
              </form>
          </section>
      </>
  )
}
export default Login