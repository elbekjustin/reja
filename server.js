const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://elbekjumanazarov03:1rI2816i3eVqltuk@cluster0.adi7e.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0"

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, 
(err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB on connection succeed");
        module.exports =client
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
    
            );
        });
    
    }
}
);

