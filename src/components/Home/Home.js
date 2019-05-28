import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import HomeCard from "./HomeCard";



class Home extends Component {
    
    render() {
        return (
         <div>
             <Navbar />
             <p>Home Page</p>
             <HomeCard />
         </div>
        )
    }
}

export default Home;