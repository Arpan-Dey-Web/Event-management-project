Color Hex Code Where to Use
🟦 Electric Blue #2979FF - Main buttons (Book Now, Register)

- Links and hover effects
- Header or navigation bar
  🟠 Coral Orange #FF6B6B - Call-to-action highlights
- Notification badges (e.g. “New”, “Hot”)
- Icons or calendar dates
  ⚫ Dark Charcoal #1E1E2F - Website background
- Footer
- Banner background
  ⚪ Soft White #F5F5F5 - Main text and headings
- Form labels
- Button text
  🟤 Slate Gray #2F2F3B - Card backgrounds (event cards, user profiles)
- Sidebars
- Popups or overlays
  💚 Neon Green #39FF14 - Glow effects (hover or loading)
- Status indicators (“Live”, “Upcoming”)
- Small animations or highlight outlines
  🟣 Violet Gradient (Optional) #7F00FF → #E100FF - Hero section background
- Overlay gradients
- Hover or transition effects

Assignment Category: Assignment-09_category_Jasmine

🚩🚩update: All the updates will be declared here.  
You need to implement forget password method, but skip email verification.

Requirements (Video: b11-a9-category-3.mp4)
Event Explorer – A Local Event Discovery Platform
Project Theme
This project centers around creating a platform that enables users to discover, explore, and get details about upcoming local events such as conferences, workshops, sports events, art exhibitions, and more. Users can log in, browse events, view detailed info, and leave feedback or ratings for events they attend.

Ensure the Following things to get 100% mark

✅GitHub Commits: Include at least 10 meaningful commits with descriptive messages.
✅Readme.md: Include a README file with the project name, purpose, live URL, key features, and any npm packages you have used.
✅Responsiveness: Ensure the website is fully responsive on mobile, tablet, and desktop.
✅Environment Variables: Secure Firebase configuration keys using environment variables.⏯️
✅Unique Design: Create a vibrant, urban-themed UI with emphasis on user engagement.
✅Host your Application: You can host deployment systems like Netlify, surge, and Firebase. As you develop a single-page application
✅ensure that the page doesn't throw any error on reloading from any routes.
✅Add authorized domain to Firebase if you use Netlify / surge

Main Requirements
Layout Structure

✅Navbar: A navbar, which will contain the Website name, Home, and My Profile (challenges requirements 1). Active routes will be implemented on the navbar.⏯️
✅If a user is logged in, the user image will show on the Navbar and When you hover over the user image it will show the user name.⏯️
✅If the user is not logged in it will show a login button. ⏯️
✅So if a user is logged in you will show the user image and a logout button. If you click on the logout button make sure you have logged out.⏯️

✅Main Section: Main Section will show different pages based on routes. ⏯️
✅Footer: A Footer with all relevant information and eye-catching design (Links to terms and conditions, privacy policy, and social media accounts.)

✅Make sure the Navbar and Footer are showing on all pages without an Error/404 page.⏯️

JSON Data Generation

✅Create your JSON data and host the image on imgbb/postimges ⏯️

Home

✅The home page will have these sections — Slider, Upcoming Events, & 2 extra sections ⏯️
✅Slider: Add a slider (Daisy UI slider or Swiper slider) with a minimum of 3 slides. ⏯️
✅Upcoming Events Section: In the upcoming events section you need to create a JSON minimum of 6 data. You need to show some data on the card layout on the home page. ⏯️

✅Each event card will contain - JSON Data:
thumbnail,
name
Category (e.g., Tech, Art)
date
location
Entry fee
and a “View More” button. ⏯️

( and other info what you want to show on the card is totally up to you)💥💥💥

✅Event Details Page: (Protected) ⏯️
✅When the user clicks the “View More” button it takes the user to the Event Details page. This page will be a protected route and ensure that the private route moves to the login page if the user is not logged in. You need to show all the information about the selected event.

✅On this page, Include a form to reserve a seat, containing the following input fields: ⏯️
Name
Email

✅And add a “Reserve Seat” button to submit the form. You don’t need to store the data in localStorage or database. Just show a successful message on form submission. ⏯️

✅The user shouldn't be redirected to the login page after you reload a page of the private route. ⏯️

Authentication

✅Login Page: When you click the login button on the navbar /protected routes it redirects to the login page.⏯️
✅You have to use a password and email-based authentication to log in. The login page will have-  
Email
Password
✅Google login,⏯️
✅A link that will redirect to the Register page ⏯️

