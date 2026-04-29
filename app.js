import express from "express";
import path from "path";
import bodyParser from 'body-parser';
const app = express();

const port = process.env.PORT || 3000;

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/work", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "work.html"));
});

app.get("/play", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "play.html"));
});

app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "/blog/index.html"));
});

app.get("/blog/simplicity", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "/blog/simplicity.html"));
});


app.listen(port, function() {
    console.log("The server is running on http://localhost:" + port);
});
