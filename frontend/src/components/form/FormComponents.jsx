import React from 'react';

export const ChoiceField = ({label, placeholder, onBlur, onChange, value, error_statement, errors, error ,helpertext}) => (
        <div className="item">
            <label className="block mb-2 text-sm font-medium text-gray-900"
                   htmlFor={label}>{label}</label>
            <input
                  required
                  id={label}
                  label={label}
                  placeholder={placeholder}
                  type="text"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  error={error}
                  helpertext={helpertext}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
            
                  {error_statement ? (
                      <div className="text-red-500">{errors}</div>) : null}
        </div>
)




export const FieldInput = ({ label, placeholder, onBlur, onChange, value, error, touched, errors }) => (
  <div className="item">
    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor={label}>{label}</label>
    <input
      id={label}
      required
      label={label}
      placeholder={placeholder}
      type="text"
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      error={error}
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
    />
    {touched && errors ? (
      <div className="text-red-500">{errors}</div>
    ) : null}
  </div>
);
