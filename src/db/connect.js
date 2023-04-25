const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vampi:Ss9079581918@shivam.wltfrhp.mongodb.net/userConnectToMe", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log(`connection Successfull`);
}).catch((e) => {
    console.log(`no connection`);
});