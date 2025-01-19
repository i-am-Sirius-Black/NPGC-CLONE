import Data from "../models/DataModel.js";
import { Types } from "mongoose";

export const getData = async (req, res) => {
  try {
    const data = await Data.findOne({}) || { 
      quickLinks: [], 
      notices: [], 
      events: [], 
      tenders: [] 
    };
    
    res.json(data);
  } catch (err) {
    console.error("Error in getData:", err);
    res.status(500).json({ error: err.message });
  }
};

export const addData = async (req, res) => {
    try {       
      const { section } = req.params;
      
      const newData = req.body[section];
      
      // Check if newData exists and is an array
      if (!newData || !Array.isArray(newData)) {
        return res.status(400).json({ 
          error: `Request body should contain a "${section}" key with an array value` 
        });
      }

      // Find existing data
      const existingData = await Data.findOne({});
    
      if (existingData) {
        existingData[section] = [...existingData[section], ...newData];
        await existingData.save();
      } else {
        const newRecord = new Data({
          [section]: newData,
        });
        await newRecord.save();
      }
  
      res.status(200).json({ 
        message: `${section} data updated successfully`,
        addedItems: newData
      });
    } catch (error) {
      console.error("Error adding data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
};

export const updateData = async (req, res) => {
  try {
    const { section, id } = req.params;
    const updateData = req.body;

    if (!Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    console.log("Attempting to update document with query:", {
      [`${section}._id`]: id
    });

    const result = await Data.findOneAndUpdate(
      { [`${section}._id`]: id },
      {
        $set: {
          [`${section}.$`]: { ...updateData, _id: id }
        }
      },
      { new: true }
    );


    if (!result) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json({
      message: `Item in ${section} updated successfully`,
      updatedData: result[section]
    });
  } catch (err) {
    console.error("Error in updateData:", err);
    res.status(500).json({ error: err.message });
  }
};
  

export const deleteData = async (req, res) => {
  try {
    const { section, id } = req.params;
    
    if (!Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const result = await Data.findOneAndUpdate(
      {},
      {
        $pull: {
          [section]: { _id: id }
        }
      },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ error: "No data found" });
    }

    res.json({ 
      message: `Item deleted from ${section} successfully`,
      updatedData: result[section]
    });
  } catch (err) {
    console.error("Error in deleteData:", err);
    res.status(500).json({ error: err.message });
  }
};

