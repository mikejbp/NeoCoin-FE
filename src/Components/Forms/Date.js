import React from "react";
import { Field, ErrorMessage } from "formik";
import FormError from "./FormError";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Date(props) {
    const {label, name, ...rest} = props
  return (
    <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field name={name}>
            {
                ({form,field}) => {
                    const { setFieldValue } = form
                    const { value } = field
                    return <DatePicker id= {name} 
                    {...field} 
                    {...rest} 
                    selected={value} 
                    onChange={val => setFieldValue(name, val)}
                    />
                }
            }
        </Field>
        <ErrorMessage name={name} component={FormError}/>
    </div>
  )
}

export default Date