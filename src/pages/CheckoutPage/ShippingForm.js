import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import "../CartPage/CartPage.scss";

import FormInput from '../../components/Forms/FormInput';

const ShippingForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    postalCode: Yup.string().required('Postal code is required'),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className='bg-whitesmoke'>
        <h2 className='mb-2 mx-2'>Shipping Information</h2>
        <FormInput label="First Name" name="firstName" type="text" />
        <FormInput label="Last Name" name="lastName" type="text" />
        <FormInput label="Address" name="address" type="text" />
        <FormInput label="City" name="city" type="text" />
        <FormInput label="Country" name="country" type="text" />
        <FormInput label="Postal Code" name="postalCode" type="text" />
        <button type="submit" className='checkout-btn text-white bg-orange fs-16 mx-2'>Submit</button>
      </Form>
    </Formik>
  );
};

export default ShippingForm;