import Logo from '../asserts/uni.png';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import ImgSign from '../asserts/signIn.png'
import LoginHero from '../asserts/loginHero.jpeg'

function Login() {
    const navigate = useNavigate()
    provider.setCustomParameters({hd:'veltech.edu.in'})

const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/dashboard");
  };
  return (
    <div className='flex justify-center items-center'>
        <div className='h-4/6 w-4/6 shadow-2xl mt-8 flex items-center'>
        <div className='flex justify-center items-center flex-col p-24 gap-10'>
        <img src={Logo} alt='logo' />

        <h1>Login with google</h1>
        
        <img onClick={signInWithGoogle} className='h-12' src={ImgSign} />
        <p className=' font-Rymaneco text-center'><span className='text-red-600  '>**</span>Please make sure,You have Signin with Veltech mail id<span className='text-red-600'>**</span></p>
        </div>
        <div>
            <img className='h-96' src={LoginHero} alt='hero' />
        </div>
        </div>
    </div>
  )
}

export default Login