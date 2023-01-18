import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
   name: '',
   age: 0,
   city: '',
   module:''
  })

  const handleChange = ({target}) => {
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }
  const { name, age, city} = form;
  return (
    <form>
      <label htmlFor="name">
        Nome:
        <input type="text" name="name" id="name" value={name} onChange={ handleChange }/>
      </label>
      <label htmlFor="age">
        Idade:
        <input type="number" name="age" id="age" value={age} onChange={ handleChange }/>
      </label>
      <label htmlFor="city">
        Cidade:
        <input type="text" name="city" id="city" value={city} onChange={ handleChange }/>
      </label>
      <label htmlFor="fundamentals">
        <input type="radio" name="modules" id="fundamentals" value="fundamentals" onChange={ handleChange }/>
        Fundamentos
      </label>
      <label htmlFor="front-end">
        <input type="radio" name="modules" id="front-end" value="front-end" onChange={ handleChange }/>
        Front-end
      </label>
      <label htmlFor="back-end">
        <input type="radio" name="modules" id="back-end" value="back-end" onChange={ handleChange }/>
        Back-end
      </label>
      <label htmlFor="ciencia">
        <input type="radio" name="modules" id="ciencia" value="ciencia" onChange={ handleChange }/>
        Ciencia da Computacao
      </label>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App;
