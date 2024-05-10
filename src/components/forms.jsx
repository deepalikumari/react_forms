import React from 'react';

class FormExample extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    contacts: '',
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    contactsError: '',
    registrationSuccess: false
  };

  handleFirst= (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleLast = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleEmail = (event) => {
    const email = event.target.value;
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRegex.test(email)) {
      this.setState({ email, emailError: '' });
    } else {
      this.setState({ emailError: 'Invalid email format' });
    }
  };

  handleContact = (event) => {
    this.setState({ contacts: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    if (this.state.firstName === '') {
      this.setState({ firstNameError: 'Please enter your first name!' });
      valid = false;
    }
    if (this.state.lastName === '') {
      this.setState({ lastNameError: 'Please enter your last name!' });
      valid = false;
    }
    if (this.state.email === '') {
      this.setState({ emailError: 'Please enter your email!' });
      valid = false;
    }
    if (this.state.contacts === '') {
      this.setState({ contactsError: 'Please enter your contacts!' });
      valid = false;
    }

    if (valid) {
      // Form submission successful, you can trigger any further actions here
      // For now, just set registrationSuccess to true
      this.setState({ registrationSuccess: true });

      // Clear form values after 3 seconds
      setTimeout(() => {
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          contacts: '',
          firstNameError: '',
          lastNameError: '',
          emailError: '',
          contactsError: '',
          registrationSuccess: false
        });
      }, 1000); // Reset form after 1 seconds (adjust as needed)
    }
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={this.state.firstName}
            onChange={this.handleFirst}
          />
          {this.state.firstNameError && <p>{this.state.firstNameError}</p>}
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={this.state.lastName}
            onChange={this.handleLast}
          />
          {this.state.lastNameError && <p>{this.state.lastNameError}</p>}
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          {this.state.emailError && <p>{this.state.emailError}</p>}
          <br />
          <label htmlFor="contacts">Contacts:</label>
          <input
            type="text"
            id="contacts"
            value={this.state.contacts}
            onChange={this.handleContact}
          />
          {this.state.contactsError && <p>{this.state.contactsError}</p>}
          <br />
          <button type="submit">Register</button>
        </form>
        {this.state.registrationSuccess && (
          <p>Registration successful! Thank you for registering.</p>
        )}
      </div>
    );
  }
}

export default FormExample;
