# 🚗 UpDrive — Modern Car Rental Application
**UpDrive** is a sleek and modern car rental platform built with **Next.js**, offering users a seamless experience for browsing, selecting, and learning about available vehicles. It emphasizes speed, responsiveness, and a beautiful UI powered by the latest web technologies.

---

## 🌟 Features

* **Extensive Car Catalog**
  Browse a wide range of popular vehicles, each with detailed specifications.

* **Rich Car Details**
  Every car has a dedicated page displaying:

  * Brand, Model, Year
  * Seating Capacity, Fuel Type, Engine Details
  * Mileage, Transmission, Drive Train
  * Tank Capacity
  * Key Features & Amenities
  * Detailed Description
  * User Ratings & Review Counts
  * Interactive image gallery with main preview and thumbnails

* **Google Maps Integration**
  Visualize the exact location of each car on an interactive map.

* **Responsive Design**
  Optimized for mobile, tablet, and desktop devices.

* **User Authentication (via Clerk)**
  Secure and seamless user management and login system.

* **Informative Blog Section**
  Insightful articles and updates under the "About Us" section.

* **Modern UI**
  Built with **Shadcn UI** and **Tailwind CSS** for a visually appealing and cohesive design system.

* **Smooth Animations**
  Integrates **Lottie** animations for delightful UI interactions.

---

## 🚀 Technologies Used
* **Next.js v15.3.3** – React framework for modern web apps
* **React v19.0.0** – Component-based JavaScript UI library
* **TypeScript 5+** – Type-safe development
* **Tailwind CSS v4** – Utility-first CSS framework
* **Clerk + @clerk/nextjs** – Authentication and user management
* **@react-google-maps/api** – React components for Google Maps
* **Lucide React** – Icon library
* **Shadcn UI** – Accessible components powered by Radix and Tailwind
* **Lottie Web** – JSON-based animations
* **Yarn** – Dependency and project management

---

## 📦 Getting Started
Follow these steps to get a local copy running:

### ✅ Prerequisites
Ensure you have the following installed:

* **Node.js** (v18.x or higher)
* **Yarn** (v1.x or v4.x as specified in `package.json`)
* **Google Maps API Key** (from a Google Cloud Project)
* **Clerk.dev** account and API keys

---

### 🔧 Installation
1. **Clone the repository:**

   ```bash
   git clone <your-repository-url>
   cd updrive
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

---

### ⚙️ Environment Variables
Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_Maps_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
# Optional: NEXT_PUBLIC_CLERK_SIGN_IN_URL=...
```

Replace the placeholders with your actual API keys.

---

### 🏃 Running the Development Server
Start the dev server (with **Turbopack**):

```bash
yarn dev
```

Visit `http://localhost:3000` in your browser.

---

### 🚢 Building for Production
To build the app:

```bash
yarn build
```

To run the production server:

```bash
yarn start
```

---

## 📂 Project Structure Highlights
```text
src/
├── app/                     # Next.js App Router pages and layouts
├── data/
│   ├── popularCars.ts       # Array of car objects with detailed info
│   └── blogs.ts             # Blog entries for the About section
├── types/
│   └── popularCars.ts       # TypeScript interface for car objects
public/
└── images/                  # Static assets like car and blog images
```

---

## 🤝 Contributing
Contributions are welcome!
Feel free to open an issue or submit a pull request if you have ideas for improvements or new features.

---

## 📄 License
This project is licensed under the **MIT License**.

