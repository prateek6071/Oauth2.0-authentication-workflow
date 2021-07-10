const exportsmanager=require('./exports');
app=exportsmanager.express();
const {googley} = require('googleapis');
app.use(exportsmanager.bodyParser.urlencoded({  extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(passport.initialize());
app.use(passport.session());
exportsmanager.passport.serializeUser((user, cb) => {
    cb(null, user);
});

exportsmanager.passport.deserializeUser((user, cb) => {
    cb(null, user);
});

exportsmanager.passport.use(new strategy({
        clientID:exportsmanager.clientID,
        clientSecret:exportsmanager.clientSecret,
        callbackURL:exportsmanager.callbackURL
    },
    function(accesstoken, refreshToken, extraparams,profile, done) {
        exportsmanager.b=accesstoken;
        exportsmanager.c=profile.id;
        exportsmanager.id_token=extraparams.id_token;
        done(null, {
            accesstoken,refreshToken,profile,extraparams
        });

    },
   
    
    
    
    ));

app.get('/thrilleasy', (req, res, next) => {
    res.render('Login', {
        pagetitle: "GoogleLogin"
    })
});

app.get('/auth/google', exportsmanager.passport.authenticate('google', {
    scope: ['openid email profile https://www.googleapis.com/auth/cloud-identity.groups'],'hd':'https://thrilleasy.com','groups':'grp-eng@thrilleasy.com'}));

    app.get('/callback', exportsmanager.passport.authenticate('google', {
    failureRedirect: '/auth/fail'
}), (req, res, next) => {
    console.log(req.user,req.isAuthenticated);
  
token=exportsmanager.id_token;
var decoded = exportsmanager.jwt_decode(token);
console.log(decoded);



res.send("user is logged in and sub is " + exportsmanager.c+" , access token is  " +exportsmanager.b +" and id_token is   "+exportsmanager.id_token);
});

app.get('/auth/failed', (req, res, next) => {
    console.log("failed session");
});

app.listen(8080);
