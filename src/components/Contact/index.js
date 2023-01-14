import { useState } from 'react';
import {Row, Col, Container, Button, Form } from 'react-bootstrap'
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className='contact'>
        <Container>
            <Row>
            <Form>
      <Form.Group id="contact-form" onSubmit={handleSubmit}>
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
          <Form.Label htmlFor="email">Email address:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        <div>
          <Form.Label htmlFor="message">Message:</Form.Label>
          <Form.Control
            name="message"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button type="submit">Submit</Button>
      </Form.Group>
      </Form>
      </Row>
      </Container>
    </section>
    
  );
}

export default Contact;