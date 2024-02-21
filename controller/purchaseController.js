const Razorpay = require('razorpay');
const purchaseModel = require('../modal/PurchaseModal');
const { v4: uuidv4 } = require('uuid');
const CounsellingModal = require('../modal/CounsellingModal');
 
    
   
const createOrder = async (req, res) => {
    console.log("hello", req.body);
    // initializing razorpay
    const razorpay = new Razorpay({
        key_id: "rzp_test_NRaKUs89z3e33I",
        key_secret: "JAtK8VmypjkSngCamdGYVJan"
    }); 
 
    // setting up options for razorpay order.
    const options = {
        amount: 50 * 100, 
        currency: "INR",
        receipt: "any unique id for every order",
        payment_capture: 1
    };

    try {
        console.log("hello2", req.body);
        const response = await razorpay.orders.create(options);

        // Assuming that req.body contains the data for CounsellingModal
        const data = req.body;

        const result = await CounsellingModal.create({
            id: uuidv4(),
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

        console.log("result", result);

        if (result) {
            console.log("New student created");

            const purchaseResult = await purchaseModel.create({
                id: uuidv4(),
                orderId: response.id,
                amount: response.amount,
                studentId: result.id,
                courseId: data.courseId,
                status: response.status
            });

            console.log("purchaseResult", purchaseResult);


            return res.json({
                success: true,
                // msg: "order created",
                orderId: response.id,
                amount: response.amount,
                status: response.status,
                key_id: "rzp_test_NRaKUs89z3e33I"
            });
        }

        res.status(400).send("Not able to create order and register student. Please try again!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};
 

const update_order = async (req, res) => {
    try {
         
        console.log("paymentOrder", req.body); 
        const razorpay = new Razorpay({
            key_id: "rzp_test_NRaKUs89z3e33I",
            key_secret: "JAtK8VmypjkSngCamdGYVJan"
        }); 
        const paymentDetails = await razorpay.payments.fetch(req.body.payment_id);
        console.log('Payment Details:', paymentDetails);

         // Find the purchase order in the database
         const purchaseResult = await purchaseModel.findOne({
            where: { orderId: req.body.order_id }
        });

        // Handle if the purchase order is not found
        if (!purchaseResult) {
            return res.status(404).json({ "error": "Purchase order not found" });
        }

        // Update the purchase order in the database
        const updateResult = await purchaseModel.update(
            {
                status: paymentDetails.status,
                purchaseId: req.body.payment_id,
                paymentMethod: paymentDetails.method, 
                paymentDate: paymentDetails.created_at, 
                paymenetSignature: req.body.signature
            },
            { where: { id: purchaseResult.id } }
        );

        // Check if the update was successful
        if (updateResult[0] === 1) {
            // Send a JSON response with the updated purchase order ID
             res.json({ redirect: `/admin/thanks/${purchaseResult.id}` });
        } else {
            // Handle the case where the update failed
            console.error("Failed to update the record");
            return res.status(500).json({ "error": "Failed to update the record" });
        }
    } catch (error) {
        // Handle unexpected errors
        console.error("Error updating order:", error);
        return res.status(500).json({ "error": "Internal server error" });
    }
};

// Make sure to import necessary dependencies and modules such as Razorpay, uuidv4, CounsellingModal, and purchaseModel.

module.exports = { createOrder, update_order }