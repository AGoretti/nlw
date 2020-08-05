import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'



function TeacherItem() {
 return(
    <article className="teacher-item">
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/40605515?s=460&u=c8dfca58712cb41802c810bcde3bc66fa5133bef&v=4" alt="Andre"/>
                <div>
                    <strong>
                        Andre
                    </strong>
                    <span>
                        Quimica
                    </span>
                </div>
                </header>

                <p>
                    texto mt grande de Quimica
                    <br/><br/>
                    mais texto
                </p>
                 <footer>
                     <p>
                         Preço/Hora
                         <strong>20,00</strong>
                     </p>
                     <button type="button">
                        <img src={whatsappIcon} alt="whatsapp"/>
                        Entrar em contato
                     </button>
                 </footer>

               </article>
 )
}

export default TeacherItem;