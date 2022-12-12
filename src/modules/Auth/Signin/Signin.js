import React from 'react';
import SigninComponent from './index';
import SigninServiceComponent from './index.service';

class Signin extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <SigninServiceComponent {...this.props}>
        {props => (
          <SigninComponent
            {...props}
          />
        )}
      </SigninServiceComponent>
    );
  };
};

export default Signin;
