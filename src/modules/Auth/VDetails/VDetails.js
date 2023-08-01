import React from 'react';
import VDetailsComponent from './index';
import VDetailsServiceComponent from './index.service';

class VDetails extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <VDetailsServiceComponent {...this.props}>
        {props => (
          <VDetailsComponent
            {...props}
          />
        )}
      </VDetailsServiceComponent>
    );
  };
};

export default VDetails;
