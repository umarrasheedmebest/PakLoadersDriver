import React from 'react';
import ContactUSComponent from './index';
import ContactUSServiceComponent from './index.service';

class ContactUS extends React.Component {
  //created separate component for business logic and view
  render() {
    return (
      <ContactUSServiceComponent {...this.props}>
        {props => (
          <ContactUSComponent
            {...props}
          />
        )}
      </ContactUSServiceComponent>
    );
  };
};

export default ContactUS;
