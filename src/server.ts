import OSC from 'osc-js';

// Configure the Bridge
// This opens a WebSocket server on port 8080 and handles UDP communication on 41234/41235
const config = {
    udpClient: { port: 5003, host: 'localhost' }, // Where to forward OSC messages from browser
    udpServer: { port: 5001, host: 'localhost' }, // Where to listen for incoming external UDP OSC messages
    wsServer: { port: 8080, host: 'localhost' }   // Browser connects here
};

const osc = new OSC({ plugin: new OSC.BridgePlugin(config) });

osc.open();

console.log(`🚀 OSC Bridge running!`);
console.log(`📡 WebSocket Listening on ws://localhost:8080`);
console.log(`🎵 UDP Listening on port 5001, Forwarding to port 5003`);