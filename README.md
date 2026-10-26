# Travlr Getaways Full Stack Web Application

## Architecture

The Travlr Getaways project uses multiple frontend development approaches. Express and Handlebars generate HTML on the server for the customer-facing website, while JavaScript adds interactivity. The administrative side uses Angular to create a single-page application (SPA), allowing users to navigate and manage data without reloading the entire page. MongoDB was selected as the NoSQL database because its document-based structure works well with JSON-like data, offers flexibility as application requirements change, and integrates effectively with the JavaScript-based MEAN stack.

## Functionality

JSON is a data format, while JavaScript is a programming language. JSON connects the frontend and backend by providing a consistent way to exchange information through API requests and responses. For example, the Angular application can retrieve travel data from the Express API and send updates back to the database using JSON.

Throughout development, I improved the application by transitioning from static HTML to reusable Handlebars templates and JSON data, then building reusable Angular components for the administrative interface. These improvements reduced duplicated code, made updates easier, and created a more consistent user experience.

## Testing

API testing verifies that endpoints correctly handle requests and return the expected responses. GET requests retrieve data, while POST requests create records, PUT requests update existing records, and DELETE requests remove records. Testing these methods helps identify problems with routing, data validation, and database operations. Adding authentication introduced additional testing requirements, including verifying that login credentials are handled correctly and that protected administrative endpoints reject unauthorized requests. These checks help ensure the application functions correctly and protects sensitive administrative operations.

## Reflection

This course helped me develop a stronger understanding of full stack web development, including frontend frameworks, backend routing, database integration, API communication, and authentication. I gained experience building an application that supports both customers and administrators while learning how its different components work together. My existing HTML and JavaScript experience gave me a foundation for learning Express, Angular, and MongoDB. These skills have strengthened my ability to design, develop, test, and document web applications, making me a more competitive candidate for software development positions.
