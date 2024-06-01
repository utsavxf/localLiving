import express from 'express';
import dotenv from 'dotenv';
import roomRouter from './routes/roomRouter.js';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import cors from 'cors';


dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors({
  origin: "https://localliving.onrender.com/"
}
))
app.options('*', cors())

//CORS ,insread of installing the library here,we are manually setting from where requests can be allowed,what are the allowed http methods and headers
//instead of this bullshit we can also simply write app.use(cors()),but ok learning is there
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Authorization'
  ); 
  next(); 
});

app.use(express.json({ limit: '10mb' }));
//DON'T FORGET TO MAKE IT TOO BIG OR LEAVE IT BLANK BECAUSE HACKERS CAN DO THE DENIAL OF SERVICE ATTACK BY SENDING A HUGE FILE

app.use('/user', userRouter);
app.use('/room', roomRouter);
app.get('/', (req, res) => res.json({ message: 'Welcome to our API' }));
app.use((req, res) =>
  res.status(404).json({ success: false, message: 'Not Found' })
);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT)
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {  
    console.log(error); 
  }
};  

startServer();