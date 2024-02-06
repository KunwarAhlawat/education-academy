const ValidationData = {
  rules: {
    firstName: {
      required: true,
      minlength: 2, // Minimum length of 2 characters
      maxlength: 50, // Maximum length of 50 characters
    },
    lastName: {
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    mobileNo: {
      required: true,
      number: true,
      minlength: 10,
      maxlength: 10,
    },
    dateOfBirth: {
      required: true,
      date: true,
    },
    gender: "required",
    hostel: "required",
    fatherName: {
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    motherName: {
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    bloodGroup: "required",
    parentNo: {
      required: true,
      number: true,
      minlength: 10,
      maxlength: 10,
    },
    permanentAddress: "required",
    guardian: {
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    relationship: {
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    guardianMobile: {
      required: true,
      number: true,
      minlength: 10,
      maxlength: 10,
    },
    guardianAddress: "required",
    programApplied: {
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    entranceApplied: "required",
    subjectApplied: {
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    reference: {
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    submitDate: "required",
    declaration: "required",
  },
  messages: {
    firstName: {
      required: "Please enter your first name",
      minlength: "First name must be at least 2 characters",
      maxlength: "First name must not exceed 50 characters",
    },
    lastName: {
      required: "Please enter your last name",
      minlength: "Last name must be at least 2 characters",
      maxlength: "Last name must not exceed 50 characters",
    },
    mobileNo: {
      required: "Please enter your mobile number",
      number: "Please enter a valid number",
      minlength: "Mobile number must be 10 digits",
      maxlength: "Mobile number must be 10 digits",
    },
    dateOfBirth: {
      required: "Please enter your date of birth",
      date: "Please enter a valid date",
    },
    gender: "Please select your gender",
    hostel: "Please select whether you need hostel accommodation",
    fatherName: {
      required: "Please enter your father's name",
      minlength: "Father's name must be at least 2 characters",
      maxlength: "Father's name must not exceed 50 characters",
    },
    motherName: {
      required: "Please enter your mother's name",
      minlength: "Mother's name must be at least 2 characters",
      maxlength: "Mother's name must not exceed 50 characters",
    },
    bloodGroup: "Please select your blood group",
    parentNo: {
      required: "Please enter your parent's mobile number",
      number: "Please enter a valid number",
      minlength: "Parent's mobile number must be 10 digits",
      maxlength: "Parent's mobile number must be 10 digits",
    },
    permanentAddress: "Please enter your permanent address",
    guardian: {
      required: "Please enter your guardian's name",
      minlength: "Guardian's name must be at least 2 characters",
      maxlength: "Guardian's name must not exceed 50 characters",
    },
    relationship: {
      required: "Please enter your relationship with the guardian",
      minlength: "Relationship must be at least 2 characters",
      maxlength: "Relationship must not exceed 50 characters",
    },
    guardianMobile: {
      required: "Please enter your guardian's mobile number",
      number: "Please enter a valid number",
      minlength: "Guardian's mobile number must be 10 digits",
      maxlength: "Guardian's mobile number must be 10 digits",
    },
    guardianAddress: "Please enter your guardian's address",
    programApplied: {
      required: "Please enter the program you are applying for",
      minlength: "Program name must be at least 2 characters",
      maxlength: "Program name must not exceed 50 characters",
    },
    entranceApplied: "Please enter the entrance exam date",
    subjectApplied: {
      required: "Please enter the subjects you are applying for",
      minlength: "Subjects must be at least 2 characters",
      maxlength: "Subjects must not exceed 50 characters",
    },
    reference: {
      required: "Please enter the reference information",
      minlength: "Reference must be at least 2 characters",
      maxlength: "Reference must not exceed 50 characters",
    },
    submitDate: "Please enter the submission date",
    declaration: "Please agree to the declaration",
  },
};
