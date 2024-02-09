const cousnellingFormModal = require("../modal/cousnellingFormModal")

async function counsellingFormCtrl(req, res) {
  try {
    const data = req.body;

    console.log("data", data);

    // Check if there are validation errors
    if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
      // Handle validation errors
      return res.status(422).json({ errors: data.errors });
    }

    let emailDuplicate = false;
    let mobileDuplicate = false;

    const emailResult = await cousnellingFormModal.findOne({ where: { email: data.email } });

    if (emailResult !== null) {
      emailDuplicate = true;
    }

    const mobileResult = await cousnellingFormModal.findOne({ where: { mobileNo: data.mobileNo } });

    if (mobileResult !== null) {
      mobileDuplicate = true;
    }

    if (emailDuplicate && mobileDuplicate) {
      return res.send({ msg: "Email and Mobile number already exist" });
    } else if (emailDuplicate) {
      return res.send({ msg: "Email already exists" });
    } else if (mobileDuplicate) {
      return res.send({ msg: "Mobile number already exists" });
    }

    const result = await cousnellingFormModal.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobileNo: data.mobileNo,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      hostel: data.hostel,
      fatherName: data.fatherName,
      motherName: data.motherName,
      bloodGroup: data.bloodGroup,
      parentNo: data.parentNo,
      permanentAddress: data.permanentAddress,
      guardian: data.guardian,
      guardianRelationship: data.relationship,
      guardianMobile: data.guardianMobile,
      guardianAddress: data.guardianAddress,
      programApplied: data.programApplied,
      entranceApplied: data.entranceApplied,
      subjectApplied: data.subjectApplied,
      reference: data.reference,
      submitDate: data.submitDate,
      declaration: data.declaration,
    });

    if (result) {
      console.log("New student created");
      return res.send({ result, msg: "Registration successful" });
    }
  } catch (error) {
    console.error(error);
    // Handle error appropriately, e.g., send an error response
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {counsellingFormCtrl}