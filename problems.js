

const axios = require('axios');



  async function getProblemsByTag(tag) {
    try {
      const {data} = await axios.get(`https://codeforces.com/api/problemset.problems?tags=${tag}`);
      const problemSet = data.result.problems;
      
    } catch (error) {
      console.error(error);
    }
  }

  
  