# ✈️ Flight Ticket Booking App

A responsive flight-booking client built with React and Vite. Travelers can search available flights, review results, book seats, and manage their accounts. Admin screens provide flight and user management workflows.

## Features

- Account registration, sign-in, profile management, and password reset
- Search flights by route and travel dates; browse available flights
- Book seats and view or manage existing bookings
- Admin workflows for creating and managing flights and users
- Responsive landing page with travel information and destination cards
- Lazy-loaded routes and optimized WebP/video assets for faster loading

## Tech stack

- React 18, Vite, React Router
- Axios for REST API requests
- Formik and Yup for form handling and validation
- Node.js and MongoDB are expected on the API/backend side; backend source is not included in this client repository

## Getting started

### Requirements

- Node.js 18 or newer
- npm
- A compatible flight-booking API server

### Install and configure

```bash
npm ci
```

Create a local `.env` file in the project root:

```env
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_MAP_API_KEY=your-google-maps-browser-key
```

Set `VITE_API_URL` to the base URL of your backend. The Google Maps key is only needed for the map page; restrict it to the intended websites and Maps APIs. Vite variables are exposed in the browser bundle, so never put private server secrets in them. Restart the dev server after changing environment variables.

### Run locally

```bash
npm run dev
```

Vite prints the local URL when the server starts. To create a production build:

```bash
npm run build
```

## Backend configuration

The client calls flight, booking, and user REST endpoints through `VITE_API_URL`. Start a compatible backend and database separately, then configure its URL in `.env`. This repository does not include backend setup scripts or seeded demo accounts; use accounts configured in your own development backend.

## Contributing

Open an issue to report a bug or suggest an improvement. Pull requests are welcome.
