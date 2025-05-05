Assignment Category: Assignment-09_category_Jasmine

🚩🚩🚩update: All the updates will be declared here.

Requirements (Video: b11-a9-category-3.mp4)

Event Explorer – A Local Event Discovery Platform
Project Theme

🌸This project centers around creating a platform that enables users to discover, explore, and get details about upcoming local events such as conferences, workshops, sports events, art exhibitions, and more. Users can log in, browse events, view detailed info, and leave feedback or ratings for events they attend.

Ensure the Following things to get 100% mark

🌸GitHub Commits: Include at least 10 meaningful commits with descriptive messages.
Readme.md: Include a README file with the project name, purpose, live URL, key features, and any npm packages you have used.

🌸Responsiveness: Ensure the website is fully responsive on mobile, tablet, and desktop.

🌸Environment Variables: Secure Firebase configuration keys using environment variables.🌸
🌸Unique Design: Create a vibrant, urban-themed UI with emphasis on user engagement.
🌸Host your Application: You can host deployment systems like Netlify, surge, and Firebase. As you develop a single-page application
🌸ensure that the page doesn't throw any error on reloading from any routes.  
🌸Add authorized domain to Firebase if you use Netlify / surge

Main Requirements
Layout Structure

🌸Navbar: A navbar, which will contain the Website name, Home, and My Profile (challenges requirements 1). Active routes will be implemented on the navbar.
🌸If a user is logged in, the user image will show on the Navbar and When you hover over the user image it will show the user name.
🌸If the user is not logged in it will show a login button.  
So if a user is logged in you will show the user image and a logout button. If you click on the logout button make sure you have logged out.

🌸Main Section: Main Section will show different pages based on routes.  
🌸Footer: A Footer with all relevant information and eye-catching design (Links to terms and conditions, privacy policy, and social media accounts.)

💡Make sure the Navbar and Footer are showing on all pages without an Error/404 page.

JSON Data Generation

Create your JSON data and host the image on imgbb/postimges

Home

🌸The home page will have these sections — Slider, Upcoming Events, & 2 extra sections
🌸Slider: Add a slider (Daisy UI slider or Swiper slider) with a minimum of 3 slides.
🌸Upcoming Events Section: In the upcoming events section you need to create a JSON minimum of 6 data. You need to show some data on the card layout on the home page.

Each event card will contain - JSON Data:
thumbnail,
name
Category (e.g., Tech, Art)
date
location
Entry fee
and a “View More” button.

( and other info what you want to show on the card is totally up to you)

🌸Event Details Page: (Protected)
When the user clicks the “View More” button it takes the user to the Event Details page. This page will be a protected route and ensure that the private route moves to the login page if the user is not logged in. You need to show all the information about the selected event.

🌸On this page, Include a form to reserve a seat, containing the following input fields:
Name
Email

And add a “Reserve Seat” button to submit the form. You don’t need to store the data in localStorage or database. Just show a successful message on form submission.

💡The user shouldn't be redirected to the login page after you reload a page of the private route.

Authentication

🌸Login Page: When you click the login button on the navbar /protected routes it redirects to the login page.
You have to use a password and email-based authentication to log in. The login page will have-  
Email
Password
Google login,
A link that will redirect to the Register page

🌸Register Page: You have to use a password and email-based authentication to register. The Register page will have the following -
Name
Email
photoURL
password  
🌸A Link that will redirect to the login page
Google Login  
 For password verification you need to follow this -  
🌸Must have an Uppercase letter in the password
🌸Must have a Lowercase letter in the password  
🌸Length must be at least 6 character

⚠️Show all the error and success messages by using toast/sweet alert.

💡Don’t implement email verification or forget password method as it will inconvenience the examiner. If you want, you can add these after receiving the assignment result.

Other Requirements

🌸404 page: Create a 404 page/ not found page.
🌸Extra route: Add 1 more extra route to your website. This route should be private and protected, and its contents should be meaningful and relevant.

🌸Dynamic Title: You need to implement a dynamic title for each page.

🌸Once a user is logged in, user information will show on the navbar even if he/she reloads the website, this info will not disappear.
🌸You can show a loader when the logged-in user info is in a loading state.
🌸You can implement this using Firebase's onAuthStateChange method.

            🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸Challenges🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸

🌸My Profile: Create a protected route where, after logging in, users can see their information like- name, email, and photoURL and there will be a form with 2 input fields for name and photoURL.
🌸Users can edit the name and photoURL and save the changes. This "saving" process uses Firebase's updateProfile() method to update the user's information stored securely in Firebase.
🌸Implement show and hide passwords on the registration page. By default, it won’t show the password, but when you click on the “Eye” icon, it will. In this way, you need to toggle.

🌸Implement any of 1 packages from the following list:
Swiper slider
Aos animation

🌸Forget Password
Make your forgot password feature functional. Clicking "forget password" redirects the user to the forget password page, containing a form with an email field and a reset password button.
🌸🌸🌸🌸🌸Suppose a user enters an email address on the login page. Show the email also in the forget password form.
🌸On clicking the reset button. Redirect the user to Gmail.

What to Submit
Your Github Repo Link :
Your Live Link :
