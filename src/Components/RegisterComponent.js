import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "../Components/Forms/FormControl";
import "../CSS/Register.css";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { signUp } from "../store/actions/authActions";

const RegisterForm = () => {
  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    dni: "",
    birthdate: null,
  };

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Field is required")
      .min(2, "Too Short")
      .max(20, "Too long")
      .matches(/^[aA-zZ]+$/, "Only alphabets are allowed for this field "),
    lastname: Yup.string()
      .required("Field is required")
      .min(2, "Too Short")
      .max(20, "Too long")
      .matches(/^[aA-zZ]+$/, "Only alphabets are allowed for this field "),
    password: Yup.string()
      .required("Field is required")
      .min(8, "Too Short")
      .max(20, "Too long"),
    dni: Yup.number("Only numbers").typeError("Only numbers are allowed")
      .test("len", "Length too short", (val) => val.toString().length > 4)
      .test("len", "Length too long", (val) => val.toString().length < 9)
      .required("Field is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Field is required")
      .max(40, "Too long"),
    birthdate: Yup.date().nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    dispatch(signUp(values));
  };

  if (auth.token) return <Navigate to="/private/" />;

  return (
    <div className="registerMain">
      <h1 className="registerTitle">Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="registerForm">
              <FormControl
                className="registerFormUser registerField"
                control="input"
                type="name"
                name="name"
                placeholder="Name"
              />
              <FormControl
                className="registerFormUser registerField"
                control="input"
                type="lastname"
                name="lastname"
                placeholder="Lastname"
              />
              <FormControl
                className="registerFormPass registerField"
                control="input"
                type="password"
                name="password"
                placeholder="Password"
              />
              <FormControl
                className="registerFormEmail registerField"
                control="input"
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <FormControl
                className="registerFormDni registerField"
                control="input"
                type="dni"
                name="dni"
                placeholder="DNI"
              />
              <FormControl
                className="registerFormDate registerField"
                control="date"
                type="birthdate"
                name="birthdate"
                placeholder="Birth Date"
              />
              <button
                type="submit"
                disabled={!formik.isValid}
                className="registerButton"
              >
                Register
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
