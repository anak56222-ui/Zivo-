export const categories = [
  { slug: "health-wellness", label: "Health & Wellness", color: "#1D9E75", icon: "🟢", queryCount: "2.3k+" },
  { slug: "finance-career", label: "Finance & Career", color: "#2F80ED", icon: "🔵", queryCount: "1.8k+" },
  { slug: "home-essentials", label: "Home & Essentials", color: "#F2C94C", icon: "🟡", queryCount: "2.1k+" },
  { slug: "travel-leisure", label: "Travel & Leisure", color: "#9B51E0", icon: "🟣", queryCount: "1.4k+" },
  { slug: "entertainment-hobbies", label: "Entertainment & Hobbies", color: "#EB5757", icon: "🔴", queryCount: "1.9k+" },
  { slug: "food-lifestyle", label: "Food & Lifestyle", color: "#FF66A8", icon: "🩷", queryCount: "2.0k+" },
];

export const products = [
  { id: "p1", category: "health-wellness", title: "Calm Premium India", description: "Meditation, sleep, and stress support with India-specific stories.", rating: 4.7, price: "₹1,999/year", cta: "Buy Now", badge: "Top Pick", location: "Pan India", tags: ["Buy", "Learn"], specs: { "Free Trial": "7 days", "Language": "English/Hindi", "Best For": "Stress relief", "Platform": "iOS/Android" } },
  { id: "p2", category: "health-wellness", title: "Ugaoo Indoor Plant Box", description: "Starter plant bundle with self-watering pots for urban homes.", rating: 4.5, price: "₹1,499", cta: "Buy Now", badge: "Trending", location: "Mumbai", tags: ["Buy"], specs: { "Plant Count": "4", "Care Level": "Easy", "Delivery": "3-5 days", "Best For": "Air purification" } },
  { id: "p3", category: "health-wellness", title: "Sugar.fit Diabetic Meal Plan", description: "Doctor-backed meal subscription for blood sugar management.", rating: 4.6, price: "₹3,999/month", cta: "Book Now", badge: "Top Pick", location: "Bengaluru", tags: ["Book", "Learn"], specs: { "Dietician Support": "Yes", "Duration": "30 days", "Cuisine": "Custom Indian", "Best For": "Type 2 diabetes" } },
  { id: "p4", category: "finance-career", title: "Zerodha Kite", description: "Low-cost stock trading and portfolio tracking for active investors.", rating: 4.8, price: "₹20/order", cta: "Learn More", badge: "Top Pick", location: "Pan India", tags: ["Compare", "Learn"], specs: { "Brokerage": "Discount", "Research": "Basic", "App Rating": "4.6", "Best For": "Frequent traders" } },
  { id: "p5", category: "finance-career", title: "Groww", description: "Simple mutual fund and stock investing app for first-time users.", rating: 4.6, price: "₹0 account opening", cta: "Learn More", badge: "Trending", location: "Pan India", tags: ["Buy", "Learn"], specs: { "Mutual Funds": "Yes", "Stocks": "Yes", "UX": "Beginner friendly", "Best For": "Long-term investors" } },
  { id: "p6", category: "finance-career", title: "IELTS - British Council", description: "Official IELTS coaching and exam guidance program.", rating: 4.4, price: "₹15,500", cta: "Book Now", badge: "Sponsored", location: "Delhi", tags: ["Book", "Compare"], specs: { "Mode": "Online + Offline", "Mock Tests": "12", "Validity": "2 years", "Best For": "UK/Canada aspirants" } },
  { id: "p7", category: "finance-career", title: "TOEFL - ETS", description: "Official TOEFL prep material and test scheduling support.", rating: 4.3, price: "₹16,900", cta: "Book Now", badge: "Trending", location: "Pan India", tags: ["Book", "Compare"], specs: { "Format": "Computer-based", "Sections": "4", "Score Range": "0-120", "Best For": "US admissions" } },
  { id: "p8", category: "home-essentials", title: "IFB Front Load Washing Machine", description: "Energy efficient 8kg machine ideal for Indian households.", rating: 4.5, price: "₹32,990", cta: "Buy Now", badge: "Top Pick", location: "Chennai", tags: ["Buy", "Compare"], specs: { "Capacity": "8kg", "Energy Rating": "5 Star", "Wash Programs": "12", "Best For": "Family use" } },
  { id: "p9", category: "home-essentials", title: "Prestige Tools Kit", description: "All-in-one home maintenance kit for daily fixes.", rating: 4.2, price: "₹2,499", cta: "Buy Now", badge: "Trending", location: "Pan India", tags: ["Buy"], specs: { "Pieces": "89", "Warranty": "2 years", "Material": "Chrome vanadium", "Best For": "DIY repairs" } },
  { id: "p10", category: "home-essentials", title: "HealthifyMe Meal Planner", description: "AI nutrition planning tailored to Indian diets.", rating: 4.6, price: "₹999/month", cta: "Book Now", badge: "Sponsored", location: "Pan India", tags: ["Book", "Learn"], specs: { "Coach": "Available", "Plans": "Keto/Vegetarian", "Tracking": "Calorie + macros", "Best For": "Weight management" } },
  { id: "p11", category: "travel-leisure", title: "Taj Lake Palace Udaipur Stay", description: "Luxury heritage stay with curated local experiences.", rating: 4.9, price: "₹34,000/night", cta: "Book Now", badge: "Top Pick", location: "Udaipur", tags: ["Book"], specs: { "Category": "5-star", "Meals": "Included", "Airport Transfer": "Yes", "Best For": "Luxury couples" } },
  { id: "p12", category: "travel-leisure", title: "Hampi Heritage Tour", description: "2-day guided tour of UNESCO heritage ruins and temples.", rating: 4.4, price: "₹7,500", cta: "Book Now", badge: "Trending", location: "Hampi", tags: ["Book", "Learn"], specs: { "Duration": "2 days", "Guide": "Certified", "Transport": "Included", "Best For": "History lovers" } },
  { id: "p13", category: "travel-leisure", title: "Rishikesh River Rafting", description: "Adventure package with rafting, camp stay and meals.", rating: 4.5, price: "₹4,200", cta: "Book Now", badge: "Sponsored", location: "Rishikesh", tags: ["Book"], specs: { "Rapid Grade": "III-IV", "Stay": "1 night camp", "Safety Gear": "Included", "Best For": "Adventure seekers" } },
  { id: "p14", category: "entertainment-hobbies", title: "Disney+ Hotstar Premium", description: "Sports, movies, and Indian originals in one subscription.", rating: 4.4, price: "₹1,499/year", cta: "Buy Now", badge: "Top Pick", location: "Pan India", tags: ["Buy"], specs: { "Streams": "4", "4K Support": "Yes", "Sports": "Yes", "Best For": "Cricket fans" } },
  { id: "p15", category: "entertainment-hobbies", title: "Netflix India Standard", description: "International and Indian originals across genres.", rating: 4.6, price: "₹499/month", cta: "Buy Now", badge: "Trending", location: "Pan India", tags: ["Buy", "Compare"], specs: { "Streams": "2", "4K Support": "No", "Downloads": "Yes", "Best For": "Series lovers" } },
  { id: "p16", category: "entertainment-hobbies", title: "Amazon Prime Video India", description: "Movies, TV, and Prime shopping benefits bundled.", rating: 4.5, price: "₹299/month", cta: "Buy Now", badge: "Sponsored", location: "Pan India", tags: ["Buy", "Compare"], specs: { "Streams": "3", "Delivery Benefits": "Yes", "Music": "Included", "Best For": "Value seekers" } },
  { id: "p17", category: "entertainment-hobbies", title: "Gardening Starter Kit", description: "Weekend hobby kit with seeds, soil mix and planters.", rating: 4.1, price: "₹1,199", cta: "Buy Now", badge: "Trending", location: "Pune", tags: ["Buy", "Learn"], specs: { "Kit Items": "12", "Skill Level": "Beginner", "Guidebook": "Included", "Best For": "Home hobbyists" } },
  { id: "p18", category: "food-lifestyle", title: "Carrots Vegan Cafe Hyderabad", description: "Plant-based dining with curated tasting menu options.", rating: 4.7, price: "₹1,200 for two", cta: "Book Now", badge: "Top Pick", location: "Hyderabad", tags: ["Book"], specs: { "Cuisine": "Vegan", "Avg Cost": "₹600/person", "Delivery": "Yes", "Best For": "Healthy dining" } },
  { id: "p19", category: "food-lifestyle", title: "Wakao Foods Subscription Box", description: "Jackfruit-based vegan foods delivered monthly.", rating: 4.3, price: "₹1,799/month", cta: "Buy Now", badge: "Trending", location: "Goa", tags: ["Buy", "Learn"], specs: { "Items per Box": "8", "Diet": "Plant-based", "Shelf Life": "6 months", "Best For": "Vegan households" } },
  { id: "p20", category: "food-lifestyle", title: "MyGlamm Makeup Kit", description: "Daily glam essentials with skincare-friendly formulation.", rating: 4.4, price: "₹2,299", cta: "Buy Now", badge: "Sponsored", location: "Pan India", tags: ["Buy", "Compare"], specs: { "Products": "10", "Skin Type": "All", "Cruelty Free": "Yes", "Best For": "Everyday use" } },
];

export const trendingSearches = [
  "Best meditation apps under ₹2000",
  "Auto vs Semi-auto washing machine",
  "Restaurants in Hyderabad",
  "IELTS vs TOEFL coaching",
  "Rishikesh rafting packages",
  "Hotstar vs Netflix India",
  "Healthy meal plans for diabetes",
];

export const popularComparisons = [
  "Auto vs Semi-auto washing machine",
  "IELTS vs TOEFL",
  "Netflix vs Prime Video",
  "Zerodha vs Groww",
  "Hotstar vs Netflix India",
];
