import React from 'react';
import A_VehicleComponent from './index';
import A_VehicleServiceComponent from './index.service';

class A_Vehicle extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <A_VehicleServiceComponent {...this.props}>
        {props => (
          <A_VehicleComponent
            {...props}
          />
        )}
      </A_VehicleServiceComponent>
    );
  };
};

export default A_Vehicle;
