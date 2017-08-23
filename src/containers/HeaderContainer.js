import { connect } from 'react-redux';
import Header from '../components/Header';

const getVisibleNavLinks = (userState) => {
  // console.log("From getVisibleNavLinks in containers/HeaderContainer.js!");
  // console.log("Here's state.user: ");
  // console.dir(userState);

  if (userState.isAuthenticated) {
    return [
      {id: '0', route: '/dashboard', text: 'Dashboard'},
      {id: '1', route: '/game-list', text: 'Game List'},
      {id: '2', route: '/logout', text: 'Log Out'}
    ];
  } else {
    return [
      {id: '0', route: '/signup', text: 'Sign Up'},
      {id: '1', route: '/login', text: 'Log In'}
    ];
  }

}

const mapStateToProps = (state) => {
  return {
    navLinks: getVisibleNavLinks(state.user)
  }
}

const HeaderContainer = connect(
  mapStateToProps
)(Header);

export default HeaderContainer;