✅Register Page: You have to use a password and email-based authentication to register. The Register page will have the following -
Name ⏯️
Email ⏯️
photoURL ⏯️
password ⏯️
✅A Link that will redirect to the login page ⏯️
✅Google Login ⏯️
For password verification you need to follow this - ⏯️
✅Must have an Uppercase letter in the password⏯️
✅Must have a Lowercase letter in the password ⏯️
✅Length must be at least 6 character⏯️

✅⚠️Show all the error and success messages by using toast/sweet alert.⏯️

❌💡Don’t implement email verification method as it will inconvenience the examiner. If you want, you can add these after receiving the assignment result.

Other Requirements

✅404 page: Create a 404 page/ not found page.⏯️
✅Extra route: Add 1 more extra route to your website. This route should be private and protected, and its contents should be meaningful and relevant.⏯️

✅Dynamic Title: You need to implement a dynamic title for each page.

✅Once a user is logged in, user information will show on the navbar even if he/she reloads the website, this info will not disappear. You can show a loader when the logged-in user info is in a loading state. You can implement this using Firebase's onAuthStateChange method.⏯️

Challenges💥💥💥

✅My Profile: Create a protected route where, after logging in, users can see their information like- name, email, and photoURL and there will be a form with 2 input fields for name and photoURL. Users can edit the name and photoURL and save the changes. This "saving" process uses Firebase's updateProfile() method to update the user's information stored securely in Firebase. ⏯️
✅Implement show and hide passwords on the registration page. By default, it won’t show the password, but when you click on the “Eye” icon, it will. In this way, you need to toggle. ⏯️
✅Implement any of 1 packages from the following list: ⏯️

✅Swiper slider
✅Aos animation ⏯️

✅Forget Password
Make your forgot password feature functional. Clicking "forget password" redirects the user to the forget password page, containing a form with an email field and a reset password button.
Suppose a user enters an email address on the login page. Show the email also in the forget password form.
On clicking the reset button. Redirect the user to Gmail.

<!--
What to Submit
Your Github Repo Link :
Your Live Link :
 -->

<!-- অ্যাসাইনমেন্ট বিভাগ: অ্যাসাইনমেন্ট-09_category_Jasmine

🚩🚩আপডেট: সমস্ত আপডেট এখানে ঘোষণা করা হবে।

আপনাকে পাসওয়ার্ড ভুলে যাওয়ার পদ্ধতি প্রয়োগ করতে হবে, কিন্তু ইমেল যাচাইকরণ এড়িয়ে যেতে হবে।

প্রয়োজনীয়তা (ভিডিও: b11-a9-category-3.mp4)
ইভেন্ট এক্সপ্লোরার - একটি স্থানীয় ইভেন্ট আবিষ্কার প্ল্যাটফর্ম
প্রকল্প থিম
এই প্রকল্পটি এমন একটি প্ল্যাটফর্ম তৈরির উপর কেন্দ্রীভূত যা ব্যবহারকারীদের আসন্ন স্থানীয় ইভেন্ট যেমন সম্মেলন, কর্মশালা, ক্রীড়া ইভেন্ট, শিল্প প্রদর্শনী এবং আরও অনেক কিছু আবিষ্কার, অন্বেষণ এবং বিশদ জানতে সক্ষম করে। ব্যবহারকারীরা লগ ইন করতে, ইভেন্টগুলি ব্রাউজ করতে, বিস্তারিত তথ্য দেখতে এবং তাদের অংশগ্রহণকারী ইভেন্টগুলির জন্য প্রতিক্রিয়া বা রেটিং দিতে পারেন।

১০০% নম্বর পেতে নিম্নলিখিত বিষয়গুলি নিশ্চিত করুন

GitHub কমিট: বর্ণনামূলক বার্তা সহ কমপক্ষে ১০টি অর্থপূর্ণ কমিট অন্তর্ভুক্ত করুন।

Readme.md: প্রকল্পের নাম, উদ্দেশ্য, লাইভ URL, মূল বৈশিষ্ট্য এবং আপনার ব্যবহৃত যেকোনো npm প্যাকেজ সহ একটি README ফাইল অন্তর্ভুক্ত করুন।

প্রতিক্রিয়াশীলতা: মোবাইল, ট্যাবলেট এবং ডেস্কটপে ওয়েবসাইটটি সম্পূর্ণরূপে প্রতিক্রিয়াশীল কিনা তা নিশ্চিত করুন।

পরিবেশগত পরিবর্তনশীল: পরিবেশগত পরিবর্তনশীল ব্যবহার করে নিরাপদ ফায়ারবেস কনফিগারেশন কী।

