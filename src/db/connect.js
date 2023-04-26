const mongoose = require("mongoose");
const database_str = process.env.DATABASE_KEY
mongoose.connect(database_str, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log(`connection Successfull`);
}).catch((e) => {
    console.log(`no connection`);
});