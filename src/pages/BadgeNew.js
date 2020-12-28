import React, {useState} from 'react';
import '../assets/styles/BadgeNew.css'
import confLogo from '../assets/img/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

const BadgeNew = () => {

  const form = {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: ''
  }

  const [state, setState] = useState(form);

  const handleChange = e => setState({...state, [e.target.name]: e.target.value });

  return(
    <>
      <div className="BadgeNew__hero" >
        <img src="https://www.roastbrief.com.mx/wp-content/uploads/2020/10/OG-platzi-Dic-2019.jpg" width="500" className="img-fluid" alt="Logo" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge 
              confLogo= "https://miro.medium.com/max/3000/1*MTXZ1795B0Y4vHnQs3j_-w.png"
              firstName= {state.firstName}
              lastName= {state.lastName}
              email= {state.email}
              jobTitle= {state.jobTitle}
              twitter= {state.twitter}
              avatarUrl="https://www.showplacerents.com/img/user-placeholder.png"
            />
          </div>
          <div className='col-6'>
            <BadgeForm  onChange={handleChange} formValues={state}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default BadgeNew;