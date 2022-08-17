import {useState} from 'react';
import {moneyFormat} from '../helpers';
import '../App.css'

function Header({total, money}){
    return(
        <>
        
            {total > 0 && money - total !== 0 &&(           
                <div className='header'><span>${moneyFormat(money - total)}</span> </div>
            )}
            {total === 0 &&(
               <div className='header'><span>${moneyFormat(money)}</span> </div> 
            )}

            {money - total === 0 &&(
                <div className='header'>Paraniz bitti!</div>
            )}
        </>
    )
}

export default Header