import React from 'react';
import Reset_PasswordComponent from './index';
import Reset_PasswordServiceComponent from './index.service';

class Reset_Password extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <Reset_PasswordServiceComponent {...this.props}>
        {props => (
          <Reset_PasswordComponent
            {...props}
          />
        )}
      </Reset_PasswordServiceComponent>
    );
  };
};

export default Reset_Password;
