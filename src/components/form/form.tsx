import React from "react";
import { Formik, Form } from "formik";
import { validationShema } from "./validation.tsx";
import { Input } from "./input/input.tsx";
import './form-style.scss';

export const UserForm = () => {
  const initialValues = {
    name: "",
    age: "",
    email: "",
  };

  return (
    <div className="containerForm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationShema}
        onSubmit={(values) => alert(`Name: ${values.name}\n Age: ${values.age}\n Email: ${values.email}`)}
      >
      {({ errors, touched }) => (
        <Form className="form">
          <Input label="Name" name="name" type="text" autoComplete="off" hasError={!!touched.name && !!errors.name} />
          <Input label="Age" name="age" type="text" autoComplete="off" hasError={!!touched.age && !!errors.age} />
          <Input label="Email" name="email" type="text" autoComplete="off" hasError={!!touched.email && !!errors.email} />
          <button className="form-button" type="submit">Check data</button>
        </Form>
       )}
      </Formik>
    </div>
  )
}