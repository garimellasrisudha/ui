import React from 'react'
import {Link} from 'react-router-dom'

const CreateRestaurantButton= () =>{
   return (
       <React.Fragment>
           <Link to="/addRestaurant" className="btn btn-lg btn-info">
               Create  Restaurant
           </Link>
       </React.Fragment>
   ); 
}
export default CreateRestaurantButton;