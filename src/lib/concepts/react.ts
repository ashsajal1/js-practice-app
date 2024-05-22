import { QnaTypes } from "../qna";

export const reactConcepts: QnaTypes[] = [
  {
    id: "react-1",
    question: "Explain the purpose and usage of the React Context API.",
    answer:
      "The React Context API is a way to pass data through the component tree without having to pass props down manually at every level. It provides a way to share values between components without having to explicitly pass a prop through every level of the tree. This is particularly useful for global state management, where data needs to be accessible by many components in different parts of the application. The Context API consists of the `React.createContext()` function, which creates a context object, and the `Provider` and `Consumer` components, which allow components to access the context data. By using the Context API, you can avoid the problem of \"prop drilling\" and write more modular and maintainable React applications.",
    topic: "react",
    subTopic: "State Management",
    code: `
  import React, { createContext, useContext } from 'react';

  // Create the context
  const ThemeContext = createContext(null);

  // Provider component
  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <MyComponent />
      </ThemeContext.Provider>
    );
  }

  // Consumer component
  function MyComponent() {
    const theme = useContext(ThemeContext);
    return <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff' }}>Content</div>;
  }
  `,
    quiz: {
      question: "What is the primary use of the React Context API?",
      options: [
        "To manage state in a single component",
        "To share values between components without prop drilling",
        "To handle side effects in functional components",
        "To optimize performance of React components"
      ],
      answer: "To share values between components without prop drilling"
    }
  },
  {
    id: "react-2",
    question: "Explain the purpose and usage of React Hooks.",
    answer:
      "React Hooks are a set of functions that allow you to use state and other React features without writing a class component. They were introduced in React 16.8 and have since become a fundamental part of modern React development. Hooks provide a way to reuse stateful logic between components, without the need for complex inheritance hierarchies or wrapper components. Some of the most commonly used Hooks include `useState`, `useEffect`, `useContext`, `useReducer`, and `useCallback`. Hooks allow you to write more concise, reusable, and modular React code, and have become the preferred way to build React applications in recent years.",
    topic: "react",
    subTopic: "Hooks",
    code: `
  import React, { useState, useEffect } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = \`You clicked \${count} times\`;
    }, [count]);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  `,
    quiz: {
      question: "Which Hook would you use to add state to a functional component?",
      options: [
        "useEffect",
        "useState",
        "useContext",
        "useReducer"
      ],
      answer: "useState"
    }
  },
  {
    id: "react-3",
    question: "Explain the purpose and usage of React Portals.",
    answer:
      "React Portals are a way to render a React component outside of its normal DOM hierarchy. This can be useful in situations where you need to render a component in a different part of the DOM, such as when creating modals, tooltips, or other overlays. Portals work by rendering a component to a specific DOM node, rather than the normal DOM tree. This allows the component to be positioned independently of its parent component, and can be particularly useful for managing z-index and positioning issues. Portals are created using the `ReactDOM.createPortal()` function, which takes two arguments: the React element to be rendered, and the DOM node to render it to.",
    topic: "react",
    subTopic: "Advanced Concepts",
    code: `
  import React from 'react';
  import ReactDOM from 'react-dom';

  function Modal({ children }) {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>,
      document.body
    );
  }

  function App() {
    return (
      <div>
        <h1>My App</h1>
        <Modal>
          <h2>Modal Content</h2>
          <p>This is rendered as a portal.</p>
        </Modal>
      </div>
    );
  }
  `,
    quiz: {
      question: "What is a common use case for React Portals?",
      options: [
        "State management",
        "Rendering components conditionally",
        "Rendering components outside the main DOM hierarchy",
        "Managing side effects"
      ],
      answer: "Rendering components outside the main DOM hierarchy"
    }
  },
  {
    id: "react-4",
    question: "Explain the purpose and usage of React Fragments.",
    answer:
      "React Fragments are a way to group a list of child elements without adding an extra node to the DOM. This is useful when you need to return multiple elements from a component, but don't want to wrap them in an unnecessary `<div>` or other container element. Fragments are created using the `<React.Fragment>` syntax, or the shorthand `<>` and `</>` syntax. Fragments allow you to write more concise and readable React code, as they don't introduce an extra level of nesting in the DOM tree. This can be particularly helpful when working with lists or other collections of elements, where you want to avoid the overhead of adding an extra container element.",
    topic: "react",
    subTopic: "Advanced Concepts",
    code: `
  import React from 'react';

  function MyComponent() {
    return (
      <>
        <h1>Header</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </>
    );
  }
  `,
    quiz: {
      question: "What is the main benefit of using React Fragments?",
      options: [
        "Adding additional styling to components",
        "Grouping elements without adding extra nodes to the DOM",
        "Improving performance of React components",
        "Managing state more effectively"
      ],
      answer: "Grouping elements without adding extra nodes to the DOM"
    }
  },
  {
    id: "react-5",
    question: "Explain the purpose and usage of React Suspense and Code Splitting.",
    answer:
      "React Suspense and Code Splitting are two powerful features that work together to improve the performance and user experience of React applications. Code Splitting is a technique that allows you to split your application's code into smaller, more manageable chunks, which can then be loaded on-demand as the user navigates through your app. This can significantly reduce the initial load time of your application, as only the necessary code is loaded upfront. React Suspense is a way to manage the loading state of these code-split components. It allows you to define a fallback UI that is displayed while the component is being loaded, and provides a way to handle errors that may occur during the loading process. By using Suspense and Code Splitting together, you can create React applications that load faster, are more responsive, and provide a smoother user experience.",
    topic: "react",
    subTopic: "Performance",
    code: `
  import React, { Suspense } from 'react';
  import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

  const Home = React.lazy(() => import('./Home'));
  const About = React.lazy(() => import('./About'));
  const Contact = React.lazy(() => import('./Contact'));

  function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
  `,
    quiz: {
      question: "What is the primary purpose of React Suspense?",
      options: [
        "Managing state in functional components",
        "Handling side effects",
        "Managing the loading state of code-split components",
        "Optimizing component rendering"
      ],
      answer: "Managing the loading state of code-split components"
    }
  }
];
