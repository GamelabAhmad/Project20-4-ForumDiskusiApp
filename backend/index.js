const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const authRoute = require("./src/routes/routeAuth");
const topicRoute = require("./src/routes/routeTopic");
const forumRoute = require("./src/routes/routeForum");
// const cloudRoute = require("./src/routes/routeCloud");
const userRoute = require("./src/routes/routeUser");
const questionRoute = require("./src/routes/routeQuestion");
const questionLikeRoute = require("./src/routes/routeQuestionLike");
const commentRoute = require("./src/routes/routeComment");
const commentVoteRoute = require("./src/routes/routeCommentVote");
const followRoute = require("./src/routes/routeFollow");
const memberRoute = require("./src/routes/routeMemberShip");

const prisma = PrismaClient;
const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: function (origin, callback) {
      callback(null, true);
    },
    credentials: true,
  })
);
app.get('/setcookie', (req, res) => {
  res.cookie('jwt', 'token', {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
  });
  res.send('Cookie set');
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//docs
const { swaggerUi, swaggerDocs } = require("./swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//auth route
app.use(authRoute);

//topic route
app.use(topicRoute);

// Forum Routes
app.use(forumRoute);

// app.use(cloudRoute);

// Question Route
app.use(questionRoute);

// user route
app.use(userRoute);

// Question Like Route
app.use(questionLikeRoute);

// comment route
app.use(commentRoute);

// Comment Vote Route
app.use(commentVoteRoute);

//follow route
app.use(followRoute);

// Member Route
app.use(memberRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
