const express = require("express");

const BrandsRoutes = express.Router();

const { upload } = require("../middlewares/files.middleware");

const {
  getAllBrands,
  getBrandById,
  createBrand,
  deleteBrand,
} = require("../controllers/brands.controller");

BrandsRoutes.get("/", getAllBrands);
BrandsRoutes.get("/:id", getBrandById);
BrandsRoutes.post("/", upload.single("image"), createBrand);
BrandsRoutes.delete("/:id", deleteBrand);

module.exports = BrandsRoutes;
