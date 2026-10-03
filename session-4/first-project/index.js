import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

console.log(process.env.JAVA_HOME)
console.log(process.env.AAA)

app.use(express.json())

const myMiddleware = (req, res, next) => {
    console.log(req.method)
    next();
}
app.use(myMiddleware);

const ConnectDb = () => {
    const db_url = "mongodb://localhost:27017/testingnode"
    // const db_url = undefined;

    try {
        mongoose.connect(db_url);

        console.log("Db Connected")
    } catch (error) {
        console.log("Db NOT Connected")
    }
}

ConnectDb();


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true
    }
})

const UserModel = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
    res.json({ message: "This is response from express Server" })
});

app.post("/", () => {

}, async (req, res) => {
    try {
        await UserModel.insertMany([
            {
                name: "Test 1",
                email: "test1@gmail.com"
            },
            {
                name: "Test 2",
                email: "test2@gmail.com"
            }
        ]);
        res.status(201).json({ message: "Data inserted Successfully" })
        return
    } catch (error) {
        res.status(500).json({ message: "Server error" })
        return
    }
});


app.put("/", (req, res) => {
    res.json({ message: "Put req" })
});

app.delete("/", async (req, res) => {
    const id = "6aa4d761daee188c70ed26ba";

    try {
        await UserModel.deleteOne({ _id: id });

        res.json({ message: "Delete req" })
    } catch (error) {
        res.json({ message: "Server erro" })
        return
    }
});


app.listen(3000, () => {
    console.log("Server is running");
});