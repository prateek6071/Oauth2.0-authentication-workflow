

express = require('express');
app=express();

const b= '';
const g= '';
const c='';
id_token='';
clientID = '604082425647-14brqdak9blr0g8r44477kqek9ucvsal.apps.googleusercontent.com';
clientSecret = 'z_iD4myLB5AvJtg6mxSO6myq';
callbackURL = 'http://localhost:8080/callback';
express = require('express');

const jwt_decode=require('jwt-decode');

const bodyParser = require('body-parser');
passport = require('passport');
strategy = require('passport-google-oauth20').Strategy;
OAuth2Client=require('google-auth-library').OAuth2Client;
I=require('googleapis');
module.exports = {
   b,g,c,express,bodyParser,passport,strategy,OAuth2Client,I,clientID,clientSecret,callbackURL,id_token,jwt_decode
}