import React, { useEffect, useState } from "react";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import { auth } from "./firebase";
import './App.css'

 

function App({email}) {
    
    const [user, setUser] = useState(null);
   
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // if user has logged in...
        setUser(authUser);
      } else {
        // if user has logged out...
        setUser(null);
      }
    });

    return () => {
      // perform some cleanup actions
      unsubscribe();
    };
  }, [user, email]); 
 
  return <div>
      {!user?( <LoginScreen />):(<HomeScreen /> 
    )}
    
        
        
</div>;
}

export default App;
