import React from 'react';
import ForgetComponent from './index';
import ForgetServiceComponent from './index.service';

class Forget extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <ForgetServiceComponent {...this.props}>
        {props => (
          <ForgetComponent
            {...props}
          />
        )}
      </ForgetServiceComponent>
    );
  };
};

export default Forget;
