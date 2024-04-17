import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import productRoutes from "./routes/product.js"
import transactionRoutes from "./routes/transaction.js";
import Product from "./models/Product.js"
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";
import User from "./models/User.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/products", productRoutes);
app.use("/transaction", transactionRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;

mongoose.Promise = global.Promise; // Set Mongoose to use native promises

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    app.listen(PORT, () =>
      console.log(`Server Port: ${process.env.PORT || 9000}`)
    );
    // // Clear existing data
    // await KPI.deleteMany({});
    // // Insert initial data
    // await KPI.insertMany(kpis);

    // await Product.deleteMany({});
    // await Product.insertMany(products);
    // await Transaction.deleteMany({});
    // await Transaction.insertMany(transactions);
  })
  .catch((error) => console.error(`Failed to connect to MongoDB: ${error}`));

// Define route to create new user
app.post('/users', (req, res) => {
    User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
});

// Define route for user login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("Password is incorrect");
                }
            } else {
                res.json("No record exists");
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("Internal server error");
        });
});
