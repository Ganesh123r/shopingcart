import React from 'react';

import img from '../images/cola.png'

function About(){
    return(
        <div className='about'>
           <center> <h1>About shopping</h1></center>
           <div className='Cart-Container'>
            <div className='item'>
            <img src={img} alt="Los Angeles" style={{width:'50%' , height:"200px"}} />
            <p> Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company. Originally marketed as a temperance drink and intended as a patent medicine, it was invented in the late 19th century by John Stith Pemberton in Atlanta, Georgia. In 1888, Pemberton sold Coca-Cola's ownership rights to Asa Griggs Candler, a businessman, whose marketing tactics led Coca-Cola to its dominance of the global soft-drink market throughout the 20th and 21st century.[1] The drink's name refers to two of its original ingredients: coca leaves and kola nuts (a source of caffeine). The current formula of Coca-Cola remains a closely guarded trade secret; however, a variety of reported recipes and experimental recreations have been published. The secrecy around the formula has been used by Coca-Cola in its marketing as only a handful of anonymous employees know the formula.[2] The drink has inspired imitators and created a whole classification of soft drink: colas.
            The Coca-Cola Company produces concentrate, which is then sold to licensed Coca-Cola bottlers throughout the world. The bottlers, who hold exclusive territory contracts with the company, produce the finished product in cans and bottles from the concentrate, in combination with filtered water and sweeteners. A typical 12-US-fluid-ounce (350 ml) can contains 38 grams (1.3 oz) of sugar (usually in the form of high-fructose corn syrup in North America). The bottlers then sell, distribute, and merchandise Coca-Cola to retail stores, restaurants, and vending machines throughout the world. The Coca-Cola Company also sells concentrate for soda fountains of major restaurants and foodservice distributors.</p>

            </div>
           </div>
           </div>

    
    )
}

export default About;