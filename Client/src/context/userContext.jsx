// export const url = 'http://localhost:1313/';
// export const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ title: 'React POST Request Example' })
// };

import { createContext, useContext, useEffect, useState } from "react";


export const UserContext = createContext(null);

export const UserContextProvider = ({children})=>{
    const [user, setUser] = useState('');

    useEffect(()=>{
        if(localStorage.key('info_cc')){
            setUser(JSON.parse(localStorage.getItem('info_cc')))
            // console.log(JSON.parse(localStorage.getItem('info_cc')));
        }
    }, [])

    
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}