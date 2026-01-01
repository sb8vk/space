# Saahithi's Brain Space 🧠

A personal website that visualizes learning and growth through an interactive neural network. Built for Saahithi Budharaju - AI product leader, mentor, and perpetual learner.

## ✨ Features

### Dynamic Neural Network
- **Particle-based animation** with 100+ nodes creating organic connections
- **Regional brightening**: Click any card to see the neural network light up around it
- **Synapses firing effect**: Particles speed up and connections glow when a card is active
- **Smooth transitions**: Neural activity shifts seamlessly between selected cards

### Three Thinking Modes
1. **Currently Learning** - Active explorations and experiments in progress
2. **In Retrospect** - Solidified lessons and completed projects
3. **Mental Models** - Core frameworks that anchor all thinking

### Content Architecture
- **Mental models as foundations**: 12 parables that form the basis of decision-making
- **Learning connections**: Every insight explicitly links back to foundational models
- **Visual connections**: Click any card to see its neural pathway to related models
- **Masonry grid layout**: Collision-free, responsive, adapts to any screen size

## 🚀 Quick Start

### View Locally
1. Download `index.html`
2. Open in any modern browser
3. Click cards to see neural connections light up

### Deploy to GitHub Pages
1. Fork this repository
2. Go to Settings → Pages
3. Select "Deploy from main branch"
4. Your site will be live at `yourusername.github.io/repository-name`

### Deploy to Vercel/Netlify
1. Import this repository
2. No build configuration needed (it's a static HTML file)
3. Deploy - done!

## 📝 How to Add New Content

All content lives in one place: the `CONTENT` object at the top of the JavaScript section.

### Adding a Mental Model

```javascript
mentalModels: [
    // ... existing models ...
    {
        id: 'new-model',                    // Unique ID (lowercase, dashes)
        title: 'The New Model',             // Display title
        description: 'What it means...',    // Full description
        category: 'learning'                // 'shipping', 'developing', or 'learning'
    }
]
```

### Adding a Currently Learning Item

```javascript
currentlyLearning: [
    // ... existing items ...
    {
        date: 'Jan 2025',                           // Display date
        title: 'What I\'m Learning',                // Card title
        excerpt: 'The full story...',               // Main content
        category: 'shipping',                       // Category color
        models: ['compound', 'two-buckets'],        // Which models it connects to (use IDs)
        connection: '→ How they connect'            // Connection explanation
    }
]
```

### Adding an In Retrospect Item

Same structure as Currently Learning - just add to the `inRetrospect` array instead.

### That's It!

- No code changes needed
- Refresh page to see updates
- Connections auto-wire
- Neural network automatically responds to new cards

## 🎨 Customization

### Colors
The site uses three primary colors that map to categories:

```css
--purple: #9b59b6;   /* Shipping & Building */
--orange: #e74c3c;   /* Developing Others */
--gold: #f39c12;     /* Pure Learning */
```

Update these in the `:root` CSS variables to change the entire color scheme.

### Neural Network Intensity

Adjust particle count and connection behavior:

```javascript
// In initializeCanvas() function
const particleCount = 100;  // More = denser network
const connectionDistance = 150;  // Smaller = fewer connections
```

### Brightening Radius

Change how far the neural effect extends when clicking a card:

```javascript
// In startAnimation() function
if (distToActive < 300) {  // Increase 300 for wider effect
```

## 🏗️ Architecture

### File Structure
```
index.html              # Single-file application
avatar.png              # Profile illustration
├── CSS (embedded)      # Styling and layout
├── HTML (embedded)     # Structure and content
└── JavaScript          # Animation and interactivity
```

### Key Functions
- `initializeCanvas()` - Sets up neural network
- `startAnimation()` - Animation loop with regional brightening
- `renderAllContent()` - Generates all cards from CONTENT object
- `createCard()` - Universal card generator (handles all types)
- `highlightCardConnections()` - Captures position, triggers brightening
- `highlightModelConnections()` - Same for mental model cards

### Data Flow
```
CONTENT object
    ↓
Render functions (renderMentalModels, etc.)
    ↓
createCard() for each item
    ↓
Adds click event listener
    ↓
Click → capture position → set activeCardPosition
    ↓
Animation loop sees activeCardPosition
    ↓
Neural network brightens in region
```

## 📱 Responsive Design

- **Desktop (>1024px)**: 3-column masonry, full neural network
- **Tablet (640-1024px)**: 2-column masonry, full neural network  
- **Mobile (<640px)**: 1-column list, neural network disabled (performance)

## 🧪 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile: iOS Safari 14+, Chrome Android 90+

Requires:
- CSS Grid
- Canvas API
- ES6 JavaScript (const/let, arrow functions, template literals)

## 🎯 Design Philosophy

### Why This Design?

1. **Brain as metaphor**: The neural network isn't decorative - it represents how knowledge actually forms through connections
2. **Mental models as roots**: Everything connects back to foundational frameworks (the parables)
3. **Spatial not chronological**: Ideas aren't organized by time but by relationship
4. **Interaction reveals structure**: Click to see hidden connections made visible

### Content Strategy

- **Currently Learning**: Raw, unprocessed, still figuring it out
- **In Retrospect**: Refined, synthesized, lessons extracted
- **Mental Models**: Timeless, foundational, referenced everywhere

## 🔧 Technical Details

### Performance Optimizations
- RequestAnimationFrame for smooth 60fps animation
- Particle system limited to 100 nodes (balanced visibility/performance)
- Canvas animation disabled on mobile devices
- Efficient distance calculations with early bailouts

### Future-Proof Modularity
- All content in centralized CONTENT object
- Single card creation function handles all types
- Automatic event binding
- No hardcoded content in HTML

## 📄 License

This is a personal website. Feel free to use the structure/approach for your own site, but please:
- Don't copy the content (the stories, mental models, experiences are personal)
- Credit the design approach if you adapt it significantly
- Customize it to reflect YOUR thinking, not mine

## 🤝 Contributing

This is a personal site, but if you spot bugs or have suggestions:
1. Open an issue describing the problem
2. If you have a fix, submit a PR
3. Please test thoroughly before submitting

## 📧 Contact

**Saahithi Budharaju**
- Email: saahithi.budharaju@kellogg.northwestern.edu
- LinkedIn: [linkedin.com/in/sbudharaju](https://linkedin.com/in/sbudharaju)

---

Built with curiosity, iteration, and a lot of failed experiments. The neural network didn't work on the first try - or the second, or third. That's the point.
