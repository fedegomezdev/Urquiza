import express, {json} from 'express';
import morgan from 'morgan';
const path = require('path');
const hbs = require('express-handlebars');
//const methodOverraid = require('method-override');
const session = require('express-session');
//const flash = require('connect-flash');
//const passport = require('passport');

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//settings
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views')); //aca van los html o handlebars
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials') ,
    extname:'.hbs'
}) );

app.set('view engine', '.hbs');

//app.use(methodOverraid("_method")); //para q los formularios puedan mandar tmb put y cosas asi no solo post y get
app.use(session({
    secret:'mysecretapp',
    resave: true,
    saveUninitialized: true
}))

//app.use(passport.initialize()); //tiene que ir desp del middleware session
//app.use(passport.session())

//app.use(flash());


//routes
app.use(require('./routes/usersRoutes'));
app.use(require('./routes/index'));


//static files
app.use(express.static(path.join(__dirname, 'public'))); //le decimos donde esta la carpeta static

export default app;