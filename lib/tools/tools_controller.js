const constant = require("../utility/constants");
const { comResponse } = require("../utility/common");
const fs = require("fs");
const ytdlp = require("ytdlp-nodejs");
exports.youTubeDownload = async (req, res) => {
	try {
		console.log(req.body);
		const file = fs.createWriteStream("test.mp4");
		// get stream
		const stream = ytdlp
			.stream(req.body.url, {
				filter: "videoonly",
				quality: "2160p"
			})
			.on("error", (err) => {
				console.log(err);
			})
			.pipe(file);

		// download video
		ytdlp
			.download(req.body.url, {
				filter: "mergevideo",
				quality: "1080p",
				output: {
					fileName: "hello.mp4",
					outDir: "/"
				}
			})
			.on("progress", (data) => {
				console.log(data);
			});

		return res.status(201).send(comResponse(res, 201, true, constant.MSG_SUCCESS, constant.MSG_SUCCESS));
	} catch (error) {
		return res.status(500).send(comResponse(res, 500, false, "Catch", error.toString()));
	}
};
