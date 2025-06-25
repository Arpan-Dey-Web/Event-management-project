# 🎉 Event Explorer – A Local Event Discovery Platform

**Event Explorer** is a vibrant, urban-themed Single Page Application (SPA) that empowers users to **discover**, **explore**, and **reserve seats** for thrilling local events — from tech summits and art exhibits to sports tournaments and creative workshops. ✨

🚀 Built with **React** and **Firebase**, this platform invites the community to engage with local culture, learning, and celebration.

🌐 **Live URL**: [👉 Visit Event Explorer](https://b11-assaignment-9.netlify.app/)

---

## 🌟 Key Features

### 🔐 Authentication

- ✅ Email/Password login and registration via **Firebase Auth**
- ✅ **Google Sign-In** integration
- ✅ Password validation:
  - Must include **uppercase**, **lowercase**, and be at least **6 characters**
- ✅ **Show/Hide password** toggle
- ✅ **Forget Password** feature (⚠️ Email verification intentionally skipped)

---

### 🛡️ Protected Routes

- 🔒 **Event Details** – view full event info
- 🔒 **My Profile** – edit profile (name & photo)
- 🔒 **Extra Route** – one additional meaningful private page
- 🔁 **Auto-login** on refresh using `onAuthStateChanged`

---

### 🏠 Main Pages

- 🖼️ **Home Page**:
  - 🎞️ Swiper Slider (5 slides)
  - 🗓️ Upcoming Events (min. 6 JSON-based cards)
  - ❓ FAQ Section
- 📄 **Event Details Page**:
  - Route-based event display
  - 📝 Reservation form with name & email
  - ✅ Confirmation toast on submit
- 👤 **My Profile Page**:
  - Edit and update `name` and `photoURL` using `updateProfile()`
- 🧭 **404 Not Found Page**
- ➕ **Extra Protected Route**

---

## 💅 UI & Experience

- 💻 **Fully Responsive** – Mobile | Tablet | Desktop
- 🎨 Urban-themed, interactive design
- 🌀 **AOS animations** on scroll
- 🔄 Loader during auth state sync
- ✨ Tooltips, hover effects, and polished transitions

---

## 📦 Packages Used

| Package        | Purpose                          |
| -------------- | -------------------------------- |
| `firebase`     | Auth & configuration             |
| `react-router` | Routing                          |
| `sweetalert2`  | Alerts                           |
| `swiper`       | Slider for home                  |
| `aos`          | Animate On Scroll                |
| `tailwindcss`  | Utility-first responsive styling |
| `daisyui`      | Component library for Tailwind   |

---

## ⚙️ Tech Stack

| Technology                    | Role                            |
| ----------------------------- | ------------------------------- |
| **React**                     | UI & SPA Framework              |
| **Firebase**                  | Auth, Hosting, Profile Handling |
| **Tailwind CSS / Custom CSS** | Styling & responsiveness        |
| **Netlify**                   | App hosting & live deployment   |

⚙️ Installation Steps

# 1. Clone the project
git clone https://github.com/your-username/event-explorer.git

# 2. Go into the project folder
cd event-explorer

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
🔑 Firebase Config Setup
Root ফোল্ডারে একটি .env ফাইল তৈরি করুন

নিচের কোড বসিয়ে আপনার Firebase থেকে তথ্য বসান:

VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_sender_id
VITE_APPID=your_firebase_app_id
📌 Firebase config পাবেন: Firebase Console → Project Settings → General → SDK setup
✅ Run Success
লোকাল সার্ভার রান হলে এই লিংকে খুলবে:
👉 http://localhost:5173
