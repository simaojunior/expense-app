import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://kryptontech:expenseapp@cluster0-e5xgg.mongodb.net/expenseappdb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
