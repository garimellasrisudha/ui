import React, { Component } from 'react';
import axios from 'axios';




class addRestaurant extends Component
{
    constructor(){
        super();
      this.state={
           name:"",
           managerName:"",
           contactNumber:"",
           address:{
               buildingName:"",
               pinCode:"",
               streetNo:"",
               area:"",
               city:"",
               stateValue:"",
               country:"",

          }

       };
       this.onChange=this.onChange.bind(this);
       this.onSubmit=this.onSubmit.bind(this);
       this.onChangePin = this.onChangePin.bind(this);
       this.onChangearea=this.onChangearea.bind(this);
       this.onChangeBuildingName=this.onChangeBuildingName.bind(this);
       this.onChangeCity=this.onChangeCity.bind(this);
       this.onChangeStateValue=this.onChangeStateValue.bind(this);
       this.onChangeStreetNo=this.onChangeStreetNo.bind(this);
       this.onChangeCountry=this.onChangeCountry.bind(this);
     
   }
   onChange(event)
   {

       this.setState(
           {
               [event.target.name]: event.target.value
          }            
      );

  }
  
    

   onChangePin(event){

       console.log(event.target.value);
       this.setState((state)=>({
           address: {
               ...state.address,
               pinCode : event.target.value
          }
       }));
      
   }
   onChangearea(event){

       console.log(event.target.value);
       this.setState((state)=>({
           address: {
               ...state.address,
               area : event.target.value,
           }
       }));
   }
   onChangeBuildingName(event)
   {

    console.log(event.target.value);
    this.setState((state)=>(
        {
        address: 
        {
            ...state.address,
            buildingName : event.target.value,
        }
    }));
    }
    onChangeStreetNo(event){

        console.log(event.target.value);
        this.setState((state)=>({
            address: {
                ...state.address,
                streetNo : event.target.value,
            }
        }));
    }
    onChangeCity(event){

        console.log(event.target.value);
        this.setState((state)=>({
            address: {
                ...state.address,
                city : event.target.value,
            }
        }));
    }
    onChangeStateValue(event){

        console.log(event.target.value);
        this.setState((state)=>({
            address: {
                ...state.address,
                stateValue : event.target.value,
            }
        }));
    }
    onChangeCountry(event){

        console.log(event.target.value);
        this.setState((state)=>({
            address: {
                ...state.address,
                country : event.target.value,
            }
        }));
    }
    


      
          
  
   onSubmit(event){
       event.preventDefault();
        const newRestaurant= this.state;
        axios.post("http://localhost:8080/api/restaurants/add",newRestaurant)
            .then(response=>{
                if(response.data!=null){
                    alert("saved")
                }
            }) 
       console.log(newRestaurant);
   }
   render(){
      
       return(
           <div className="project">
       <div className="container">
           <div className="row">
               <div className="col-md-8 m-auto">
                   <h5 className="display-4 text-center">Create / Edit Restaurant form</h5>
                   <hr />
                   <form onSubmit={this.onSubmit}>
                       <div className="form-group">
                           <input type="text" 
                           className="form-control form-control-lg " 
                           name="name"
                           value={this.state.name}
                           placeholder="Restaurant Name" 
                           onChange={this.onChange}/>
                   </div>
                    <div className="form-group">
                           <input type="text" 
                          className="form-control form-control-lg"
                           name="managerName" 
                           value={this.state.managerName}
                           placeholder="Manager Name"
                           onChange={this.onChange}/>
                       </div>
                       <div className="form-group">
                           <input type="text" 
                           className="form-control form-control-lg" 
                           name="contactNumber"
                           value={this.state.contactNumber}
                           placeholder="Contact Number"
                           onChange={this.onChange}/>
                       </div>
                      
                       <div className="form-group">
                           <input type="text" 
                           className="form-control form-control-lg" 
                           name="pinCode"
                           value={this.state.address.pinCode}
                           placeholder="pinCode"
                           onInput={this.onChangePin}/>
                       </div>
                      <div className="form-group">
                           <input type="text" 
                          className="form-control form-control-lg" 
                           name="area"
                      value={this.state.address.area}
                           placeholder="area"
                           onInput={this.onChangearea}/>
                       </div>
                       <div className="form-group">
                           <input type="text" 
                          className="form-control form-control-lg" 
                           name="buildingName"
                      value={this.state.address.buildingName}
                           placeholder="buildingname"
                           onInput={this.onChangeBuildingName}/>
                       </div>
                       <div className="form-group">
                           <input type="text" 
                          className="form-control form-control-lg" 
                           name="city"
                      value={this.state.address.city}
                           placeholder="city"
                           onInput={this.onChangeCity}/>
                       </div>
                       <div className="form-group">
                           <input type="text" 
                          className="form-control form-control-lg" 
                           name="address.stateValue"
                      value={this.state.address.stateValue}
                           placeholder="stateValue"
                           onInput={this.onChangeStateValue}/>
                       </div>
                       <div className="form-group">
                           <input type="text" 
                          className="form-control form-control-lg" 
                           name="streetNo"
                      value={this.state.address.streetNo}
                           placeholder="streetNo"
                           onInput={this.onChangeStreetNo}/>
                       </div>
                       <div className="form-group">
                           <input type="text" 
                          className="form-control form-control-lg" 
                           name="country"
                      value={this.state.address.country}
                           placeholder="country"
                           onInput={this.onChangeCountry}/>
                       </div>
                      
                      <input type="submit" className="btn btn-primary btn-block mt-4" />
                   </form>
               </div>
           </div>
       </div>
  </div>

 

      )
   }
}


export default addRestaurant;
