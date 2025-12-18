import express from "express";
import {
  getAllMovies,
  searchMovies,
  getSortedMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
} from "../controllers/movieController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { isAdmin } from "../middleware/isAdmin.js";


const router = express.Router();

router.get("/", getAllMovies);


router.get("/search", searchMovies);
router.get("/sorted", getSortedMovies);
router.get("/:id", getMovieById);

router.post("/", isAuthenticated, isAdmin, addMovie);
router.put("/:id", isAuthenticated, isAdmin, updateMovie);
router.delete("/:id", isAuthenticated, isAdmin, deleteMovie);

export default router;
