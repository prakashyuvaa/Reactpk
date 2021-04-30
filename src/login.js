import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './Login.css';
  function Login(props){
    return(
        <Router>
      <div className="log-form d1">
       <h2>LOGIN</h2>
  <form>
    <input type="text" title="username" placeholder="username" /><br/><br/>
    <input type="password" title="username" placeholder="password" /><br/><br/>
    <button type="submit" className="btn btn-primary" onClick={ () => infro() }>Login</button>
    <a class="forgot" href="#">Forgot Username?</a>
  </form>

          
      </div>
        </Router>
    );
    function infro(){
        alert('Plz enter the value');
    }
}
export default Login;