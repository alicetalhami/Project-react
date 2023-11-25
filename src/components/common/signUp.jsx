import Joi from "joi";
import PageHeader from "./PageHeader"
import Input from "./input";
import { useFormik } from "formik";


const SignUp = ( ) => {
    const from = useFormik({
        validateOnMount: true,
        initialValues: {
            email: "",
            name: "",
            password: "",
        },
        validate(values) {
            const schema = Joi.object({
                email: Joi.string()
                .min(2)
                .max(255)
                .required()
                .email({tlds: { allow: false }}),
                name: Joi.string().min(6).max(255).required(),
                password: Joi.string().min(6).max(1024).required(),
            });

            const { error } = schema.validate(values, { abortEarly: false});
            if (!error) {
                return null;
            }

            const errors = {};
            for (const detail of error.details) {
                const key = detail.path[0];
                error[key] = detail.message;
            }
        
            return errors;


        },
        
        onSubmit(values) {

        },
    });


    return (
       <>
        <PageHeader title="Sign Up"
        description="Open a new account for free <3"
        />


        <form>
            <Input 
            {...from.getFieldProps("email")}
            type="email" 
            label="email" 
            required  
            />
            
            <Input 
            {...from.getFieldProps("name")}
            type="text" 
            label="Name" 
            required  
            />

             <Input 
            {...from.getFieldProps("password")}
            type="text" 
            label="Password" 
            required  
            />
            
         
        </form>
        </>
    );
};


export default SignUp;