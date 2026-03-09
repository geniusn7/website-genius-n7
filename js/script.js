const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll('.section').forEach((section) => {
  section.classList.add('reveal');
  revealObserver.observe(section);
});

function createEventCard(event) {
  const card = document.createElement('article');
  card.className = 'card card-event';
  card.innerHTML = `
    <h4>${event.name}</h4>
    <p class="event-meta">${event.date} | ${event.location}</p>
    <p>${event.description}</p>
  `;
  return card;
}

async function loadEvents() {
  const upcomingContainer = document.getElementById('upcoming-events');
  const pastContainer = document.getElementById('past-events');

  if (!upcomingContainer || !pastContainer) {
    return;
  }

  const eventFiles = ['events/thcon2026.json', 'events/hackathon2026.json'];

  for (const file of eventFiles) {
    try {
      const response = await fetch(file);
      if (!response.ok) {
        continue;
      }

      const event = await response.json();
      const card = createEventCard(event);

      if (event.category === 'upcoming') {
        upcomingContainer.appendChild(card);
      } else {
        pastContainer.appendChild(card);
      }
    } catch {
      // Keep static cards visible when JSON files are unavailable.
    }
  }
}

loadEvents();
