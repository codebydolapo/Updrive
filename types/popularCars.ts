// types/popularCars.ts
interface PopularCars {
  id: number;
  name: string;
  brand: string; // New: Car brand
  model: string; // New: Specific model name
  year: number; // New: Manufacturing year
  price: string;
  location: string;
  image: string; // Main display image
  images: string[]; // Additional gallery images
  manual: boolean;
  seaters: number;
  tankCapacity: number; // in liters
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid'; // New: Type of fuel
  engine: string; // New: Engine details (e.g., "2.0L Turbo I4")
  mileage: number; // New: Current mileage (e.g., in km or miles)
  transmission: 'Manual' | 'Automatic'; // New: More descriptive transmission
  driveTrain: 'FWD' | 'RWD' | 'AWD' | '4WD'; // New: Front-wheel, Rear-wheel, All-wheel, Four-wheel drive
  description: string; // New: More detailed description
  features: string[]; // New: Key features or amenities (e.g., "GPS", "Bluetooth", "Sunroof")
  rating: number; // New: Average user rating (e.g., 1-5 stars)
  reviewsCount: number; // New: Number of reviews
  background: string; // Tailwind CSS background class (consider if still needed, or derive from brand/type)
  lat: number;
  lng: number;
}

export default PopularCars;