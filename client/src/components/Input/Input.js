import React from 'react';
import { Input } from '@material-ui/core';
import { Field } from 'formik';

const customInput = ({ field, form, ...props }) => {
    const generalInputStyle = {
        marginTop: '5px',
    };
    return <Input style={generalInputStyle} {...field} {...props} />;
};

const InputField = ({ name, ...props }) => {
    return <Field name={name} component={customInput} {...props} />;
};

export default InputField;
