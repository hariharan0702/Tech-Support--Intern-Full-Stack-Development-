// App.js
import React, { useState } from 'react';
import Signup from './signup';
import Profile from './profile';

function App() {
  const [user, setUser] = useState(false); 

  return (
    <div>
      {user ? (
        <Profile user={user} setUser={setUser}/>
      ) : (
        <>
          <Signup setUser={setUser} />
        </>
      )}
    </div>
  );
}

export default App;
