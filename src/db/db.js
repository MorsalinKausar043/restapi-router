const mongoose = require("mongoose");
const port = 27017;
const mongodb = `mongodb://localhost:${port}/MensData`;
mongoose.connect(mongodb, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log(`mongoose port is ${port}`)).
    catch((error) => console.log(error));