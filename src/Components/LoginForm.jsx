import {link, redirect, useNavigate} from "react-router-dom"
import styles from "./Form.module.css";
import { useState } from "react";
/* import { useNavigate } from "react-router-dom"; */

const LoginForm = () => {

  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')
  const [checkInputs, setCheckInputs] = useState(false)
  const [token, setToken] = useState('')
  const navigate = useNavigate()

  // function passValidation(password){
  //   setPassword(password)
  //   console.log(password)
  // }

  // function loginValidation(login){
  //   setLogin(login)
  //   console.log(login)
  // }


  const handleSubmit = (event) => {
    event.preventDefault();
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro


    const dados = {
      "username": login,
      "password": password
    }


    let requestHeaders = {
      'Content-Type': 'application/json'
    }

    let requestConfiguration = {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: requestHeaders
    }

    try {

      fetch(`http://dhodonto.ctdprojetos.com.br/auth`, requestConfiguration)
        .then(response => {
          if (response.status === 200) {
            response.json()
              .then(dados => {
                setToken(dados.token)
                localStorage.setItem('token', dados.token)
                navigate('/home')
              })
          } else {
            setCheckInputs(true)
            alert('Login ou senha incorreto')
          }
        })
    } catch (error) {
      console.log(error)
    }

  }



  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              //favor adicionar o style para o erro do form
              className={`form-control ${styles.inputSpacing} ${checkInputs ? `${styles.formError}` : ''}`}
              placeholder="Login"
              name="login"
              required
              onChange={(event) => setLogin(event.target.value)}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="btn btn-primary" type="submit" onClick={(event) => handleSubmit(event)}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
