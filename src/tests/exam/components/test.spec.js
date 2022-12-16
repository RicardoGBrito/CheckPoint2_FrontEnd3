import { render, userEvent, fireEvent, screen } from "../../test-utils"
import Login from '../../../Routes/Login';
import Navbar from "../../../Components/Navbar"
import Card from "../../../Components/Card"
import Home from '../../../Routes/Home'
import Detail from '../../../Routes/Detail'
import DetailCard from '../../../Components/DetailCard'

test('Testando o login', () => {
  render(<Login />)
  expect(screen.getByText('Login')).toBeInTheDocument();
});
test('Testando o Home', () => {
  render(<Home />)
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test("Testando o botão 'Home' sem o token", ()=>{

  render(<Navbar/>);
  
  fireEvent.click(screen.getByText('Home'))
  expect(screen.getByText('Login')).toBeInTheDocument();

});

test('Testando a rendenrização do cartão detalhes', ()=>{

  const dadosDentista = { nome:'ricardo', usuario:{username:'Rir'}, matricula:'kkkkk'}
  
  render(<DetailCard dentistInfoDetail={dadosDentista} />)

  expect(screen.getByText('Marcar consulta')).toBeInTheDocument();

});


test('Testando inserção de dados nas inputs Login e Password', ()=>{

  render(<Login/>);
  
  const inputLogin = screen.getByPlaceholderText("Login")
  const inputPassword = screen.getByPlaceholderText("Password")

  fireEvent.change(inputLogin, {target: {value:"dentistaAdmin"}})
  fireEvent.change(inputPassword, {target: {value: "admin123"}})

  expect(inputLogin.value).toBe("dentistaAdmin");
  expect(inputPassword.value).toBe("admin123");
  

});