অনন্য নকশা: ব্যবহারকারীর অংশগ্রহণের উপর জোর দিয়ে একটি প্রাণবন্ত, নগর-থিমযুক্ত UI তৈরি করুন।

আপনার অ্যাপ্লিকেশন হোস্ট করুন: আপনি Netlify, surge এবং Firebase এর মতো স্থাপনা সিস্টেম হোস্ট করতে পারেন। আপনি যখন একটি একক-পৃষ্ঠার অ্যাপ্লিকেশন তৈরি করেন

নিশ্চিত করুন যে পৃষ্ঠাটি কোনও রুট থেকে পুনরায় লোড করার সময় কোনও ত্রুটি না ফেলে।

যদি আপনি Netlify / surge ব্যবহার করেন তবে Firebase-এ অনুমোদিত ডোমেন যুক্ত করুন

প্রধান প্রয়োজনীয়তা
লেআউট কাঠামো

Navbar: একটি navbar, যাতে ওয়েবসাইটের নাম, হোম এবং আমার প্রোফাইল থাকবে (চ্যালেঞ্জের প্রয়োজনীয়তা 1)। navbar-এ সক্রিয় রুটগুলি বাস্তবায়িত হবে।

যদি কোনও ব্যবহারকারী লগ ইন করেন, তাহলে ব্যবহারকারীর চিত্র Navbar-এ প্রদর্শিত হবে এবং আপনি যখন ব্যবহারকারীর চিত্রের উপর কার্সার রাখবেন তখন এটি ব্যবহারকারীর নাম প্রদর্শন করবে।

ব্যবহারকারী লগ ইন না থাকলে এটি একটি লগইন বোতাম প্রদর্শন করবে।

সুতরাং যদি কোনও ব্যবহারকারী লগ ইন করেন তবে আপনি ব্যবহারকারীর চিত্র এবং একটি লগআউট বোতাম প্রদর্শন করবেন। লগআউট বোতামে ক্লিক করলে নিশ্চিত হয়ে নিন যে আপনি লগআউট করেছেন।

প্রধান বিভাগ: প্রধান বিভাগ রুটের উপর ভিত্তি করে বিভিন্ন পৃষ্ঠা দেখাবে।

পাদলেখ: সমস্ত প্রাসঙ্গিক তথ্য এবং আকর্ষণীয় নকশা সহ একটি পাদলেখ (নিয়মাবলী এবং শর্তাবলী, গোপনীয়তা নীতি এবং সোশ্যাল মিডিয়া অ্যাকাউন্টের লিঙ্ক।)

💡নিশ্চিত করুন যে Navbar এবং Footer কোনও ত্রুটি/404 পৃষ্ঠা ছাড়াই সমস্ত পৃষ্ঠায় প্রদর্শিত হচ্ছে।

JSON ডেটা জেনারেশন

আপনার JSON ডেটা তৈরি করুন এবং imgbb/postimges-এ ছবিটি হোস্ট করুন

হোম

হোম পেজে এই বিভাগগুলি থাকবে — স্লাইডার, আসন্ন ইভেন্ট এবং 2টি অতিরিক্ত বিভাগ
স্লাইডার: কমপক্ষে 3টি স্লাইড সহ একটি স্লাইডার (ডেইজি UI স্লাইডার বা সোয়াইপার স্লাইডার) যোগ করুন।

আসন্ন ইভেন্ট বিভাগ: আসন্ন ইভেন্ট বিভাগে আপনাকে কমপক্ষে 6টি ডেটার একটি JSON তৈরি করতে হবে। আপনাকে হোম পেজে কার্ড লেআউটের কিছু ডেটা দেখাতে হবে।

প্রতিটি ইভেন্ট কার্ডে থাকবে - JSON ডেটা:
থাম্বনেইল,
নাম
বিভাগ (যেমন, প্রযুক্তি, শিল্প)
তারিখ
অবস্থান
প্রবেশ ফি
এবং একটি “আরও দেখুন” বোতাম।

(এবং কার্ডে আপনি কী দেখাতে চান তা সম্পূর্ণ আপনার উপর নির্ভর করে)

ইভেন্টের বিবরণ পৃষ্ঠা: (সুরক্ষিত)
যখন ব্যবহারকারী “আরও দেখুন” বোতামে ক্লিক করেন তখন এটি ব্যবহারকারীকে ইভেন্টের বিবরণ পৃষ্ঠায় নিয়ে যায়। এই পৃষ্ঠাটি একটি সুরক্ষিত রুট হবে এবং নিশ্চিত করুন যে ব্যবহারকারী লগ ইন না থাকলে ব্যক্তিগত রুটটি লগইন পৃষ্ঠায় চলে যায়। আপনাকে নির্বাচিত ইভেন্ট সম্পর্কে সমস্ত তথ্য দেখাতে হবে।

