require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const connectDB = require('./src/config/db');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 3000;



connectDB(); 






let swaggerDocument={};
try {
    swaggerDocument = require('./swagger-output.json');

}
catch(err){
    console.error('failes to load swagger document ')
}





 
app.get('/',(req,res)=>{
    res.send('phone pay backend is running sucssefully ')
})



app.use('/api/auth', authRoutes);
app.use('/api/transactions', require('./src/routes/transactionRoutes'));
app.use('/api/wallet', require('./src/routes/walletRoutes'));
app.listen(port, (req, res)=>{
    console.log('server is runninf ')
    console.log(`swagger docs available at http://localhost:${port}/api-docs`);
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
