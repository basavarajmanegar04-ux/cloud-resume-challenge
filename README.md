# Cloud Resume Challenge

## Overview

This project is a serverless cloud resume website built on AWS. It hosts a personal portfolio website using Amazon S3 and implements a dynamic visitor counter using AWS Lambda, API Gateway, and DynamoDB.

---

## Technologies Used

- HTML
- CSS
- JavaScript
- Amazon S3
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- Git
- GitHub

---

## Features

- Responsive resume website
- Static website hosting using Amazon S3
- Dynamic visitor counter
- Serverless backend
- REST API using API Gateway
- Python Lambda function
- No server management

---

## AWS Architecture
Browser

↓

Amazon S3

↓

API Gateway

↓

AWS Lambda

↓

Amazon DynamoDB


---

## Project Structure


Cloud-Resume-Challenge/
│
├── index.html
├── style.css
├── script.js
└── README.md


---

## How It Works

1. User opens the website.
2. Amazon S3 serves the HTML, CSS, and JavaScript files.
3. JavaScript calls API Gateway.
4. API Gateway invokes the Lambda function.
5. Lambda updates the visitor count in DynamoDB.
6. The updated visitor count is displayed on the webpage.

---

## Skills Demonstrated

- Cloud Computing
- AWS Serverless Architecture
- Amazon S3
- AWS Lambda
- API Gateway
- DynamoDB
- HTML
- CSS
- JavaScript
- Git & GitHub

---

## Author

Basavaraja M
