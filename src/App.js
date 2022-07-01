import React, { useState } from 'react';
import { useForm } from './useForm';

const App = () => {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, handleChange] = useState({email: "", password: ""});

  return (
    <div>
      <input 
        name="email" 
        value={values.email} 
        onChange={handleChange} 
      />

      <input 
        type="password" 
        value={values.password} 
        name="password" 
        onChange={handleChange} 
      />
    </div>
  );
}

export default App;
