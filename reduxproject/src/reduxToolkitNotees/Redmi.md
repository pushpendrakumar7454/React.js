# Redux Toolkit

1. What is Redux?

Ans-:: But before understanding Redux Toolkit, understand one thing first

## What was the problem in React?
Suppose you have a Shopping Cart project.
App
|

- Navbar
  | L Cart Count
  |
- Home
  | □ Product Card
  |
- Cart

Now, there is an Add to Cart button inside the Product Card.
But the Cart Count needs to be shown in the Navbar.
And the exact same data needs to be shown on the Cart page as well.
What would you do in React?
You would create the state (useState) inside App.jsx:
Like:

```jsx
const [cart, setCart] = useState([]);
```

Then you would have to pass props:
App → Home → ProductCard

And
App → Navbar
And
App → Cart
Everyone would need to be passed these props.
This is called propdriling
App

![](attachment:acf407c4-3491-461f-802e-0606f71eee36:images8dc3fa3d-c951-4858-8420-4ead83600ce1-02_728_401_916_264.jpg)

Every component has to be passed cart and setCart.
As the project grows larger…

- 10 Components
- 20 Components
- 50 Components

Passing props becomes extremely difficult.

## The solution to this problem?

Redux.

Redux creates a Global Store.

All components fetch data directly from that Store
Redux Store

![](attachment:b805dba9-3dff-4ae6-ba2c-bfb1aa2e4452:images8dc3fa3d-c951-4858-8420-4ead83600ce1-03_620_432_461_264.jpg)

Navbar Home Cart

Now, no one needs to pass props.
Every component can directly access data from the Store.

Conclusion-Redux is a state management library that stores application data in one central place called the Store. It helps different components share the same data without passing props repeatedly..

For example:

- Logged-in User
- Cart
- Theme
- Language
- Notifications

Everything in one place.
2.Why was Redux Toolkit introduced?

Ans-: Writing old/legacy Redux was very difficult.

Even to build a simple Counter, you had to create multiple files:

- actions.js
- reducers.js
- constants.js
- store.js
- types.js

You had to write a lot of boilerplate code.
That is why the Redux Team created:
Redux Toolkit (RTK) With Redux Toolkit, you can use Redux with much less code.
Ex-:What used to take around 100 lines in legacy Redux can be done in 20-30 lines with Redux Toolkit.

Advantages of Redux Toolkit:

- Less Code
- Easy Syntax
- Fast Development
- Official Redux Way
- DevTools Support
- Better Performance
- Easy to Learn

Nowadays, almost all new React projects use Redux Toolkit.

## Real Life Example

Suppose there is an Amazon website with data like:

- User Login
- Cart
- Wishlist
- Orders

If Redux weren’t used, this data would have to be passed to every component via props.
In Redux Toolkit, all of this resides in the Store, and whichever component needs it can directly pull it from there.

Conclusion-: Redux Toolkit is the official and recommended way to use Redux. It reduces boilerplate code, simplifies state management, and makes Redux easier to learn and implement. 3. What problems does it solve?

Ans: Redux Toolkit solves many common problems that developers face while managing state in React applications.

1. Props Drilling

Without Redux Toolkit, data has to be passed from one component to another using props. In large applications, this becomes difficult to manage. Redux Toolkit stores the data in one central place, so any component can access it directly. 2. Too Much Boilerplate Code

Traditional Redux requires many files and a lot of repetitive code. Redux Toolkit reduces this boilerplate and makes Redux much easier to write. 3. State Management

When an application grows, managing data with only useState and props becomes difficult. Redux Toolkit provides a single global store to manage application state efficiently. 4. Easy Data Sharing

Multiple components can access and update the same data without passing props through intermediate components. 5. Better Developer Experience

Redux Toolkit comes with useful features like Redux DevTools support, simpler APIs, and better code organization, making development faster and easier. 4. What is a Store?

## Ans-: First, Let’s Take an Example

Suppose you are building a Shopping Cart website.

```bash
npm install @reduxjs/toolkit react-redux
```

It contains the following data:

- User Information
- Cart Items
- Wishlist
- Theme

If all of this were scattered across different components, managing it would become very difficult.

That is why Redux Toolkit creates a Store.
Store-:A Redux Store is the central place where the application’s global state is stored. All components can access and update the state through the Store without passing props.

Data flow–:
Store

![](attachment:34d5cf4a-900d-4c5a-af6f-dd4c7f2b0c4a:images8dc3fa3d-c951-4858-8420-4ead83600ce1-06_537_245_1626_264.jpg)

