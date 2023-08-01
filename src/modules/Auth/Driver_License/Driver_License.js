import React from 'react';
import Id_ConfirmationComponent from './index';
import Id_ConfirmationServiceComponent from './index.service';

class Driver_License extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <Driver_LicenseServiceComponent {...this.props}>
        {props => (
          <Driver_LicenseComponent
            {...props}
          />
        )}
      </Driver_LicenseServiceComponent>
    );
  };
};

export default Driver_License;