এই পৃষ্ঠায়, একটি আসন সংরক্ষণ করার জন্য একটি ফর্ম অন্তর্ভুক্ত করুন, যার মধ্যে নিম্নলিখিত ইনপুট ক্ষেত্রগুলি থাকবে:

নাম
ইমেল

এবং ফর্ম জমা দেওয়ার জন্য একটি “রিজার্ভ সিট” বোতাম যুক্ত করুন। আপনাকে লোকাল স্টোরেজ বা ডাটাবেসে ডেটা সংরক্ষণ করার দরকার নেই। ফর্ম জমা দেওয়ার সময় কেবল একটি সফল বার্তা দেখান।

💡ব্যক্তিগত রুটের একটি পৃষ্ঠা পুনরায় লোড করার পরে ব্যবহারকারীকে লগইন পৃষ্ঠায় পুনঃনির্দেশিত করা উচিত নয়।

প্রমাণীকরণ

লগইন পৃষ্ঠা: যখন আপনি নেভিবার/সুরক্ষিত রুটে লগইন বোতামে ক্লিক করেন তখন এটি লগইন পৃষ্ঠায় পুনঃনির্দেশিত হয়।
লগইন করার জন্য আপনাকে একটি পাসওয়ার্ড এবং ইমেল-ভিত্তিক প্রমাণীকরণ ব্যবহার করতে হবে। লগইন পৃষ্ঠায় থাকবে-
ইমেল
পাসওয়ার্ড
গুগল লগইন,
একটি লিঙ্ক যা নিবন্ধন পৃষ্ঠায় পুনঃনির্দেশিত হবে

নিবন্ধন পৃষ্ঠা: নিবন্ধন করার জন্য আপনাকে একটি পাসওয়ার্ড এবং ইমেল-ভিত্তিক প্রমাণীকরণ ব্যবহার করতে হবে। নিবন্ধন পৃষ্ঠায় নিম্নলিখিতগুলি থাকবে -
নাম
ইমেল
ছবির URL
পাসওয়ার্ড
একটি লিঙ্ক যা লগইন পৃষ্ঠায় পুনঃনির্দেশিত হবে
গুগল লগইন
পাসওয়ার্ড যাচাইকরণের জন্য আপনাকে এটি অনুসরণ করতে হবে -
পাসওয়ার্ডে একটি বড় হাতের অক্ষর থাকতে হবে
পাসওয়ার্ডে একটি ছোট হাতের অক্ষর থাকতে হবে
দৈর্ঘ্য কমপক্ষে 6 অক্ষরের হতে হবে

⚠️টোস্ট/সুইট সতর্কতা ব্যবহার করে সমস্ত ত্রুটি এবং সাফল্যের বার্তা দেখান।

💡ইমেল যাচাইকরণ পদ্ধতি প্রয়োগ করবেন না কারণ এটি পরীক্ষককে অসুবিধার সম্মুখীন করবে। আপনি যদি চান, আপনি অ্যাসাইনমেন্ট ফলাফল পাওয়ার পরে এগুলি যোগ করতে পারেন।

অন্যান্য প্রয়োজনীয়তা

৪০৪ পৃষ্ঠা: একটি ৪০৪ পৃষ্ঠা/পাওয়া যায়নি এমন পৃষ্ঠা তৈরি করুন।

অতিরিক্ত রুট: আপনার ওয়েবসাইটে আরও একটি অতিরিক্ত রুট যোগ করুন। এই রুটটি ব্যক্তিগত এবং সুরক্ষিত হওয়া উচিত এবং এর বিষয়বস্তু অর্থপূর্ণ এবং প্রাসঙ্গিক হওয়া উচিত।

গতিশীল শিরোনাম: প্রতিটি পৃষ্ঠার জন্য আপনাকে একটি গতিশীল শিরোনাম প্রয়োগ করতে হবে।

একবার ব্যবহারকারী লগ ইন হয়ে গেলে, ব্যবহারকারীর তথ্য নেভবারে প্রদর্শিত হবে, এমনকি যদি সে ওয়েবসাইটটি পুনরায় লোড করে, তবে এই তথ্য অদৃশ্য হবে না। লগ-ইন করা ব্যবহারকারীর তথ্য লোডিং স্ট্যাটে থাকলে আপনি একটি লোডার দেখাতে পারেন। -->