- When a component needs the Cart, it retrieves it from the Store.
- When it needs the User, it retrieves it from the Store.

Redux Store Diagram——
Redux Store

![](attachment:ef6c370a-5aa2-4a77-a584-71ad3c9b7b17:images8dc3fa3d-c951-4858-8420-4ead83600ce1-07_717_611_461_264.jpg)

Navbar Home Car

All components fetch their data from this single Store.
5.What is a Slice

Ans-:this is the most important concept in redux toolkit.
Imagine you have a lot of data inside your Store:
Store

![](attachment:3f19525f-bcb3-47d0-a81a-d944c48b02bd:images8dc3fa3d-c951-4858-8420-4ead83600ce1-07_535_245_1786_264.jpg)

If all of this were kept inside a single file, the code would become extremely large and messy.

That is why Redux Toolkit divides the Store into smaller parts.
Each individual part is called a Slice.
Store

$$
\begin{aligned}
& \mid \\
& \models \text { cartSlice } \\
& \longmapsto \text { userSlice } \\
& \longmapsto \text { themeSlice }
\end{aligned}
$$

← productSlice

```jsx
createSlice();
```

In Redux Toolkit, we use createSlice() to create a Slice.

```jsx
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // functions
  },
});
```

Understanding the properties:

- name → The name of the Slice.
- initialState → The initial value of the state at the start.
- reducers → Functions responsible for updating the state.

Conclusion-:A Slice is a small, organized part of the Redux Store that manages a specific feature of the application. It contains the state, reducers, and actions related to that feature.
6.What are Reducers?

Ans-: A Reducer is a function that updates the data inside the Store.

```jsx
Example;
```

Suppose initially the Store has this data:

```jsx
todos = [];
```

The user clicks the button: Add Todo -> “Learn Redux Toolkit”
Now the Store updates:

```jsx
Before: [];
```

```jsx
After: [
  {
    id: 1,
    text: "Learn Redux Toolkit",
  },
];
```

