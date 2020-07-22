import React from 'react';

export default React.createContext({
    token: null,
    userId: null,
    positionId: null,
    login: (token, userId, tokenExpiration) => {},
    logout: () => {}
});