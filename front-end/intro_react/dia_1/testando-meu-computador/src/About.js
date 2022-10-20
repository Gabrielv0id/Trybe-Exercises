import React, { Component } from 'react';

const skills = ['javascript', 'html', 'jest', 'react', 'css']

const lis = skills.map((skill) =>  <li> { skill } </li> )

class About extends Component {
  render() {
    return(
      <div> 
        <h1> Gabriel Fonseca</h1>
        <p>Tenho 24 anos, e 1,58m de altura, gosto de jogar magic e passar um tempo com a minha namorada.</p>
        <h2>Minhas Habilidades:</h2>
        <ol>{ lis }</ol>
      </div>
    )   
  }
}

export default About;
 