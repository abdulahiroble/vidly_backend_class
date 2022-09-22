import Genre from "../models_mongoDB/genre";

const genres = [
    {name: "Action"},
    {name: "Horror"},
]



async function seed() {
    await mongoose.connect(config.db, {useNewUrlParser: true}, {
        useUnifiedTopology: true
    });
    await Genre.deleteMany({});
    await Genre.insertMany(genres);

    mongoose.disconnect();

    console.info("Done!");
}

seed();