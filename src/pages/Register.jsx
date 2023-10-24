import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const { user, isError, isSuccess, message } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/login')
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

        if (password !== password2) {
            toast.error('Los passwords no son iguales')
        } else {
            const userData = {
                name, email, password
            }
            dispatch(register(userData))
        }
    }

  return (
      <>
      <section className="tarjeta"> 
              <form className="form" onSubmit={onSubmit}>

                <h3>Favor de llenar el Formulario</h3> 

                  <div className="form-group">
                      <input
                          type="text"
                          className='form-control'
                          id='name'
                          name='name'
                          value={name}
                          placeholder='Teclea tu nombre'
                          onChange={onChange}
                      />
                  </div>
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
                      <input
                          type="password"
                          className='form-control'
                          id='password2'
                          name='password2'
                          value={password2}
                          placeholder='Confirma tu password'
                          onChange={onChange}
                      />
                  </div>
                  <div className="form-group">
                      <button type="submit" className='btn btn-block'>Registrar</button>
                  </div>

              </form>
        
        </section>
      </>
  )
}
export default Register