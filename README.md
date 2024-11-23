
# React JS Routing

React Router is a standard library for routing in React. It enables navigation among views or components in a React application, managing the browser history, and maintaining a seamless user experience in single-page applications (SPAs).

## Table of Contents
- [Installation](#installation)
- [Static Routing](#static-routing)
- [Dynamic Routing](#dynamic-routing)
- [Usage Examples](#usage-examples)
- [Nested Routes](#nested-routes)
- [Conclusion](#conclusion)

## Installation

To install React Router in your React project, you can run the following command:

```bash
npm install react-router-dom
```

Or if you are using yarn:

```bash
yarn add react-router-dom
```

## Static Routing

Static routing refers to routes that are fixed and predetermined in the application. <br> The routes are declared in advance and do not change based on user input or any external data.

### Example:

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
```

In this example, the routes are statically defined and will always render the respective components when the user navigates to `/` or `/about`.

## Dynamic Routing

Dynamic routing is more flexible and allows routes to be defined based on user input or external data. The route paths can change or adjust based on dynamic parameters, such as user IDs, product IDs, or any other variable data.

### Example:

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  return <div>User Profile for {userId}</div>;
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <div>Home Page</div>} />
        <Route path="/user/:userId" component={UserProfile} />
      </Switch>
    </Router>
  );
};

export default App;
```

In this example, the route `/user/:userId` is dynamic. The `:userId` part of the URL is a dynamic segment, and the component `UserProfile` will receive this value via `useParams()`.

### Key Points of Dynamic Routing:
- **URL Parameters**: Dynamic segments in the URL (e.g., `/user/:userId`) allow components to adapt based on the URL.
- **Query Parameters**: You can also manage dynamic data via query strings, e.g., `/products?category=electronics`.

## Usage Examples

### Navigating Programmatically:

You can also navigate programmatically using `useHistory` (React Router v5) or `useNavigate` (React Router v6):

#### Example with React Router v6 (Using `useNavigate`):

```javascript
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return <button onClick={handleClick}>Go to About Page</button>;
};

export default RedirectButton;
```

## Nested Routes

React Router also supports nested routing, where one route's components can render other routes inside them.

### Example:

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const Dashboard = () => <div>Dashboard</div>;
const Settings = () => <div>Settings</div>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/settings" component={Settings} />
      </Switch>
    </Router>
  );
};

export default App;
```

In this example, the `/dashboard/settings` path renders the `Settings` component as a nested route within the `Dashboard`.

## Conclusion

React Router is an essential part of building modern web applications with React. Whether you're using static or dynamic routing, React Router offers powerful tools for managing navigation, rendering components based on URLs, and providing a smooth user experience in your single-page application.

By understanding and utilizing static and dynamic routing, you can build applications that adapt to the user's needs and provide them with customized views based on the URL.

For more details, you can refer to the official React Router documentation: [React Router Docs](https://reactrouter.com/).
```

This `README.md` covers both static and dynamic routing concepts, includes examples, and demonstrates how you can use React Router to manage routes in a React application.
