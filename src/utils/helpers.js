import axios from 'axios';

export default {

  getOne: function(car){

    const method = 'post';
    const url = 'http://localhost:3000/cars';
    const dataObj = {name: car};

  return axios({
      method: method,
      url: url,
      data: dataObj
    })
  }
}
