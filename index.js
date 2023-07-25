const express = require("express");
const app = module.exports = express();
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const cluster = require("cluster");
const os = require("os");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Set `views` directory for module
 */

app.set("views", path.join(__dirname, "views"));

/**
  * Set `view engine` to `pug`.
  */

app.set("view engine", "pug");

/**
 * Link models with
 * mongoDB database
 */

require("./lib/models")(app);

/**
 * routes application
 */

require("./lib/routes")(app);



const numCpu = os.cpus().length;
if (cluster.isMaster){
	for (let i=0; i<numCpu; i++){
		cluster.fork();
	}
}
else {
	const port = process.env.PORT;
	app.listen(port, () => {
		console.log(`Express server ${process.pid} listening on port ${port}.\nEnvironment: ${process.env.NODE_ENV}`);
	})
		.on("error", err=>{
			console.log(err);
			process.exit();
		});

}

app.get("/data", function (req, res) {
	res.render("index", {
		title: "EzAdmin Backend Api"
	});
});
