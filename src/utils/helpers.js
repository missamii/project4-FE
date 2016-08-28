import axios from 'axios';

// just laid this here, will most likely
const helpers = {
  getAllCars: function(){
    return axios.get('https://api.edmunds.com/api/vehicle/v2/makes?state=used&year=2014&view=basic&fmt=json&api_key=2sresewmhswymakttj4ppvnv');
  },
  addCar: function(car){
    return axios.post('http://localhost:8080/', car);
  },
  findCar: function(car){
    return axios.get('http://localhost:8080/' + car.name);
  },
  deleteCar: function(car){
    return axios.delete('http://localhost:8080/' + car.name);
  },
  updateCar: function(car){
    return axios.put('http://localhost:8080/' + car.name, car);
  }
};

export default helpers;
