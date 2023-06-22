import React from 'react';
import VehicleSelectionComponent from './index';
import VehicleSelectionServiceComponent from './index.service';

class VehicleSelection extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <VehicleSelectionServiceComponent {...this.props}>
        {props => (
          <VehicleSelectionComponent
            {...props}
          />
        )}
      </VehicleSelectionServiceComponent>
    );
  };
};

export default VehicleSelection;
