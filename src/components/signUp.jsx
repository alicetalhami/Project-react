import { validateFormikUsingJoi } from "../utils/validateFormikUsingJoi";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";

import { Navigate, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import { useAuth } from "../contexts/auth.context";

const SignUp = ({ redirect }) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const { signUp, user } = useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      firstName: "",
      middleName: "",
      lastName: "",
      phone: "",
      password: "",
      state: "",
      country: "",
      city: "",
      street:"",
      houseNumber: "",
    },
    validate: validateFormikUsingJoi({
      email: Joi.string()
        .min(2)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      firstName: Joi.string().min(2).max(256).required(),
      middleName: Joi.string().min(2).max(256).required(), 
      lastName: Joi.string().min(2).max(256).required(), 
      password: Joi.string().min(6).max(1024).required(),
      phone: Joi.string().regex(/^[\d\- ]{9,11}$/).required(),
      state: Joi.string().min(2).max(256).required(),
      country: Joi.string().min(2).max(256).required(),
      city: Joi.string().min(2).max(256).required(),
      street: Joi.string().min(2).max(256).required(),
      houseNumber: Joi.string().min(2).max(256).required(),
    }),
    async onSubmit(values) {
      try {
        await signUp({ ...values, biz: false });
        if (redirect) {
          navigate(redirect);
        }
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader title="Sign Up" description="Open a new account now <3!!!" />

      <form onSubmit={form.handleSubmit}>
        {serverError && <div className="alert alert-danger">{serverError}</div>}

        <Input
          {...form.getFieldProps("firstName")}
          type="text"
          label="First Name"
          required
          error={form.touched.firstName && form.errors.firstName}
        />
       
        <Input
          {...form.getFieldProps("middleName")}
          type="text"
          label="Middle Name"
          required
          error={form.touched.middleName && form.errors.middleName}
        />

           
        <Input
          {...form.getFieldProps("lastName")}
          type="text"
          label="Last Name"
          required
          error={form.touched.lastName && form.errors.lastName}
        />

         <Input
          {...form.getFieldProps("phone")}
          type="text"
          label="Phone"
          required
          error={form.touched.phone && form.errors.phone}
        />


        <Input
          {...form.getFieldProps("email")}
          type="email"
          label="Email"
          required
          error={form.touched.email && form.errors.email}
        />

        <Input
          {...form.getFieldProps("password")}
          type="password"
          label="Password"
          required
          error={form.touched.password && form.errors.password}
        />
         <Input
          {...form.getFieldProps("state")}
          type="text"
          label="state"
          required
          error={form.touched.state && form.errors.state}
        />
             <Input
          {...form.getFieldProps("country")}
          type="text"
          label="country"
          required
          error={form.touched.country && form.errors.country}
        />
         <Input
          {...form.getFieldProps("city")}
          type="text"
          label="city"
          required
          error={form.touched.city && form.errors.city}
        />
         <Input
          {...form.getFieldProps("street")}
          type="text"
          label="street"
          required
          error={form.touched.street && form.errors.street}
        />
         <Input
          {...form.getFieldProps("houseNumber")}
          type="text"
          label="house Number"
          required
          error={form.touched.houseNumber && form.errors.houseNumber}
        />
        <div className="my-2">
          <button disabled={!form.isValid} className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
