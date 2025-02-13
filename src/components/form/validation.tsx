import * as yup from "yup";

const regexp = {
  name: /^\S[а-яА-Яa-zA-Z]{2,20}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
};

export const validationShema = yup.object().shape({
  name: yup
    .string()
    .matches(regexp.name, "Please enter your name from 2 to 20 characters using only letters")
    .required("Please enter name"),
  age: yup
    .number()
    .typeError("Age should be a number")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .required("Please enter age"),
  email: yup
    .string()
    .matches(regexp.email, "Please enter email type example@mail.com")
    .email("Please enter valid email")
    .required("Please enter email")
});