Example Code-:reducers: {

```jsx
addTodo:(state,action)=>{
```

```jsx
    state.push(action.payload)
\}
\}
```

Conculusion-:A reducer is a function that updates the state based on the action received. It defines how the application state should change.
7.What are Actions?

Ans-::A Reducer does not work on its own. Someone has to tell it:
“Hey, do this work.”
That message or instruction is called an Action.
Example
When a user clicks a button:

```jsx
dispatch(
  addTodo({
    id: 1,
    text: "Learn Redux Toolkit",
  }),
);
```

Here:

- addTodo () is the Action.
- dispatch() is sending the message to the Reducer

Simple Flow-::User Button Click

```jsx
|
```

v
dispatch(addTodo())
|
v

Reducer
|
v
Store Update
|
v
UI Automatically Updates
Conclusion-:An action is an event that tells Redux what operation should be performed, such as adding, updating, or deleting data.
8.What are useSelector and useDispatch?

Ans-:useDispatch() is used to send an Action to the Redux Store.
Keep in mind:
Dispatch $\boldsymbol{=}$ Sending a Message
Code Example-:import { useDispatch } from “react-redux”;
import { addToCart } from “./cartSlice”;
function Product() {
const dispatch = useDispatch();
return (
<button onClick={() => dispatch(addToCart(product))}>
Add to Cart

);

```jsx
}
```

hat is happening here?

- const dispatch = useDispatch();
  □ Grants permission to send messages to the Redux Store.
- dispatch(addToCart(product));
  □ Sends the instruction: “Hey Store, add this product to the cart.”

useSelector-:) is used to read or extract data from the Redux Store.

Keep in mind:

Selector $\boldsymbol{=}$ Reading Data

Code Example-:: import { useSelector } from “react-redux”;
function Cart() {
const cartItems = useSelector((state) => state.cart);

$$
\begin{aligned}
& \text { return ( } \\
& \text { <div> } \\
& \text { \{cartItems.length\} } \\
& \text { </div> }
\end{aligned}
$$

);
}
What is happening here?

- const cartItems = useSelector((state) => state.cart);
  □ Takes the current state of cart from the Redux Store and gives it to your component.

## Complete Flow-::

## User Click

v
useDispatch()

Action

Reducer
|
v
Store Update

![](attachment:2fac7332-4e51-4fb5-9683-3a1a4fdcb86d:images8dc3fa3d-c951-4858-8420-4ead83600ce1-14_554_355_242_245.jpg)

## UI Update

Conclution-:
useDispatch() is a React-Redux hook used to send actions to the Redux Store. It is used when we want to update the state.
useSelector() is a React-Redux hook used to read data from the Redux Store. It allows components to access the latest state. 9. How does data flow inside Redux Toolkit?

User Action
|
v
dispatch()
|
v

Action
|
V
Reducer
|
v
Redux Store Update
|
v
useSelector()
|
v
UI Re-render
Breakdown of Each Step

1. Step 1: User Action

The user performs an action on the UI (e.g., clicks an “Add to Cart” button). 2. Step 2: dispatch()

The click handler triggers dispatch (addToCart (product) ), sending the message to Redux. 3. Step 3: Action
addToCart (product) defines what needs to be done and carries the payload (product data). 4. Step 4: Reducer

The reducer function receives the action and processes the state update:

```jsx
addToCart: (state, action) => {
  state.push(action.payload);
};
```

1. Step 5: Redux Store Update

The central store state updates (e.g., cart array goes from [] to containing the new product). 6. Step 6: useSelector ()

Components subscribed to the state (like the Navbar or Cart page) detect the store update via useSelector(). 7. Step 7: UI Re-render

React automatically updates the UI to display the latest cart count and items.

How does data flow inside Redux Toolkit?
Redux Toolkit follows a unidirectional (one-way) data flow:

1. A user triggers an action in the UI.
2. The component dispatches an action using useDispatch().
3. The Reducer handles the action and updates the Redux Store.
4. useSelector () reads the updated state from the store.
5. React automatically re-renders the UI with the updated data.
6. Folder Structure

Ans-:A well-organized folder structure makes a Redux Toolkit project easier to understand, maintain, and scale. Instead of keeping all Redux code in one file, we separate it into different folders based on features.
src/

![](attachment:eaf1860f-73de-4435-b8ea-1d203100a45d:images8dc3fa3d-c951-4858-8420-4ead83600ce1-16_162_173_1794_316.jpg)

![](attachment:6c20a155-3f07-407c-8ad4-b7e2ef947c06:images8dc3fa3d-c951-4858-8420-4ead83600ce1-16_63_276_1990_318.jpg)

![](attachment:8f7ec308-dd8e-4153-ab9a-feb89b9d54fd:images8dc3fa3d-c951-4858-8420-4ead83600ce1-16_63_20_2087_316.jpg)

![](attachment:303086cb-2448-44ed-b54b-ebe2a56dc916:images8dc3fa3d-c951-4858-8420-4ead83600ce1-16_63_242_2184_318.jpg)

![](attachment:3f6c0143-c93a-42d0-a2d1-d15f1f3fa51e:images8dc3fa3d-c951-4858-8420-4ead83600ce1-16_63_233_2280_318.jpg)

![](attachment:8ac314d3-093d-48ca-801c-65ec789a6331:images8dc3fa3d-c951-4858-8420-4ead83600ce1-16_60_401_2377_318.jpg)

![](attachment:bd5e86f5-7f95-472f-86d2-eac1cd786e81:images8dc3fa3d-c951-4858-8420-4ead83600ce1-17_2090_472_242_316.jpg)

## Explanation

- app/ → Contains the Redux Store.
- features/ → Contains different slices of the application.
- components/ → Reusable UI Components.
- pages/ → Main pages of the application.
- App.jsx → Root component.
- main.jsx → Wraps the application with Provider.

## Conclusion

A good folder structure keeps the project clean, modular, and easy to maintain. 9. Important Functions in Redux Toolkit

Ans-:Redux Toolkit provides several important functions that make state management easier.

## 1. configureStore()

Ans-:configureStore() is used to create the Redux Store. It automatically configures Redux DevTools and middleware.
import { configureStore } from “@reduxjs/toolkit”;

```jsx
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
```

## Advantages

- Creates Store easily.
- Enables Redux DevTools.
- Adds middleware automatically.
- Less configuration.

## 2. createSlice()

```jsx
Ans-:createSlice() creates State, Reducers, and Actions in one place.
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
    },
});
Advantages
```

- Less Code
- Automatic Action Creation
- Better Organization

## 3. Provider

Ans-:Provider makes the Redux Store available to the entire React application.
Example-::

```jsx
import { Provider } from "react-redux";
import { store } from "./app/store";
```

```jsx
<Provider store={store}>
  <App />
</Provider>
```

Without Provider, components cannot access the Redux Store.

## 4. useSelector()

Definition
useSelector () reads data from the Redux Store.
Example
const cart = useSelector((state) => state.cart);
Uses

- Reading Cart Items
- Reading User Data
- Reading Theme
- Reading Products

## 5. useDispatch()

Definition
useDispatch() sends actions to Redux Store.
Example
const dispatch = useDispatch();
dispatch(addToCart(product));

Uses

- Add Product
- Delete Product
- Update Product
- Login User

## 6. createAsyncThunk()

## Definition

```jsx
createAsyncThunk() is used to perform asynchronous operations like API calls.
```

```jsx
Example;
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
});
Advantages;
```

- API Calling
- Loading State
- Error Handling
- Cleaner Code

## 11. Real World Use Cases

Redux Toolkit is widely used in large applications where multiple components need the same data.

## Examples

```jsx
Amazon;
```

- Shopping Cart
- Wishlist
- User Login
- Orders

```jsx
Flipkart;
```

- Product Filters
- Cart
- Wishlist
- Address

## Instagram

- User Profile
- Followers
- Likes
- Saved Posts

## Facebook

- Login
- Notifications
- Friends
- Messages

## Netflix

- User Profile
- Watch History
- Continue Watching
- Favourite Movies

## Swiggy / Zomato

- Cart
- Address
- Coupons
- Orders

## Banking Apps

- User Details
- Transactions
- Notifications
- Account Balance

## E-commerce Websites

- Cart
- Products
- Theme
- User Login
- Wishlist

## Conclusion

Redux Toolkit is useful whenever multiple components need access to the same data.

## 12. My Own Notes

## My Learning Notes

- Redux Toolkit is easier than Legacy Redux.
- It reduces boilerplate code.
- Store is the central place for application data.
- Slice manages one feature only.
- Reducers update the Store.
- Actions tell reducers what to do.
- useSelector() reads data.
- useDispatch() updates data.
- configureStore() creates the Store.
- createSlice() is the most important function.
- Redux Toolkit should be used for Global State only.
- For local component state, useState is enough.

## 13. Challenges I Faced

While learning Redux Toolkit, I faced several challenges.

- Initially I was confused between Redux and Redux Toolkit.
- Understanding Store and Slice took some time.
- Remembering the flow of dispatch(), Action, Reducer, and Store was difficult.
- Reading the official documentation was challenging at first.
- Connecting Redux Store with React components was confusing.
- After building a small Shopping Cart project, the concepts became much clearer.

Conclusion

Practicing small projects helped me understand Redux Toolkit better.

## 14. Additional Things I Explored

During this challenge, I explored some additional topics beyond the basics.

- Redux DevTools
- Immer Library
- createAsyncThunk()
- Folder Structure
- Official Documentation
- Redux Best Practices
- Feature-based Folder Organization

Redux DevTools

Redux DevTools helps developers inspect every action dispatched to the store and view state changes in real time.

Immer

Redux Toolkit uses Immer internally, allowing us to write state updates in a simpler way while maintaining immutability.
createAsyncThunk()
Used for fetching data from APIs and handling asynchronous logic.

Official Documentation

I learned that the official Redux Toolkit documentation provides the latest and most accurate information.

## 15. Best Practices

- Keep one Slice for one feature.
- Use meaningful action names.
- Keep reducers small.
- Avoid unnecessary global state.
- Organize files properly.
- Use Redux DevTools for debugging.
- Use createAsyncThunk() for API calls.
- Keep business logic inside slices.

## Store Setup Diagram (Recommended)

main.jsx

```jsx
        |
        V
<Provider store={store}>
        |
        V
App
        |
```

![](attachment:dcf0c996-f3aa-446f-934e-09fb9403d97a:images8dc3fa3d-c951-4858-8420-4ead83600ce1-25_36_34_622_296.jpg)

```jsx
Components | useDispatch();
useSelector();
```

## Complete flow diagram-:

```jsx
User Click
↓
dispatch()
↓
Action
↓
Reducer
↓
Store Update
↓
useSelector()
↓
UI Update
```

## I am learn it-:

While reading the official Redux Toolkit documentation, I learned that Redux Toolkit is the official and recommended way to write Redux applications. It simplifies configuration, reduces boilerplate code, and encourages best practices.

## 16. Conclusion

Redux Toolkit is the official and recommended way to use Redux. It simplifies state management by reducing boilerplate code and providing useful tools like configureStore(), createSlice(), useSelector(), and useDispatch(). It helps developers manage global state efficiently, making applications more scalable, maintainable, and easier to debug. After completing this learning challenge, I now have a better understanding of how Redux Toolkit works and how it can be used in real-world React applications.

![](attachment:9370a9b8-8c58-4605-9b84-99335c0d1202:images8dc3fa3d-c951-4858-8420-4ead83600ce1-26_216_478_1280_247.jpg)
