import React from "react";
import { Field, ErrorMessage as Error } from "formik";
import './input-style.scss';

type Props = {
  name: string;
  type?: string;
  label: string;
  autoComplete?: string;
	hasError: boolean ;
};

export const Input = ({ name, label, autoComplete, hasError }: Props) => {
  return (
		<div className="input-field">
			<label>{label}</label>
			<Field
				className={hasError ? 'input-error' : ''}
        name={name}
        type={"text"}
        autoComplete={autoComplete}
				/>
      <Error name={name}>
        {(error) => <small className="error-message">{error}</small>}
      </Error>
		</div>
  );
}