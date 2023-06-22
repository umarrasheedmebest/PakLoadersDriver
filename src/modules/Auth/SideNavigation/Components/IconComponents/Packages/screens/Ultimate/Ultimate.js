import React from 'react';
import UltimateComponent from './index';
import UltimateServiceComponent from './index.service';

class Ultimate extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <UltimateServiceComponent {...this.props}>
        {props => (
          <UltimateComponent
            {...props}
          />
        )}
      </UltimateServiceComponent>
    );
  };
};

export default Ultimate;
