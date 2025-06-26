// data/popularCars.ts
import PopularCars from "@/types/popularCars"; // Assuming you have this type defined as discussed earlier

const popularCars: PopularCars[] = [
  {
    id: 8282,
    name: "A4 Quattro",
    brand: "Audi",
    model: "A4",
    year: 2022,
    price: "99",
    location: "Madrid, Spain",
    image: "/images/audiv13.png", // Ensure you have this image
    images: ["/images/audi/1.webp", "/images/audi/2.jpg", "/images/audi/3.jpg", "/images/audi/4.jpg"], // Placeholder images
    manual: false,
    seaters: 5,
    tankCapacity: 54,
    fuelType: 'Petrol',
    engine: "2.0L TFSI I4",
    mileage: 15000,
    transmission: 'Automatic',
    driveTrain: 'AWD',
    description: "Experience luxury and performance with the Audi A4 Quattro. Perfect for city drives and long-distance travel, offering exceptional comfort and advanced features. Its sophisticated design turns heads wherever it goes.",
    features: ["GPS Navigation", "Leather Seats", "Panoramic Sunroof", "Lane Assist", "Heated Steering Wheel"],
    rating: 4.8,
    reviewsCount: 125,
    background: "bg-blue-200",
    lat: 40.4637,
    lng: -3.7492,
  },
  {
    id: 9283,
    name: "Kona Electric",
    brand: "Hyundai",
    model: "Kona",
    year: 2023,
    price: "45",
    location: "Brussels, Belgium",
    image: "/images/hyundaisf.png", // Ensure you have this image
    images: ["/images/hyundai/1.jpg", "/images/hyundai/2.jpg", "/images/hyundai/3.jpg", "/images/hyundai/4.jpg"], // Placeholder images
    manual: false,
    seaters: 5,
    tankCapacity: 0,
    fuelType: 'Electric',
    engine: "Permanent Magnet Synchronous Motor",
    mileage: 8000,
    transmission: 'Automatic',
    driveTrain: 'FWD',
    description: "The eco-friendly Hyundai Kona Electric offers a smooth and quiet ride, ideal for urban commuting. Enjoy sustainable travel without compromising on style or features. A true city companion.",
    features: ["Fast Charging", "Heated Seats", "Touchscreen Infotainment", "Parking Sensors", "Smart Key Access"],
    rating: 4.5,
    reviewsCount: 80,
    background: "bg-green-200",
    lat: 50.8503,
    lng: 4.3517,
  },
  {
    id: 2638,
    name: "RAV4 Adventure",
    brand: "Toyota",
    model: "RAV4",
    year: 2021,
    price: "53",
    location: "Abuja, Nigeria",
    image: "/images/SUV.png", // Ensure you have this image
    images: ["/images/toyota/1.png", "/images/toyota/2.jpg", "/images/toyota/3.jpg", "/images/toyota/4.jpg"], // Placeholder images
    manual: false,
    seaters: 5,
    tankCapacity: 55,
    fuelType: 'Petrol',
    engine: "2.5L Dynamic Force I4",
    mileage: 30000,
    transmission: 'Automatic',
    driveTrain: 'AWD',
    description: "The Toyota RAV4 Adventure is a versatile SUV ready for any journey. With its robust design and spacious interior, it's perfect for families and adventurers alike. Conquer any terrain with confidence.",
    features: ["Roof Rails", "Adaptive Cruise Control", "Apple CarPlay", "Reversing Camera", "Blind Spot Monitor"],
    rating: 4.7,
    reviewsCount: 210,
    background: "bg-teal-200",
    lat: 9.0820,
    lng: 8.6753,
  },
  {
    id: 2873,
    name: "Quantum GL",
    brand: "Toyota",
    model: "Hiace",
    year: 2020,
    price: "180",
    location: "Cape Town, South Africa",
    image: "/images/Hiace.png", // Ensure you have this image
    images: ["/images/hiace/1.webp", "/images/hiace/2.jpg", "/images/hiace/3.jpg", "/images/hiace/4.jpg"], // Placeholder images
    manual: true,
    seaters: 15,
    tankCapacity: 70,
    fuelType: 'Diesel',
    engine: "2.8L GD-6 Diesel",
    mileage: 60000,
    transmission: 'Manual',
    driveTrain: 'RWD',
    description: "The Toyota Hiace Quantum GL offers unparalleled space and reliability, making it ideal for group travel or commercial use. A comfortable and powerful choice for your transportation needs.",
    features: ["Air Conditioning", "Power Steering", "Sliding Doors", "ABS Brakes", "Bluetooth Connectivity"],
    rating: 4.2,
    reviewsCount: 95,
    background: "bg-purple-200",
    lat: -33.9249,
    lng: 18.4241,
  },
  {
    id: 92832,
    name: "M2 Competition",
    brand: "BMW",
    model: "M2",
    year: 2020,
    price: "24",
    location: "Rome, Italy",
    image: "/images/bmwm2.png", // Ensure you have this image
    images: ["/images/BMW/1.webp", "/images/BMW/2.jpg", "/images/BMW/3.jpg", "/images/BMW/4.jpg"], // Provided BMW images
    manual: true,
    seaters: 4,
    tankCapacity: 52,
    fuelType: 'Petrol',
    engine: "3.0L TwinPower Turbo I6",
    mileage: 25000,
    transmission: 'Manual',
    driveTrain: 'RWD',
    description: "Unleash the thrill of driving with the BMW M2 Competition. A compact sports car with a powerful engine and precise handling, designed for performance enthusiasts. Pure driving pleasure.",
    features: ["Sport Seats", "Harman Kardon Sound", "M Sport Brakes", "Adaptive Suspension", "Keyless Entry"],
    rating: 4.9,
    reviewsCount: 180,
    background: "bg-pink-200",
    lat: 41.8719,
    lng: 12.5674,
  },
  {
    id: 82839, // Original ID from your commented out array
    name: "i30 Hatchback", // More specific name
    brand: "Hyundai",
    model: "i30",
    year: 2023,
    price: "23",
    location: "Antwerp, Belgium", // Changed location to make it distinct from previous Hyundai
    image: "/images/hyundaisf.png", // Reusing the image for demonstration
    images: ["/images/hyundai/1.jpg", "/images/hyundai/2.jpg", "/images/hyundai/3.jpg", "/images/hyundai/4.jpg"],
    manual: false,
    seaters: 5,
    tankCapacity: 50,
    fuelType: 'Petrol',
    engine: "1.6L MPI I4",
    mileage: 12000,
    transmission: 'Automatic',
    driveTrain: 'FWD',
    description: "The versatile Hyundai i30 Hatchback is perfect for city living and weekend getaways. Enjoy its comfortable interior and efficient performance.",
    features: ["Apple CarPlay/Android Auto", "Rearview Camera", "Cruise Control", "LED Daytime Running Lights"],
    rating: 4.3,
    reviewsCount: 65,
    background: "bg-blue-200",
    lat: 51.2194, // Another point in Belgium (Antwerp)
    lng: 4.4025,
  },
  {
    id: 8289,
    name: "IS 300", // More specific name
    brand: "Lexus",
    model: "IS",
    year: 2021,
    price: "72",
    location: "Tokyo, Japan",
    image: "/images/lexusJaguar.png", // Ensure you have this image
    images: ["/images/lexus/1.png", "/images/lexus/2.jpg", "/images/lexus/3.jpg", "/images/lexus/4.webp"], // Placeholder images
    manual: false,
    seaters: 5,
    tankCapacity: 60,
    fuelType: 'Petrol',
    engine: "2.0L Turbo I4",
    mileage: 18000,
    transmission: 'Automatic',
    driveTrain: 'RWD',
    description: "Experience the refined elegance and smooth performance of the Lexus IS 300. A luxurious sedan designed for comfort and responsive driving.",
    features: ["Mark Levinson Audio", "Heated & Ventilated Seats", "Sunroof", "Lane Departure Alert"],
    rating: 4.6,
    reviewsCount: 150,
    background: "bg-green-200",
    lat: 35.6895,
    lng: 139.6917,
  },
  {
    id: 8349,
    name: "5 Series Sedan", // More specific name
    brand: "BMW",
    model: "5 Series",
    year: 2022,
    price: "82",
    location: "Helsinki, Finland",
    image: "/images/bmwsedan.png", // Ensure you have this image
    images: ["/images/BMWS/1.jpg", "/images/BMWS/2.png", "/images/BMWS/2.jpg", "/images/BMWS/2.webp"], // Placeholder images
    manual: false,
    seaters: 5,
    tankCapacity: 68,
    fuelType: 'Petrol',
    engine: "2.0L TwinPower Turbo I4",
    mileage: 10000,
    transmission: 'Automatic',
    driveTrain: 'RWD',
    description: "The BMW 5 Series Sedan combines sophisticated design with dynamic performance. Perfect for business trips or comfortable long journeys.",
    features: ["Heads-Up Display", "Gesture Control", "Adaptive LED Headlights", "Parking Assistant Plus"],
    rating: 4.7,
    reviewsCount: 110,
    background: "bg-purple-200",
    lat: 60.1699,
    lng: 24.9384,
  },
  // Duplicates from your original array, now with rich data and unique IDs/locations
  {
    id: 82821, // Changed ID
    name: "A6 Avant", // Distinct model for Audi
    brand: "Audi",
    model: "A6",
    year: 2020,
    price: "99",
    location: "Valencia, Spain", // Another point in Spain
    image: "/images/audiv13.png", // Reusing image, ideally unique
    images: ["/images/audi/1.webp", "/images/audi/2.jpg", "/images/audi/3.jpg", "/images/audi/4.jpg"], // New placeholder images
    manual: false,
    seaters: 5,
    tankCapacity: 63,
    fuelType: 'Diesel',
    engine: "3.0L TDI V6",
    mileage: 45000,
    transmission: 'Automatic',
    driveTrain: 'AWD',
    description: "The Audi A6 Avant combines practicality with executive luxury. Enjoy spacious interiors and powerful diesel performance, ideal for families and long hauls.",
    features: ["Power Tailgate", "Virtual Cockpit", "Matrix LED Headlights", "Active Lane Assist"],
    rating: 4.6,
    reviewsCount: 90,
    background: "bg-blue-200",
    lat: 39.4699,
    lng: -0.3774,
  },
  {
    id: 92831, // Changed ID
    name: "Tucson SUV", // Distinct model for Hyundai
    brand: "Hyundai",
    model: "Tucson",
    year: 2024,
    price: "23",
    location: "Ghent, Belgium", // Another point in Belgium
    image: "/images/hyundaisf.png", // Reusing image
    images: ["/images/hyundai/1.jpg", "/images/hyundai/2.jpg", "/images/hyundai/3.jpg", "/images/hyundai/4.jpg"], // New placeholder images
    manual: false,
    seaters: 5,
    tankCapacity: 54,
    fuelType: 'Petrol',
    engine: "2.5L Smartstream I4",
    mileage: 5000,
    transmission: 'Automatic',
    driveTrain: 'FWD',
    description: "The all-new Hyundai Tucson SUV boasts a bold design and advanced safety features. Perfect for families seeking comfort and reliability.",
    features: ["Digital Key", "Panoramic Sunroof", "Heated Rear Seats", "Highway Driving Assist"],
    rating: 4.7,
    reviewsCount: 75,
    background: "bg-green-200",
    lat: 51.0500,
    lng: 3.7167,
  },
  {
    id: 26381, // Changed ID
    name: "Camry Sedan", // Distinct model for Toyota
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    price: "53",
    location: "Lagos, Nigeria", // Lagos, Nigeria
    image: "/images/SUV.png", // Reusing image, ideally unique
    images: ["/images/toyota/1.png", "/images/toyota/2.jpg", "/images/toyota/3.jpg", "/images/toyota/4.jpg"], // New placeholder images
    manual: false,
    seaters: 5,
    tankCapacity: 60,
    fuelType: 'Petrol',
    engine: "2.5L Dynamic Force I4",
    mileage: 7500,
    transmission: 'Automatic',
    driveTrain: 'FWD',
    description: "The Toyota Camry Sedan offers a blend of style, comfort, and efficiency. A reliable choice for daily commutes and executive travel.",
    features: ["Toyota Safety Sense", "Leather-trimmed Seats", "Dual-zone Climate Control", "JBL Audio System"],
    rating: 4.5,
    reviewsCount: 190,
    background: "bg-teal-200",
    lat: 6.5244,
    lng: 3.3792,
  },
  {
    id: 28731, // Changed ID
    name: "Fortuner SUV", // Distinct model for Toyota
    brand: "Toyota",
    model: "Fortuner",
    year: 2022,
    price: "180", // Slightly different price for SUV vs van
    location: "Durban, South Africa", // Another point in South Africa
    image: "/images/Hiace.png", // Reusing image, ideally unique
    images: ["/images/toyota/1.png", "/images/toyota/2.jpg", "/images/toyota/3.jpg", "/images/toyota/4.jpg"], // New placeholder images
    manual: false, // Assuming automatic for this SUV
    seaters: 7, // Common for large SUVs
    tankCapacity: 80, // Larger tank
    fuelType: 'Diesel',
    engine: "2.8L GD-6 Diesel",
    mileage: 28000,
    transmission: 'Automatic',
    driveTrain: '4WD',
    description: "The Toyota Fortuner SUV is a rugged and capable vehicle, perfect for both urban adventures and off-road excursions. Spacious and powerful for any journey.",
    features: ["Off-road Capability", "Third-row Seating", "Hill-start Assist Control", "Downhill Assist Control"],
    rating: 4.8,
    reviewsCount: 160,
    background: "bg-purple-200",
    lat: -29.8587, // Durban, South Africa
    lng: 31.0218,
  },
];

export default popularCars;