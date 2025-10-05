# [QuickGPT](https://github.com/yourusername/quickgpt)

A full-stack AI-powered chat application with text and image generation capabilities, built with modern web technologies and integrated payment system.

## 🚀 Tech Stack

**Frontend:**
- React 19 + Vite
- Tailwind CSS 4.1
- React Router DOM
- Prism.js (syntax highlighting)
- Moment.js (date formatting)

**Backend:**
- Node.js + Express 5
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs (password hashing)
- Google Gemini AI API
- ImageKit (image storage)
- Stripe (payment processing)

**Development Tools:**
- ESLint
- Nodemon
- CORS middleware
- dotenv configuration

## ✨ Features

• **AI Chat Interface** - Real-time conversations with Google Gemini AI for text generation
• **Image Generation** - Create AI-powered images with custom prompts using advanced models
• **User Authentication** - Secure JWT-based login/register system with encrypted passwords
• **Credit System** - Token-based usage with Stripe integration for purchasing credits
• **Chat Management** - Create, delete, and organize multiple chat conversations
• **Community Gallery** - Share and view published AI-generated images
• **Responsive Design** - Mobile-first approach with dark/light theme toggle
• **Real-time Updates** - Live chat interface with typing indicators and message history

## 🛠️ Development Scope

• **Full-Stack Architecture** - Complete MERN stack implementation with RESTful API design
• **AI Integration** - Seamless connection to Google Gemini for advanced language and image processing
• **Payment Processing** - Stripe webhook integration for secure credit purchases and subscription management
• **Database Design** - Optimized MongoDB schema for users, chats, messages, and transactions
• **Security Implementation** - JWT tokens, password hashing, CORS configuration, and API rate limiting
• **Modern UI/UX** - Component-based architecture with Tailwind CSS and responsive design patterns

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- Google Gemini API key
- ImageKit account
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/quickgpt.git
   cd quickgpt
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Configuration**
   
   Create `.env` file in the `server` directory:
   ```env
   JWT_SECRET=your_jwt_secret_key
   MONGODB_URI=your_mongodb_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   
   # ImageKit Configuration
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint
   
   # Stripe Configuration
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   ```

5. **Start Development Servers**
   
   Backend (Terminal 1):
   ```bash
   cd server
   npm start
   ```
   
   Frontend (Terminal 2):
   ```bash
   cd client
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 🔐 Test Account

For testing purposes, use these credentials:

**Email:** `sumit@gmail.com`  
**Password:** `123456`

Alternatively, you can register a new account through the application interface.

## 📁 Project Structure

```
quickgpt/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route components
│   │   ├── context/        # React context providers
│   │   ├── utils/          # API utilities and helpers
│   │   └── assets/         # Static assets and images
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend
│   ├── configs/            # Database and service configurations
│   ├── controllers/        # Route handlers and business logic
│   ├── middlewares/        # Authentication and validation
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API route definitions
│   ├── package.json
│   └── server.js
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/data` - Get user profile

### Chat Management
- `GET /api/chat/get` - Fetch user chats
- `GET /api/chat/create` - Create new chat
- `POST /api/chat/delete` - Delete chat

### AI Messages
- `POST /api/message/text` - Send text message to AI
- `POST /api/message/image` - Generate AI image

### Credits & Payments
- `GET /api/credit/plan` - Get available plans
- `POST /api/credit/purchase` - Purchase credits
- `POST /api/stripe/webhook` - Stripe webhook handler

## 🎨 Key Features Walkthrough

1. **User Registration/Login** - Secure authentication with JWT tokens and password encryption
2. **AI Chat Interface** - Interactive chat with Google Gemini AI for text and image generation
3. **Credit System** - Token-based usage tracking with Stripe payment integration
4. **Chat History** - Persistent conversation storage with MongoDB
5. **Image Gallery** - Community showcase of published AI-generated images
6. **Responsive Design** - Optimized for desktop and mobile devices

## 🚀 Deployment Characteristics

• **Frontend Deployment** - Optimized for Vercel with static build generation and CDN integration
• **Backend Deployment** - Express server configured for production with environment variables and security middleware
• **Database Hosting** - MongoDB Atlas integration with connection pooling and replica set configuration
• **API Security** - CORS policies, rate limiting, and JWT token validation for secure client-server communication
• **Payment Processing** - Stripe webhook integration with secure payment handling and subscription management
• **Image Storage** - ImageKit CDN integration for optimized image delivery and transformation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Contact: sumit@gmail.com

---

**Built with ❤️ using React, Node.js, and AI technologies**
