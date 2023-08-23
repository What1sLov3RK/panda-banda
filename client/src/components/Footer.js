import React, { useEffect, useState } from 'react';
import '../styles/footer.scss';

function Footer(){
        return(
      <div id={'footer'}>
            <div className={'footer-menu-container '}>
               <a href={'/'}>
                   <h4 className={'footer-menu'}>Сети</h4>
               </a>
               <a href={'/'}>
                   <h4 className={'footer-menu'}>Роли</h4>
               </a>
               <a href={'/'}>
                   <h4 className={'footer-menu'}>Піца</h4>
               </a>
               <a href={'/'}>
                   <h4 className={'footer-menu'}>Всі категорії</h4>
               </a>
            </div>
          <div>
          </div>
            <div className={'footer-contacts '}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;<a href={"/delivery"}>Доставка</a>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <p>Доставка безкоштовна при сумі замовлення від 400 грн. При замовлені на меншу суму вартість доставки складає 70 грн.</p>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;<a href={"/delivery"}>Самовивіз</a>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <p>Своє замовлення можна отримати за адресою: Вільський шлях 14, корпус 2 щодня з 10:00 до 21:45.</p>
            </div>
      </div>
  )
}

export default Footer