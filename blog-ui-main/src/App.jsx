import './App.css'
import { GlobalField } from './components/forms/globalField'
import { Paragraph } from './components/globals/Paragraph'
import logo from "./assets/IMG/logo.png"
import { Button } from './components/globals/button'

function App() {


  return (
    <>
      <div className='form-content'>


        <img className='imagen' src={logo} alt="" />

        <Paragraph text="Iniciar sesión" />

        <Paragraph
          text="¡Bienvenido de nuevo! Por favor, inicia sesión para acceder a tu cuenta"
        />
        <GlobalField label="Correo Electronico" placeholder="Correo Electronico" type="email" />
        <GlobalField label="Contraseña" placeholder="******" type="password" />
        

        <Button text="Iniciar sesión" />

        <Paragraph
          text="-------o-------" 
        />
        <Button text=" G Iniciar sesión con Google" />

<Paragraph className="o"
          text="¿No tienes una cuenta? ¡Regístrate ahora!" 
        />

      </div>
    </>
  )
}

export default App
