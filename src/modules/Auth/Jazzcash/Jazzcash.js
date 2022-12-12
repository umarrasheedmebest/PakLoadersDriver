import React from 'react';
import JazzcashComponent from './index';
import JazzcashServiceComponent from './index.service';

class Jazzcash extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <JazzcashServiceComponent {...this.props}>
        {props => (
          <JazzcashComponent
            {...props}
          />
        )}
      </JazzcashServiceComponent>
    );
  };
};

export default Jazzcash;
