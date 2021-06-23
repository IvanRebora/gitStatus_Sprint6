const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const cookies = require('cookie-parser');
const session = require('express-session');


const publicPath = path.resolve(__dirname, './public') ;
const puerto= process.env.PORT;
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


const PORT = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(session({
    secret: 'it´s a secret!',
    resave: false,
    saveUninitialized: false,
}));

app.use(express.static(publicPath));
app.set('view engine', 'ejs');

app.use(express.json())
//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));
app.use(cookies());
app.use(userLoggedMiddleware);

app.use('/', (req, res) => res.json({ clave: "con el server" }));

const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

app.use('/', homeRouter);

app.use('/', userRouter);

app.use('/products', productRouter);

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto' + PORT)
}

);
