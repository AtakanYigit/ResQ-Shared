import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage/ForgotPasswordPage";
import SignInPage         from "./Pages/SignInPage/SignInPage";
import WorkPage           from "./Pages/WorkPage/WorkPage"
import PrivateRoute       from "./PrivateRoute";
import {AuthProvider}     from "./Auth";
import "./App.scss"
import "./Reset.scss"

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className = "App">
                    <Switch>
                        <Route        path = "/ForgotPassword" exact component = {ForgotPasswordPage}/>
                        <Route        path = "/SignIn"         exact component = {SignInPage}/>
                        <PrivateRoute path = "/"               exact component = {WorkPage}/>
                        {/* <PrivateRoute path = "/"               exact component = {WorkPage}/> */}
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    )
}

export default App