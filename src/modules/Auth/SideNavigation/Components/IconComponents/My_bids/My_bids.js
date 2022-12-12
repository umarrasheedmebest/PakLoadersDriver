import React from 'react';
import My_bidsComponent from './index';
import My_bidsServiceComponent from './index.service';

class My_bids extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <My_bidsServiceComponent {...this.props}>
        {props => (
          <My_bidsComponent
            {...props}
          />
        )}
      </My_bidsServiceComponent>
    );
  };
};

export default My_bids;
