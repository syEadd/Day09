const express = require('express');
const app = express();


const port = 7001; // Change the port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
console.log('dffmko')

app.get('/test', function(request, response){
  response.send('Test 페이지 입니다.');
});


