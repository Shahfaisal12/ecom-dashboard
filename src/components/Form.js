import React, { useState } from 'react'

const Form = () => {

  const [name, setName] = useState('');

  const [fullName, setFullName] = useState('');

  const handlerChanege = (event) => {
    console.log('event.target.value');
    setName(event.target.value);
  }

  const onClick = (event) => {
    setFullName(name);
  }

return (
  <div>
  <h1>Hello {fullName}</h1>
  <input type="text" value={name} placeholder="Enter Your Name" onChange={handlerChanege} />
  <button onClick={onClick}>Click Me</button>
  </div>
);
 
}

export default Form