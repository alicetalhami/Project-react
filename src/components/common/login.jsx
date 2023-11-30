import Joi from "joi";
import PageHeader from "./PageHeader"
import Input from "./input";
import { useFormik } from "formik";
import { validateFormikUsingJoi } from "../../utils/validateFormikUsingJoi";
import { formToJSON } from "axios";


const Login = ( ) => {
    const form = useFormik({
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


           <form onSubmit={form.handleSubmit}>
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
                    Login

                </button>
            </div>
        </form>
        </>
    );
};


export default Login;