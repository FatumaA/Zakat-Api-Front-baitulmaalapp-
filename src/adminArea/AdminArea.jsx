import React from 'react'
import { getAuth, signOut } from 'firebase/auth';
import { Button, Grid } from '@material-ui/core';
import { Formik, Form } from 'formik';
import Papa from "papaparse";


const AdminArea = () => {

    const handleSubmit = (values, actions) => {
        console.log(values)
        debugger
        Papa.parse(values.file1, {
            header: true,
            complete: function (results) {
                console.log("THIS:", results.data)
                const x = results.data
                const y = JSON.parse(x)
                
                fetch('http://127.0.0.1:12345/api/v1/classify', {method: 'post', headers: new Headers({Accept: 'application/json'}), body: y})
                    .then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))
                 } 
               })
        actions.resetForm()
        actions.setSubmitting(false)
        }

    return (
           <>
             <Button color='primary' variant='contained' onClick={() => signOut(getAuth())}>Sign out</Button> 
            <h2>Welcome, Admin!</h2>
            <p>Please upload zakat applications below:</p>

            { <Formik initialValues={{file1: ''}} onSubmit={handleSubmit}>
                {(props) => (
                    <> 
                    <Form>
                        <input type="file" name="file1"
                               onChange={(e) => props.setFieldValue('file1', e.target.files[0]) }
                               accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                               
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <button type='submit' className="btnsub"> Upload File </button>
                            </Grid>
                        </Grid>
                    </Form>
                </>
                )     
            }
             </Formik>
             }
           
            </>
       )
};


export default AdminArea
