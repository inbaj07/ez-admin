//Singleton

class FancyLogger {
	constructor(){
		if (FancyLogger.instance == null){
			this.logs = [];
			FancyLogger.instance = this;
		}
		return FancyLogger.instance;
	}

	log(message){
		this.logs.push(message);
		console.log("FancyLogger: ", message);
	}
	printLogCount(){
		console.log("Log Count", this.logs.length);
	}
}

const logger = new FancyLogger();
console.log(logger);
console.log(logger.instance);

logger.printLogCount();
logger.log("First");
logger.printLogCount();
console.log("################################################");

/* const logger2 = new FancyLogger();
logger2.printLogCount();
logger2.log("second");
logger2.printLogCount();

console.log("################################################");

const logger3 = new FancyLogger();
logger3.printLogCount();
logger3.log("Three");
logger3.printLogCount(); */

