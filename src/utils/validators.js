import * as Yup from "yup";
import { websiteRegex, panNumberRegex, gstNumberRegex} from "./regex";

const required = (schema) => schema.required('This Field is required');

// Number
export const number = Yup.number("Should be a Number")
  .nullable(true)
  .typeError("Enter a number")
  .positive("Enter a positive number")
  .integer("Enter an Integer");

export const numberRequired = required(number)

// Mobile Number
export const mobile = Yup.number()
  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(8);

export const mobileRequired = required(mobile)

// String (EG: Address)
export const string = Yup.string("Should be a string");
export const stringRequired = required(string)

// Name (EG: Name, City)
export const name = Yup.string("Should be a string")
  .matches(/^[A-Za-z ]*$/, "Please enter valid data")
  .max(40, "max 40 characters are allowed");
export const nameRequired = required(name)

// Email
export const email = Yup.string().email("Enter correct email!");
export const emailRequired = required(email)

// URLS
export const website = Yup.string().matches(
  websiteRegex,
  "Enter correct url!"
);
export const websiteRequired = required(website)

//Pan Card
export const panNumber = Yup.string().matches(
  panNumberRegex,
  "Enter valid PAN Number"
);
export const panNumberRequired = required(panNumber)

//GST Card
export const gstNumber = Yup.string().matches(
  gstNumberRegex,
  "Enter valid GST Number"
);
export const gstNumberRequired = required(gstNumber)

//Password
export const password = Yup.string()
.required('No password provided.') 
.min(8, 'Password is too short - should be 8 chars minimum.')
.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')

//Re-enter Password
export const reEnterPassword = Yup.string()
.oneOf([Yup.ref('password'), null], 'Passwords must match')