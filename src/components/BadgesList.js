import React from 'react';
import '../assets/styles/Badge.css';
import Loader from './Loader'

const BadgesList = ({badges, load, setState, state}) =>  ( 
  <>
    {
      badges &&
        badges.map(character => (
          <div key={character.id} className='container-fluid Badge Badge__container'>
            <div className='row'>
              <div className='col-4'>
                <img className='Badge__avatar' src={character.image} alt='Avatar'/>
              </div>
              <div className='col-8'>
                <h5> {character.name} </h5>
                <a href='/'>@{character.name}</a>
                <p>{character.species}</p>
              </div>
            </div>
          </div>
        ))
    }
    {
      load 
      ? (
        <div className='load'>
          <Loader />
        </div>
      )
      : <button onClick={() => setState({...state, nextPage: state.nextPage + 1})} className='btn btn-primary'>Mostrar más</button>
    }
  </>
);
 
export default BadgesList;