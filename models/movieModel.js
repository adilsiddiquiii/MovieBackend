import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    releaseDate: {
      type: Date,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    image: {
      type: String, 
      required: true,
    },
  },
  { timestamps: true }
);

export const Movie = mongoose.model("Movie", movieSchema);
