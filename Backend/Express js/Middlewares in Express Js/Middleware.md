1. function middlewareName(req, res, next) {
   // do something with req or res
   console.log("Middleware executed!");

// Pass control to the next middleware/route
next();
}
// req → Request object (from the client)
// res → Response object (to send back)
// next() → A callback function that tells Express: "I'm done here, move to the next middleware or route handler."

2. In Express.js, middleware is simply a function that sits between the request (from the client) and the response (from the server).

3. Every request in Express goes through a pipeline of middleware functions before sending a response.

# Types of Middleware

--> Application Level
--> Route Level
--> Built-in
--> Third Party
--> Error Handling

# Example of Middleware Flow

app.use((req, res, next) => {
    // res.send("Hello World!");         // the flow stops here
console.log("First middleware");
next(); // pass to next
});

app.use((req, res, next) => {
console.log("Second middleware");
next();
});

app.get("/", (req, res) => {
res.send("Hello World!");
});

# Why Middleware is Important?

Middleware is used for:

--> Logging (recording requests)
--> Authentication & Authorization (check if user is logged in)
--> Parsing request bodies (JSON, forms, etc.)
--> Serving static files (express.static())
--> Error handling

# In Short

--> Middleware can read req and res
--> Middleware can add/change data in them
--> Middleware can block/modify/terminate the request-response cycleMiddleware can read req and res
--> Middleware can add/change data in them
--> Middleware can block/modify/terminate the request-response cycle
