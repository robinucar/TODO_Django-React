# Instructions:

- Aim to complete as much as you can in 1 hour.
- Use any online resources you need to solve the problems.
- Feel free to use any integrated development environment (IDE) or code editor of your choice.

## Part 1: Django REST Framework (20 minutes)

- Create a Django model for a simple todo list item with the specified fields.
- Implement a Django REST Framework serializer for the todo list item model.
- Create a Django REST Framework API view to handle CRUD operations for the todo list item model.

### Bonus (optional)

- Implement a GraphQL API using Graphene Django for the todo list item model.

## Part 2: React (30 minutes)

- Set up a new React project using Create React App.
- Create a React component to display a list of todo list items fetched from the Django REST Framework API.
- Add functionality to allow updating the completion status of a todo list item directly from the React component.

### Bonus (Optional):

- Integrate Apollo Client in your React project to fetch and manage data from the GraphQL API implemented in Django.

## Additional Notes:

- Remember to handle errors gracefully and provide meaningful feedback where applicable.
- Focus on functionality rather than complex styling.
- Use appropriate naming conventions and follow best practices in both Django and React development.

## Submission Details:

- Please create a public GitHub repository and commit your solution.
- Share the repository link with us by replying to this email within 3 days.

# User Stories

- As a user, I want to be able to create a new to-do item so that I can keep track of tasks I need to complete.
- As a user, I want to be able to mark a to-do item as complete so that I can track my progress and see what tasks I have finished.
- As a user, I want to be able to edit or update a to-do item so that I can make changes if necessary.
- As a user, I want to be able to view all of my to-do items in a list format so that I can see an overview of what tasks I need to complete.

# Getting Started

### Prerequisites

For the application to succesfully run, you need to install the following packages:

- python3
- Node.js
- npm (Node Package Manager)

#### Step 1) Create a Python Virtual Environment and Activate the Environment

The code blocks below need to be run firstly:

```
python3 -m venv my_venv

source my_venv/bin/activate
```

#### Step 2) Afterward Django needs to be installed.

```
pip install django
```

#### Step 3) Create project

```
django-admin startproject  todoapp .
```
