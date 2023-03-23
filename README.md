# React Redux

React Project
Author : Smriti Pradhan 19-02-2023
Basic Redux Concepts (Mock Example to understand Redux concepts - Using Redux in JS Application and Redux wiht React)
Understanding Multiple States in Redux and way of updating the state.
For understanding more on Redux - Watch out my Redux Toolkit Repo (In Progress... https://github.com/smritipradhan/react-redux-toolkit/tree/main)

1.Redux Basics & using Redux with React

Redux is a state management system for cross component or app wide state.Helps manage data across multiple components or even the complete app. We can split the definition of state into three main kinds of state.

1. Local State
2. Cross Component State
3. App Wide State

1.Local State -
Local state is state so data changes that affects the UI which belongs to a single component.State that belongs to single component.eg.Listening to user input in a input field or toggling show more state.Should use useState or useReducer

2.Cross Component State
State that affects multiple components. eg Modal/Overlay component . Can use useState and useReducer.Requuires props chain / props drilling .

3.App Wide State  
State that effects the entire app (most/all components).Eg User Authentication.

Redux / React Context can help us manage Cross component or app wide state.

## Why do we need Redux if we already have React Context . Redux Vs Context

Redux is a state management system for cross component or app wide state.React context can also help us the manage state for cross component and app wide .

React Context Potential Disadvantages
Potential means it might not be a problem in our application, and we can use it.
--We can have a complex setup and managing state can become quite complex with React and that depends on the application we are building. And you can end up with deeply nested JSX code like this as a result.We have complex setup and management disadvantage because we may end up with deeply nested JSX code and a lot of different Context Providers or with one huge Context Provider which is not maintainable.

--Performance . As per a React member Context is good for low frequency updates like changing the theme , authentication but its not great if your data changes a lot. For high frequency changes (not exactly clear what high frequency means) but changes that happen more frequently.And this team member says that,therefore this new context is not ready as a replacement for flux like state propagation. So Context is not a great replacement for redux in all scenerios.React context is not optimised for high frequency changes.

## How Redux Works ?

Redux is about having one Central Data Store,in your application . In this store we would store Authentication State,Theming,maybe user Input (Any cross or app wide state) . We have data in thier store which we can use inside our components.Because if there data change and we want to know about it.The component setup subscription to the Central Store and whenever the data changes the store notifies the component can get the data they need.We need to have a way of changing data .How do we change data . Component never directly manipulate the Data. So, we have the subscription but no data flow in other direction.Atleast not direct flow. Instead we have a concept of Reducer function which is responsible for changing the store data.

How do we connect the Components and the Reducer function ?
We have actions and Component dispatch actions and therefore component triggers certain actions.Actions are just JS Objects that describes what operation the Reducer to perform and therefore Reducer reads that operation and then this operation is performed by the reducer.So , the components dispatch actions which is forwarded to the Reducers and the Reducer then does what the Action wants, then the Reducer returns a new state which will effectively replace the old State in that Central Data Store and subscribing components are notified , so that they can update their UI.

## Redux createStore() is not deprecated

When we will use Redux we may get the warning that createStore is deprecated warning.We can still use it as Redux team recommends us to use Redux toolkit which is another way of creating Redux.

## Exploring the Core Concepts of Redux

We wont use a React app . Add an empty folder and create a JS file . I named the file as redux-demo.js. We will use node.js to run as Node.js allows us to run JS code outside the browser.
1 . Open the Terminal
2 . Navigate to the folder
3 . Run npm init / npm init -y //(-y which answers all questions with yes)
4 . we got package.json which we can use to install Redux.
5 . npm install react-redux

Now we will start working with redux-demo.js . We will import and create a store using the redux object.It needs to manage the data and data it manages in the end is determined by the Reducer function because it is the reducer function which will give the new state snapshots.The reducer function is a standard function by Javascript but it will be called by Redud library and it will recieve two pieces of inputs.
And it should be a pure function so it should not contain HTTP Request , or fetch something from localStorage.

Inputs : - Old State + Dispatched Action
Output : - New State Object

redux-demo.js

```
const redux = require("redux");

const initialState = { counter : 0 }

const counterReducer = (state = initialState, action) => {
    return {
        counter: state.counter + 1,
    };
};

const store = redux.createStore(counterReducer); //Create a Redux store and stored it in store


```

Now we need someone who subscribes to the store and an Action to be dispatched .We define a function counterSubscriber in which we use store.getState method which is available on the store created with createStore() and it will give the latest state snapshot after it was updated.

Now we need to make Redux aware of the Subscriber function and tell this function should be executed whenever our state changes.

redux-demo.js

```
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subcribe(counterSubscriber);
```

SO, we will use another function subscribe which is available on store and it will be executed whenever the state changes.Therefore we pass the counterSubscriber to the subscribe function. We do not execute but just point at the function in subscribe because REDUX will then execute it for us.

We can now dispatch an action . store has another function on it called as dispatch which dispatches an action . Now action is an Javascript object which with type property and a payload. Type is a unique identifier which tells the reducer function which actions should be performed.

```
store.dispatch({type:'increament'});

```

Here, we will run this and it will give output as -- { counter: 2 } . Because the reducer ran for the first time increamented the counter by 1 and then again we dispatched an action and the reducer fucntion ran again and then increamented the value of the counter by 1.Resulting it to 2.We did not use the type in the reducer so it does the same action again.

(Note - This example is dummy to make us understand the different actions gives different outputs.)
The goal of the Reducer is to do different things inside of the reducer for different actions. And thats why we got a second arguement in the Reducer function.So, we can have action.type as increment and decrement and change counter value accordingly.
And the default return is the initial counter value .

```
const redux = require("redux");

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  } else if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return {
    counter: state.counter,
  };
};

const store = redux.createStore(counterReducer); //Create a Redux store and stored it in store

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

```

Output

```
{ counter: 1 }
{ counter: 0 }
```

---

## Preparing for a New Project - React Redux

folder - 02-react-counter-redux

npm install redux react-redux
react-redux - makes easy to connect React Applications to Redux Stores and Reducers very simple.Make very simple for the components to subscribe to the Store ..

src - store - index.js

```
import { createStore } from "redux";
const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return { counter: state.counter + 1 };

    case "DECREAMENT":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};

const store = createStore(counterReducer);
export default store;
```

## Providing the Store

we will import Provider from react-redux which is a component and we will wrap it to the App Component so now all the component inside the App component can access the provider.
In the provider we will tell which store we are providing.

index.js

```
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

## Using Redux Data

```
import classes from "./Counter.module.css";
import { useSelector } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state) => state.counter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```

when you use use selector,React Redux will automatically set up a subscription to the Redux store for this component. So your component will be updated and will receive the latest counter automatically whenever that data changes in the Redux store. So it's an automatically reactive and changes to the Redux store will cause this component function to be re executed.So you always have the latest counter.That's why use selector is a very useful hook and why it is the hook we use for getting data out of the store.

## Dispatching Actions from Components

```
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncreament = () => {
    dispatch({ type: "INCREAMENT" });
  };

  const handleDecreament = () => {
    dispatch({ type: "DECREAMENT" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={handleIncreament}>INCREAMENT</button>

      <button onClick={handleDecreament}>DECREAMENT</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

```

## Attaching Payloads to Actions

dispatch({type:"Increament" , action : amount })

case "RANDOM":
return { counter: state.counter + action.amount };

Both should have same name.

## Working with Multiple State Properties

Redux will take the entire state you return and replace it. It wont merge it.
Now I want to use multiple states.I want to make sure the counter is hidden when i click on the toggle button.Well, to add a new piece of data, we need to go to our reducer in the end and just add it to all these state snapshots which we are producing.If we dont update all these state snapshots then it will return undefined value and undefined is a FALSY VALUE.It will trigger some side effects which is not expected.

So for other states where we are not doing anything to the second state, we will just return the same value.
eg - showCounter:state.showCounter

```
import { createStore } from "redux";

const initialState = { counter: 0, showCounter: false };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return { counter: state.counter + 1, showCounter: state.showCounter };

    case "DECREAMENT":
      return { counter: state.counter - 1, showCounter: state.showCounter };

    case "TOGGLE":
      return { counter: state.counter, showCounter: !state.showCounter };

    default:
      return state;
  }
};
const store = createStore(counterReducer);
export default store;

```

## How to work with Redux Correctly?

We return a branch new state object which Redux will use to replace its existing state with.So the object which we return will not merge with the existing state.They will overwrite the existing State.There will be side effects if we dont follow it.So we must always set all the other states if if update one state because we overwrite the existing state.
We should never mutate the state.We should never mutate the existing state.Instead always override it by returning a branch new state object.This can lead to bugs, unpredictable behavior and it can make debugging your application harder as well.
Its very easy in Javascript to mutate the objects and Arrays as they are reference types (for more - https://academind.com/tutorials/reference-vs-primitive-values/) . The connector between the component and the redux store will not hear the updates and hence the UI may go out of sync and may lead to bugs in bigger application.

To update the components when an action is dispatched, connector between Redux and React checks if the object is different, not if the properties have changed (which is a lot faster), so:

If you create a new object, Redux will see that the object is not the same, so it will trigger the components updates.
If you mutate the objet that it is already in the store (adding or changing a property, for example) Redux will not see the change, so it will not update the components.So even though it doesn't lead to a bug here it can have unwanted and unexpected side effects in bigger applications where your state gets out of sync. And suddenly the UI is not reflecting your state correctly anymore.
