# QuickBite Canteen Ordering App

![QuickBite Demo](https://loremflickr.com/800/400/food,app,ui)
*<p align="center">A clean and modern interface for quick food ordering.</p>*

QuickBite is a modern, responsive web application for ordering food from the nearest college canteen. It uses your device's location to find the closest canteen, displays its menu of delicious vegetarian Indian dishes, and allows for a seamless ordering experience right from your browser.

## ✨ Features

-   **📍 Geolocation-based Canteen Finder:** Automatically detects and suggests the nearest canteen to your current location.
-   **🍛 Interactive Menu:** Browse a dynamic menu with item descriptions, prices in INR (₹), and relevant images.
-   **🛒 Simple Shopping Cart:** Easily add/remove items and adjust quantities in a slide-over cart panel.
-   **✅ One-Click Checkout:** Place your order with a single click and receive instant confirmation.
-   **📱 Responsive Design:** A mobile-first design that looks and works great on any device, from phones to desktops.
-   **🕊️ Lightweight & Fast:** Built with modern tools for a snappy user experience.

## 🛠️ Tech Stack

-   **Frontend:** [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Icons:** Custom SVG components, inspired by Heroicons.
-   **Backend (Simulated):** The current version uses a mock service to simulate API calls for fetching canteens and placing orders.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (which includes `npm`) installed on your system. Version 18.x or higher is recommended.

### Installation & Setup

1.  **Download the project files**
    Download all the source code files (`.tsx`, `.ts`, `.html`, etc.) and place them in a new directory on your machine.

2.  **Navigate to the project directory**
    Open your terminal or command prompt and change into the project's root folder.
    ```bash
    cd path/to/your/project
    ```

3.  **Install dependencies**
    This project is configured to run in an environment where dependencies like React are pre-loaded. For local development, you would typically need a `package.json` file and run `npm install`. If you are setting this up from scratch, you would initialize a new project:
    ```bash
    # For a Vite-based setup (recommended)
    npm create vite@latest . -- --template react-ts
    npm install
    ```
    Then, you would replace the generated `src` files with the ones from this project.

4.  **Run the development server**
    If you've set up a local project with a tool like Vite, you can start the development server:
    ```bash
    npm run dev
    ```

5.  **Open in browser**
    The terminal will display a local URL (usually `http://localhost:5173`). Open this URL in your web browser to see the app live!

> **Note:** The application requires location permissions to find the nearest canteen. Please make sure to "Allow" location access when your browser prompts you.

## 📁 Project Structure

The project is organized to keep the code modular and easy to maintain:

```
/
├── src/
│   ├── components/      # Reusable React components (Button, Cart, Header, etc.)
│   ├── services/        # Mock API services (e.g., firebaseService.ts)
│   ├── utils/           # Utility functions (e.g., geolocation.ts)
│   ├── App.tsx          # Main application component with state management and view logic
│   ├── index.tsx        # Entry point for the React application
│   └── types.ts         # TypeScript type definitions and interfaces
├── index.html           # Main HTML file
└── README.md
```

## 🔮 Future Enhancements

This project serves as a strong foundation. Here are some potential features for future versions:

-   [ ] **Full Firebase/Backend Integration:** Replace the mock service with a real backend for managing canteens, menus, and orders.
-   [ ] **User Authentication:** Allow users to sign up, log in, and save their order history.
-   [ ] **Real-time Order Tracking:** Provide live updates on the order status (e.g., "Preparing," "Ready for Pickup").
-   [ ] **Payment Gateway Integration:** Implement online payments using services like Stripe or Razorpay.
-   [ ] **Search and Filter:** Add functionality to search for specific menu items or filter by category.
