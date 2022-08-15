import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";

export const StyledLabel = styled.label`
  font-weight: bold;
`;

export const SignUpForm = () => {
  const validate = (values) => {
    const error = {};

    // First name
    const firstName = values.firstName;
    if (!firstName) {
      error.firstName = `Require`;
    }
    if (firstName?.length > 20) {
      error.firstName = `Must be 20 characters of less`;
    }

    // First name
    const lastName = values.lastName;
    if (!lastName) {
      error.lastName = `Require`;
    }
    if (lastName?.length > 20) {
      error.lastName = `Must be 20 characters of less`;
    }

    // Email address
    const emailAddress = values.emailAddress;
    if (!emailAddress) {
      error.emailAddress = `Require`;
    }
    if (emailAddress?.length > 25) {
      error.emailAddress = `Must be 25 characters of less`;
    }
    return error;
  };

  const formik = useFormik({
    initialValues: {
      firstName: ``,
      lastName: ``,
      emailAddress: ``,
      intro: ``,
    },
    validate,
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
          name="firstName"
          className=" p-4 rounded-md border border-gray-100 "
          placeholder="Enter your first name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.firstName && (
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
          name="lastName"
          className=" p-4 rounded-md border border-gray-100 "
          placeholder="Enter your last name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.lastName && (
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
          name="emailAddress"
          className=" p-4 rounded-md border border-gray-100 "
          placeholder="Enter your email address"
          value={formik.values.emailAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.emailAddress && (
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
          name="intro"
          className=" p-4 rounded-md border border-gray-100 resize-none h-full "
          placeholder="Introduce yourself..."
          value={formik.values.intro}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.intro && (
          <div className=" text-sm text-red-500 font-semibold ">
            {formik.errors.intro}
          </div>
        )}
      </div>

      {/* Your job */}
      <div className=" flex flex-col gap-2 mb-5 ">
        <StyledLabel htmlFor="job">Your job</StyledLabel>
        <select
          name="job"
          className=" p-4 rounded-md border border-gray-100 bg-white "
          placeholder="Select your job"
          onBlur={formik.handleBlur}
        >
          <option value="aieng">AI Engineer</option>
          <option value="eng">English</option>
          <option value="vn">Viet nam</option>
        </select>{" "}
        {formik.errors.lastName && (
          <div className=" text-sm text-red-500 font-semibold ">
            {formik.errors.lastName}
          </div>
        )}
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
