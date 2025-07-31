import express from 'express'
import connectDB from './middlewares/connect.js';
const app = express();
const port = process.env.PORT ||  3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(connectDB)

app.listen(port, () => { 
    console.log(`http://localhost:${port}`)
})

/*
const startServer = async () => {
    //await connectDB(); // 🔁 Solo se conecta una vez

    app.listen(port, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
    });
};

startServer();
*/