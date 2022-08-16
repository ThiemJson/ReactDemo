import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const StyledLabel = styled.label`
  font-weight: bold;
`;

export const schema = yup
  .object({
    firstName: yup.string("Must be string").required("Required"),
    lastName: yup.string("Must be string").required("Required"),
    emailAddress: yup
      .string("Must be string")
      .email("Email invalid")
      .required("Required"),
    intro: yup.string("Must be string").required("Required"),
  })
  .required();

export const SignUpFormWithHook = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(
    "🚀 ~ file: SignUpFormWithHook.js ~ line 28 ~ SignUpFormWithHook ~ errors",
    errors
  );

  const handleSubmitForm = (values) => {
    console.log(
      "🚀 ~ file: SignUpFormWithHook.js ~ line 13 ~ handleSubmitForm ~ values",
      values
    );
  };

  return (
    <form
      className=" p-10 w-full max-w-[500px] mx-auto "
      autoComplete="off"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      {/* First name */}
      <div className=" flex flex-col gap-2 mb-5 ">
        <StyledLabel htmlFor="firstName">First name</StyledLabel>
        <input
          name="firstName"
          type="text"
          className=" p-4 rounded-md border border-gray-100 "
          placeholder="Enter your first name"
          {...register("firstName", {
            required: true,
            maxLength: 12,
            minLength: 5,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <div className=" text-sm text-red-500 font-semibold ">
            {errors?.firstName?.message || "Invalid"}
          </div>
        )}
      </div>

      {/* Last name */}
      <div className=" flex flex-col gap-2 mb-5 ">
        <StyledLabel htmlFor="lastName">Last name</StyledLabel>
        <input
          name="lastName"
          type="text"
          className=" p-4 rounded-md border border-gray-100 "
          placeholder="Enter your last name"
          {...register("lastName", {
            required: true,
            maxLength: 12,
            minLength: 5,
          })}
        />
        {errors?.lastName?.type === "required" && (
          <div className=" text-sm text-red-500 font-semibold ">
            {errors?.lastName?.message || "Invalid"}
          </div>
        )}
      </div>

      {/* Email address */}
      <div className=" flex flex-col gap-2 mb-5 ">
        <StyledLabel htmlFor="emailAddress">
          {errors?.emailAddress?.message || "Invalid"}
        </StyledLabel>
        <input
          name="emailAddress"
          type="text"
          className=" p-4 rounded-md border border-gray-100 "
          placeholder="Enter your email address"
          {...register("emailAddress", {
            required: true,
            maxLength: 12,
            minLength: 5,
          })}
        />
        {errors?.emailAddress?.type === "required" && (
          <div className=" text-sm text-red-500 font-semibold ">
            {errors?.intro?.message || "Invalid"}
          </div>
        )}
      </div>

      {/* Intro */}
      <div className=" flex flex-col gap-2 mb-5 h-[250px] ">
        <StyledLabel htmlFor="intro">Intro</StyledLabel>
        <textarea
          name="intro"
          type="text"
          className=" p-4 rounded-md border border-gray-100 resize-none h-full "
          placeholder="Introduce yourself..."
          {...register("intro")}
        />
        {errors?.intro?.type === "required" && (
          <div className=" text-sm text-red-500 font-semibold ">Required</div>
        )}
      </div>

      {/* Your job */}
      <div className=" flex flex-col gap-2 mb-5 ">
        <StyledLabel htmlFor="job">Your job</StyledLabel>
        <select
          className=" p-4 rounded-md border border-gray-100 bg-white "
          placeholder="Select your job"
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
