# 🍕 FoodDelivery – Food Delivery Web App

FoodDelivery is a fully functional food ordering web application built with **React.js**, **Redux**, and integrated with the live Swiggy API. It uses advanced React concepts like **Hooks** and **Higher-Order Components (HOCs)** to deliver an intuitive and seamless user experience.

---

## 🚀 Features

- 🏪 Real-time restaurant listings from Swiggy API  
- 🛒 Cart management using Redux  
- 🔄 Live updates of menus and offers  
- ⚛️ Advanced React features like Hooks and HOCs  
- 🎨 Responsive and clean UI with HTML, CSS, and JavaScript  
- 🌐 CORS support for accessing Swiggy public API  

---

## 🛠️ Tech Stack

| Frontend           | State Management | Styling     | Other Tools           |
|--------------------|------------------|-------------|------------------------|
| React.js           | Redux             | CSS, HTML   | JavaScript (ES6+), Vite |

---

## 📁 Folder Structure

FoodDelivery/
├── public/ # Static files (index.html, favicon, etc.)
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Pages like Home, Cart, Restaurant Detail
│ ├── utils/ # Helper functions
│ ├── redux/ # Redux store and slices
│ ├── App.js
│ └── main.js
├── .gitignore
├── package.json
└── README.md

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Gauravp7717/FoodDelivery.git
cd FoodDelivery
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Development Server
bash
Copy
Edit
npm run dev
The app should now be running on:

arduino
Copy
Edit
http://localhost:5173
🔧 Configuration
To access the Swiggy Live API, follow these steps:

Install a CORS extension in your browser (like "Allow CORS: Access-Control-Allow-Origin")

Enable the plugin before starting the app

No additional API keys are required since the project uses publicly available endpoints from Swiggy

⚠️ Note: Direct access to Swiggy APIs is restricted without proper CORS headers, which is why the plugin is required during local development.

🙌 Credits
Frontend Developer: Gaurav Patil

Tools Used: React.js, Redux, HTML, CSS, JavaScript, Vite
