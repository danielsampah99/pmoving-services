'use client'

import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  options?: Array<{ value: string, label: string }>;
  error?: string;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  required = false,
  placeholder = "",
  value,
  onChange,
  options,
  error,
  className = "",
}) => {

  const renderField = () => {
    if (type === "textarea") {
      return (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={4}
          className={`mt-1 w-full rounded-md border-gray-300 shadow-sm 
                    focus:border-moving-yellow focus:ring focus:ring-moving-yellow-light 
                    focus:ring-opacity-50 p-2 border ${error ? 'border-red-500' : 'border-gray-200'}`}
        />
      );
    }

    if (type === "select") {
      return (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          className={`mt-1 w-full rounded-md border-gray-300 shadow-sm 
                    focus:border-moving-yellow focus:ring focus:ring-moving-yellow-light 
                    focus:ring-opacity-50 p-2 border ${error ? 'border-red-500' : 'border-gray-200'}`}
        >
          <option value="">{placeholder || "Select an option"}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    if (type === "checkbox") {
      return (
        <div className="flex items-center mt-1">
          <input
            type="checkbox"
            id={id}
            name={id}
            checked={value === 'true'}
            onChange={onChange}
            required={required}
            className="h-4 w-4 text-moving-yellow focus:ring-moving-yellow-light border-gray-300 rounded"
          />
          <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
            {label}
          </label>
        </div>
      );
    }

    if (type === "date") {
      return (
        <input
          type="date"
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`mt-1 w-full rounded-md border-gray-300 shadow-sm 
                    focus:border-moving-yellow focus:ring focus:ring-moving-yellow-light 
                    focus:ring-opacity-50 p-2 border ${error ? 'border-red-500' : 'border-gray-200'}`}
        />
      );
    }

    return (
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`mt-1 w-full rounded-md border-gray-300 shadow-sm 
                  focus:border-moving-yellow focus:ring focus:ring-moving-yellow-light 
                  focus:ring-opacity-50 p-2 border ${error ? 'border-red-500' : 'border-gray-200'}`}
      />
    );
  };

  return (
    <div className={`mb-4 ${className}`}>
      {type !== 'checkbox' && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {renderField()}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default FormField;