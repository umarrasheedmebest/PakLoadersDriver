import React from 'react';
import PaymentsComponent from './index';
import PaymentsServiceComponent from './index.service';

class Payments extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <PaymentsServiceComponent {...this.props}>
        {props => (
          <PaymentsComponent
            {...props}
          />
        )}
      </PaymentsServiceComponent>
    );
  };
};

export default Payments;
