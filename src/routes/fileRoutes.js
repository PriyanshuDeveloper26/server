const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const createDynamicModel = require("../models/Record");

const router = express.Router();

// multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("file"), async (req, res) => {
    try {
        const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
        console.log(jsonData);

        // get headers
        const headers = Object.keys(jsonData[0]);
        console.log(headers);

        // get file name
        const fileName = req.file.originalname.split(".")[0].toLowerCase();
        console.log(fileName);
        const DynamicModel = createDynamicModel(fileName, headers);

        // insert data into database
        await DynamicModel.insertMany(jsonData);
        res.json({ message: `Data from '${fileName}' saved successfully`, count: jsonData.length });
    } catch (error) {
        console.error("Excel upload error", error);
        res.status(500).json({ message: "Failed to process file"});
    }
})

module.exports = router;
