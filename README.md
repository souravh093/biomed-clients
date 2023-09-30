# Biomed

This is a Stack MERN Team project. This project is an Evaluation Type so any Instructor creates the task and any user can apply a particular task when he applies the submitted task the instructor evaluates the task and gives some reword. Users and Instructors can communicate with each other using messages and live video conversations as well. In this project, we use the Latest technology like socket.IO, Firestorage, and many more.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Messaging System](#messaging-system)
- [Video Calling System](#video-calling-system)
- [Community Page](#community-page)
- [Blog Page](#blog-page)
- [Role-Based Dashboard](#role-based-dashboard)
- [Contributing](#contributing)
- [License](#license)

# Project Overview

## Overview

This project is a web-based platform designed to facilitate task evaluation and communication between instructors and users. The primary objective of the platform is to allow instructors to create tasks, users to apply for these tasks, and for instructors to evaluate and provide feedback on completed tasks. Additionally, we offer a range of features to enhance user experience and engagement within the platform.

## Key Features

### Task Management

- **Instructor Tasks:** Instructors have the capability to create tasks, define the task details and requirements.
- **User Applications:** Users can apply for tasks they are interested in, providing a streamlined application process.
- **Task Submission:** Users can submit completed tasks through the platform.
- **Task Evaluation:** Instructors can evaluate the submitted tasks, offering feedback and rewards for successful completion.
- **Payment Integration:** To encourage quality task creation, we have integrated Stripe to impose a limit on the number of tasks an instructor can create for free. After creating a certain number of tasks, instructors will be required to make payments using Stripe to post additional tasks.

### Real-Time Communication

- **Messaging System:** We have implemented Socket.io to provide real-time messaging functionality, allowing seamless communication between instructors and users.
- **Video Calling System:** For interactive sessions, we have integrated Zigocloud for video calling capabilities, enhancing the overall user experience.

### Community Engagement

- **Community Page:** Our platform includes a dedicated community page where users can share their opinions, engage in discussions, and foster a sense of community within the platform.

### Blog and Content Management

- **Blog Page:** Admins have the ability to post blogs and share relevant content with the platform's users, keeping them informed and engaged.

### Role-Based Dashboard

- **Role-Based Access:** We have designed separate dashboards for different user roles, including instructors, users, and admin. Each dashboard is tailored to provide role-specific functionalities and access.

## Technology Stack

Our technology stack comprises various modern tools and frameworks to ensure a robust and scalable platform:

- **Frontend:** We use React, React Router, React Query, and Axios for building the user interface.
- **Backend:** The server-side is powered by Express.js, and data is stored in MongoDB. Firebase handles authentication, while Firestore manages storage.
- **Real-Time Communication:** Socket.io is employed for real-time messaging.
- **Payment Integration:** We utilize Stripe for secure payment processing.
- **Video Calling:** Zigocloud is integrated for video calling functionality.

In summary, our project is a comprehensive MERN-based platform that streamlines task evaluation, fosters user-instructor communication, and encourages community engagement. It offers a range of features and utilizes modern technologies to provide an intuitive and interactive user experience.



## Features

- **Task Management:**
  - Instructors can create tasks.
  - Users can apply for tasks.
  - Users can submit completed tasks.
  - Instructors can evaluate and provide feedback on tasks.
  - Payment integration using Stripe for instructors after creating a certain number of tasks.

- **Communication:**
  - Messaging system using Socket.io for real-time communication between users and instructors.
  - Video calling system using Zigocloud for interactive sessions.

- **Community Page:**
  - Users can share opinions and engage in discussions.
  
- **Blog Page:**
  - Admin can post blogs.

- **Role-Based Dashboard:**
  - Separate dashboards for different user roles (instructors, users, admin).

## Technology Stack

- Frontend:
  - React
  - React Router
  - React Query
  - Axios

- Backend:
  - Express.js
  - MongoDB (Database)
  - Firebase (Authentication)
  - Firestore (Storage)

- Real-Time Communication:
  - Socket.io

- Payment Integration:
  - Stripe

- Video Calling:
  - Zigocloud


