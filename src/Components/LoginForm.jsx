import styles from "./Form.module.css";
import {useState} from "react";

const LoginForm = () => {

  const [password,setPassword] = useState('')
  const [login,setLogin] = useState('')
  const [checkInputs, setCheckInputs] = useState('')

  function passValidation(password){
    setPassword(password)
    console.log(password)
  }
  
  function loginValidation(login){
    setLogin(login)
    console.log(login)
  }
  

  const handleSubmit = (event) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
    const dados = {
      username: login,
      password: password
    }
    event.preventDefault();
    fetch("https://dhodonto.ctdprojetos.com.br/auth",{
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(dados)
    })
    .then((response)=>response.json())
    .then(data=>console.log(data))

  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={(event)=>handleSubmit(event)}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
              onChange={(event)=>loginValidation(event.target.value)}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
              onChange={(event)=>passValidation(event.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
