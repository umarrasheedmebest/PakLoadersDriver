import React from 'react';
import Forgot_Password_VerifyComponent from './index';
import Forgot_Password_VerifyServiceComponent from './index.service';

class Forgot_Password_Verify extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <Forgot_Password_VerifyServiceComponent {...this.props}>
        {props => (
          <Forgot_Password_VerifyComponent
            {...props}
          />
        )}
      </Forgot_Password_VerifyServiceComponent>
    );
  };
};

export default Forgot_Password_Verify;
