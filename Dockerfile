# Use an official Maven image to build the SpringBoot App
FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory
WORKDIR /app

# copy the pom.xml and install dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# copy the source code and build the application
COPY src ./src
RUN mvn clean package -DskipTests

# use an official OpenJdk image to run the application
FROM openjdk:17-jdk-slim

# set the working directory
WORKDIR /app

# copy the built jar file  from the  build stage
COPY --from=build /app/target/to-do-list-0.0.1-SNAPSHOT.jar .

# expose port 8080
EXPOSE 8080

# specify the command to run the applicationn
ENTRYPOINT ["java", "-jar", "/app/to-do-list-0.0.1-SNAPSHOT.jar"]