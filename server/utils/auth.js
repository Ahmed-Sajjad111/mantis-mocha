//import json web tokens 
const jwt = require('jsonwebtoken');

//require dotenv for the page secret
require('dotenv').config

//secret
const secret = 'mysecretshhhh' || process.env.PAGE_SECRET;
//expiration time
const expiration = '2h';

//export the auth
module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    // if there is a token get it
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    //if there is no token return req
    if (!token) {
      return req;
    }

    //try to get the data from the token and return it
    // otherwise return false token in the console
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.shopper = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  // sign or create a token
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
