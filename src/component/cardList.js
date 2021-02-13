import React from 'react';
import App from './App';


const CardList = ({robot}) =>{
    const cardComponent = robot.map((user,i)=>{
        return <App key={i} id = {robot[i].id}
                    name = {robot[i].name}
                    email = {robot[i].email}/>
                })
    return(
        <div>
         {cardComponent}
        </div>
    )
};

export default CardList ;
