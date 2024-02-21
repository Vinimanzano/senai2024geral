const express = require('express');
const cors = require('cors');
const routes = require("./scr/routes/routes");
const PORT = 3000;

const app = express();
app.use(express.json()); 
app.use(cors());
app.use(routes);

app.listen(PORT, () => console.log('Server running on port ' + PORT));