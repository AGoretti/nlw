import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem() {
 return(
    <article className="teacher-item">
                <header>
                    <img src="https://github.com/account" alt="Andre"/>
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