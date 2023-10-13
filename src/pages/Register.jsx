const Register = () => {

  const onSubmit = (e) => {
      e.preventDefault()
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
                          placeholder='Teclea tu nombre'
                      />
                  </div>
                  <div className="form-group">
                      <input
                          type="email"
                          className='form-control'
                          id='email'
                          name='email'
                          placeholder='Teclea tu email'
                      />
                  </div>
                  <div className="form-group">
                      <input
                          type="password"
                          className='form-control'
                          id='password'
                          name='password'
                          placeholder='Teclea tu password'
                      />
                  </div>
                  <div className="form-group">
                      <input
                          type="password"
                          className='form-control'
                          id='password2'
                          name='password2'
                          placeholder='Confirma tu password'
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