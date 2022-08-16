import { ErrorMessage, Field, Form, Formik } from "formik";
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
        terms: Yup.boolean(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className=" p-10 w-full max-w-[500px] mx-auto " autoComplete="off">
        {/* First name */}
        <div className=" flex flex-col gap-2 mb-5 ">
          <StyledLabel htmlFor="firstName">First name</StyledLabel>
          <Field
            name="firstName"
            type="text"
            className=" p-4 rounded-md border border-gray-100 "
            placeholder="Enter your first name"
          ></Field>
          <div className=" text-sm text-red-500 font-semibold ">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>

        {/* Last name */}
        <div className=" flex flex-col gap-2 mb-5 ">
          <StyledLabel htmlFor="lastName">Last name</StyledLabel>
          <Field
            name="lastName"
            type="text"
            className=" p-4 rounded-md border border-gray-100 "
            placeholder="Enter your first name"
          ></Field>
          <div className=" text-sm text-red-500 font-semibold ">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>

        {/* Email address */}
        <div className=" flex flex-col gap-2 mb-5 ">
          <StyledLabel htmlFor="emailAddress">Email address</StyledLabel>
          <Field
            name="emailAddress"
            type="email"
            className=" p-4 rounded-md border border-gray-100 "
            placeholder="Enter your email address"
          ></Field>
          <div className=" text-sm text-red-500 font-semibold ">
            <ErrorMessage name="emailAddress"></ErrorMessage>
          </div>
        </div>

        {/* Intro */}
        <div className=" flex flex-col gap-2 mb-5">
          <StyledLabel htmlFor="intro">Intro</StyledLabel>
          <Field
            name="intro"
            type="text"
            className=" p-4 rounded-md border border-gray-100 resize-none h-[150px] "
            placeholder="Instroduce yourself..."
            as="textarea"
          ></Field>
          <div className="text-sm text-red-500 font-semibold">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>

        {/* Your job */}
        <div className=" flex flex-col gap-2 mb-5 ">
          <StyledLabel htmlFor="job">Your job</StyledLabel>
          <Field
            name="job"
            className=" p-4 rounded-md border border-gray-100 bg-white "
            placeholder="Select your job"
            as="select"
          >
            <option value="FE">Front-end Developer</option>
            <option value="BE">Back-end Developer</option>
            <option value="FS">Full-stack Developer</option>
          </Field>
        </div>

        {/* Checkbox */}
        <div className=" flex flex-row gap-x-3 mb-5 ">
          <Field
            name="terms"
            className=" w-[25px] h-[25px] rounded-md border border-gray-100"
            type="checkbox"
          ></Field>
          <span className=" font-normal ">
            I accept the terms and conditions
          </span>
          <div className="text-sm text-red-500 font-semibold">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className=" w-full p-4 bg-blue-500 rounded-lg text-white font-semibold "
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};
