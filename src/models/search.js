const axios = require('axios').default;

class Searches {
  constructor() {}

  async city(place = '') {
    try {
      const rest = await axios.get('https://reqres.in/api/users?page=2');
      console.log(rest.data);
    } catch (err) {
      console.log(err);
    }
    return [];
  }
}

module.exports = Searches;
