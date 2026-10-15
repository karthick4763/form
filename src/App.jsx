import { useState } from "react";
function App(){
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [country,setcountry]=useState("")
  const [gender,setgender]=useState("")
  const [age,setage]=useState("")
  const [check,setcheck]=useState("false")
  const minage=18;
  const [disp,setdisp]=useState([])
  function add(e){
    e.preventDefault()
    const s={name,email,age,country,gender}
    setdisp([...disp,s]);
    setname("")
    setage("")
    setgender("")
    setemail("")
    setcountry("")
    
  }
  return (<>
  <h1>registeration form</h1>
  <form>
    <input type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)} required></input><br></br><br />
     <input type="number" placeholder="age" value={age} min="18" onChange={(e)=>setage(e.target.value)} required></input><br></br><br />
      <input type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)} required></input><br></br><br />
      <select value={country} onChange={(e)=>setcountry(e.target.value)} required>
        <option>country</option>
        <option value="India">India</option>
        <option value="pakistan">pakistan</option>
        <option value="South Africa">South Africa</option>
        <option value>sri lanka</option>
        <option value="India">India</option>
      </select><br></br><br />
      <label>gender</label>
      <input type="radio" class="gender" value={gender} onClick={()=>setgender("male")} placeholder="male"></input>
      <label>male</label>
      <input type="radio" class="gender" value={gender} onClick={()=>setgender("female")} placeholder="male"></input>
      <label>female</label>
      <br /><br />
      <input type="checkbox" required></input>
      <label>accept terms and conditions</label><br /><br />
      <button onClick={(e)=>add(e)}>submit</button>
  </form>
  {
        disp.map((i)=><>
        <p>name:{i.name}</p>
        <p>age:{i.age}</p>
        <p>gender:{i.gender}</p>
        <p>country:{i.country}</p>
        <p>email:{i.email}</p>
        </>)
      }
  </>)
}
export default App;