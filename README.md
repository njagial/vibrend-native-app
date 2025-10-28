🧭 Vibrend Travel Agency Mobile Application
Overview

The Vibrend Travel Agency App is a cross-platform mobile application designed to streamline destination discovery, trip booking, and travel experience management for tourists exploring East Africa. Built using React Native with an Express.js + MongoDB backend, the system provides a seamless digital interface for travelers and agencies, enhancing operational efficiency and customer engagement.

Key Features

🗺️ Destination Discovery: Browse and explore curated travel destinations across East Africa.

🎟️ Trip Booking: Reserve and manage travel itineraries with integrated booking functionality.

👤 User Accounts: Secure registration, login, and personalized user dashboards.

💬 Real-time Feedback: Enable users to share experiences and ratings for destinations.

💳 Secure Payments (Future Integration): Planned integration with third-party payment gateways.

🌍 Responsive UI/UX: Optimized interface for both Android and iOS devices.

Technology Stack
Layer	Technology	Description
Frontend	React Native	Cross-platform app framework using JavaScript
Backend	Express.js	RESTful API server handling business logic
Database	MongoDB	Non-relational data store for user and booking data
UI Libraries	React Native Paper, Styled Components	Consistent design system and dynamic styling
Design Tools	Figma, Expo Go	Prototyping, UI visualization, and testing
System Architecture

The application follows a client–server model with a RESTful API as the communication bridge.

[ Mobile App (React Native) ]
          |
          v
[ REST API (Express.js) ]
          |
          v
[ MongoDB Database ]


This modular architecture ensures scalability, maintainability, and secure data handling while enabling incremental feature delivery through Agile sprints.

Installation & Setup
1. Clone the Repository
git clone https://github.com/<your-username>/vibrend-travel-app.git
cd vibrend-travel-app

2. Install backend Dependencies and start server
cd backend
npm install
npm run start
3. Run the Development Server
cd mobile
npm install

If using Expo:

npx expo start


Or for direct React Native:

npx react-native run-android
# or
npx react-native run-ios

4. Backend Configuration

Ensure your Express.js API and MongoDB instance are running.
Update the .env file with your backend URL and database credentials.


Development Methodology

The project was executed using the Agile Methodology, emphasizing:

Incremental feature delivery via short sprints

Continuous stakeholder feedback loops

Regular stand-ups and retrospectives for alignment

Iterative testing and deployment cycles

Feasibility Summary

The system was validated for:

Technical Feasibility: Leveraging proven cross-platform frameworks and cloud databases.

Operational Feasibility: Simple UI flows and administrative dashboards ensure ease of use.

Economic Feasibility: Cost-effective stack with open-source technologies and minimal hosting overhead.

Schedule Feasibility: Structured sprints to ensure timely delivery and continuous improvement.

Future Enhancements

AI-powered trip recommendations based on user preferences

Offline mode for limited-connectivity environments

Admin web dashboard for data analytics and content management

Contributors

Project Lead & Developer: Njagi Alex

License

This project is licensed under the MIT License — you are free to use, modify, and distribute the code with proper attribution.

Acknowledgments

Special thanks to stakeholders, tourism partners, and academic mentors who provided insights that informed system requirements and user experience design.
