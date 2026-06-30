import './Itinerary.css';

function Itinerary({ itinerary }) {
  if (!itinerary) return null;

  // Parse structured data
  let structured = null;
  if (typeof itinerary === 'string') {
    try {
      structured = JSON.parse(itinerary);
    } catch {
      // Not JSON, will use fallback
    }
  } else if (typeof itinerary === 'object' && itinerary.days) {
    structured = itinerary;
  }

  // Structured rendering
  if (structured && structured.days) {
    return (
      <div className="itinerary">
        {structured.days.map((day) => (
          <div key={day.dayNumber} className="itinerary-day">
            <div className="day-header">
              <span className="day-badge">Day {day.dayNumber}</span>
              <span className="day-title">{day.title}</span>
            </div>
            <div className="day-activities">
              {day.activities && day.activities.map((activity, i) => (
                <div key={i} className="activity-card">
                  <div className="activity-time">{activity.time}</div>
                  <div className="activity-info">
                    <div className="activity-name">{activity.name}</div>
                    <div className="activity-desc">{activity.description}</div>
                    {activity.location && (
                      <div className="activity-location">{activity.location}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Fallback: formatted text
  const text = typeof itinerary === 'string' ? itinerary : JSON.stringify(itinerary, null, 2);
  return (
    <div className="itinerary">
      <div className="itinerary-text">
        {text.split('\n').map((line, i) => (
          line.trim() ? <p key={i}>{line}</p> : <br key={i} />
        ))}
      </div>
    </div>
  );
}

export default Itinerary;
