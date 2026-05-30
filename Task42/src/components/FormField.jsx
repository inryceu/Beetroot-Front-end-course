import React from 'react';
import { Field, ErrorMessage } from 'formik';

export default function FormField({ name, placeholder, type = "text", className = "" }) {
  return (
    <div className={`input-group ${className}`}>
      <Field 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        className="custom-input"
      />
      <ErrorMessage name={name} component="div" className="error-text" />
    </div>
  );
}