const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");

const bookRoute = require("./routes/bookRoutes");

app.use(
  cors({
    origin: "http://localhost:5173",
    // origin : ["https://localhost","https://google.com","https://evil.com"]
    //methods: ['GET','POST']
    // credentials: true
  })
);

//.use("") function ma kei value chainw so direct /books kaam garcha
// .use("/api") bhate aaba /books kaam gardaina but /api/books kaam garcha
// .use("/api/haha") huda /api/haha/books kaam garcha
app.use("/api/", bookRoute);

app.listen(3000, () => {
  console.log("app started running on port 3000....");
});
