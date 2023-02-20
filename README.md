# React Redux + Redux Toolkit + Advance Redux Concepts

React Project
Author : Smriti Pradhan 19-02-2023
Basic Redux Concepts + Redux Toolkit + Advance Redux Concepts

1.Redux Basics & using Redux with React
2.Redux Toolkit

Redux is a state management system for cross component or app wide state.Helps manag data across multiple components or even the complete app. We can split the definition of state into three main kinds of state. 

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