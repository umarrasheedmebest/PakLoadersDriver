import React from 'react';
import A_Vehicle_VerifiedComponent from './index';
import A_Vehicle_VerifiedServiceComponent from './index.service';

class A_Vehicle_Verified extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <A_Vehicle_VerifiedServiceComponent {...this.props}>
        {props => (
          <A_Vehicle_VerifiedComponent
            {...props}
          />
        )}
      </A_Vehicle_VerifiedServiceComponent>
    );
  };
};

export default A_Vehicle_Verified;
