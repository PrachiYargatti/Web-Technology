const WebSocket = require("ws");

// Create WebSocket Server
const wss = new WebSocket.Server({ port: 3000 });

console.log("WebSocket server is running on ws://localhost:3000");

wss.on("connection", function connection(ws) {
    console.log("New client connected");

    // Send welcome message
    ws.send("Welcome to WebSocket Server!");

    // Receive message
    ws.on("message", function incoming(message) {
        const msg = message.toString();
        console.log("Received:", msg);

        // Broadcast to all clients
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(msg);
            }
        });
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });

    ws.on("error", (err) => {
        console.log("Error:", err.message);
    });
});