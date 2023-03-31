const express = require("express");
const router = express.Router();
const {
  getPrivateRoute,
  addNewProject,
  updateProject,
  deleteProject,
  getProjects,
  addSub,
  updateSub,
} = require("../controllers/private");
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getPrivateRoute);
router.route("/get-products/:userId").get(protect, getProjects);
router.route("/add-product").post(protect, addNewProject);
router.route("/update-product/:productId").post(protect, updateProject);
router.route("/delete-product/:productId").delete(protect, deleteProject);
router.route("/update-sub").post(protect, addSub);
router.route("/add-sub").post(protect, updateSub);


module.exports = router;
