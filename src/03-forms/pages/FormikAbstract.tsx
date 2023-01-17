import {Formik,Form } from 'formik'
import * as Yup from 'yup';

import {MyCheckbox, MySelect, MyTextInput} from '../components';

import '../styles/styles.css'

export const FormikAbstractation = () => {
  
  
  
  return (
    <div>
        <h1>Formik Abstractation</h1>  

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
        validationSchema={Yup.object({
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
              <MyTextInput 
                label="First Name" 
                name="firstName" 
                placeholder='Yeferson'
              />
              <MyTextInput 
                label="Last Name" 
                name="lastName" 
                placeholder='Suárez'
              />
              <MyTextInput 
                label="Email" 
                name="email" 
                placeholder='jonh@google.com'
                type='email'
              />
        
              
              <MySelect name="jobType" label="Job Type" >
                <option value="">Pick something</option>
                <option value="developer">Develper</option>
                <option value="designer">designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
              </MySelect>
              
              <MyCheckbox label="Terms & conditions" name="terms"/> 

              <button type="submit">Submit</button>

            </Form>
           )}
        </Formik>

    </div>
  )
}
