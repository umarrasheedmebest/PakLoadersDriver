import React from 'react';
import PreferedComponent from './index';
import PreferedServiceComponent from './index.service';

class Prefered extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <PreferedServiceComponent {...this.props}>
        {props => (
          <PreferedComponent
            {...props}
          />
        )}
      </PreferedServiceComponent>
    );
  };
};

export default Prefered;
