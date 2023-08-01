import React from 'react';
import A_Vehicle_VerifyComponent from './index';
import A_Vehicle_VerifyServiceComponent from './index.service';

class Ownership_Verify extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <A_Vehicle_VerifyServiceComponent {...this.props}>
        {props => (
          <Ownership_VerifyComponent
            {...props}
          />
        )}
      </A_Vehicle_VerifyServiceComponent>
    );
  };
};

export default A_Vehicle_Verify;
