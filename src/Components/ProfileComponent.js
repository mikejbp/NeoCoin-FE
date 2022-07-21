import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "../Components/Forms/FormControl";
import profilePicture from "../Assets/profilePicture.svg";
import "../CSS/ProfileComponent.css";

const ProfileComponent = () => {
  const initialValues = {
    username: "",
    dni: "",
    telephone: "",
    name: "",
    location: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Field is required")
      .min(2, "Too Short")
      .max(20, "Too long")
      .matches(/^[aA-zZ]+$/, "Only letters are allowed for this field "),
    dni: Yup.number("Only numbers")
      .test("len", "Length too short", (val) => val.toString().length > 4)
      .test("len", "Length too long", (val) => val.toString().length < 9)
      .required("Field is required"),
    telephone: Yup.number("Only numbers")
      .required("Field is required")
      .test("len", "Length too short", (val) => val.toString().length > 5)
      .test("len", "Length too long", (val) => val.toString().length < 16),
    name: Yup.string()
      .required("Field is required")
      .min(2, "Too Short")
      .max(20, "Too long")
      .matches(/^[aA-zZ]+$/, "Only letters are allowed for this field "),
    location: Yup.string()
      .required("Field is required")
      .min(8, "Too Short")
      .max(50, "Too long"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="profileCardContainer">
      <div className="profileCardWrapper">
        <div className="profileImgWrapper">
          <img src={profilePicture} alt="Profile" />
        </div>
        <div className="profileFormWrapper">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form className="profileCardForm">
                  <FormControl
                    control="input"
                    type="text"
                    name="username"
                    placeholder="Username"
                  />
                  <FormControl
                    control="input"
                    type="text"
                    name="dni"
                    placeholder="DNI"
                  />
                  <FormControl
                    control="input"
                    type="text"
                    name="telephone"
                    placeholder="Telephone"
                  />
                  <FormControl
                    control="input"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                  />
                  <FormControl
                    control="input"
                    type="text"
                    name="location"
                    placeholder="Ubicacion"
                  />
                  <div className="profileButtonWrapper">
                    <button type="submit" disabled={!formik.isValid}>
                      Edit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
