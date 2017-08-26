import React from 'react';
import Loader from './Loader';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({
  component: Component,
  isFetching,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route {...rest} render={props => {
        let componentToShow = null;
        if (!isFetching && !isAuthenticated) {
          componentToShow = <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />;
        } else {
          componentToShow = <Component {...props} />;
        }
        return (<div>
          {isFetching ? <Loader /> : null}
          {componentToShow}
        </div>);
      }
    } />);
};

export default AuthenticatedRoute;
