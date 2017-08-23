import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AuthenticatedRoute ({
  component: Component,
  isAuthenticated,
  ...rest
}) {
  console.log("isAuthenticated", isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state:{ from: props.location }}} />
      }
    />
  );
}
