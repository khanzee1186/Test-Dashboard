document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('menuToggle');
    const closeBtn = document.getElementById('menuClose');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
    });
});


const dashboardData = [
    {
        title: 'Activity Status',
        count: 74,
        items: [
            { icon: 'fas fa-clock', label: 'Overdue', value: 25 },
            { icon: 'fas fa-calendar-day', label: 'Today', value: 2 },
            { icon: 'fas fa-ticket-alt', label: 'Ticket', value: 20 },
            { icon: 'fas fa-exclamation-circle', label: 'Critical', value: 15 },
            { icon: 'fas fa-user', label: 'Assigned by me', value: 12 },
            { icon: 'fas fa-user', label: 'Assigned by me', value: 12 },
            { icon: 'fas fa-user', label: 'Assigned by me', value: 12 },
            { icon: 'fas fa-user', label: 'Assigned by me', value: 12 },
        ]
    },
    {
        title: 'Assignment',
        count: 3,
        items: [
            { img: 'images/boy.png', label: 'EkatmERP - Production support', value: '449 | 100%' },
            { img: 'images/boy.png', label: 'EkatmERP - Production support', value: '449 | 100%' },
            { img: 'images/boy.png', label: 'EkatmERP - Production support', value: '449 | 100%' },
        ]
    },
    {
        title: 'Report',
        count: 3,
        items: [
            { img: 'images/boy.png', label: 'Amay Gurjar', value: '20 | 25' },
            { img: 'images/boy.png', label: 'Amay Gurjar', value: '20 | 25' },
            { img: 'images/boy.png', label: 'Amay Gurjar', value: '20 | 25' },
        ]
    },
    {
        title: 'Clients',
        count: 3,
        items: [
            { img: 'images/boy.png', label: 'Santhosh harish & Co, C', value: '449 | 100%' },
            { img: 'images/boy.png', label: 'EkatmERP - Production support', value: '449 | 100%' },
            { img: 'images/boy.png', label: 'EkatmERP - Production support', value: '449 | 100%' },
        ]
    },
];


const miniCards = [
    {
        title: 'Due Date Information',
        count: 3,
        items: [
            { icon: 'fas fa-exclamation-triangle', label: 'Form MSME', value: '20/03/2024' },
            { icon: 'fas fa-exclamation-triangle', label: 'Form MSME', value: '20/03/2024' },
            { icon: 'fas fa-exclamation-triangle', label: 'Form MSME', value: '20/03/2024' },
        ]
    },
    {
        title: 'Meetings',
        count: 0,
        items: [
            { img: 'images/boy.png', value: '' }
        ]
    },
    {
        title: 'Feedback',
        count: 0,
        items: [
            { img: 'images/boy.png', value: '' }
        ]
    }
];


// Render main dashboard
const container = document.getElementById("dashboardGrid");
dashboardData.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    cardEl.innerHTML = `
    <div class="cart-head">
      <h3>${card.title} <span>(${card.count < 10 ? '0' + card.count : card.count})</span></h3>
      <button class="view-all-btn">View All</button>
    </div>
    <ul>
      ${card.items.map(item => `
        <li>
          <span>
            ${item.icon ? `<i class="${item.icon} icon"></i>` : item.img ? `<img src="${item.img}" class="icon-img" />` : ""}
            ${item.label || ""}
          </span>
          <span>${item.value}</span>
        </li>
      `).join("")}
    </ul>
  `;
    container.appendChild(cardEl);
});

// Render mini cards separately
const miniContainer = document.getElementById("miniCardsContainer");
miniCards.forEach(card => {
    const miniCard = document.createElement("div");
    miniCard.className = "mini-card";
    miniCard.innerHTML = `
    <div class="cart-head">
      <h3>${card.title} <span>(${card.count < 10 ? '0' + card.count : card.count})</span></h3>
      <button class="view-all-btn">View All</button>
    </div>
    <ul>
      ${card.items.map(item => `
        <li>
        <div class="minibox">
          <span>
            ${item.icon ? `<i class="${item.icon} icon"></i>` : ""}
            ${item.img ? `<img src="${item.img}" class="icon-img" alt="icon" />` : ""}
            ${item.label ? `<span>${item.label}</span>` : ""}
          </span>
          <span>${item.value || ""}</span>
          </div>
        </li>
      `).join("")}
    </ul>
  `;
    miniContainer.appendChild(miniCard);
});


