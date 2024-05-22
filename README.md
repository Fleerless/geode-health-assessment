# Geode Health Skills Assessment

This project contains both the client and server components. Follow the instructions below to start and run both the client and server.

## Getting Started
This application calls a [Consumer Complaint API](https://cfpb.github.io/api/ccdb/api.html) and displays the returned data.

### Prerequisites

- Node.js 
- npm 
- Web browser

### Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:Fleerless/geode-health-assessment.git
    ```

2. Navigate to the project directory:

    ```bash
    cd geode-health-assessment
    ```

3. Install the dependencies for both the client and server:

    ```bash
    npm install
    ```

## Starting the Server

1. Navigate to the server directory:

    ```bash
    cd server
    ```

2. Start the server:

    ```bash
    npm run dev
    ```

    The server will start running on [http://localhost:5050](http://localhost:5050).

## Starting the Client

1. Navigate to the client directory:

    ```bash
    cd client
    ```

2. Start the client:

    ```bash
    npm run start
    ```

    The client will start running on [http://localhost:3000](http://localhost:3000).

## Testing

To run the tests for both the client and server, use the following command:

