import React from 'react';
import VerifyComponent from './index';
import VerifyServiceComponent from './index.service';

class Verify extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <VerifyServiceComponent {...this.props}>
        {props => (
          <VerifyComponent
            {...props}
          />
        )}
      </VerifyServiceComponent>
    );
  };
};

export default Verify;
