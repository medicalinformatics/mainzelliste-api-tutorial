# Electronic Data Capture Tutorial

## Overview

This project utilizes Docker to manage and run multiple services, including the `mainzelliste` service, a PostgreSQL database, and the custom `edc-tutorial` service.

## Getting Started

To get started with this project, you'll need to have Docker and Docker Compose installed on your machine. If you haven't installed them yet, you can download them from the [Docker website](https://www.docker.com/products/docker-desktop).

## Running the Services

1. **Clone the Repository:**
        
        git clone https://github.com/medicalinformatics/mainzelliste-api-tutorial

    cd  electronic-data-capture-tutorial

2. **Create the Image for edc-tutorial**

Ensure you have a Dockerfile in the root directory and run:

        docker build -f Dockerfile -t edc-tutorial .

3. **Start the services with Docker Compose**

        Docker compose up

4. **Viewing the Services**

**mainzelliste service**: Open your browser and navigate to http://localhost:8080. You should see the homepage displaying: "This is Mainzelliste running version 1.13-SNAPSHOT-6a9d42ad59 for Mainzelliste."

**edc-tutorial service**: Open your browser and go to http://localhost:3000 to access the EDC tutorial.


