import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
const API_URL = import.meta.env.VITE_API_URL;

const Admin = () => {
  const [data, setData] = useState({ quickLinks: [], notices: [], events: [], tenders: [] });
  const [newEntry, setNewEntry] = useState({ title: "", url: "", date: "", time: "" });
  const [type, setType] = useState("quickLinks");

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/admin/`);
      console.log("response data: ",response.data);
      setData(response.data || { quickLinks: [], notices: [], events: [], tenders: [] });
    } catch (error) {
      console.error("Error fetching data:", error);
      setData({ quickLinks: [], notices: [], events: [], tenders: [] });
    }
  };

  const addData = async () => {
    if (!newEntry.title || ((type === "quickLinks" || type === "notices" || type === "tenders") && !newEntry.url)) {
      return alert("Fill in all required fields!");
    }

    try {
      const payload = { [type]: [newEntry] };
      await axios.post(`${API_URL}/api/admin/${type}`, payload);
      setNewEntry({ title: "", url: "", date: "", time: "" });
      fetchData();
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const deleteData = async (id) => {
    console.log("Deleting data with id:", id);
    try {
      await axios.delete(`${API_URL}/api/admin/${type}/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Data Control Center</h1>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Select Type:</label>
        <select
          className="border rounded w-full p-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="quickLinks">Quick Links</option>
          <option value="notices">Notices</option>
          <option value="events">Events</option>
          <option value="tenders">Tenders</option>
        </select>
      </div>

      <div className="mb-6 flex flex-col space-y-4">
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={newEntry.title}
          onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
          className="mb-4"
        />
        {(type === "quickLinks" || type === "notices" || type === "tenders") && (
          <TextField
            label="URL"
            variant="outlined"
            fullWidth
            value={newEntry.url}
            onChange={(e) => setNewEntry({ ...newEntry, url: e.target.value })}
            className="mb-4"
          />
        )}
        {type === "events" && (
          <>
            <TextField
              label="Date"
              variant="outlined"
              fullWidth
              value={newEntry.date}
              onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
              className="mb-4"
            />
            <TextField
              label="Time"
              variant="outlined"
              fullWidth
              value={newEntry.time}
              onChange={(e) => setNewEntry({ ...newEntry, time: e.target.value })}
              className="mb-4"
            />
          </>
        )}
        <Button variant="contained" color="primary" onClick={addData}>
          Add {type}
        </Button>
      </div>

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
                        className="text-blue-500"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.url}
                      </a>
                    )}
                    {item.date && <p>Date: {item.date}</p>}
                    {item.time && <p>Time: {item.time}</p>}
                  </div>
                  <div>
                    <IconButton
                      color="secondary"
                      onClick={() => deleteData(item._id)}
                    >
                      <Delete />
                    </IconButton>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center p-4 border rounded bg-gray-50">
                <p className="text-gray-500">No Data, Add some</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Admin;

