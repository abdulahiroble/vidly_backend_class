import mongoose from "mongoose";
import config from "config";

export default function () {
    mongoose.connect(config.get("db"), {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log("Connected to MongoDB..."))
        .catch(err => console.error("Could not connect to MongoDB...", err));

    mongoose.set('debug', true);
}