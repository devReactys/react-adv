
import { Form, Formik, } from 'formik';
import * as Yup from 'yup';
import { MyTextInputReg } from '../components/MyTextInputReg';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
  
  


  return (
    <div>

        <h1>Register Page</h1>

        <Formik  
          initialValues={{
            names:'',
            email:'',
            password1:'',
            password2:'',
          }}
          onSubmit={( values) => {
            console.log(values)
          }}
          validationSchema={Yup.object({

            names: Yup.string()
                     .required('Required')
                     .max(15,'Must be 15 characters or less')
                     .min(2,'Must be 2 characters or more'),
                    
            email: Yup.string()
                      .email('Not a proper email')
                      .required('Required'),
                      
            password1: Yup.string()
                          .required('Please Enter your password')
                          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
                          
            password2: Yup.string()
                          .required()
                          .oneOf([Yup.ref("password1"), null], "Passwords must match")

          })}

          >
          {
            ({handleReset}) => (
            <Form  >
            <MyTextInputReg 
            label='Name' 
            name='names' 
            />
            
            <MyTextInputReg 
              label='Email' 
              name='email'
              type="email"
            />
          
            <MyTextInputReg 
            label="Password" 
            name="password1"
            type='password'
            />
            <MyTextInputReg 
            label="ConfirmPassword" 
            name="password2"
            type='password'
            />



            <button type="submit">
                Create
            </button>
            <button type="button" onClick={ handleReset }>
                Reset
            </button>

        </Form>
            )
          }
        </Formik>
        
    </div>
  )
}
