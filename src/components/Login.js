import React,{useState} from "react";
//import { useHistory } from 'react-router';
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [user, setuser] = useState({email: "", password: ""}) 
    const navigate = useNavigate();
    //const history = useHistory();
    const login=async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:5000/api/auth/login",{
            method:'Post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: user.email, password: user.password})
        });
        const json = await response.json()
         //console.log("This is my json"+json);
         console.log("finally"+json.success+json.authtoken);
        if(json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate("/")
        }
        else {
            alert("try again");
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
  );
}
