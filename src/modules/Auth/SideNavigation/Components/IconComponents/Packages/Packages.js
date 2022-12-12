import React from 'react';
import PackagesComponent from './index';
import PackagesServiceComponent from './index.service';

class Packages extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <PackagesServiceComponent {...this.props}>
        {props => (
          <PackagesComponent
            {...props}
          />
        )}
      </PackagesServiceComponent>
    );
  };
};

export default Packages;
