import React from 'react';

const BadgeForm = (props) => {

  const handleSubmit = e => {
    e.preventDefault();
    console.log(props.formValues);
  }

  return ( 
    <div>
      <h1>New Attendant</h1>
      <form>
        <div className='form-group'>
          <label >First Name</label>
          <input 
            onChange={props.onChange} 
            className='form-control' 
            type='text' 
            name='firstName' 
            value= {props.formValues.firstName}
          />
        </div>
        <div className='form-group'>
          <label >Last Name</label>
          <input 
            onChange={props.onChange} 
            className='form-control' 
            type='text' 
            name='lastName' 
            value= {props.formValues.lastName}
          />
        </div>
        <div className='form-group'>
          <label >Email</label>
          <input 
            onChange={props.onChange} 
            className='form-control' 
            type='email' 
            name='email' 
            value= {props.formValues.email}
          />
        </div>
        <div className='form-group'>
          <label >Job Title</label>
          <input 
            onChange={props.onChange} 
            className='form-control' 
            type='text' 
            name='jobTitle' 
            value= {props.formValues.jobTitle}
          />
        </div>
        <div className='form-group'>
          <label >Twitter</label>
          <input 
            onChange={props.onChange} 
            className='form-control' 
            type='text' 
            name='twitter' 
            value= {props.formValues.twitter}
          />
        </div>
        <button onClick={handleSubmit} className='btn btn-primary'>Save</button>
      </form>
    </div>
  );
}

export default BadgeForm;