import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  TextField, 
  Button, 
  IconButton, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const Admin = () => {
  const [data, setData] = useState({ quickLinks: [], notices: [], events: [], tenders: [] });
  const [newEntry, setNewEntry] = useState({ title: "", url: "", date: "", time: "" });
  const [type, setType] = useState("quickLinks");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editDialog, setEditDialog] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editingSection, setEditingSection] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/admin/`);
      setData(response.data || { quickLinks: [], notices: [], events: [], tenders: [] });
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addData = async () => {
    if (!newEntry.title || ((type === "quickLinks" || type === "notices" || type === "tenders") && !newEntry.url)) {
      setError("Please fill in all required fields!");
      return;
    }

    try {
      setLoading(true);
      const payload = { [type]: [newEntry] };
      await axios.post(`${API_URL}/api/admin/${type}`, payload);
      setNewEntry({ title: "", url: "", date: "", time: "" });
      await fetchData();
    } catch (error) {
      console.error("Error adding data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (section, id) => {
    try {
      setLoading(true);
      await axios.delete(`${API_URL}/api/admin/${section}/${id}`);
      await fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (section, item) => {
    setEditingSection(section);
    setEditingItem(item);
    setEditDialog(true);
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${API_URL}/api/admin/${editingSection}/${editingItem._id}`,
        editingItem
      );
      
      if (response.data) {
        setEditDialog(false);
        setEditingItem(null);
        setEditingSection(null);
        await fetchData();
      }
    } catch (error) {
      console.error("Error updating data:", error);
      setError(error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Data Control Center</h1>

      <div className="mb-6">
        <FormControl fullWidth variant="outlined">
          <InputLabel>Select Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            label="Select Type"
          >
            <MenuItem value="quickLinks">Quick Links</MenuItem>
            <MenuItem value="notices">Notices</MenuItem>
            <MenuItem value="events">Events</MenuItem>
            <MenuItem value="tenders">Tenders</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="mb-6 flex flex-col space-y-4">
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={newEntry.title}
          onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
        />
        
        {(type === "quickLinks" || type === "notices" || type === "tenders") && (
          <TextField
            label="URL"
            variant="outlined"
            fullWidth
            value={newEntry.url}
            onChange={(e) => setNewEntry({ ...newEntry, url: e.target.value })}
          />
        )}
        
        {type === "events" && (
          <>
            <TextField
              label="Date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={newEntry.date}
              onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
            />
            <TextField
              label="Time"
              type="time"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={newEntry.time}
              onChange={(e) => setNewEntry({ ...newEntry, time: e.target.value })}
            />
          </>
        )}
        
        <Button 
          variant="contained" 
          color="primary" 
          onClick={addData}
          disabled={loading}
        >
          Add {type}
        </Button>
      </div>

      {error && (
        <div className="p-4 mb-6 text-red-500 bg-red-50 rounded">
          {error}
        </div>
      )}

      {["quickLinks", "notices", "events", "tenders"].map((section) => (
        <div key={section} className="mb-10">
          <h2 className="text-xl font-semibold mb-4 capitalize">{section}</h2>
          <div className="space-y-4">
            {data[section]?.length > 0 ? (
              data[section].map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center p-4 border rounded shadow-sm"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    {item.url && (
                      <a
                        href={item.url}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.url}
                      </a>
                    )}
                    {item.date && <p>Date: {item.date}</p>}
                    {item.time && <p>Time: {item.time}</p>}
                  </div>
                  <div className="flex gap-2">
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(section, item)}
                      disabled={loading}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => deleteData(section, item._id)}
                      disabled={loading}
                    >
                      <Delete />
                    </IconButton>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center p-4 border rounded bg-gray-50">
                <p className="text-gray-500">No data available</p>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Edit Dialog */}
      <Dialog open={editDialog} onClose={() => setEditDialog(false)}>
        <DialogTitle>Edit {editingSection}</DialogTitle>
        <DialogContent>
          <div className="mt-4 space-y-4">
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={editingItem?.title || ""}
              onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
            />
            
            {(editingSection === "quickLinks" || editingSection === "notices" || editingSection === "tenders") && (
              <TextField
                label="URL"
                variant="outlined"
                fullWidth
                value={editingItem?.url || ""}
                onChange={(e) => setEditingItem({ ...editingItem, url: e.target.value })}
              />
            )}
            
            {editingSection === "events" && (
              <>
                <TextField
                  label="Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={editingItem?.date || ""}
                  onChange={(e) => setEditingItem({ ...editingItem, date: e.target.value })}
                />
                <TextField
                  label="Time"
                  type="time"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={editingItem?.time || ""}
                  onChange={(e) => setEditingItem({ ...editingItem, time: e.target.value })}
                />
              </>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialog(false)}>Cancel</Button>
          <Button onClick={handleUpdate} variant="contained" color="primary" disabled={loading}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Admin;