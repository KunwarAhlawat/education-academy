const express = require("express");
const purchaseModel = require("../../modal/PurchaseModal");
const courseModel = require("../../modal/CourseModal");
const router = express.Router()




// thanks route
router.get("/thanks/:id", async (req, res) => {
    const id = req.params.id;

    try {
        // Find the purchase data using the provided id
        const purchaseOutput = await purchaseModel.findOne({
            where: { id: id }
        });

        if (!purchaseOutput) {
            // If the purchase data is not found, return a 404 status
            return res.status(404).json({ error: "Purchase data not found" });
        }

        // If purchase data is found, fetch associated course data
        const course = await courseModel.findOne({
            where: { courseId: purchaseOutput.courseId }
        });

        // Render the "admin/thank" view with purchaseOutput and course data
        res.render("admin/thank", { purchaseOutput, course });
        
    } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error fetching purchase data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});



module.exports = router 