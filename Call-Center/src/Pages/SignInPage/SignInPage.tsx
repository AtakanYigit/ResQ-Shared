import axios      from "axios"
import {Link}     from "react-router-dom"
import Background from "../../Assets/BG.png"
import Logo       from "../../Assets/Logo.png"
import Conf       from "../../Configurations"
import "./SignInPage.scss"

const SignInPage = () =>{
    const signInHandler = (e: React.FormEvent<HTMLFormElement>): void =>{
        e.preventDefault();
        const friendInput   = e.currentTarget[0] as HTMLInputElement;
        const passwordInput = e.currentTarget[1] as HTMLInputElement;

        const data = {
            staffNumber: friendInput.value,
            password: passwordInput.value
        };

        axios.post(Conf.signIn, data)
            .then(res => {
                if(res.status === 200){
                    localStorage.setItem("token", res.data.token);
                    window.location.href = "/";
                }else{
                    alert("Staff number or password is wrong!");
                }
            }).catch(err => {
                alert(err);
            })
    }

    return (
        <div className = "signInPage">
            <form className = "signInContainer" onSubmit = {signInHandler}>
                <h1>Sign In</h1>
                <input type = "text"     placeholder = "Staff Number" required/>
                <input type = "password" placeholder = "Password"     required/>
                <input type = "submit"   value       = "Sign In"/>
                <Link  to = "/ForgotPassword">Forgot Password?</Link>
            </form>
            <div className = "imageContainer" style = {{backgroundImage: `url(${Background})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div className = "imageContainerInner">
                    <img src = {Logo} alt = ""/>
                </div>
            </div>
        </div>
    )
}

export default SignInPage