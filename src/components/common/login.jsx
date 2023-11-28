import Joi from "joi";
import PageHeader from "./PageHeader"
import Input from "./input";
import { useFormik } from "formik";
import { validateFormikUsingJoi } from "../../utils/validateFormikUsingJoi";
import { formToJSON } from "axios";


const Login = ( ) => {
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
            password: Joi.string().min(6).max(1024).required(),
        }),
        
        onSubmit(values) {

        },
    });


    return (
       <>
        <PageHeader title="Login"
        description="login into you're account <3"
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


export default Login;