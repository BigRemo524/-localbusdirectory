fetch('events.json')
  .then(response => response.json())
  .then(events => {
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
  });
