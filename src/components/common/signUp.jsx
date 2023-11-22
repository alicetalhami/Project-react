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
            <Input name="email" label="email" required  />
            
            
         
        </form>
        </>
    );
};


export default SignUp;