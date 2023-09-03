import React from 'react';

const ContactDetails: React.FC = () => {
  const contact = { name: 'John Doe', email: 'john@example.com' };

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
};

export default ContactDetails;
