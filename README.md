# HackRU2023

This is the README file for our project from the 2023 Reichman University hackathon.

## Project Overview

The project is a web application that has a front-end built with React and a back-end that runs in a few Docker container.

### Prerequisites

To run this project, you will need to have the following installed on your machine:

- Node.js
- Docker
- Docker Compose

### Installation

To get started with the project, follow these steps:

1. Clone the repository:

```bash
git clone git@github.com:ofeks10/HackRU2023.git
```

2. Install the dependencies:

```bash
cd HackRU2023/campaign
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Running the Back-end with Docker Compose

To run the back-end of the application in a Docker container using Docker Compose move into the `backend` folder and then follow these steps:

1. Build and start the Docker containers:

```bash
docker-compose build && docker-compose up
```
This will build the Docker image for the back-end and start the container.

2. Open [http://localhost:8000](http://localhost:8000) to view the API in your browser.
