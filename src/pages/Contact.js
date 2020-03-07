import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

import { formspreeID } from '../data/config';

const StyledErrorMessage = styled.p`
  padding-left: 0.5rem;
  position: relative;
  top: -0.5rem;
  font-size: 0.75rem;
  border-left: 0.25rem solid ${({ theme }) => theme.highlight};
`;

const StyledSuccessMessage = styled.p`
  padding-left: 0.5rem;
  border-left: 0.25rem solid #2ecc71;
  font-size: 0.75rem;
`;

const Contact = () => {
  const [success, setSuccess] = useState(null);

  return (
    <Fragment>
      <h1>Contact</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name is required.'),
          email: Yup.string()
            .email('Email is not valid.')
            .required('Email is required.'),
          message: Yup.string().required('Message is required.')
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          axios
            .post(`https://formspree.io/${formspreeID}`, values)
            .then(({ data: { ok } }) => {
              setSubmitting(false);
              if (ok) {
                setSuccess(true);
                resetForm();
              }
            })
            .catch(_e => setSuccess(false));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {success === true && (
              <StyledSuccessMessage>Successfully sent!</StyledSuccessMessage>
            )}
            <Field
              kind="input"
              type="text"
              name="name"
              label="Name"
              id="formName"
              component={Input}
              autoFocus
            />
            <ErrorMessage name="name" component={StyledErrorMessage} />
            <Field
              kind="input"
              type="email"
              name="email"
              label="Email"
              id="formEmail"
              component={Input}
            />
            <ErrorMessage name="email" component={StyledErrorMessage} />
            <Field
              kind="textarea"
              name="message"
              label="Message"
              id="formMessage"
              rows={5}
              component={Input}
            />
            <ErrorMessage name="message" component={StyledErrorMessage} />
            {isSubmitting ? (
              <p>Sending...</p>
            ) : (
              <Button type="submit">Send</Button>
            )}
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default Contact;
