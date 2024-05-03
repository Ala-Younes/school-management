//@desc Register admin
//@Route POST /api/admins/register
//@access Private
const registerAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin Has been registered",
    });
  } catch (error) {
    res.json({
      status: "success",
      error: error.message,
    });
  }
};

//@desc Login Admin
//@Route POST /api/admins/login
//@access Private
const loginAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Login admin",
    });
  } catch (error) {
    res.json({
      status: "success",
      error: error.message,
    });
  }
};

const getAllAdminsCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Get All Admins",
    });
  } catch (error) {
    res.json({
      status: "success",
      error: error.message,
    });
  }
};

const getASingleAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Single Admin",
    });
  } catch (error) {
    res.json({
      status: "success",
      error: error.message,
    });
  }
};

const updateAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Update Admin",
    });
  } catch (error) {
    res.json({
      status: "success",
      error: error.message,
    });
  }
};

const deleteAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Delete Admin",
    });
  } catch (error) {
    res.json({
      status: "success",
      error: error.message,
    });
  }
};

const adminSuspendTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin Suspend Teacher",
    });
  } catch (error) {
    res.json({
      status: "success",
      error: error.message,
    });
  }
};

const adminUnsuspendTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unsuspending Teacher",
    });
  } catch (error) {
    res.json({
      status: "success",
      error: error.message,
    });
  }
};

const adminWithdrawAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin withdrawing Teacher",
    });
  } catch (error) {
    res.json({
      status: "success",
      error: error.message,
    });
  }
};

const adminUnwithdrawAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unwithdrawing Teacher",
    });
  } catch (error) {
    res.json({
      status: "success",
      error: error.message,
    });
  }
};

const adminPublishResultsExams = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin publishing Results",
    });
  } catch (error) {
    res.json({
      status: "success",
      error: error.message,
    });
  }
};

const adminUnpublishResultsExams = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unpublishing Teacher",
    });
  } catch (error) {
    res.json({
      status: "success",
      error: error.message,
    });
  }
};

module.exports = {
  registerAdminCtrl,
  loginAdminCtrl,
  getAllAdminsCtrl,
  getASingleAdminCtrl,
  updateAdminCtrl,
  deleteAdminCtrl,
  adminSuspendTeacherCtrl,
  adminUnsuspendTeacherCtrl,
  adminWithdrawAdminCtrl,
  adminUnwithdrawAdminCtrl,
  adminPublishResultsExams,
  adminUnpublishResultsExams,
};
