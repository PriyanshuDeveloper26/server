const mongoose = require("mongoose");

mongoose.connect(
"mongodb://localhost:27017/excel_analytics_platform"
);
// Connect to MongoDB
// const connectDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("MongoDB connected");
//     } catch (error) {
//         console.error("MongoDB connection error:", error);
//     }
// };

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error:", `${err}`);
});

module.exports = mongoose;
