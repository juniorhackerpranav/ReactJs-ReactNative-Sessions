import jwt from "jsonwebtoken"
import express from "express"
import cors from "cors"

const app = express();


// app.use(express());
app.use(cors());
app.use(express.json());


const users = [
    {
        email: "test@gmail.com",
        password: "123",
    },
    {
        email: "hello@gmail.com",
        password: "123",
    }
]

app.post("/login", (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(404).json({
                success: false, message: "No data provoded"
            });

        const existinguser = users.find((a) => a.email === email & a.password === password);

        if (existinguser === undefined)
            return res.status(404).json({
                success: false, message: "user not found"
            });

        const token = jwt.sign(existinguser, "app-key", {
            expiresIn: "7d"
        });

        console.log(token);

        return res.status(200).json({
            success: true,
            data: {
                token,
                userData: existinguser
            }
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "server error"
        });
    }
})



app.post("/verify", (req, res) => {
    try {
        const { token } = req.body;

        if (!token)
            return res.status(404).json({
                success: false, message: "No token provided"
            });

        const data = jwt.verify(token, "app-key");

        console.log(data)

        return res.status(200).json({
            success: true,
            message: "Token is valid"
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Token is not valid"
        });
    }
});



app.listen(5000, () => {
    console.log("Server : localhost:5000")
})