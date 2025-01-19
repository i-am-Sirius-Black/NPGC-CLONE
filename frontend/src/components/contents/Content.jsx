import React, { useState, useEffect } from "react";
import TitleMarquee from "./TitleMarquee";
import PrincipalCard from "./PrincipalCard";
import Notices from "./Notices";
import Events from "./Events";
import QuickLinks from "./QuickLinks";
import ETenders from "./ETenders";
import VisionMission from "./VisionMission";
import VideoTour from "./VideoTour";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Content = () => {
  const [quickLinks, setQuickLinks] = useState([]);
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [tenders, setTenders] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/admin/`);
      const { quickLinks = [], notices = [], events = [], tenders = [] } = response.data || {};
      setQuickLinks(quickLinks);
      setNotices(notices);
      setEvents(events);
      setTenders(tenders);
    } catch (error) {
      console.error("Error fetching data:", error);
      setQuickLinks([]);
      setNotices([]);
      setEvents([]);
      setTenders([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-7 space-y-6">
      {/* Title Marquee */}
      <TitleMarquee />

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div className="space-y-6">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <QuickLinks links={quickLinks} />
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Events events={events} />
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-2 space-y-6">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Notices notices={notices} />
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <ETenders tenders={tenders} />
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <PrincipalCard />
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <VisionMission />
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <VideoTour />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

