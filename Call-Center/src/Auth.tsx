import React, {useEffect, useState} from "react";

interface AuthContextType {
    token: string | null;
}

const AuthContext = React.createContext<AuthContextType>({token: null});

const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) =>{
    const [currentUser, setCurrentUser] = useState<AuthContextType>({token: null});
    const [pending,     setPending]     = useState(true);

    useEffect(() =>{
        const token = localStorage.getItem("token");
        setCurrentUser({token: token});
        setPending(false);
    }, []);

    if(pending){
        return <p>Authenticating</p>;
    }
    
    return (
        <AuthContext.Provider value = {{ token: currentUser.token }}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthProvider, AuthContext};