const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const path = require("path");

cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadImage = async (image) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };
  try {
    const img = await cloudinary.uploader.upload(image, options);
    return img.secure_url;
  } catch (e) {
    console.log(e);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("../public"));
  },
  filename: (req, file, cb) => {
    cb(null, file.filename);
  },
});

module.exports = { storage, uploadImage };
