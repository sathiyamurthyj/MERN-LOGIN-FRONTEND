import {useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "./api";

// register component
const Login = ()=>{
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    // handle form submission
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res = await api.post("/users/login",{email,password});
            console.log("user is logged in", res.data);
            setMessage("Login is successful");
            navigate("/home");
        } catch (error) {
            console.error("some error");
        }
    }

    return (
        <div className="login">
            <h2>Login</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;