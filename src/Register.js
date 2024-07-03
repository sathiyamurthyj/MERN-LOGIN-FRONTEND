import {useState} from "react";
import api from "./api";

// register component
const Register = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");

    // handle form submission
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res = await api.post("/users/register",{name,email,password});
            console.log("User is registered", res.data);
            setMessage("Registration is sucessful");
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="register">
            <h2>Register</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )



}

export default Register;