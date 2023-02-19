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

1. Local State -
Local state is state so data changes that affects the UI which belongs to a single component.State that belongs to single component.eg.Listening to user input in a input field or toggling show more state.Should use useState or useReducer

2. Cross Component State
State that affects multiple components. eg Modal/Overlay component . Can use useState and useReducer.Requuires props chain / props drilling .

3. App Wide State 
State that effects the entire app (most/all components).Eg User Authentication.

Redux / React Context can help us manage Cross component or app wide state.

## Why do we need Redux if we already have React Context . Redux Vs Context

Redux is a state management system for cross component or app wide state.React context can also help us the manage state for cross component and app wide . 

React Context Potential Disadvantages
Potential means it might not be a problem in our application, and we can use it.
--We can have a complex setup and managing state can become quite complex with React and that depends on the application we are building. And you can end up with deeply nested JSX code like this as a result.We have complex setup and management disadvantage because we may end up with deeply nested JSX code and a lot of different Context Providers or with one huge Context Provider which is not maintainable.

--Performance . As per a React member Context is good for low frequency updates like changing the theme , authentication but its not great if your data changes a lot. For high frequency changes (not exactly clear what high frequency means) but changes that happen more frequently.And this team member says that,therefore this new context is not ready as a replacement for flux like state propagation. So Context is not a great replacement for redux in all scenerios.React context is not optimised for high frequency changes.    

## How Redux Works ?