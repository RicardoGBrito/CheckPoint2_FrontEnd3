import LoginForm from "../Components/LoginForm";
import { useDentistInfo } from "./../Hooks/useDentistInfo";

const Contact = () => {
  const { dentistInfo } = useDentistInfo()
  console.log(dentistInfo)
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
};

export default Contact;
