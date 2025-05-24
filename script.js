const events = [
  {
    title: "Jazz Night at The Plaza",
    date: "2025-06-01",
    time: "7:00 PM",
    location: "The Plaza Theater, Atlanta, GA",
    category: "Live Music",
    image_url: "https://via.placeholder.com/400x200?text=Jazz+Night"
  },
  {
    title: "Comedy Underground",
    date: "2025-06-03",
    time: "8:30 PM",
    location: "Laugh Lab, Decatur, GA",
    category: "Comedy",
    image_url: "https://via.placeholder.com/400x200?text=Comedy+Night"
  },
  {
    title: "Indie Film Night",
    date: "2025-06-05",
    time: "6:00 PM",
    location: "Screenhouse Cinema, Atlanta, GA",
    category: "Film",
    image_url: "https://via.placeholder.com/400x200?text=Indie+Film"
  }
];

const container = document.getElementById('events-container');

events.forEach(event => {
  const card = document.createElement('div');
  card.className = 'event-card';
  card.innerHTML = `
    <img src="${event.image_url}" alt="${event.title}" />
    <div class="event-details">
      <h3>${event.title}</h3>
      <p>${event.date} @ ${event.time}</p>
      <p>${event.location}</p>
      <p><strong>Category:</strong> ${event.category}</p>
    </div>
  `;
  container.appendChild(card);
});
