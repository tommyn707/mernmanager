
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/prods", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log ('Made Connection'))
.catch(err => console.log('something went wrong', err))