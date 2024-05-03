const express = require("express");

const {
  registerAdminCtrl,
  loginAdminCtrl,
  getAllAdminsCtrl,
  getASingleAdminCtrl,
  updateAdminCtrl,
  deleteAdminCtrl,
  adminPublishResultsExams,
  adminUnpublishResultsExams,
  adminUnwithdrawAdminCtrl,
  adminWithdrawAdminCtrl,
  adminUnsuspendTeacherCtrl,
  adminSuspendTeacherCtrl,
} = require("../../controller/staff/adminCtrl");
const adminRouter = express.Router();

// ** Admin Register **
adminRouter.post("/register", registerAdminCtrl);

// ** Admin Login **
adminRouter.post("/login", loginAdminCtrl);

// ** Get All Admins **
adminRouter.get("/", getAllAdminsCtrl);

// ** Get Single Admin **
adminRouter.get("/:id", getASingleAdminCtrl);

// ** Update Admin **
adminRouter.put("/:id", updateAdminCtrl);

// ** Delete Admin **
adminRouter.delete("/:id", deleteAdminCtrl);

// ** Admin suspending teacher **
adminRouter.put("/suspend/teacher/:id", adminSuspendTeacherCtrl);

// ** Admin unsuspending teacher **
adminRouter.put("/unsuspend/teacher/:id", adminUnsuspendTeacherCtrl);

// ** Admin withdrawing teacher **
adminRouter.put("/withdraw/teacher/:id", adminWithdrawAdminCtrl);

// ** Admin unwithdrawing teacher **
adminRouter.put("/unwithdraw/teacher/:id", adminUnwithdrawAdminCtrl);

//publish exams
adminRouter.put("/publish/exam/:id", adminPublishResultsExams);

//unpublish exams results
adminRouter.put("/unpublish/exam/:id", adminUnpublishResultsExams);

module.exports = adminRouter;
