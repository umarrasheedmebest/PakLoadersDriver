import React from 'react';
import InfoComponent from './index';
import InfoServiceComponent from './index.service';

class Info extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <InfoServiceComponent {...this.props}>
        {props => (
          <InfoComponent
            {...props}
          />
        )}
      </InfoServiceComponent>
    );
  };
};

export default Info;
