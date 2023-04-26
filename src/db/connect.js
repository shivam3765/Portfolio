const mongoose = require("mongoose");
const database_str = "mongodb+srv://vampi:Ss9079581918@shivam.wltfrhp.mongodb.net/userConnectToMe"
mongoose.connect(database_str, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log(`connection Successfull`);
}).catch((e) => {
    console.log(`no connection`);
});