import React from 'react';
import Forgot_PasswordComponent from './index';
import Forgot_PasswordServiceComponent from './index.service';

class Forgot_Password extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <Forgot_PasswordServiceComponent {...this.props}>
        {props => (
          <Forgot_PasswordComponent
            {...props}
          />
        )}
      </Forgot_PasswordServiceComponent>
    );
  };
};

export default Forgot_Password;
