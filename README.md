# PhonePay MERN Backend

Backend API for a PhonePe/PhonePay-style wallet and transaction application built with Node.js, Express, MongoDB, JWT authentication, and Swagger docs.

## Requirements

- Node.js 18 or higher
- npm
- MongoDB running locally or a MongoDB Atlas connection string
- Docker and Docker Compose, optional

## Project Setup

Install dependencies:

```bash
npm install
```

Create an environment file:

```bash
cp .env.example .env
```

On Windows PowerShell, you can use:

```powershell
Copy-Item .env.example .env
```

Update `.env` with your local values:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/phonepay
JWT_SECRET=your-jwt-secret-key
NODE_ENV=development
DEBUG=false
```

Important: the app currently reads `MONGO_URI` from `src/config/db.js`, so make sure your `.env` uses `MONGO_URI`.

## Run Locally

Start the server in development mode with nodemon:

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

The API will run at:

```text
http://localhost:3000
```

Swagger API docs are available at:

```text
http://localhost:3000/api-docs
```

## Run With Docker

Build and start the app with MongoDB:

```bash
docker compose up --build
```

Stop the containers:

```bash
docker compose down
```

If the app cannot connect to MongoDB in Docker, update the app service environment variable in `docker-compose.yml` from `MONGODB_URI` to `MONGO_URI`:

```yaml
MONGO_URI: mongodb://root:password123@mongodb:27017/phonepay?authSource=admin
```

## Available Scripts

```bash
npm start
```

Runs the server using `node server.js`.

```bash
npm run dev
```

Runs the server using `nodemon server.js`.

```bash
npm run swagger
```

Generates Swagger output if `swagger.js` is available.

```bash
npm run seed
```

Runs `seed.js` if the seed file is available.

## Main API Routes

Auth routes:

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
POST /api/auth/set-mpin
```

Transaction routes:

```text
POST /api/transactions/send
GET  /api/transactions/history
```

Wallet routes:

```text
POST /api/wallet/pay-bill
GET  /api/wallet/balance
```

Protected routes require a valid JWT token in the request authorization header.

## Environment Variables

| Variable | Description | Example |
| --- | --- | --- |
| `PORT` | Server port | `3000` |
| `MONGO_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/phonepay` |
| `JWT_SECRET` | Secret key used to sign JWT tokens | `your-jwt-secret-key` |
| `NODE_ENV` | Application environment | `development` |
| `DEBUG` | Debug flag | `false` |

## Quick Health Check

After starting the server, open:

```text
http://localhost:3000
```

Expected response:

```text
phone pay backend is running sucssefully
```
