import axios from 'axios';

export default {

  getOne: function(car){

    const method = 'post';
    const url = 'http://localhost:3000/cars';
    const dataObj = {name: car};

  return axios({
      method: method,
      url: url,
      data: dataObj,
    })
  },

    getThis: function(zipcode, car){

    const method = 'post';
    const url = 'http://localhost:3000/dealerships';
    const dataObj = {zipcode: zipcode, make: car};

  return axios({
      method: method,
      url: url,
      data: dataObj,
    })
  },

  addNew: function(message) {
  return axios.post('http://localhost:3000/message/new', message)
},


  getAll: function() {
    return axios.get('http://localhost:3000/messages')
  }


}





