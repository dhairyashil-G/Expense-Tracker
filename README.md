# Expense Tracker 

This repository contains an Expense Tracker web application built using Django REST framework, ReactJS, SQLite, and Tailwind CSS. The Expense Tracker allows users to manage their expenses by adding, updating, and deleting transactions. The backend is built with Django REST framework, providing robust APIs for data manipulation, while the frontend is developed using ReactJS and styled with Tailwind CSS.

Features
User authentication and registration
View a list of all transactions
Add new transactions with a description, amount, and category
Edit or delete existing transactions
Filter transactions by category or date
Visual representation of expense data using charts or graphs
Responsive design for seamless usage across devices
Tech Stack
Frontend: ReactJS, Tailwind CSS
Backend: Django REST framework
Database: SQLite
Installation
Clone the repository:

git clone https://github.com/dhairyashil-G/Expense-Tracker.git
cd expense-tracker
Install frontend dependencies:

cd frontend
npm install
Install backend dependencies (It's recommended to use a virtual environment):


cd ../backend
pip install -r requirements.txt
Set up the database:


python manage.py migrate
Start the development server for both frontend and backend:


# Inside the 'frontend' directory
npm start

# Inside the 'backend' directory
python manage.py runserver
Access the Expense Tracker app at http://localhost:3000.

Configuration
Backend settings can be configured in backend/settings.py.
Frontend settings can be configured in frontend/src/config.js.
Folder Structure
backend/: Django backend codebase.
frontend/: ReactJS frontend codebase.
