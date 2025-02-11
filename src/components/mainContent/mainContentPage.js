import React, { useState } from "react";
import './mainContentPage.css'

import Corrosal from "../corrosal/Corrosal";
import TopAlbum from "../topAlbum/topAlbum";
import PickMood from "../pickMoods/pickMoods";
// import Loader from "react-js-loader";
// import { useCurrentPlayingContext } from "./context/currentlyPlayingContext";

// import CaroSample from "./corrosal/carosample";

function Maincontent({handleCardsClick}){

return(
       <div className="main-page">
        <h2 className="trending">Trending Songs</h2>     
        <Corrosal/>
        <h2 className="trending">Top Albums</h2>
        <TopAlbum/>
        <h2 className="trending">Pick Your Mood</h2>
        <PickMood/>
       </div>
      
    )
}

export default Maincontent;