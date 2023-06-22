import React from 'react';
import EssentialComponent from './index';
import EssentialServiceComponent from './index.service';

class Essential extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <EssentialServiceComponent {...this.props}>
        {props => (
          <EssentialComponent
            {...props}
          />
        )}
      </EssentialServiceComponent>
    );
  };
};

export default Essential;
