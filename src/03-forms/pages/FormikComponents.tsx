import { ErrorMessage, Field, Formik,Form } from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css'


export const FormikComponents = () => {
  
  
  
  return (
    <div>
        <h1>Formik Components</h1>  

        <Formik
        initialValues={{
            firstName:'',
            lastName:'',
            email:'',
            terms:false,
            jobType:'',
           
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={ Yup.object({
          firstName: Yup.string()
                        .max(15,'Must be 15 characters or less')
                        .required('Required'),
          lastName:  Yup.string()
                        .max(15,'Must be 15 characters or less')
                        .required('Required'),
          email:     Yup.string()
                        .required('Required')
                        .email('Not a proper email'),
          terms:     Yup.boolean()
                        .isTrue('You must accept the terms and conditions'),
                        
          jobType:   Yup.string()
                        .required('Required')
                        .notOneOf(['it-jr'],'Dont be allowed this option')  
          })
          
        }

        >
          { (formik) =>(
              <Form  >
              
              <label htmlFor="firstName">First Name</label>
              <Field type='text' name='firstName'  />
              <ErrorMessage name='firstName' component="span"/>

              <label htmlFor="LastName">Last Name</label>
              <Field type='text' name='lastName'  />
              <ErrorMessage name='lastName' component="span"/>

              <label htmlFor="Email">Email Address</label>
              <Field type='text' name='email'  />
              <ErrorMessage name='email' component="span"/>
              
              <label htmlFor="jobType">Job Type</label>
              <Field name="jobType" as="select" >
                <option value="">Pick something</option>
                <option value="developer">Develper</option>
                <option value="designer">designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
              </Field>
              <ErrorMessage name='jobType' component="span"/>
              
              
              <label>
                <Field name='terms' type="checkbox" />
                Terms and conditions
              </label>
              
              <ErrorMessage name='terms' component="span"/> 

              <button type="submit">Submit</button>

            </Form>
           )}
        </Formik>

    </div>
  )
}
