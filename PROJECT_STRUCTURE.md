# Project Structure

```
SmartCarpark/
├── index.html              # Entry point (redirects to search.html)
├── search.html             # Search destination page
├── results.html            # Parking results with map and list
├── detail.html             # Carpark detail page
├── navigation.html         # Active navigation route
├── analytics.html          # Analytics and trends
├── README.md               # Main project documentation
├── .gitignore              # Git ignore rules
│
├── js/                     # JavaScript files
│   ├── app.js             # Shared app functionality
│   └── mockData.js        # Mock data for carparks
│
└── archive/                # Archived source files
    ├── README.md          # Archive documentation
    └── source-files/      # Original Stitch-generated files
        ├── active_navigation_route/
        ├── alternative_parking_suggestion/
        ├── carpark_analytics_&_trends/
        ├── carpark_information_details/
        ├── parking_results_map_&_list_1/
        ├── parking_results_map_&_list_2/
        └── search_destination/
```

## Main Application Files

- **HTML Pages**: All main pages are in the root directory for easy access
- **JavaScript**: Shared functionality and mock data in `js/` folder
- **Archive**: Original source files kept for reference

## Getting Started

1. Open `index.html` or `search.html` in a web browser
2. Navigate through the pages using the built-in navigation
3. All interactions use mock data - no backend required
