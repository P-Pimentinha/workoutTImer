import express from 'express';
const app = express();
import helmet from 'helmet';
import compression from 'compression';

/* //error handling
import 'express-async-errors'; */

app.use(express.static('public'));
/* app.use(express.static(path.join(__dirname, '/public/css'))); */

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + './public/todelete/test.html');
// });

app.get('/test', (req, res) => {
  res.sendFile('./public/todelete/test.html');
});

app.use(express.json());
app.use(helmet());
app.use(compression());

const port = process.env.PORT || 5000;

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening in port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
