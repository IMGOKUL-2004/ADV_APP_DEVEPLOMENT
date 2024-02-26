

const AllEvents = () => {
  const events = [
    { id: 1, name: 'Birthday Party', date: '2024-05-10' },
    { id: 2, name: 'Wedding Ceremony', date: '2024-07-20' },
    { id: 3, name: 'Corporate Event', date: '2024-09-15' }
    // Add more events as needed
  ];

  return (
    <div className="allevents">
      <h2>All Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.name} - {event.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllEvents;
