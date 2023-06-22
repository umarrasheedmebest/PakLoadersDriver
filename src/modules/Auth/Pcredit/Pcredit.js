import React from 'react';
import PcreditComponent from './index';
import PcreditServiceComponent from './index.service';

class Pcredit extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <PcreditServiceComponent {...this.props}>
        {props => (
          <PcreditComponent
            {...props}
          />
        )}
      </PcreditServiceComponent>
    );
  };
};

export default Pcredit;
