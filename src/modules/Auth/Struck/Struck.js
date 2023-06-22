import React from 'react';
import StruckComponent from './index';
import StruckServiceComponent from './index.service';

class Struck extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <StruckServiceComponent {...this.props}>
        {props => (
          <StruckComponent
            {...props}
          />
        )}
      </StruckServiceComponent>
    );
  };
};

export default Struck;
