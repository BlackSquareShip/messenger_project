import express from 'express';
import mongoose from 'mongoose';
import exphbs from 'express-handlebars';

const PORT = process.env.PORT || 3000 

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main', 
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', hbs)
app.set('views', 'views')

async function start() {
    try {
        await mongoose.connect('', {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log("Server has been started...")
        })
    } catch(e) {
        console.log(e)
    }
}

start()