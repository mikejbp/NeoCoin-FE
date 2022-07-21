import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./Forms/FormControl";
import { Link } from "react-router-dom";
import "../CSS/LoginComponent.css";
import loginBanner from "../Assets/login_banner.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { signIn } from "../store/actions/authActions";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Field is required"),
    password: Yup.string().required("Field is required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    dispatch(signIn(values.email, values.password));
  };

  if (auth.token) return <Navigate to="/private/" />;

  return (
    <div className="loginComponentSize">
      <div className="loginContainer">
        <div className="loginWrapper">
          <div className="loginImageWrapper">
            <img src={loginBanner} alt="Banner for login" />
          </div>
          <div className="loginFormWrapper">
            <div className="loginForm">
              <h1>Login</h1>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  return (
                    <Form>
                      <FormControl
                        className="loginFormUser"
                        control="input"
                        type="Text"
                        name="email"
                        placeholder="email"
                      />
                      <FormControl
                        className="loginFormPass"
                        control="input"
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                      <button type="submit" disabled={!formik.isValid}>
                        Login
                      </button>
                    </Form>
                  );
                }}
              </Formik>
              <Link className="register-nav" to="/register">
                ¿ No tienes una cuenta? Registrate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
