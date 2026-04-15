const express = require('express');



const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());


const cors = require('cors');
app.use (cors());

const classifyRoute = require('./routes/classify');
app.use('/api', classifyRoute)

app.use ((req, res)=>{
  res.status(404).json({
    status: 'error',
    message: 'route not found',
  })
});
app.use((err, req , res , next)=>{
  console.error('unhandled error:',err);
  res.status(500).json({
    status: 'error',
    message: 'internal server error',
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports= app;
