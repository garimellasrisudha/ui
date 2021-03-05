import react from 'react';
import CreateRestaurantButton from './Restaurant/CreateRestaurantButton';
import RestaurantComponent from './RestaurantComponent';
class Dashboard extends react.Component
{
    render(){
        return(
            <div className="Restaurants">
        <div class="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Restaurants</h1>
                    <br />
                    <CreateRestaurantButton/>
                    
                    
                    <br />
                    <hr />
                    <RestaurantComponent/>
                   
                </div>
            </div>
        </div>
    </div>

   

        );
    }
}
export default Dashboard;