import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";

export const StyledLabel = styled.label`
  font-weight: bold;
`;

export const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: ``,
        lastName: ``,
        emailAddress: ``,
        intro: ``,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, `Must be 20 characters or less`)
          .required(`Required`),
        lastName: Yup.string()
          .max(10, `Must be 20 characters or less`)
          .required(`Required`),
        emailAddress: Yup.string()
          .max(10, `Must be 20 characters or less`)
          .required(`Required`),
        intro: Yup.string()
          .max(10, `Must be 20 characters or less`)
          .required(`Required`),
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
            type="text"
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
            className=" p-4 rounded-md border border-gray-100 "
            placeholder="Instroduce yourself..."
          ></Field>
          <div className="text-sm text-red-500 font-semibold">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>

        {/* Your job */}
        {/* <div className=" flex flex-col gap-2 mb-5 ">
          <StyledLabel htmlFor="job">Your job</StyledLabel>
          <select
            className=" p-4 rounded-md border border-gray-100 bg-white "
            placeholder="Select your job"
            {...formik.getFieldProps("job")}
          >
            <option value="aieng">AI Engineer</option>
            <option value="eng">English</option>
            <option value="vn">Viet nam</option>
          </select>
        </div> */}

        {/* Checkbox */}

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
