# Social-Network-API


## Description
This Social Network API is built to support a social network web application where users can share their thoughts, react to friends' thoughts, and manage a friend list. It utilizes Express.js for routing, MongoDB as the database, and Mongoose ODM for database interactions. The API supports CRUD operations for users, thoughts, reactions, and friend management.


## Badge
None.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test Instructions](#testinstructions)
- [Questions](#questions)
   

## Installation 
1. Clone the Repository:
```
git clone <respository-SSH key>
cd social-network-api
```

2. Install the necessary ependencies:
```
npm install
```

3. Setup MongoDB

Ensure MongoDB is installed and running on your local machine or use a cloud-based MongoDB instance.

4. Start the server:

```
npm run build

npm run start
```

Your portfolio should now be running locally at ```http://localhost:3001``` (or a different port if specified).


## Usage 
Walkthrough: https://drive.google.com/file/d/1dMPSJrqYqyJGlHz7ENQ6-N93XfHHMHFa/view

You can test the API endpoints using Insomnia.

### API Endpoints

Users

GET /api/users - Get all users

GET /api/users/:userId - Get a single user by ID

POST /api/users - Create a new user

PUT /api/users/:userId - Update a user by ID

DELETE /api/users/:userId - Delete a user and their thoughts

POST /api/users/:userId/friends/:friendId - Add a friend

DELETE /api/users/:userId/friends/:friendId - Remove a friend

Thoughts

GET /api/thoughts - Get all thoughts

GET /api/thoughts/:thoughtId - Get a single thought by ID

POST /api/thoughts - Create a new thought

PUT /api/thoughts/:thoughtId - Update a thought by ID

DELETE /api/thoughts/:thoughtId - Delete a thought

Reactions

POST /api/thoughts/:thoughtId/reactions - Add a reaction to a thought

DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction from a thought


## License 
This project is not licensed. 


## Contributing 
Contributions are welcome! To contribute:
1. Fork the repository.

2. Create a new branch:
```
git checkout -b feature/yourFeature
```

3. Commit your changes:
```

git commit -m "Add new feature"
```

4. Push to your branch:
```

git push origin feature/yourFeature
```

5. Open a pull request for review.


## Test Instructions 
To test the API, use Insomnia or Postman to send requests to the endpoints.

Alternatively, you can set up automated tests:

```npm test```


## Questions 
If there's any additional questions I can answer for you, you can reach out to me at https://github.com/je210506 or [lalanne1011@gmail.com](mailto:lalanne1011@gmail.com}).
