// Mock data for Singapore carparks
const mockCarparks = [
    {
        id: 1,
        name: "Orchard Central Carpark",
        address: "181 Orchard Rd, Singapore 238896",
        distance: 0.4,
        availableLots: 45,
        lotCount: 200,
        cost: 2.40,
        type: "Sheltered",
        pricing: "Paid",
        facility: "Sheltered",
        weather: "Sunny",
        temperature: 32,
        recommendationScore: 9.8,
        restrictions: "None",
        lastUpdated: "2m ago",
        location: { lat: 1.3015, lng: 103.8398 }
    },
    {
        id: 2,
        name: "313@Somerset Parking",
        address: "313 Orchard Rd, Singapore 238895",
        distance: 0.6,
        availableLots: 12,
        lotCount: 150,
        cost: 2.80,
        type: "Sheltered",
        pricing: "Paid",
        facility: "Sheltered",
        weather: "Cloudy",
        temperature: 30,
        recommendationScore: 7.2,
        restrictions: "None",
        lastUpdated: "5m ago",
        location: { lat: 1.3020, lng: 103.8380 }
    },
    {
        id: 3,
        name: "Marina Bay Sands Carpark",
        address: "10 Bayfront Ave, Singapore 018956",
        distance: 1.2,
        availableLots: 120,
        lotCount: 500,
        cost: 3.50,
        type: "Sheltered",
        pricing: "Paid",
        facility: "Sheltered",
        weather: "Sunny",
        temperature: 31,
        recommendationScore: 8.5,
        restrictions: "None",
        lastUpdated: "1m ago",
        location: { lat: 1.2831, lng: 103.8607 }
    },
    {
        id: 4,
        name: "VivoCity Carpark",
        address: "1 HarbourFront Walk, Singapore 098585",
        distance: 2.1,
        availableLots: 85,
        lotCount: 300,
        cost: 2.20,
        type: "Sheltered",
        pricing: "Paid",
        facility: "Sheltered",
        weather: "Sunny",
        temperature: 33,
        recommendationScore: 8.0,
        restrictions: "None",
        lastUpdated: "3m ago",
        location: { lat: 1.2644, lng: 103.8220 }
    },
    {
        id: 5,
        name: "HDB Clementi Block 445",
        address: "445 Clementi Ave 3, Singapore 120445",
        distance: 3.5,
        availableLots: 25,
        lotCount: 80,
        cost: 0,
        type: "Open-air",
        pricing: "Free",
        facility: "Open-air",
        weather: "Sunny",
        temperature: 32,
        recommendationScore: 6.5,
        restrictions: "Residents only after 7pm",
        lastUpdated: "10m ago",
        location: { lat: 1.3150, lng: 103.7650 }
    }
];

// Mock destinations for search
const mockDestinations = [
    "Orchard Road",
    "Marina Bay",
    "VivoCity",
    "Clementi",
    "Orchard MRT",
    "Marina Bay MRT",
    "HarbourFront"
];

// Mock analytics data
const mockAnalytics = {
    hourly: [
        { hour: 0, available: 30 },
        { hour: 1, available: 25 },
        { hour: 2, available: 20 },
        { hour: 3, available: 15 },
        { hour: 4, available: 20 },
        { hour: 5, available: 40 },
        { hour: 6, available: 60 },
        { hour: 7, available: 85 },
        { hour: 8, available: 95 },
        { hour: 9, available: 100 },
        { hour: 10, available: 100 },
        { hour: 11, available: 80 },
        { hour: 12, available: 50 },
        { hour: 13, available: 40 },
        { hour: 14, available: 35 },
        { hour: 15, available: 25 }
    ],
    weekly: [
        { day: "Mon", available: 50 },
        { day: "Tue", available: 45 },
        { day: "Wed", available: 30 },
        { day: "Thu", available: 70 },
        { day: "Fri", available: 40 },
        { day: "Sat", available: 60 },
        { day: "Sun", available: 55 }
    ]
};

// Helper functions
function getAvailabilityColor(available, total) {
    const percentage = (available / total) * 100;
    if (percentage >= 30) return "emerald";
    if (percentage >= 15) return "amber";
    return "rose";
}

function formatDistance(km) {
    if (km < 1) return `${(km * 1000).toFixed(0)}m`;
    return `${km.toFixed(1)} km`;
}

function filterCarparks(filters, searchRadius) {
    let filtered = [...mockCarparks];
    
    // Filter by radius
    filtered = filtered.filter(cp => cp.distance <= searchRadius);
    
    // Filter by pricing
    if (filters.pricing && filters.pricing !== "All") {
        filtered = filtered.filter(cp => cp.pricing === filters.pricing);
    }
    
    // Filter by facility type
    if (filters.facility && filters.facility !== "All") {
        filtered = filtered.filter(cp => cp.facility === filters.facility);
    }
    
    // Filter by minimum lots
    if (filters.minLots) {
        filtered = filtered.filter(cp => cp.availableLots >= filters.minLots);
    }
    
    return filtered;
}

function sortCarparks(carparks, sortBy) {
    const sorted = [...carparks];
    
    switch(sortBy) {
        case "distance":
            return sorted.sort((a, b) => a.distance - b.distance);
        case "availability":
            return sorted.sort((a, b) => {
                const aRatio = a.availableLots / a.lotCount;
                const bRatio = b.availableLots / b.lotCount;
                return bRatio - aRatio;
            });
        case "cost":
            return sorted.sort((a, b) => a.cost - b.cost);
        case "recommendation":
            return sorted.sort((a, b) => b.recommendationScore - a.recommendationScore);
        default:
            return sorted;
    }
}
