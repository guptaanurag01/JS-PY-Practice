const express = require('express');
const { createClient } = require('redis');
const app = express();
const client = createClient({
    url: "redis://localhost:6379"
});
client.connect();
app.get("/", async (req, res) => {
    const cached = await client.get("message");

    if (cached) return res.send({ source: "redis", data: cached });

    const data = "Hello from API...!";
    await client.setEx("message", 30, data);

    res.send({ source: "api", data });
});
app.listen(3000, () => {
    console.log(`http://localhost:3000`)
});