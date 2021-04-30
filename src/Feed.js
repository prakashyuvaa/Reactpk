
import React from "react";
import logo192 from './logo192.png';
import './Feed.css'

function Feed() { 
    const login =()=>{
    
    }
    return (
    <div style={{width: "50px;"}}> 
      <div className="textbox">    
      <textarea className="form-control" id="Textarea1" placeholder="write your feed" rows="3"></textarea>
      <img className="img" src={logo192}/> <br/>
      <button type="button" class="button">Add feed</button>
      </div><br/> 

      {/* <div className="card text-white bg-danger detail card_div">
          <div className="card-header"><h3>User Profile</h3></div>
          <img className="m1" src={back} />
          <div className="card-body">
               <p className="card-text">NAME:{user.feedList[0]}</p>
               <p className="card-text">EMAIL-ID:</p>
               <p className="card-text">QUALIFICATION:</p>
               <p className="card-text">GENDER:</p>
               <p className="card-text">DATE OF JOIN:</p>
          </div>
     </div> */}
    </div>
    );
        
}
export default Feed;