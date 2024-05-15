import React from 'react';
import { useField } from 'formik';
import './FormInput.scss';

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='form-input mx-2'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <br />
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default FormInput;