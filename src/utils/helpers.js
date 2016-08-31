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
  },

  delete: function(id) {
  console.log(id.post.id);
  return axios.delete('http://localhost:3000/messages/' + id.post.id)
},

  // update: function(name, post){

  //    const fetchSettings = {
  //      method: 'PUT',
  //      mode: 'cors',
  //      body: {
  //        name: post.name,
  //        newName: post.newName,
  //        newEmail: post.newEmail,
  //        newMessage: post.newMessage
  //      }
  //    }
  //    console.log(fetchSettings);
  //    return fetch('http://localhost:3000/messages/'+ post.name, fetchSettings).then((res) => {
  //      return res.json();
  //    });
  // }

  update: function(name, data) {
    return axios.put('http://localhost:3000/messages/'+ name, data)
  }

}
