import {Route, Redirect, RouteProps} from "react-router-dom";
import {useContext}                  from "react";
import {AuthContext}                 from "./Auth";

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}
  
const PrivateRoute: React.FC<PrivateRouteProps> = ({component: RouteComponent, ...rest}) =>{
    const {token} = useContext(AuthContext);
    
    return (
        <Route {...rest} render = {(routeProps: RouteProps) => !!token
            ? (<RouteComponent {...routeProps} />) 
            : (<Redirect to="/SignIn"/>)}/>
    );
};
  
export default PrivateRoute;