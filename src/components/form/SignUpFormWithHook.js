import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

export const StyledLabel = styled.label`
  font-weight: bold;
`;

export const schema = yup
  .object({
    firstName: yup.string("Must be string").required("This field required"),
    lastName: yup.string("Must be string").required("This field required"),
    emailAddress: yup
      .string("Must be string")
      .email("Email invalid")
      .required("This field required"),
    intro: yup.string("Must be string").required("This field required"),
  })
  .required();

export const SignUpFormWithHook = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    watch,
    reset,
    resetField,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const watchShowAge = watch("showAge", false);
  console.log(
    "🚀 ~ file: SignUpFormWithHook.js ~ line 38 ~ SignUpFormWithHook ~ watchShowAge",
    watchShowAge
  );

  const handleSubmitForm = async (values) => {
    const { data } = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );
    reset({
      firstName: "",
      lastName: "",
      emailAddress: "",
      intro: "",
    });
    return data;
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
          {...register("firstName")}
        />
        {errors?.firstName && (
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
          {...register("lastName")}
        />
        {errors?.lastName && (
          <div className=" text-sm text-red-500 font-semibold ">
            {errors?.lastName?.message || "Invalid"}
          </div>
        )}
      </div>

      {/* Email address */}
      <div className=" flex flex-col gap-2 mb-5 ">
        <StyledLabel htmlFor="emailAddress">Email address</StyledLabel>
        <input
          name="emailAddress"
          type="text"
          className=" p-4 rounded-md border border-gray-100 "
          placeholder="Enter your email address"
          {...register("emailAddress")}
        />
        {errors?.emailAddress && (
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
        {errors?.intro && (
          <div className=" text-sm text-red-500 font-semibold ">
            {errors?.intro?.message || "Invalid"}
          </div>
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
      <div className="flex flex-row gap-2 mb-5 items-center ">
        <input
          name="showAge"
          type="checkbox"
          className=" w-5 h-5 "
          {...register("showAge")}
        ></input>
        <p>Accept all terms and conditions</p>
      </div>

      {/* Submit */}
      {watchShowAge && (
        <div>
          <button
            disabled={isSubmitting}
            type="submit"
            className=" w-full p-4 bg-blue-500 rounded-lg text-white font-semibold "
          >
            {isSubmitting ? (
              <div className=" w-5 h-5 border-2 border-white border-t-transparent animate-spin rounded-full mx-auto my-auto "></div>
            ) : (
              `Submit`
            )}
          </button>
        </div>
      )}
    </form>
  );
};
