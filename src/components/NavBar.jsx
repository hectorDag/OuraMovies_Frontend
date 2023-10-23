import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../features/auth/authSlice'; 

const NavBar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <header className='navbar1'>
        <Link to="/" className="brand">
          <h2>Oura Movies</h2>
        </Link>
        <div className='navigation-and-search'>
          {user ? (
            <>
              <div className='logout' onClick={handleLogout}>
                <span className='nav-link'>Logout</span> 
              </div>
            </>
          ) : (
            <>
              <div className='login'>
                <NavLink className='nav-link' to='/login'>Login</NavLink>
              </div>
              <div className='register'>
                <NavLink className='nav-link' to='/register'>Register</NavLink>
              </div>
            </>
          )}
          <form className='searchBar'>
            <input type='text' placeholder='Search' aria-label='Search'/>
            <button type='submit'>
              <FontAwesomeIcon icon={faMagnifyingGlass} /> 
            </button>
          </form>
        </div>
      </header>
    </>
  );
};

export default NavBar;
