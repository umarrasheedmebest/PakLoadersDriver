import React from 'react';
import SignupComponent from './index';
import SignupServiceComponent from './index.service';

class Signup extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <SignupServiceComponent {...this.props}>
        {props => (
          <SignupComponent
            {...props}
          />
        )}
      </SignupServiceComponent>
    );
  };
};

export default Signup;
