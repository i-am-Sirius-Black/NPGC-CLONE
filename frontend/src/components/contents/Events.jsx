
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { data } from '../../data';

const Events = ({ events }) => {
   const eventsToDisplay = events.length > 0 ? events : data.events;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    const month = months[date.getMonth()];
    const day = date.getDate();
    
    return { month, day };
  };

  return (
    <section className="max-w-2xl mx-auto py-8">
      <header className="mb-6">
        <h1 className="text-lg font-medium text-gray-900 inline-block border-t-2 border-blue-500 pt-2">
          Latest Events
        </h1>
      </header>

      <div className="space-y-6">
        {eventsToDisplay.map((event) => {
          const { month, day } = formatDate(event.date);
          
          return (
            <article 
              key={event._id}
              className="flex gap-4 pb-4 border-b border-gray-100 last:border-0"
            >
              <div className="flex-shrink-0 w-12 text-center">
                <div className="bg-blue-500 text-white text-xs uppercase px-2 py-1 rounded-t">
                  {month}
                </div>
                <div className="bg-gray-50 text-gray-700 text-lg font-medium px-2 py-1 rounded-b">
                  {day}
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-lg text-gray-800 font-medium mb-2">
                  {event.title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <AccessTimeIcon fontSize="small" className="text-gray-600" />
                  <span>{event.time}</span>
                </div>
                <a
                  href={`GalleryImages.aspx?EventId=${event._id}`}
                  className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Click for Photo Gallery
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <footer className="mt-6">
        <a
          href="GalleryAlbum.aspx"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
        >
          All events
          <AccessTimeIcon fontSize="small" className="text-gray-600" />
        </a>
      </footer>
    </section>
  );
};

export default Events;