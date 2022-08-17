import {useState} from 'react';
import {moneyFormat} from '../helpers';
import '../App.css'

function Header({total, money}){
    return(
        <>
        
            {total > 0 && money - total !== 0 &&(           
                <div className='header'>Harcayacak <span>${moneyFormat(money - total)}</span> kadar paraniz kaldi!</div>
            )}
            {total === 0 &&(
               <div className='header'>Harcamak icin <span>${moneyFormat(money)}</span> paraniz var!</div> 
            )}

            {money - total === 0 &&(
                <div className='header'>Paraniz bitti!</div>
            )}
        </>
    )
}

export default Header