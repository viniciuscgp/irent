import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const logout = () => setUser(null);
    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };
