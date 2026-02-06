# Smart Carpark Availability & Analytics System (Singapore)

A frontend-only UI mockup for a smart carpark finder application. Built with plain HTML, CSS (Tailwind), and vanilla JavaScript.

## 🎯 Features

- **Search Page**: Destination input with radius selection and filter preferences
- **Results Page**: Map view with carpark cards, sorting, and filtering
- **Detail Page**: Comprehensive carpark information with route navigation
- **Navigation Page**: Active route display with re-recommendation modal
- **Analytics Page**: Charts showing hourly availability and weekly trends

## 📁 Project Structure

```
SmartCarpark/
├── search.html          # Search destination page
├── results.html         # Parking results with map and list
├── detail.html          # Carpark detail page
├── navigation.html      # Active navigation route
├── analytics.html       # Analytics and trends
├── js/
│   ├── app.js          # Shared app functionality
│   └── mockData.js     # Mock data for carparks
└── README.md           # This file
```

## 🚀 Getting Started

1. Open `search.html` in a web browser
2. Navigate through the pages using the built-in navigation
3. All interactions are simulated with mock data

## 📱 Pages Overview

### 1. Search Page (`search.html`)
- Enter destination (e.g., "Orchard Road")
- Select search radius (500m, 1km, 2km, 5km)
- Filter by:
  - Pricing (Free/Paid)
  - Facility Type (Open-air/Sheltered)
  - Minimum Available Lots (slider)
- Form validation with error messages

### 2. Results Page (`results.html`)
- Split layout: Map (top) + Carpark cards (bottom)
- Map markers showing availability (green/yellow/red)
- Sort by: Distance, Availability, Cost, Recommendation
- Each card shows:
  - Name, distance, type
  - Available lots / Total capacity
  - Cost per hour
  - Weather state
  - Recommendation score
- "Select" and "View Details" buttons

### 3. Detail Page (`detail.html`)
- Mini map preview
- Availability dashboard
- Complete carpark information:
  - Address and distance
  - Cost and type
  - Restrictions
  - Weather state
- "Start Route" button navigates to navigation page

### 4. Navigation Page (`navigation.html`)
- Full-screen map with route visualization
- Route status overlay
- Distance and estimated time display
- Map controls (zoom, location)
- **Re-recommendation Modal**: Appears when the selected carpark becomes unavailable (simulated after 3-7 seconds), suggesting alternative carparks with available lots
- Cancel route button

### 5. Analytics Page (`analytics.html`)
- Select carpark from dropdown
- KPI cards: Peak Occupancy, Average Lots
- Hourly availability histogram
- Weekly trends line chart
- Time period filters (Today, Last 7 Days, Last 30 Days)

## 🎨 Design Features

- **High Contrast**: Clear typography and color coding
- **Large Buttons**: Easy to tap on mobile devices
- **Mobile Responsive**: Optimized for mobile screens
- **Dark Mode**: Built-in dark theme support
- **Material Icons**: Google Material Symbols for consistent iconography

## 📊 Mock Data

All carparks are Singapore-based examples:
- Orchard Central Carpark
- 313@Somerset Parking
- Marina Bay Sands Carpark
- VivoCity Carpark
- HDB Clementi Block 445

Each carpark includes:
- Distance, availability, capacity
- Cost, type, restrictions
- Weather information
- Recommendation score

## 🔧 Technical Details

- **No Backend**: Pure frontend implementation
- **No Real APIs**: All data is mocked
- **Session Storage**: Used for state management between pages
- **Vanilla JavaScript**: No frameworks required
- **Tailwind CSS**: Utility-first CSS framework
- **Simple Routing**: Page-based navigation

## 🎯 User Flow

1. **Search** → Enter destination and set filters
2. **Results** → Browse carparks, sort, and select
3. **Detail** → View full carpark information
4. **Navigation** → Start route (re-recommendation appears after 5s)
5. **Analytics** → View trends and patterns

## 📝 Notes

- The re-recommendation modal on the navigation page triggers when the selected carpark becomes unavailable (simulated after 3-7 seconds for demonstration)
- The modal only shows alternative carparks that have available lots (> 0)
- Map images are placeholder images (Singapore city views)
- All data is static and pre-defined
- No actual GPS or routing functionality
- Form validation prevents empty searches

## 🌐 Browser Support

Works in all modern browsers that support:
- ES6 JavaScript
- CSS Grid and Flexbox
- Session Storage API

---

**Built for demonstration purposes** - Frontend UI mockup only, no backend integration.
