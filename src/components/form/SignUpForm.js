import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";

export const StyledLabel = styled.label`
  font-weight: bold;
`;

export const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: ``,
      lastName: ``,
      emailAddress: ``,
      intro: ``,
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" p-10 w-full max-w-[500px] mx-auto "
      autoComplete="off"
    >
      {/* First name */}
      <div className=" flex flex-col gap-2 mb-5 ">
        <StyledLabel htmlFor="firstName">First name</StyledLabel>
        <input
          type="text"
          className=" p-4 rounded-md border border-gray-100 "
          placeholder="Enter your first name"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div className=" text-sm text-red-500 font-semibold ">
            {formik.errors.firstName}
          </div>
        )}
      </div>

      {/* Last name */}
      <div className=" flex flex-col gap-2 mb-5 ">
        <StyledLabel htmlFor="lastName">Last name</StyledLabel>
        <input
          type="text"
          className=" p-4 rounded-md border border-gray-100 "
          placeholder="Enter your last name"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div className=" text-sm text-red-500 font-semibold ">
            {formik.errors.lastName}
          </div>
        )}
      </div>

      {/* Email address */}
      <div className=" flex flex-col gap-2 mb-5 ">
        <StyledLabel htmlFor="emailAddress">Email address</StyledLabel>
        <input
          type="text"
          className=" p-4 rounded-md border border-gray-100 "
          placeholder="Enter your email address"
          {...formik.getFieldProps("emailAddress")}
        />
        {formik.touched.emailAddress && formik.errors.emailAddress && (
          <div className=" text-sm text-red-500 font-semibold ">
            {formik.errors.emailAddress}
          </div>
        )}
      </div>

      {/* Intro */}
      <div className=" flex flex-col gap-2 mb-5 h-[250px] ">
        <StyledLabel htmlFor="intro">Intro</StyledLabel>
        <textarea
          type="text"
          className=" p-4 rounded-md border border-gray-100 resize-none h-full "
          placeholder="Introduce yourself..."
          {...formik.getFieldProps("intro")}
        />
        {formik.touched.intro && formik.errors.intro && (
          <div className=" text-sm text-red-500 font-semibold ">
            {formik.errors.intro}
          </div>
        )}
      </div>

      {/* Your job */}
      <div className=" flex flex-col gap-2 mb-5 ">
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
      </div>

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
    </form>
  );
};
