import * as Yup from 'yup';
const ValidationSchema = Yup.object().shape({
   company: Yup.object().shape({
      name: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long')
         .required('Required'),
      website: Yup.string()
         .url('Invalid URL')
         .required('Required'),
      video: Yup.string()
         .url('Invalid URL')
         .required('Required'),
   }),
   users: Yup.array().of(
      Yup.object().shape({
         name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long')
            .required('Required'),
         surname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long')
            .required('Required'),
         email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
         position: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long')
            .required('Required'),
      }),
   ),
});

export default ValidationSchema;
