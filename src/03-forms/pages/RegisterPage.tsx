import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';


export const RegisterPage = () => {
  
  const { onChange, formData, resetForm, isValidEmail, names, email,password1, password2 } = useForm({
        names: '',
        email:'',
        password2:'',
        password1:'',
  });

  

  const onSubmit = (evento:FormEvent<HTMLFormElement>) => {

    evento.preventDefault()  
    console.log( formData)
  }

  

  return (
    <div>

        <h1>Register Page</h1>
        <form autoComplete="off" noValidate onSubmit={ onSubmit } >
            <input
            name='names' 
            onChange={onChange}
            placeholder="Name"
            type="text"  
            value={names}
            className={`${names.trim().length <=0 && 'has-error'}`}
            />
            { names.trim().length <=0 && <span>Este campo es necesario</span>}
            
            <input
            name='email' 
            onChange={onChange}
            placeholder="Email"
            type="email"  
            value={email}
            className={`${ !isValidEmail(email) && 'has-error'}`}
            />
            { !isValidEmail(email) && <span>EMAIL no es válido</span> }
            
            <input 
            autoComplete="off"
            name='password1'
            onChange={onChange}
            placeholder="Password"
            type="password"  
            value={password1}
            />
            { password1.trim().length <=0 && <span>Este campo es necesario</span>}
            { password1.trim().length <6 && password1.trim().length >0 && <span>La contraseña tiene que ser mas 6 digitos</span>}
            
            <input
            autoComplete="off"
            name='password2' 
            onChange={onChange}
            placeholder="Repeat the password"
            type="password"  
            value={password2}
            />
            { password2.trim().length <=0 && <span>Este campo es necesario</span>}
            { password2.trim().length > 0 && password2 != password1 && <span>Contraseña tiene que ser la misma</span>}

            <button type="submit">
                Create
            </button>
            <button type="button" onClick={resetForm}>
                Reset
            </button>

        </form>
    </div>
  )
}
