
import { Formik, Form, ErrorMessage } from 'formik';
import { MyTextInputReg } from '../components/MyTextInputReg';
import formJson from '../data/custom-form.json';
import { MySelect } from '../components/MySelect';
import { urlToHttpOptions } from 'url';
import * as Yup from 'yup';

  
const initialValues: { [key:string]: any } = {};

for (const {name, value, type} of formJson) {
  initialValues[name] = value
  
}
const requiredFields = {
  ...formJson.reduce((a, v) => {
    if (v.validations) {
      let schema = Yup.string();
      for (const rule of v.validations) {
        if (rule.type === "required") {
          schema = schema.required(rule.message);
        }
        if (rule.type === "minLength") {
          schema = schema.min(
            (rule as any).value || 1,
            `Minimo de ${(rule as any).value || 1} caracteres`
          );
        }
        if (rule.type === "email") {
          schema = schema.email(rule.message);
        }
      }
      return { ...a, [v.name]: schema };
    }
    return { ...a };
  }, {}),
};



export const DynamicFormPage = () => {
  
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
      initialValues={ initialValues }
      onSubmit={(value)=>{
      console.log(value)
      }}
      validationSchema={Yup.object({ ...requiredFields })}
      >
        {
          (formik) => (
            <Form noValidate >
            { formJson.map(({label,type, name, placeholder,options }) =>{
              
              if( type === 'email' || type === 'password' || type === 'input'){
                
                return <MyTextInputReg 
                          key={name}
                          label={label} 
                          name={name}
                          type={ (type as any)}
                          placeholder={placeholder}
                          />
              } else if (type === 'select'){

                return (
                  <MySelect label={label} name={name} key={name}>
                    <option value="">Select an option</option>
                    {
                      options?.map( opt => (
                        <option key={ opt.id } value={ opt.id }>{ opt.label }</option>
                      ))
                    }
                  </MySelect>
                )
              }
              
            })}         

            <button type='submit' >Submit</button>
            </Form>
          )
        }


      </Formik>
    </div>
    
    
  
  
  
  )
}
