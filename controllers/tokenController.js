const express = require('express');
const axios = require('axios');
const router = express.Router();

// host.docker.internal
// const sessionUrl = 'http://localhost:8080/sessions';
const sessionUrl = 'http://mainzelliste:8080/sessions';

router.post('/', async (req, res) => {
  try {

    // Session creation
    const sessionResponse = await axios.post(sessionUrl, {}, {
      headers: {
        'mainzellisteApiKey': 'pleaseChangeMeToo',
        'mainzellisteApiVersion': '3.1'
      }
    });

    if (!sessionResponse?.data?.sessionId) {
      throw new Error('')
    }
    console.log('___________________________________________');
    console.log('Session Response data:', sessionResponse.data);
    console.log('___________________________________________');

    let sessionId = sessionResponse.data.sessionId;
    const tokenUrl = `http://mainzelliste:8080/sessions/${sessionId}/tokens`;

    // Token creation
    const tokenResponse = await axios.post(tokenUrl, {
      type: "addPatient",
      allowedUses: 10,
      data: {
        idtypes: ["pid"],
        redirect: "http://localhost:3000/create-record/get?pid={pid}&tid={tokenId}"

      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'mainzellisteApiKey': 'pleaseChangeMeToo',
        'mainzellisteApiVersion': '3.1'
      }
    });

    console.log('___________________________________________');
    console.log('Token created. Response data:', tokenResponse.data);
    console.log('___________________________________________');

  
    // Update state
    let tokenId = tokenResponse.data.id;

    // Redirect to the specified URL
    res.redirect(`http://localhost:8080/html/createPatient?tokenId=${tokenId}`);


  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while creating the session.');
  }
});

module.exports =  router;
