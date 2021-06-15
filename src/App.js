import React, {useState} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {

  const [inProfile, setInProfile] = useState(false);

  const ProfileHandler = () => {
    setInProfile(true);
  }
  const HomeHandler = () => {
    setInProfile(false);
  }

  return (
    <React.Fragment>
      <Header onProfile ={ProfileHandler} onHome= {HomeHandler}/>
      {!inProfile && <Home/>}
      {inProfile && <Profile />}
    </React.Fragment>
  );
}

export default App;
