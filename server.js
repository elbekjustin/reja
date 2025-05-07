const http = require("http");
const mongodb = require("mongodb");

const connectionString = "mongodb+srv://elbekjumanazarov03:LBZeJAZFnoqpiW0w@cluster0.adi7e.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0"

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, 
(err, c) => {
    if (err) console.log("ERROR on connection MongoDB:", err.message);
    else {
        console.log("MongoDB on connection succeed");
        console.log("client:",c); 
        module.exports =c
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 4000;
        server.listen(PORT, function () {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
    
            );
        });
    
    }
}
);

