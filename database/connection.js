import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Auction_app",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(`Some error occuered ${error}`);
    });
};
