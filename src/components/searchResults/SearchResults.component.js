import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Backend from "../../backend/trips"
import { TripCard } from "../tripCard";
import './searchResults.style.css'
const SearchResults = () => {

    const [trips, setTrips] = useState(Backend.trips)

    // useEffect(()=>{
    //     setTrips(Backend.trips);
    // },[])

        console.log(trips.trips.length)

    return (
        <> 
            <div className = "main">
                <div><Link to="/home"><i class="fa fa-angle-left" aria-hidden="true"></i>  Trips({trips.trips.length})</Link></div>
                <div className="container">
                    {
                        trips.trips.map((item, index)=>(
                             <TripCard
                             key = {index}
                             item = {item}
                              />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export { SearchResults }