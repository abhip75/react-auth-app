
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Loader from './components/Loader';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';
import About from './components/About';

function App() {

  const { isAuthenticated, isLoading } = useAuth0();

  if(isLoading){
    return <Loader/>;
  }


  return (
    <div className="App">
      <Auth0Provider
       domain="dev-t2asdjl8b7j5ur7z.us.auth0.com"
       clientId="Mapb5UJm7TuPyNT4opJ9N2O3rQtNMFzp"
       authorizationParams={{
         redirect_uri: window.location.origin
       }}
       >
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        {/* <Route path="/about" element={<About/>}/> */}
      </Routes>
      </Auth0Provider>
    </div>
  );
}

export default App;
