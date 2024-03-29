import React,{useState}  from 'react'
import { useNavigate } from "react-router-dom";
export default function Signup(props) {
  const [user, setuser] = useState({email: "", password: "",name:"",cpassword:""}) 
    const navigate = useNavigate();
    //const history = useHistory();
    const login=async(e)=>{
        e.preventDefault();
        if(user.password!==user.cpassword) {
          alert("confirm password and password must be same");
          return;
        }
        const response=await fetch("http://localhost:5000/api/auth/createuser",{
            method:'Post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:user.name,email: user.email, password: user.password})
        });
        const json = await response.json()
         console.log("This is my json"+json);
         console.log("finally"+json.success+json.jwtData);
        if(json.success) {
            console.log(json.jwtData);
            localStorage.setItem('token', json.jwtData);
            navigate("/")
            props.showAlert("Successfully created account","success"); 
        }
        else {
            props.showAlert("try again","danger");
            navigate('/login') 
            console.error("try again")
        }
    }

    const onChange = (e) => {
        console.log("HI");
        setuser({...user, [e.target.name]: e.target.value})
    };
  return (
    <div className="container " >
      <form onSubmit={login}>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            value={user.name}
            onChange={onChange}
            className="form-control"
            required
            minLength={3}
            id="name"
            //aria-describedby="emailHelp"
            // placeholder="Enter email"
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={user.email}
            onChange={onChange}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            // placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>

          <input
            type="password"
            value={user.password}
            onChange={onChange}
            className="form-control"
            id="exampleInputPassword1"
            // placeholder="Password"
            name="password"
            required
            minLength={5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>

          <input
            type="password"
            value={user.cpassword}
            onChange={onChange}
            className="form-control"
            id="exampleInputPassword1"
            // placeholder="Password"
            name="cpassword"
           // {user.password===user.confirmpassword}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
