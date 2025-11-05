# Pinterest Backend

A Pinterest clone backend application built with Node.js, Express, MongoDB, and Passport.js authentication.

## Features

- User authentication with Passport.js (local strategy)
- MongoDB database integration with Mongoose
- Session management
- EJS templating engine
- RESTful API structure

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Pinterest-Backend
```

2. Install dependencies:
```bash
cd pin
npm install
```

3. Make sure MongoDB is running on your system

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon

## Tech Stack

- **Backend Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Passport.js with passport-local-mongoose
- **Templating**: EJS
- **Session Management**: express-session
- **Development**: nodemon

## Project Structure

```
pin/
├── bin/
│   └── www              # Server configuration
├── public/              # Static files
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── routes/              # Route handlers
│   ├── index.js
│   └── users.js
├── views/               # EJS templates
│   ├── partials/
│   ├── index.ejs
│   ├── profile.ejs
│   ├── register.ejs
│   └── error.ejs
├── app.js               # Express app setup
└── package.json
```

## License

ISC
