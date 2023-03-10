const multer = require("multer");

const cloudinary = require("cloudinary").v2;

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv");
dotenv.config();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "padelDB",
    allowedFormats: ["jpg", "png", "jpeg", "gif"],
  },
});

const upload = multer({ storage });

const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.NAME,
    api_secret: process.env.API_SECRET,
    api_key: process.env.API_KEY,
  });
};

module.exports = { upload, configCloudinary };
