import { QnaTypes } from "./javascript";

export const reactConcepts: QnaTypes[] = [
  {
    id: "react-1",
    question: "Explain the purpose and usage of the React Context API.",
    answer:
      'The React Context API is a way to pass data through the component tree without having to pass props down manually at every level. It provides a way to share values between components without having to explicitly pass a prop through every level of the tree. This is particularly useful for global state management, where data needs to be accessible by many components in different parts of the application. The Context API consists of the `React.createContext()` function, which creates a context object, and the `Provider` and `Consumer` components, which allow components to access the context data. By using the Context API, you can avoid the problem of "prop drilling" and write more modular and maintainable React applications.',
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
        "To optimize performance of React components",
      ],
      answer: "To share values between components without prop drilling",
    },
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
      question:
        "Which Hook would you use to add state to a functional component?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      answer: "useState",
    },
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
        "Managing side effects",
      ],
      answer: "Rendering components outside the main DOM hierarchy",
    },
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
        "Managing state more effectively",
      ],
      answer: "Grouping elements without adding extra nodes to the DOM",
    },
  },
  {
    id: "react-5",
    question:
      "Explain the purpose and usage of React Suspense and Code Splitting.",
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
        "Optimizing component rendering",
      ],
      answer: "Managing the loading state of code-split components",
    },
  },
  {
    id: "react-6",
    question: "Explain the purpose and usage of the `useEffect` Hook.",
    answer:
      "The `useEffect` Hook in React allows you to perform side effects in functional components, such as fetching data, subscribing to events, or manually updating the DOM. It runs after every render by default, but you can control when it executes by passing a dependency array. If the array is empty, it runs only once after the initial render, mimicking `componentDidMount`. If dependencies are provided, it runs when those values change, similar to `componentDidUpdate`. You can also return a cleanup function to handle unmounting, like `componentWillUnmount`.",
    topic: "react",
    subTopic: "Hooks",
    code: `
  import React, { useState, useEffect } from 'react';

  function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(result => setData(result));

      return () => {
        console.log('Cleanup on unmount');
      };
    }, []); // Empty array means it runs once on mount

    return <div>{data ? data.message : 'Loading...'}</div>;
  }
  `,
    quiz: {
      question: "When does `useEffect` run if its dependency array is empty?",
      options: [
        "After every render",
        "Only on component unmount",
        "Only once after the initial render",
        "When state changes",
      ],
      answer: "Only once after the initial render",
    },
  },
  {
    id: "react-7",
    question: "What is the Virtual DOM and how does React use it?",
    answer:
      "The Virtual DOM is a lightweight, in-memory representation of the actual DOM. React uses it to optimize updates by calculating the minimal set of changes needed when state or props change, rather than re-rendering the entire DOM. This process, called reconciliation, compares the Virtual DOM with its previous version using a diffing algorithm, then applies only the necessary updates to the real DOM. This improves performance, especially in applications with frequent updates.",
    topic: "react",
    subTopic: "Core Concepts",
    code: `
  import React, { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  // React updates only the <p> element in the real DOM when count changes.
  `,
    quiz: {
      question: "What is the main benefit of the Virtual DOM?",
      options: [
        "It renders components faster than the real DOM",
        "It minimizes direct DOM manipulations",
        "It stores state for components",
        "It replaces the need for event handlers",
      ],
      answer: "It minimizes direct DOM manipulations",
    },
  },
  {
    id: "react-8",
    question: "Explain the purpose and usage of `useReducer` Hook.",
    answer:
      "The `useReducer` Hook is an alternative to `useState` for managing complex state logic in functional components. It’s particularly useful when state transitions depend on previous state or involve multiple sub-values. It takes a reducer function (similar to Redux) and an initial state, returning the current state and a dispatch function to trigger state updates. This Hook provides a more structured way to handle state changes, often used in place of `useState` for intricate scenarios.",
    topic: "react",
    subTopic: "Hooks",
    code: `
  import React, { useReducer } from 'react';

  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'increment': return { count: state.count + 1 };
      case 'decrement': return { count: state.count - 1 };
      default: return state;
    }
  }

  function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Add</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Subtract</button>
      </div>
    );
  }
  `,
    quiz: {
      question: "What does the `useReducer` Hook return?",
      options: [
        "State and a setter function",
        "State and a dispatch function",
        "A reducer function and initial state",
        "An effect and cleanup function",
      ],
      answer: "State and a dispatch function",
    },
  },
  {
    id: "react-9",
    question: "What are controlled components in React?",
    answer:
      "Controlled components are form elements whose value is controlled by React state. Instead of the DOM managing the element’s value (as in uncontrolled components), React maintains the value in state and updates it via event handlers like `onChange`. This approach ensures a single source of truth, making it easier to validate, manipulate, or sync input data with the rest of the application.",
    topic: "react",
    subTopic: "Forms",
    code: `
  import React, { useState } from 'react';

  function Form() {
    const [inputValue, setInputValue] = useState('');

    return (
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>You typed: {inputValue}</p>
      </form>
    );
  }
  `,
    quiz: {
      question: "What manages the value of a controlled component?",
      options: ["The DOM", "React state", "Local storage", "The browser"],
      answer: "React state",
    },
  },
  {
    id: "react-10",
    question: "What are uncontrolled components and how are they handled?",
    answer:
      "Uncontrolled components are form elements whose value is managed by the DOM rather than React state. React provides a way to access these values using refs, typically via the `useRef` Hook in functional components. They’re simpler for basic forms but offer less control compared to controlled components, as React doesn’t track their state directly.",
    topic: "react",
    subTopic: "Forms",
    code: `
  import React, { useRef } from 'react';

  function UncontrolledForm() {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Input value: ' + inputRef.current.value);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  }
  `,
    quiz: {
      question: "How does React access the value of an uncontrolled component?",
      options: [
        "Through state",
        "Using refs",
        "Via props",
        "With event handlers",
      ],
      answer: "Using refs",
    },
  },
  {
    id: "react-11",
    question: "Explain the purpose of keys in React lists.",
    answer:
      "Keys in React are special attributes used when rendering lists to help React identify which items have changed, been added, or removed. They provide a stable identity for each list item, enabling efficient updates to the DOM during reconciliation. Without keys or with poorly chosen ones (e.g., array indices for dynamic lists), React may re-render unnecessarily or encounter bugs, especially when items are reordered or deleted.",
    topic: "react",
    subTopic: "Core Concepts",
    code: `
  import React from 'react';

  function List() {
    const items = [
      { id: 1, text: 'Apple' },
      { id: 2, text: 'Banana' },
      { id: 3, text: 'Orange' }
    ];

    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
  `,
    quiz: {
      question: "Why are keys important when rendering lists in React?",
      options: [
        "They style list items",
        "They help React identify changes in list items",
        "They store list data",
        "They prevent re-renders",
      ],
      answer: "They help React identify changes in list items",
    },
  },
  {
    id: "react-12",
    question: "What is the `useCallback` Hook and why is it useful?",
    answer:
      "The `useCallback` Hook memoizes a function, returning the same function instance unless its dependencies change. This prevents unnecessary re-creations of functions on every render, which can improve performance when passing callbacks to child components that rely on reference equality to avoid re-rendering. It’s often paired with `React.memo` to optimize component rendering.",
    topic: "react",
    subTopic: "Hooks",
    code: `
  import React, { useState, useCallback } from 'react';

  function Child({ onClick }) {
    console.log('Child rendered');
    return <button onClick={onClick}>Click me</button>;
  }

  const MemoizedChild = React.memo(Child);

  function Parent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
      setCount(prev => prev + 1);
    }, []); // Empty array means the function never changes

    return (
      <div>
        <p>Count: {count}</p>
        <MemoizedChild onClick={handleClick} />
      </div>
    );
  }
  `,
    quiz: {
      question: "What does `useCallback` prevent?",
      options: [
        "State updates",
        "Unnecessary function re-creations",
        "Component unmounting",
        "Prop changes",
      ],
      answer: "Unnecessary function re-creations",
    },
  },
  {
    id: "react-13",
    question: "What is `React.memo` and when should you use it?",
    answer:
      " `React.memo` is a higher-order component that memoizes a functional component, preventing it from re-rendering if its props haven’t changed. It’s useful for optimizing performance in components that render frequently with the same props, especially in large applications. However, it should be used judiciously, as the overhead of memoization might outweigh benefits for simple components.",
    topic: "react",
    subTopic: "Performance",
    code: `
  import React, { useState } from 'react';

  const ExpensiveComponent = React.memo(({ value }) => {
    console.log('ExpensiveComponent rendered');
    return <div>Value: {value}</div>;
  });

  function App() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <ExpensiveComponent value={42} />
      </div>
    );
  }
  // ExpensiveComponent only re-renders if 'value' changes.
  `,
    quiz: {
      question: "When does a component wrapped in `React.memo` re-render?",
      options: [
        "Every time the parent renders",
        "Only when its props change",
        "When state changes",
        "When the component mounts",
      ],
      answer: "Only when its props change",
    },
  },
  {
    id: "react-14",
    question: "Explain the purpose of the `useMemo` Hook.",
    answer:
      "The `useMemo` Hook memoizes the result of a computation, recalculating it only when its dependencies change. It’s used to optimize performance by avoiding expensive calculations on every render. This is particularly helpful for computations that derive data from state or props, ensuring they don’t run unnecessarily.",
    topic: "react",
    subTopic: "Hooks",
    code: `
  import React, { useState, useMemo } from 'react';

  function ExpensiveCalculation({ numbers }) {
    const sum = useMemo(() => {
      console.log('Calculating sum...');
      return numbers.reduce((acc, num) => acc + num, 0);
    }, [numbers]);

    return <div>Sum: {sum}</div>;
  }

  function App() {
    const [numbers] = useState([1, 2, 3, 4, 5]);
    const [count, setCount] = useState(0);

    return (
      <div>
        <ExpensiveCalculation numbers={numbers} />
        <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
      </div>
    );
  }
  `,
    quiz: {
      question: "What does `useMemo` optimize?",
      options: [
        "Event handlers",
        "Expensive computations",
        "Component mounting",
        "State updates",
      ],
      answer: "Expensive computations",
    },
  },
  {
    id: "react-15",
    question: "What are Higher-Order Components (HOCs)?",
    answer:
      "Higher-Order Components (HOCs) are a pattern in React where a function takes a component and returns a new component with enhanced functionality. They’re used to reuse component logic, such as adding props, handling authentication, or modifying rendering behavior. HOCs promote code reuse and abstraction but have largely been replaced by Hooks in modern React for simpler scenarios.",
    topic: "react",
    subTopic: "Advanced Concepts",
    code: `
  import React from 'react';

  function withLogger(WrappedComponent) {
    return function EnhancedComponent(props) {
      console.log('Rendering with props:', props);
      return <WrappedComponent {...props} />;
    };
  }

  function SimpleComponent({ message }) {
    return <div>{message}</div>;
  }

  const LoggedComponent = withLogger(SimpleComponent);

  function App() {
    return <LoggedComponent message="Hello, World!" />;
  }
  `,
    quiz: {
      question: "What is the primary purpose of an HOC?",
      options: [
        "To manage state",
        "To reuse component logic",
        "To handle side effects",
        "To render lists",
      ],
      answer: "To reuse component logic",
    },
  },
  {
    id: "react-16",
    question: "Explain the lifecycle methods in class components.",
    answer:
      "Class components in React have lifecycle methods that allow you to hook into different phases of a component’s life: mounting, updating, and unmounting. Key methods include `componentDidMount` (runs after mounting), `componentDidUpdate` (runs after updates), and `componentWillUnmount` (runs before unmounting). These methods are useful for tasks like fetching data, setting up subscriptions, or cleaning up resources, though Hooks have largely replaced them in functional components.",
    topic: "react",
    subTopic: "Core Concepts",
    code: `
  import React from 'react';

  class MyComponent extends React.Component {
    componentDidMount() {
      console.log('Component mounted');
    }

    componentDidUpdate(prevProps) {
      console.log('Component updated with props:', this.props);
    }

    componentWillUnmount() {
      console.log('Component will unmount');
    }

    render() {
      return <div>{this.props.message}</div>;
    }
  }

  function App() {
    const [show, setShow] = React.useState(true);
    return (
      <div>
        {show && <MyComponent message="Hello" />}
        <button onClick={() => setShow(!show)}>Toggle</button>
      </div>
    );
  }
  `,
    quiz: {
      question:
        "Which lifecycle method runs after a component is added to the DOM?",
      options: [
        "componentWillUnmount",
        "componentDidMount",
        "componentDidUpdate",
        "render",
      ],
      answer: "componentDidMount",
    },
  },
  {
    id: "react-17",
    question: "What is prop drilling and how can it be avoided?",
    answer:
      "Prop drilling occurs when props are passed through multiple layers of components, even if intermediate components don’t need them, just to reach a deeply nested component. It can make code harder to maintain. To avoid it, you can use the Context API to share data globally, custom Hooks to encapsulate logic, or state management libraries like Redux for larger applications.",
    topic: "react",
    subTopic: "State Management",
    code: `
  import React, { createContext, useContext } from 'react';

  const UserContext = createContext(null);

  function Grandchild() {
    const user = useContext(UserContext);
    return <div>User: {user.name}</div>;
  }

  function Child() {
    return <Grandchild />;
  }

  function Parent() {
    return (
      <UserContext.Provider value={{ name: 'Alice' }}>
        <Child />
      </UserContext.Provider>
    );
  }
  `,
    quiz: {
      question: "What is a common solution to avoid prop drilling?",
      options: [
        "Using refs",
        "The Context API",
        "Higher-Order Components",
        "Lifecycle methods",
      ],
      answer: "The Context API",
    },
  },
  {
    id: "react-18",
    question: "What is the purpose of `React.StrictMode`?",
    answer:
      "`React.StrictMode` is a development tool that wraps your app or components to highlight potential problems. It doesn’t render any visible UI but activates additional checks and warnings, such as detecting unsafe lifecycle methods, unexpected side effects, or deprecated APIs. It helps developers write more robust code by catching issues early, though it only runs in development mode.",
    topic: "react",
    subTopic: "Debugging",
    code: `
  import React from 'react';

  function App() {
    return (
      <React.StrictMode>
        <div>
          <h1>Hello, World!</h1>
        </div>
      </React.StrictMode>
    );
  }
  `,
    quiz: {
      question: "When does `React.StrictMode` run its checks?",
      options: [
        "In production mode",
        "In development mode",
        "During testing",
        "On every render",
      ],
      answer: "In development mode",
    },
  },
  {
    id: "react-19",
    question: "Explain the concept of reconciliation in React.",
    answer:
      "Reconciliation is the process React uses to update the DOM efficiently when state or props change. It compares the new Virtual DOM with the previous one using a diffing algorithm, identifying what has changed. React then updates only the affected parts of the real DOM, minimizing costly manipulations. This process ensures fast and efficient renders, even in complex applications.",
    topic: "react",
    subTopic: "Core Concepts",
    code: `
  import React, { useState } from 'react';

  function List() {
    const [items, setItems] = useState(['A', 'B', 'C']);

    return (
      <div>
        <ul>
          {items.map(item => <li key={item}>{item}</li>)}
        </ul>
        <button onClick={() => setItems([...items, 'D'])}>Add Item</button>
      </div>
    );
  }
  // React only updates the new <li> element in the DOM.
  `,
    quiz: {
      question: "What does React’s reconciliation process compare?",
      options: [
        "The real DOM with the browser",
        "The Virtual DOM with its previous version",
        "State with props",
        "Components with their children",
      ],
      answer: "The Virtual DOM with its previous version",
    },
  },
  {
    id: "react-20",
    question: "What are custom Hooks and how do you create them?",
    answer:
      "Custom Hooks are reusable functions that encapsulate logic using React’s built-in Hooks. They allow you to extract and share stateful logic between components without repeating code. To create one, define a function starting with `use` that calls other Hooks, then use it in components like any built-in Hook. This promotes modularity and cleaner code.",
    topic: "react",
    subTopic: "Hooks",
    code: `
  import { useState, useEffect } from 'react';

  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
  }

  function Component() {
    const width = useWindowWidth();
    return <div>Window width: {width}px</div>;
  }
  `,
    quiz: {
      question: "What must a custom Hook’s name start with?",
      options: ["hook", "use", "custom", "react"],
      answer: "use",
    },
  },
  {
    id: "react-21",
    question: "What is the role of the `useRef` Hook?",
    answer:
      "The `useRef` Hook creates a mutable object whose `.current` property can hold any value, persisting across renders without triggering re-renders when changed. It’s commonly used to access DOM elements directly or store values that don’t need to affect the UI, like previous state or timers. Unlike state, updating a ref doesn’t cause a component to update.",
    topic: "react",
    subTopic: "Hooks",
    code: `
  import React, { useRef, useEffect } from 'react';

  function TextInput() {
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    }, []);

    return <input ref={inputRef} type="text" placeholder="Type here" />;
  }
  `,
    quiz: {
      question: "What happens when you update a ref’s `.current` value?",
      options: [
        "The component re-renders",
        "Nothing, it doesn’t trigger a re-render",
        "The DOM updates automatically",
        "State resets",
      ],
      answer: "Nothing, it doesn’t trigger a re-render",
    },
  },
  {
    id: "react-22",
    question: "What are conditional rendering techniques in React?",
    answer:
      "Conditional rendering in React involves rendering different UI based on conditions, typically using JavaScript operators like `if`, ternary operators, or logical `&&`. It’s used to show or hide elements based on state, props, or other logic. Common patterns include using ternaries for inline conditions or `&&` for rendering only when true, making React components dynamic and responsive.",
    topic: "react",
    subTopic: "Core Concepts",
    code: `
  import React, { useState } from 'react';

  function Greeting() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <div>
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login
        </button>
      </div>
    );
  }
  `,
    quiz: {
      question:
        "Which operator is commonly used for inline conditional rendering?",
      options: ["&&", "||", "? :", "if"],
      answer: "? :",
    },
  },
  {
    id: "react-23",
    question: "What is the purpose of error boundaries in React?",
    answer:
      "Error boundaries are React components that catch JavaScript errors in their child component tree, preventing the entire app from crashing. They use lifecycle methods like `componentDidCatch` and `static getDerivedStateFromError` to log errors and display fallback UI. Only class components can be error boundaries, though Hooks can’t directly replicate this behavior.",
    topic: "react",
    subTopic: "Advanced Concepts",
    code: `
  import React from 'react';

  class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      console.log('Error:', error, info);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }

  function BuggyComponent() {
    throw new Error('I crashed!');
    return <div>Never reached</div>;
  }

  function App() {
    return (
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    );
  }
  `,
    quiz: {
      question: "What can an error boundary do when an error occurs?",
      options: [
        "Fix the error automatically",
        "Display a fallback UI",
        "Restart the component",
        "Update state directly",
      ],
      answer: "Display a fallback UI",
    },
  },
  {
    id: "react-24",
    question: "What is lazy loading in React and how is it implemented?",
    answer:
      "Lazy loading in React delays loading of components until they’re needed, improving initial load time. It’s implemented using `React.lazy()` to dynamically import components and `Suspense` to handle the loading state with a fallback UI. This is ideal for large apps where not all features are required upfront, reducing bundle size and boosting performance.",
    topic: "react",
    subTopic: "Performance",
    code: `
  import React, { Suspense, lazy } from 'react';

  const LazyComponent = lazy(() => import('./LazyComponent'));

  function App() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      </div>
    );
  }
  `,
    quiz: {
      question: "What function is used to enable lazy loading in React?",
      options: ["React.memo", "React.lazy", "useLazy", "Suspense"],
      answer: "React.lazy",
    },
  },
  {
    id: "react-25",
    question: "Explain the purpose of `React.forwardRef`.",
    answer:
      "`React.forwardRef` allows you to pass a ref from a parent component to a child component’s DOM element or a specific part of it. It’s useful when a parent needs direct access to a child’s DOM node or when building reusable components like inputs or buttons that need to expose their refs. It creates a component that forwards the ref to its intended target.",
    topic: "react",
    subTopic: "Advanced Concepts",
    code: `
  import React, { useRef, forwardRef } from 'react';

  const FancyInput = forwardRef((props, ref) => {
    return <input ref={ref} type="text" placeholder="Fancy input" />;
  });

  function App() {
    const inputRef = useRef(null);

    const focusInput = () => {
      inputRef.current.focus();
    };

    return (
      <div>
        <FancyInput ref={inputRef} />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  }
  `,
    quiz: {
      question: "What does `React.forwardRef` allow you to do?",
      options: [
        "Pass state to a child",
        "Pass a ref to a child component",
        "Memoize a component",
        "Handle side effects",
      ],
      answer: "Pass a ref to a child component",
    },
  },
];
