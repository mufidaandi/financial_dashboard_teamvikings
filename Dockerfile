# Use an appropriate base image for building
FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory
WORKDIR /app

# Copy the entire project into the container
COPY . .

# Run Maven build to create the JAR file
RUN mvn clean package

# Now create a second image for running the app
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/financialdashboard-0.0.1-SNAPSHOT.jar app.jar

# Expose the port that your application runs on
EXPOSE 8080

# Specify the command to run the application
CMD ["java", "-jar", "app.jar"]
