import { Form, Formik, useField } from "formik";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";

export const StyledLabel = styled.label`
  font-weight: bold;
`;

export const SignUpFormV2Final = () => {
  return (
    <Formik
      initialValues={{
        firstName: ``,
        lastName: ``,
        emailAddress: ``,
        intro: ``,
        job: ``,
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required(`Required`),
        lastName: Yup.string().required(`Required`),
        emailAddress: Yup.string().email().required(`Required`),
        intro: Yup.string().required(`Required`),
        job: Yup.string().required(`Required`),
        terms: Yup.boolean().oneOf(
          [true],
          "Please check the terms and conditions"
        ),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className=" p-10 w-full max-w-[500px] mx-auto " autoComplete="off">
        {/* First name */}
        <CommomInput
          name="firstName"
          id="firstName"
          label="First name"
          placeholder="Enter your first name"
          type="text"
        ></CommomInput>

        {/* Last name */}
        <CommomInput
          name="lastName"
          id="lastName"
          label="Last name"
          placeholder="Enter your last name"
          type="text"
        ></CommomInput>

        {/* Email address */}
        <CommomInput
          name="emailAddress"
          id="emailAddress"
          label="Email address"
          placeholder="Enter your email address"
          type="email"
        ></CommomInput>

        {/* Intro */}
        <CommonTextarea
          name="intro"
          id="intro"
          label="Intro"
          placeholder="Introduce yourself ..."
          type="text"
        ></CommonTextarea>

        {/* Your job */}
        <CommonDropdown
          name="job"
          label="Your job"
          placeholder="Select your job"
        >
          <option value="FE">Front-end Developer</option>
          <option value="BE">Back-end Developer</option>
          <option value="FS">Full-stack Developer</option>
        </CommonDropdown>

        {/* Checkbox */}
        <CommonCheckbox name="terms">
          <p>I accept the terms and conditions</p>
        </CommonCheckbox>

        {/* Submit */}
        <CommonSubmitButton
          name="submit"
          buttonname="Submit"
        ></CommonSubmitButton>
      </Form>
    </Formik>
  );
};

export const CommomInput = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className=" flex flex-col gap-2 mb-5 ">
      <StyledLabel htmlFor={`${props.id || props.name}`}>
        {props.label}
      </StyledLabel>
      <input
        className={`p-4 rounded-md border border-gray-100`}
        {...props}
        {...field}
      ></input>
      {meta.touched && meta.error && (
        <div className=" text-sm text-red-500 font-semibold ">
          {meta.error || "Something went wrong"}
        </div>
      )}
    </div>
  );
};

export const CommonTextarea = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className=" flex flex-col gap-2 mb-5 ">
      <StyledLabel htmlFor={`${props.id || props.name}`}>
        {props.label}
      </StyledLabel>
      <textarea
        className={`p-4 rounded-md border border-gray-100  h-[150px] resize-none `}
        {...props}
        {...field}
      ></textarea>
      {meta.touched && meta.error && (
        <div className=" text-sm text-red-500 font-semibold ">
          {meta.error || "Something went wrong"}
        </div>
      )}
    </div>
  );
};

export const CommonDropdown = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className=" flex flex-col gap-2 mb-5 ">
      <StyledLabel htmlFor={`${props.id || props.name}`}>
        {props.label}
      </StyledLabel>
      <select
        className=" p-4 rounded-md border border-gray-100 bg-white"
        {...props}
        {...field}
      ></select>
      {meta.touched && meta.error && (
        <div className=" text-sm text-red-500 font-semibold ">
          {meta.error || "Something went wrong"}
        </div>
      )}
    </div>
  );
};

export const CommonCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className=" flex flex-col gap-2 mb-5 ">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...props} {...field} />
        {children}
      </label>
      {meta.touched && meta.error && (
        <div className=" text-sm text-red-500 font-semibold ">
          {meta.error || "Something went wrong"}
        </div>
      )}
    </div>
  );
};

export const CommonSubmitButton = (props) => {
  const [field] = useField(props);
  return (
    <div>
      <button
        type="submit"
        className=" w-full p-4 bg-blue-500 rounded-lg text-white font-semibold "
        {...props}
        {...field}
      >
        {props.buttonname}
      </button>
    </div>
  );
};
