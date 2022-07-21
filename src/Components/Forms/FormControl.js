import Input from "./Input";
import Date from "./Date"

const FormControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
      return <Date {...rest} />
    default:
      return null;
  }
};

export default FormControl;
