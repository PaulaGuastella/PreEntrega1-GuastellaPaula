import React from "react";
import ReactDOM from 'react-dom/client';
import {Button, onHandlerGreetings} from '../Button/button'

export const robots = [
    {
      id: 1,
      name: 'Robot 1',
      price: 100,
      description: 'Greeting robot 1',
      imageUrl: 'https://robohash.org/HVF.png?set=set4&size=150x150'
    },
    {
      id: 2,
      name: 'Robot 2',
      price: 200,
      description: 'Greeting robot 2',
      imageUrl: 'https://robohash.org/MBM.png?set=set4&size=150x150'
    },
    {
      id: 3,
      name: 'Robot 3',
      price: 300,
      description: 'Greeting robot 3',
      imageUrl: 'https://robohash.org/S4F.png?set=set4&size=150x150'
    }
]

export const Cards = () => {
    return (
        <>
            <div className='robots'>
          {robots.map((robot) => (
            <div key={robot.id}>
              <h3>{robot.name}</h3>
              <img className='robot-image' src={robot.imageUrl} alt={robot.name} />
              <p>{robot.description}</p>
              <Button onClick={onHandlerGreetings} text='Greeting' />
            </div>
          ))}
        </div>
    </>
    )
}