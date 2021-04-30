
  import Signup from './Signup';
  import {Link} from "react-router-dom";
  import React, { useContext } from 'react';    
  import {useHistory} from 'react-router-dom';
  import UserContext from './UserContext';

  function Header(props){
    const user = useContext(UserContext);
    const history = useHistory();
    return(
   
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        {/* {user.isLogged &&  */}
        <div className="collapse navbar-collapse" id="navbar">
        <a className="navbar-brand" href="#">LOGO</a>
          <div className="navbar-nav ml-auto"> 
            <Link to={"/Home"}><a className="nav-item nav-link active" href="#">Home</a></Link>
            <Link to={"/Feed"}><a className="nav-item nav-link active" href="#">Feed</a></Link>
            <Link to={"/About"}><a className="nav-item nav-link active" href="#">About</a></Link>
            <Link to={"/Contact"}><a className="nav-item nav-link active" href="#">Contact</a></Link>
            <Link to={"/Signup"}><a className="nav-item nav-link active" href="#">Signup</a></Link>
          </div>
          {/* {!user.isLogged && <Link to="/login">Login</Link>}
          <a onClick={()=> {user.setLogged(false); history.push('/login')} }>Logout</a> */}
        </div>}
      </nav>
 
      
    
    );         
}
export default Header;