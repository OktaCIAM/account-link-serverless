'use strict';

const okta = require('@okta/okta-sdk-nodejs');
const jwtDecode = require('jwt-decode');

const client = new okta.Client({
  orgUrl: process.env.OKTA_HUB_URL,
  token: process.env.OKTA_HUB_API_TOKEN    // Obtained from Developer Dashboard
});

module.exports.handler = async (event) => {
  try {
    if (event.body === null || event.body === undefined) {
      throw new Error("Expecting payload in");
    }

    const token = event.headers["authorization"].split(/\s/)[1];
    const userId = jwtDecode(token).sub;
    const currentUser = await client.getUser(userId);

    const spokeIdTokenRaw = JSON.parse(event.body).id_token;
    const spokeIdTokenParse = jwtDecode(spokeIdTokenRaw);
    const { matchingAttribute } = spokeIdTokenParse;
    currentUser.profile.matchingAttribute = matchingAttribute;

    await currentUser.update();
    // Redirect to Bookmark URL
    return {
      statusCode: 200,
      header: {
        "content-type": "text/plain"
      },
      body: "successfully"
    };
  } catch (err) {
    console.warn(err);
    return {
      statusCode: 500,
      body: err.errorSummary || err
    };
  }
};

