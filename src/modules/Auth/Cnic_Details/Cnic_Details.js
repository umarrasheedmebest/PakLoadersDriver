import React from 'react';
import Cnic_DetailsComponent from './index';
import Cnic_DetailsServiceComponent from './index.service';

class Cnic_Details extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
        <Cnic_DetailsServiceComponent {...this.props}>
        {props => (
          <Cnic_DetailsComponent
            {...props}
          />
        )}
      </Cnic_DetailsServiceComponent>
    );
  };
};

export default Cnic_Details;
