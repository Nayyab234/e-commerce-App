// PaymentForm.js

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import "../CartPage/CartPage.scss";

import FormInput from '../../components/Forms/FormInput';

const PaymentForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    cardNumber: Yup.string().required('Card number is required'),
    expirationDate: Yup.string().required('Expiration date is required'),
    cvv: Yup.string().required('CVV is required'),
  });

  return (
    <Formik
      initialValues={{
        cardNumber: '',
        expirationDate: '',
        cvv: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <h2 className='mb-2 mx-2'>Payment Information</h2>
        <FormInput label="Card Number" name="cardNumber" type="text" />
        <FormInput label="Expiration Date" name="expirationDate" type="text" />
        <FormInput label="CVV" name="cvv" type="text" />
        <button type="submit" className='checkout-btn text-white bg-orange fs-16 mx-2'>Submit</button>

      </Form>
    </Formik>
  );
};

export default PaymentForm;
