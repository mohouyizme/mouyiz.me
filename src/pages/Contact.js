import React, { Fragment } from 'react';

import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Contact = () => {
  return (
    <Fragment>
      <h1>Contact</h1>
      <form name="contact" data-netlify="true">
        <Input
          label="Name"
          type="text"
          name="name"
          id="formName"
          kind="input"
          autoFocus
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          id="formEmail"
          kind="input"
          required
        />
        <Input
          label="Message"
          name="message"
          id="formMessage"
          kind="textarea"
          rows={5}
          required
        />
        <Button type="submit">Send</Button>
      </form>
    </Fragment>
  );
};

export default Contact;
