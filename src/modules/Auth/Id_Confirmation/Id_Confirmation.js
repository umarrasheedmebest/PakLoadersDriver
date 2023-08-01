import React from 'react';
import Id_ConfirmationComponent from './index';
import Id_ConfirmationServiceComponent from './index.service';

class Id_Confirmation extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <Id_ConfirmationServiceComponent {...this.props}>
        {props => (
          <Id_ConfirmationComponent
            {...props}
          />
        )}
      </Id_ConfirmationServiceComponent>
    );
  };
};

export default Id_Confirmation;
