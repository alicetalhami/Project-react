import { validateFormikUsingJoi } from "../../utils/validateFormikUsingJoi";
import Input from "./input";
import PageHeader from "./PageHeader";


import usersService from "../../services/usersService";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";



 const Login = ({onSubmit = () => {}, redirect}) => {
 const [serverError, setServerError] = useState("");
 const navigate = useNavigate();

    const form = useFormik({
        validateOnMount: true,
        initialValues: {
            email: "",
            password: "",
        },
        validate: validateFormikUsingJoi({
            email: Joi.string()
            .min(2)
            .max(255)
            .required()
            .email({tlds: { allow: false }}),
            password: Joi.string().min(6).max(1024).required(),
        }),
    
        async onSubmit(values) {
            try {
              await onSubmit(values);
              if(redirect) {
                navigate(redirect);
              }
          } catch (err) {
             if(err. response?.status === 400) {
             setServerError(err.response.data);
             }
          }
         },
    });

    return (
       <>
        <PageHeader title="Login" 
        description="Open a new account for free <3" 
        />

         <form onSubmit={form.handleSubmit}  >
        {serverError && <div className="alert alert-danger">{serverError}</div>}
            
            
    

            <Input 
            {...form.getFieldProps("email")}
            type="email" 
            label="email" 
            required  
            error={form.touched.email && form.errors.email}
           
            />

             <Input 
            {...form.getFieldProps("password")}
            type="text" 
            label="Password" 
            required  
            error={form.touched.password && form.errors.password}
            />

        
            <div className="my-2">
                <button disabled={!form.isValid} className="btn btn-primary">
                    login

                </button>
            </div>
        </form>
        </>
    );
};


export default Login;