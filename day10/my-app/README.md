# Day 10 React 

React is a Js library that is moslty used to create UI for web applications.
React is used because of the following features in it:

    - Components: React divides UI in components which makes it modular, reusable

    - VDOM : Virtual DOM lets it update the changes more efficently and faster

    - JSX : Javascript XML, extension used in react to which is used with other tool like Babel in vite which lets users to create html code in js but browser doesn't understand it, babel comes in play which converts one form of code into another mostly in older js which browser supports

    - State Management : State is the data managed by the component itself and react allows built in mechanisms to manage states, tracks changes in components like form inputs,counter

    - Props : Props are the data passed to the component and used to configure or customize a component

    - Declarative Programming:  Users declares and describe what UI should look like and react handles the DOM updates 

    - Diffing : process of gettinf differences between current VDOM and previous VDOM is called Diffing

    
    - Reconiliation: process of injecting the differences between VDOM in real DOM



# Installing React Js with Vite
we can use Create-React-App or Vite tools to create a React App but its preferred to use Vite which is faster and efficent.

``npm create vite@latst my-app -- --template react`` creates a react app called my-app with react templates in it 

Goto the my-app then install the dependencies ``npm install`` 

``npm run dev`` to start the react app

# How does React works?
    
    In general Browser renders DOM[Document object model] from HTML. Browser creates a tree like structure of the HTML file and based on it, browser renders the HTML file with content.

    This can take some time when the file is big and changes are done in it then browser has to redraw all of the DOM.

    But in React, it uses soemthing called VDOM[Virtual Document Object Model] which is nothing more than the copy of the real DOM. React keeps track of all the states and props, whenever a change occurs in props or states, React creates new VDOM and compares new VDOM with the previous VDOM[Diffing]. Finds out what has changed and lastly it efficently updates the parts that has been changed in the real DOM[Reconciliation].

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
