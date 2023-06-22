import React from 'react';
import EasypayComponent from './index';
import EasypayServiceComponent from './index.service';

class Easypay extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <EasypayServiceComponent {...this.props}>
        {props => (
          <EasypayComponent
            {...props}
          />
        )}
      </EasypayServiceComponent>
    );
  };
};

export default Easypay;
