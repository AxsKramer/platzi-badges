import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Badges.css';
import confLogo from '../assets/img/badge-header.svg';
import BadgesList from '../components/BadgesList';

const Badges = () => {

  const [state, setState] = useState({
    nextPage: 1,
    loading: true,
    error: null,
    info: {},
    data: []
  });

  useEffect(() => {
    const fetchCharacter = async () => {
      try{
        const url = `https://rickandmortyapi.com/api/character?page=${state.nextPage}`;
        const response = await fetch(url);
        const data = await response.json();

        setState({
          ...state,
          data:  data.results,
          info: data.info,
          loading: false, 
        });
      }
      catch(error){
        setState({...state, error: error});
        console.log(error)
      }
    }
    fetchCharacter()
  }, [state.nextPage]);  
    
  return ( 
    <div>
      <div className='Badges'>
        <div className='Badges__hero'>
          <div className='Badges__container'>
            <img className='Badges_conf-logo' src={confLogo} alt='Conf Logo' />
          </div>
        </div>
      </div>
      <div className='Badge__container'>
        <div className='Badges__buttons'>
          <Link to='/badges/new' className='btn btn-primary'>New Badge</Link>
        </div>
        <div className='Badges__list'>
          <div className='Badges__container'>
            <BadgesList badges={state.data} load={state.loading} setState={setState} state={state}/>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Badges;