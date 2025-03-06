import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';



const validationSchema = yup.object({
    name: yup.string().required("Mandatory"),
    contact: yup.number().min(1000000000, "not a valid number").max(9999999999, "not a valid number").required("mandatory"),
    password: yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
        "Must contain 8 characters, uppercase, lowercase, special "
    )
    .required("required field"),
    gender: yup.string().required("please select"),
    date: yup.date().required("please selct value"),
    income: yup.string().required("please select"),
})

const Inputs = () => {
  return (
    <div>
        <Formik 
        validationSchema={validationSchema} 
        initialValues = {{name: "", contact :"", password: "", gender:"", date: "", income:"", social:{
            facebook:"", twitter:""  },
        } }
        onSubmit= {(values)=> console.log(values)}
        >  
            <Form>
                <label>Name</label>
                <Field name = "name" type = "text" />
                <ErrorMessage name="name"/> 
                <br/><br/>

                <label>Contact</label>
                <Field name = "contact" type = "number" />
                <ErrorMessage name="contact"/>
                <br/><br/>

                <label>Password</label>
                <Field name = "password" type = "password" />
                <ErrorMessage name="password"/>
                <br/><br/>

                <label>Gender</label>
                <br/>
                <label>Male</label>
                <Field name = "gender"  value = "male" type = "radio" />
                <label>Female</label>
                <Field name = "gender"  value = "female" type = "radio" />
                <ErrorMessage name="gender"/> 
                <br/><br/>

                <label>Date</label>
                <Field name = "date"  type = "date" />
                <ErrorMessage name="date"/> 
                <br/><br/>

                <label>Income</label>
                <Field name ="income" as= "select" >
                     <option value="0">0</option>
                     <option value="1000">1000</option>
                     <option value="2000">2000</option>
                </Field>
                <ErrorMessage name="income"/> 
                <br/><br/>

                <label>Social </label>
                <br/>
                <label>Facebook</label>
                <Field name="social.facebook" type = "text" />
                <br></br>
                <label>Twitter</label>
                <Field name="social.twitter" type = "text" />
                <br></br>

                <button type = "submit" >Submit</button>
               
            </Form>
        </Formik>
    
    </div>
  )
}

export default Inputs;
