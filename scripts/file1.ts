import crypto from "node:crypto";
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";

// ❗NOTE: this is a pretty random file just for testing. Content not important for bug report

// Function to add two numbers
function addNumbers(a: number, b: number): number {
	return a + b;
}

// Function to write a message to a file
function writeMessageToFile(message: string, filename: string): void {
	const filePath: string = path.join(process.cwd(), filename);
	fs.writeFileSync(filePath, message, "utf-8");
	console.log(`✅ Message written to ${filename}`);
}

// Function to read a file and log its content
function readFileContent(filename: string): void {
	const filePath: string = path.join(process.cwd(), filename);
	const content: string = fs.readFileSync(filePath, "utf-8");
	console.log(`📄 Content of ${filename}:`, content);
}

// Function to create a simple HTTP server
function createServer(): void {
	const server: http.Server = http.createServer(
		(req: http.IncomingMessage, res: http.ServerResponse) => {
			if (req.method === "GET" && req.url === "/") {
				res.writeHead(200, { "Content-Type": "text/plain" });
				res.end("Hello, World!\n");
			} else {
				res.writeHead(404, { "Content-Type": "text/plain" });
				res.end("Not Found\n");
			}
		},
	);

	server.listen(3000, () => {
		console.log("🌐 Server running at http://localhost:3000/");
	});
}

// Function to log system information
function logSystemInfo(): void {
	console.log("🖥 System Information:");
	console.log("Platform:", os.platform());
	console.log("CPU Architecture:", os.arch());
	console.log("Total Memory:", os.totalmem());
	console.log("Free Memory:", os.freemem());
}

// Function to generate a random string using crypto
function generateRandomString(length: number): string {
	return crypto.randomBytes(length).toString("hex");
}

// Main function to execute all tasks
function main(): void {
	try {
		const sum: number = addNumbers(5, 10);
		console.log("➕ Sum:", sum);

		const message: string = "Hello, this is a test message!";
		const filename: string = "test.txt";
		writeMessageToFile(message, filename);
		readFileContent(filename);

		logSystemInfo();

		const randomString: string = generateRandomString(16);
		console.log("🔑 Random String:", randomString);

		createServer();
	} catch (error: unknown) {
		console.error("❌ An error occurred:", error);
		process.exit(1);
	}
}

main();
