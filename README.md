# Store Front

## Lab 36: Application State with Redux

## Phase 1 Requirements

Today, we begin the first of a 4-Phase build of the storefront application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner.

The following user/developer stories detail the major functionality for this phase of the project.

As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
As a user, I want to choose a category and see a list of all available products matching that category.
As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.
Notes on constructing the Redux Store:

## Categories

State should contain a list of categories as well as the active category.
Each category should have a normalized name, display name, and a description.
Create an action that will trigger the reducer to change the active category.
Update the active category in the reducer when this action is dispatched.

## Products

State should be a list of all products.
Each product should have a category association, name, description, price, inventory count.
Create an action that will trigger when the active category is changed.
HINT: Multiple reducers can respond to the same actions.
Create a reducer that will filter the products list based on the active category.
Lab 37: Redux - Combined Reducers
Phase 2 Requirements:

The user stories from Phase 1 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

As a user, I want to choose from products in the list and add them to my shopping cart.
As a user, I want to see the products that I’ve added to my shopping cart in a growing list on the side of the page”.
As a user, I want to change the quantity of items I intend to purchase in the header. i.e. CART (1)
As a user, I want to be able to remove an item from my shopping cart.
Manage state in Redux store with multiple reducers/actions:

## Cart

State should be an array of products that have been added (all product details).
Create an action that will trigger the reducer to add the selected item to the cart.
Hint: this could be the same action type as you create for the Products reducer.
Create a reducer that adds the product to the array of items in state.
