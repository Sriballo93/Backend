const Brand = require("../models/brand.model.js");

const getAllBrands = async (req, res, next) => {
  try {
    const brands = await Brand.find().populate({
      path: "shapes",
      populate: "round diamond teardrop",
    });
    return res.status(200).json({
      info: "All Brands",
      status: "Ok",
      results: brands,
    });
  } catch (error) {
    return next("Error getting all brands", error);
  }
};

const getBrandById = async (req, res, next) => {
  try {
    const { id } = await req.params;
    const brand = await Brand.findByID(id);
    return res.status(200).json(brand);
  } catch (error) {
    return next("Error getting brand by id", error);
  }
};

const createBrand = async (req, res, next) => {
  try {
    const newBrand = new Brand({
      ...req.body,
      image: req.file ? req.file.path : "not image",
    });
    const createbrand = await newBrand.save();
    return res.status(201).json(createbrand);
  } catch (error) {
    return next("Error creating brand", error);
  }
};

const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteBrand = await Brand.findByIdAndDelete(id);
    res.status(200).json(deleteBrand);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllBrands,
  getBrandById,
  createBrand,
  deleteBrand,
};
