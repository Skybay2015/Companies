import React from 'react';

import { useEffect } from 'react';

import { Formik, FieldArray, Form, ErrorMessage } from 'formik';
import Input from '../../components/Input/Input';
import ValidationSchema from '../../validationSchema/validationSchema';
import { Grid, Button } from '@material-ui/core/';
import axios from 'axios';

const containerStyles = {
   marginTop: '30px',
   display: 'flex',
   flexDirection: 'column',
};

const MainForm = props => {
   useEffect( () => {
    async function getCompanies () {
      const company = await axios.get('http://localhost:8080/company/');
      console.log(company)
    }
     getCompanies()
   }, []);

   return (
      <Formik
         onSubmit={(values, { resetForm, setErrors, setSubmitting }) => {
            axios.post('http://localhost:8080/company/add', values);
            setSubmitting(false);
            resetForm();
         }}
         validationSchema={ValidationSchema}
         initialValues={{
            company: {
               name: '',
               website: '',
               video: '',
            },
            users: [],
         }}
         render={({ values, isSubmitting }) => {
            return (
               <Form style={{ width: '25%' }}>
                  <Grid style={containerStyles}>
                     <ErrorMessage name="company.name" />
                     <Input name="company.name" placeholder="Company Name" />
                     <ErrorMessage name="company.website" />
                     <Input
                        name="company.website"
                        placeholder="Company Website"
                     />
                     <ErrorMessage name="company.video" />
                     <Input name="company.video" placeholder="Company Video" />
                  </Grid>
                  <FieldArray
                     name="users"
                     render={arrayHelpers => {
                        const { users } = values;
                        return (
                           <>
                              {users &&
                                 users.length > 0 &&
                                 users.map((user, index) => {
                                    return (
                                       <Grid
                                          style={containerStyles}
                                          key={user._id}>
                                          <Input
                                             name={`users.${index}.name`}
                                             placeholder="Name"
                                          />
                                          <ErrorMessage
                                             name={`users[${index}].name`}
                                          />
                                          <Input
                                             name={`users[${index}].surname`}
                                             placeholder="Surname"
                                          />
                                          <ErrorMessage
                                             name={`users[${index}].surname`}
                                          />
                                          <Input
                                             name={`users[${index}].email`}
                                             placeholder="Email"
                                          />
                                          <ErrorMessage
                                             name={`users[${index}].email`}
                                          />
                                          <Input
                                             name={`users[${index}].position`}
                                             placeholder="Position"
                                          />
                                          <ErrorMessage
                                             name={`users[${index}].position`}
                                          />
                                       </Grid>
                                    );
                                 })}
                              <Button
                                 fullWidth
                                 color="secondary"
                                 type="button"
                                 onClick={() =>
                                    arrayHelpers.push({
                                       name: '',
                                       surname: '',
                                       email: '',
                                       position: '',
                                    })
                                 }>
                                 +
                              </Button>
                           </>
                        );
                     }}
                  />
                  <Button
                     fullWidth
                     color="primary"
                     type="submit"
                     disabled={isSubmitting}>
                     Submit
                  </Button>
               </Form>
            );
         }}
      />
   );
};

export default MainForm;
