# React Redux + Redux Toolkit + Advance Redux Concepts

React Project
Author : Smriti Pradhan 19-02-2023
Basic Redux Concepts + Redux Toolkit + Advance Redux Concepts

1.Redux Basics & using Redux with React
2.Redux Toolkit

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
3 . Run npm init / npm init -y     //(-y which answers all questions with yes)
4 . we got package.json which we can use to install Redux.
5 . npm install react-redux 

Now we will start working with redux-demo.js . We will import and create a store using the redux object.It needs to manage the data and data it manages in the end is determined by the Reducer function because it is the reducer function which will give the new state snapshots.The reducer function is a standard function by Javascript but it will be called by Redud library and it will recieve two pieces of inputs.
And it should be a pure function so it should not contain HTTP Request , or fetch something from localStorage.

Inputs : - Old State + Dispatched Action
Output : -  New State Object

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

