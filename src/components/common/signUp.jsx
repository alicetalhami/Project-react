import PageHeader from "./PageHeader"
import Input from "./input";
import { useFormik } from "formik";


const SignUp = ( ) => {
    const from = useFormik({
        initialValues: {
            email: "",
            name: "",
            password: "",
        },
        
        onSubmit(values) {

        },
    });






    return (
       <>
        <PageHeader  
        title="Sign Up"
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