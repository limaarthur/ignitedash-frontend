import { AppRoutes } from './routes';

import './global.css';
import { AuthContext, type AuthContextData } from './AuthContext';
import { useState } from 'react';

export function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <AppRoutes />
    </AuthContext.Provider>
    
  )
}


