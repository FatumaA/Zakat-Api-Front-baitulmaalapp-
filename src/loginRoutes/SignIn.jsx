import React from 'react'
import { useCallback } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useHistory } from "react-router-dom"
import { Button, Grid, TextField } from '@material-ui/core';

const SignIn = () => {
    const history = useHistory()
    const handleSubmit = useCallback(async e => {
        e.preventDefault()
    
        const { email, password } = e.target.elements
        const auth = getAuth()
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value)
          history.push('/admin') 
        } catch (e) {
          alert(e.message)
        }
      }, [history])

    return (
        <div>   
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
            <TextField name="email" type='email' variant='outlined' label="email"/>
            </Grid>
            
         
                <Grid item xs={12}>
            <TextField name="password" type='password' variant='outlined' label="password"/>
            </Grid>
            <Grid item xs={12}>
            <Button type='submit' color='secondary' variant='contained'> Sign In</Button> 

            </Grid>
            </Grid>
            
       
         
           
            </form>
        </div>
    )
}

export default SignIn





