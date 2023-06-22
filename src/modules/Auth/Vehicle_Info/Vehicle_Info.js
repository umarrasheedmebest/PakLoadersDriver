import React from 'react';
import Vehicle_InfoComponent from './index';
import Vehicle_InfoServiceComponent from './index.service';

class Vehicle_Info extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <Vehicle_InfoServiceComponent {...this.props}>
        {props => (
          <Vehicle_InfoComponent
            {...props}
          />
        )}
      </Vehicle_InfoServiceComponent>
    );
  };
};

export default Vehicle_Info;
