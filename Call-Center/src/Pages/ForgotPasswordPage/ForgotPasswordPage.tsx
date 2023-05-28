import {Link}     from "react-router-dom"
import Background from '../../Assets/BG.png'
import Logo       from '../../Assets/Logo.png'
import './ForgotPasswordPage.scss'

const ForgotPasswordPage = () => {
    return (
        <div className = "forgotPassword">
            <form className = "signInContainer">
                <h1>Forgot Password?</h1>
                <input type = "text"   placeholder = "Staff Number" required/>
                <input type = "submit" value       = "Reset Password"/>
                <Link to = "/SignIn">Go Back</Link>
            </form>
            <div className = "imageContainer" style = {{backgroundImage: `url(${Background})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div className = "imageContainerInner">
                    <img src = {Logo} alt = ""/>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;
