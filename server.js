var express=require("express");
var app=express();
var path=require("path");

var bodyParser=require("body-parser");


var index=require("./routes/index");
var api=require("./routes/api");

//Views
app.set('views', path.join(__dirname,"/views"));
app.set('view engine', 'ejs');
app.engine('html', require("ejs").renderFile);

//Static
app.use(express.static(path.join(__dirname,"/src")));

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Route
app.use("/", index);
app.use("/api", api);

app.listen(process.env.PORT || 8080);
