const fs = require("fs");
const path = require('path');


// READ

fs.readFile('./files/starter.txt', 'utf-8', (err, data) => {
	if (err) throw err;
	console.log(data);
})


fs.readFile(path.join(__dirname, "files", "starter.txt"), 'utf-8', (err, data) => {
	if (err) throw err;
	console.log(data);
})



console.log("Hello...")


// WRITE



fs.writeFile(path.join(__dirname, "files", "reply.txt"), "I glad to see you too!", (err) => {
	if (err) throw err;
	console.log("Write completed");
})

fs.appendFile(path.join(__dirname, "files", "test.txt"), "Testing text", (err) => {
	if (err) throw err;
	console.log("Append completed");
})



// NESTED WRITE

fs.writeFile(path.join(__dirname, "files", "reply.txt"), "I glad to see you too!", (err) => {
	if (err) throw err;
	console.log("Write completed");

	fs.appendFile(path.join(__dirname, "files", "reply.txt"), "\n\n\n Are you sure?", (err) => {
		if (err) throw err;
		console.log("Append completed");
	})



})


// exit on uncaught errors

process.on("uncaughtException", err => {
	console.error(`There was an uncaught error: ${err}`);
	process.exit(1);
})