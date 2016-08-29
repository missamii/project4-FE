import axios from 'axios';

export default {
  getAllCars: function(){
    return axios.get('https://localhost:3000/cars');
  }
//   addCar: function(car){
//     return axios.post('http://localhost:8080/', car);
//   },
//   findCar: function(car){
//     return axios.get('http://localhost:8080/' + car.name);
//   },
//   deleteCar: function(car){
//     return axios.delete('http://localhost:8080/' + car.name);
//   },
//   updateCar: function(car){
//     return axios.put('http://localhost:8080/' + car.name, car);
//   }

}
