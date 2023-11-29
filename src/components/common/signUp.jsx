import { validateFormikUsingJoi } from "../../utils/validateFormikUsingJoi";
import PageHeader from "./PageHeader";
import Input from "./input";

import usersService from "../../services/usersService";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import Joi from "joi";
import { flatMap } from "lodash";


const SignUp = ( ) => {
 const navigate = useNavigate();

    const from = useFormik({
        validateOnMount: true,
        initialValues: {
            email: "",
            name: "",
            password: "",
        },
        validate: validateFormikUsingJoi({
            email: Joi.string()
            .min(2)
            .max(255)
            .required()
            .email({tlds: { allow: false }}),
            name: Joi.string().min(6).max(1024).required(),
            password: Joi.string().min(6).max(1024).required(),
        }),
        
        onSubmit(values) {
            usersService.createUser({ ...values, biz: false});
            navigate("/sign-Up");


        },
    });

    return (
       <>
        <PageHeader title="Sign Up" 
        description="Open a new account for free <3" 
        />

         <form onSubmit={from.handleSubmit}>
            <Input 
            {...from.getFieldProps("email")}
            type="email" 
            label="email" 
            required  
            error={from.touched.email && from.errors.email}
           
            />
            
            <Input 
            {...from.getFieldProps("name")}
            type="text" 
            label="Name" 
            required  
            error={from.touched.name && from.errors.name}
            />

             <Input 
            {...from.getFieldProps("password")}
            type="text" 
            label="Password" 
            required  
            error={from.touched.password && from.errors.password}
            />

            <div className="my-2">
                <button disabled={!from.isValid} className="btn btn-primary">
                    Sign Up

                </button>
            </div>
        </form>
        </>
    );
};


export default SignUp;