import { useState } from 'react'
import './App.css'

function App2() {

  const [form, setform] = useState({email: "", phone: ""});

  const handleChange = (e) => {
    // setname = (e.target.value)
    setform({...form, [e.target.name]: e.target.value});        // works async, takes time to run
    // console.log(form);       // runs immediately so its always one step behind setform
  }

  return (
    <>
        <input type="text" name='email' value={form.email} onChange={handleChange}/>
        <input type="text" name='phone' value={form.phone} onChange={handleChange}/>
    </>
  )
}

// e.target.name refers to the name attribute of the input (email or phone).
// e.target.value is whatever the user types.
// [e.target.name]: e.target.value is computed property name in JavaScript — it updates the correct field dynamically.
// ...form ensures other fields are preserved.
// So if you type in the phone field, only form.phone is updated, and form.email remains untouched.

export default App2

