import React from 'react';
import Ownership_VerifyComponent from './index';
import Ownership_VerifyServiceComponent from './index.service';

class Ownership_Verify extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <Ownership_VerifyServiceComponent {...this.props}>
        {props => (
          <Ownership_VerifyComponent
            {...props}
          />
        )}
      </Ownership_VerifyServiceComponent>
    );
  };
};

export default Ownership_Verify;
