// STATE
let currentTab = 'thoughts';
let searchQuery = '';

// RENDER ENGINE
function render() {
    const grid = document.getElementById('gridContainer');
    const title = document.getElementById('sectionTitle');
    const desc = document.getElementById('sectionDesc');
    
    grid.innerHTML = ''; 

    let dataToRender = [];
    
    // SEARCH OVERRIDE
    if (searchQuery.length > 0) {
        document.querySelectorAll('.nav-tab').forEach(el => el.classList.add('disabled'));
        
        // Update Metadata for Search
        title.innerText = `Results for "${searchQuery}"`;
        desc.innerText = "Scanning across all neural pathways...";
        desc.style.color = "var(--neural-primary)";

        // FIX: Corrected data mapping to match data.js structure
        const allItems = [
            ...SYSTEM_DATA.frontburner, 
            ...SYSTEM_DATA.backburner, 
            ...SYSTEM_DATA.portfolio, 
            ...SYSTEM_DATA.thoughts
        ];
        
        dataToRender = allItems.filter(item => {
            const q = searchQuery.toLowerCase();
            return item.title.toLowerCase().includes(q) || 
                   item.excerpt.toLowerCase().includes(q) ||
                   item.tags.some(t => t.toLowerCase().includes(q));
        });
    } else {
        // TAB MODE
        document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('disabled'));
        updateActiveTabUI();
        
        // Update Metadata from Config
        title.innerText = formatTitle(currentTab);
        desc.innerText = SYSTEM_DATA.config[currentTab];
        desc.style.color = "var(--text-secondary)";

        dataToRender = SYSTEM_DATA[currentTab];
    }

    if (!dataToRender || dataToRender.length === 0) {
        grid.innerHTML = `<p style="text-align:center; color:var(--text-secondary); width:100%;">No neural signals found.</p>`;
        return;
    }

    dataToRender.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const visualHeader = item.image 
            ? `<img src="${item.image}" class="card-image" alt="${item.title}">` 
            : `<div class="card-pattern"></div>`;

        const highlight = (text) => {
            if (!searchQuery) return text;
            const safeQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(${safeQuery})`, 'gi');
            return text.replace(regex, '<span class="highlight">$1</span>');
        };

        // ENHANCEMENT: Source Badge Logic
        // This helps the user orient themselves during a search
        let sourceBadge = '';
        if (searchQuery.length > 0) {
            // Find which array this item belongs to
            const sourceKey = Object.keys(SYSTEM_DATA).find(key => 
                Array.isArray(SYSTEM_DATA[key]) && SYSTEM_DATA[key].includes(item)
            );
            if (sourceKey) {
                // Style strictly for the source badge to make it stand out
                const label = formatTitle(sourceKey);
                sourceBadge = `<span class="card-tag" style="border-color:var(--neural-primary); color:var(--neural-primary); opacity:1;">📂 ${label}</span>`;
            }
        }

        card.innerHTML = `
            ${visualHeader}
            <div class="card-content">
                <span class="card-date">${item.date}</span>
                <h3 class="card-title">${highlight(item.title)}</h3>
                <p class="card-excerpt">${highlight(item.excerpt)}</p>
                <div class="card-tags">
                    ${sourceBadge}
                    ${item.tags.map(t => `<span class="card-tag">#${t}</span>`).join('')}
                </div>
            </div>
        `;
        
        card.onclick = () => openModal(item);
        grid.appendChild(card);
    });
    setTimeout(resizeCanvas, 100);
}

// LOGIC HELPERS
function formatTitle(key) {
    if(key === 'frontburner') return 'frontburner';
    if(key === 'backburner') return 'backburner';    
    if(key === 'portfolio') return 'portfolio';
    if(key === 'thoughts') return 'thoughts'; // Better formatting for UI
    return key.charAt(0).toUpperCase() + key.slice(1);
}

function switchTab(tabName) {
    currentTab = tabName;
    document.getElementById('searchInput').value = '';
    searchQuery = '';
    render();
}

function updateActiveTabUI() {
    document.querySelectorAll('.nav-tab').forEach(el => {
        el.classList.remove('active');
        if(el.getAttribute('onclick').includes(currentTab)) el.classList.add('active');
    });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    render();
});

// MODAL
function openModal(item) {
    document.getElementById('mTitle').innerText = item.title;
    document.getElementById('mDate').innerText = item.date;
    document.getElementById('mBody').innerText = item.body || item.excerpt; 
    document.getElementById('mTags').innerHTML = item.tags.map(t => `<span class="card-tag">#${t}</span>`).join('');
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('modalOverlay').onclick = (e) => {
    if(e.target.id === 'modalOverlay') closeModal();
}

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// CANVAS
const canvas = document.getElementById('neuralCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function initCanvas() {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    createParticles();
    animate();
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
}

function createParticles() {
    const count = window.innerWidth < 800 ? 35 : 70;
    particles = [];
    for(let i=0; i<count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 2 + 1
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const style = getComputedStyle(document.body);
    ctx.fillStyle = style.getPropertyValue('--neural-primary');
    particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        for(let j=i+1; j<particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if(dist < 150) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(155, 89, 182, ${0.15 * (1 - dist/150)})`; 
                ctx.stroke();
            }
        }
    });
    requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof SYSTEM_DATA === 'undefined') {
        document.getElementById('gridContainer').innerHTML = 
            `<div style="text-align:center; padding: 2rem; border: 1px dashed var(--neural-secondary); grid-column: 1/-1;">
                <h3 style="color:var(--neural-secondary)">Neural Link Error</h3>
                <p>Data stream severed. Please check <code>data.js</code> connection.</p>
            </div>`;
    } else {
        initCanvas();
        render();
    }
});