import css from '../CSS/CSS.module.css';
import { logOut } from 'components/redux/auth/Reducer';
// import { getProfileThunk } from 'components/redux/auth/thunk';
import { dellToken } from 'components/redux/contactsApi';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
  const { profile, token } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogin = () => {
    navigate('/login');
  };
  const handleLogout = () => {
    dispatch(logOut());
    dellToken();
    navigate('/');
  };

  // useEffect(()=>{token && dispatch(getProfileThunk(token))},[token])

  return (
    // <Flex minWidth="max-content" alignItems="center" gap="2">
    //   <Box p="2">
    //     <Heading size="md">
    //       <NavLink to="/">Home</NavLink>
    //     </Heading>
    //   </Box>
    //   <Spacer />
    //   <ButtonGroup gap="2">
    //     {/* <Button colorScheme="teal">
    //       <NavLink to="/login">Login</NavLink>
    //     </Button> */}
    //     {profile && <p>{profile.name}</p>}
    //     <button type="button" onClick={token ? handleLogout : handleLogin}>{profile ? 'Logout' : 'Login'}</button>
    //     <Button colorScheme="teal">
    //       <NavLink to="/register">Sign in</NavLink>
    //     </Button>
    //     <Button colorScheme="teal">
    //       <NavLink to="/contacts">Contacts</NavLink>
    //     </Button>
    //   </ButtonGroup>
    // </Flex>
    <div className={css.navigate}>
      <NavLink
        className={`${css.link} ${
          location.pathname === '/' ? css.linkActive : ''
        }`}
        to="/"
      >
        Home
      </NavLink>
      <ul className={css.navigateButton}>
        {profile && <p className={css.name}>{profile.name}</p>}
        <button
          className={`${css.link} ${
            location.pathname === '/login' ? css.linkActive : ''
          }`}
          type="button"
          onClick={token ? handleLogout : handleLogin}
        >
          {profile ? 'Logout' : 'Login'}
        </button>
        {!token && <NavLink
          className={`${css.link} ${
            location.pathname === '/register' ? css.linkActive : ''
          }`}
          to="/register"
        >
          Sign in
        </NavLink>}
        {token && <NavLink
          className={`${css.link} ${
            location.pathname === '/contacts' ? css.linkActive : ''
          }`}
          to="/contacts"
        >
          Contacts
        </NavLink>}
      </ul>
    </div>
  );
};
