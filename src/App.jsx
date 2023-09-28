import './App.css'
import AccordionComponent from './Components/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const data = [
    {
      "question": "What is React?",
      "answer": "React is an open-source JavaScript library for building user interfaces. It focuses on building UI components that can efficiently update and render when the data changes."
    },
    {
      "question": "What is JSX in React?",
      "answer": "JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. React uses JSX to define the structure and content of its components."
    },
    {
      "question": "What is a React component?",
      "answer": "A React component is a reusable and self-contained building block for creating user interfaces. Components can be either functional (stateless) or class-based (stateful) and encapsulate a part of the UI and its behavior."
    },
    {
      "question": "What is the Virtual DOM in React?",
      "answer": "The Virtual DOM is a concept in React that represents a lightweight copy of the actual DOM (Document Object Model). React uses the Virtual DOM to optimize rendering performance by calculating the minimal number of changes needed to update the actual DOM."
    },
    {
      "question": "What is state in React?",
      "answer": "State in React refers to the data that a component can maintain and manage. It allows components to keep track of information that can change over time and trigger re-renders when it does."
    },
    {
      "question": "What is a React prop?",
      "answer": "A prop (short for 'property') in React is a way to pass data from a parent component to a child component. Props are read-only and help in making components reusable and configurable."
    },
    {
      "question": "What is a React Router?",
      "answer": "React Router is a popular library for adding client-side routing to React applications. It allows you to define different routes, map them to specific components, and navigate between views without causing a full page reload."
    },
    {
      "question": "What is Redux in React?",
      "answer": "Redux is a state management library often used with React to manage the application's global state in a predictable and centralized way. It provides a store to hold application data and follows a unidirectional data flow pattern."
    },
    {
      "question": "What are React hooks?",
      "answer": "React hooks are functions that allow you to use state and other React features in functional components. They provide a way to use state and side effects without writing class-based components."
    },
    {
      "question": "What is the purpose of useEffect() in React?",
      "answer": "useEffect() is a built-in React hook that allows you to perform side effects in functional components. It's commonly used for tasks like data fetching, setting up subscriptions, or manually changing the DOM. useEffect() runs after the component has rendered and can also clean up side effects when the component unmounts."
    }
  ]
  

  return (
      <div className='main-container flex justify-center items-center mt-80'>
        <div className='min-container flex flex-col pl-40 pr-40 pb-80'>
          <div className='flex justify-center items-center pt-40 pb-40'>
            <h1 style={{fontSize:"3.5rem"}} className='h1 text-color'>Question</h1>
          </div>
          <div className='accordion-container'>
            <AccordionComponent data={data}/>
          </div>
        </div>
      </div>
        
  )
}

export default App
