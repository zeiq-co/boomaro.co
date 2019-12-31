import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { withFormik } from 'formik';

const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <label className="text-xl mt-8">Name</label>
        <div className="control">
          <input
            className="input border border-gray-400 is-shadowless w-full h-10"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <p className="text-base">{errors.name}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label className="text-xl">Your email</label>
        <div className="control">
          <input
            className="input border border-gray-400 is-shadowless w-full h-10"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="text-base">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="">
        <label className="text-xl">Password</label>
        <div className="control">
          <input
            className="input border border-gray-400 is-shadowless w-full h-10"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="text-base">{errors.password}</p>
          )}
        </div>
      </div>
      <button
      className="w-full my-8  lg:mx-0 hover:underline font-bold rounded-full py-4 px-8 shadow opacity-75 gradient text-white"
        type="submit"
        disabled={isSubmitting}>
            Register
      </button>
    </form>
  );
};

RegisterForm.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Full name is required!'),
    email: Yup.string().required('Email is required!'),
    password: Yup.string().required('Password is required'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleUpdate(values).finally(() => {
      setSubmitting(false);
    });
  },
  displayName: 'RegisterForm', // helps with React DevTools
})(RegisterForm);
