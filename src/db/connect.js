const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userConnectToMe", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log(`connection Successfull`);
}).catch((e) => {
    console.log(`no connection`);
});