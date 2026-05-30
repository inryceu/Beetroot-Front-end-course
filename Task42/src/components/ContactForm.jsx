import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormField from './FormField';

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(4, 'Юзернейм повинен містити мінімум 4 символи')
    .required('Юзернейм повинен містити мінімум 4 символи'),
  email: Yup.string()
    .email('Неправильна адреса електронної пошти')
    .required('Неправильна адреса електронної пошти'),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Перевір формат номеру телефона (наприклад: +380123456789)')
    .required('Перевір формат номеру телефона'),
  message: Yup.string()
    .min(10, 'Повідомлення має бути не менше 10 символів')
    .required('Повідомлення має бути не менше 10 символів'),
  subscribe: Yup.boolean()
});

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="form-container success-message">
        Дякуємо! Ваше запит успішно надіслано.
      </div>
    );
  }

  return (
    <div className="form-container">
      <Formik
        initialValues={{ fullName: '', email: '', phone: '', message: '', subscribe: false }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log('Відправлені дані:', values);
            setIsSubmitted(true);
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-grid">
              <FormField name="fullName" placeholder="Ім'я та прізвище" />
              <FormField name="email" placeholder="Email" type="email" />
              <FormField name="phone" placeholder="Телефон (у форматі +380)" type="tel" />
              <FormField name="message" placeholder="Повідомлення" className="full-width" />
            </div>

            <label className="checkbox-group">
              <Field type="checkbox" name="subscribe" />
              Надсилати мені оновлення про академію
            </label>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Надсилання...' : 'Надіслати'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}