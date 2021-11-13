import express from 'express';

const app = express();
app.listen(3000, () => {
  console.log(`server running on port 3000`);
});
 
const router = express.Router();
router.get('/', (request, response) => {
  response.send('The app is running!');
});


app.use('/', router);