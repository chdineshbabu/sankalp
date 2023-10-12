import Logo from '../asserts/uni.png';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()

const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/dashboard");
  };
  return (
    <div className='flex justify-center items-center '>
        <div className='h-4/6 w-4/6 shadow-xl'>
        <img src={Logo} alt='logo' />

        <h1>Login with google</h1>
        
        <img onClick={signInWithGoogle} src={Logo} />
        </div>
    </div>
  )
}

export default Login