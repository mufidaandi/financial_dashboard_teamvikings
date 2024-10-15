# Financial Dashboard

## Overview
The **Financial Dashboard** is a web application designed to help users monitor and manage their personal finances. It provides a clear overview of account balances, including deposit accounts and credit cards. Built with Java, Spring Boot, and JavaScript, this application allows users to visualize their financial status at a glance.

## Features
- Display of account balances for both deposit accounts (chequing and savings) and credit cards.
- User-friendly interface with clear visuals.
- Static JSON data handling for account information.

## Technologies Used
- **Frontend**: HTML, CSS (Bootstrap), JavaScript
- **Backend**: Java, Spring Boot
- **Data Handling**: JSON
- **Version Control**: Git

## External JSON Data Serving

To enhance the performance of our application, we serve the account data in JSON format from an external source. This approach allows for quicker reflection of any changes made to the JSON file without needing to redeploy the application.

### Hosting the JSON File

The JSON file is hosted on [GitHub Pages](https://pages.github.com/), which provides a free and efficient way to serve static files. The URL to access the JSON data is: 
https://mufidaandi.github.io/financial-dashboard-backend/balances.json

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mufidaandi/financial_dashboard_teamvikings
   cd financial_dashboard_teamvikings
2. Install Java and Maven: Make sure you have Java JDK (version 17) and Maven installed on your machine.
3. Build the project: Run the following command to compile and build the project:
  mvn clean install
4. Run the application: Start the Spring Boot application using:
  mvn spring-boot:run
5. Access the application: Open your web browser and navigate to http://localhost:8080 to view the financial dashboard.

## Usage
Once the application is running, users can view their account balances displayed clearly on the dashboard. The data is pulled from the static JSON file, allowing for easy management and visualization of financial information.
