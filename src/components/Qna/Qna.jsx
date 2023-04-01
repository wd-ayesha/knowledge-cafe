import React from "react";

const Qna = () => {
  return (
    <div className="mx-24">
      <div className="card bg-blue-200 shadow-xl mt-10">
        <div className="card-body">
          <h2 className="card-title text-3xl">Props vs state</h2>
          <p>
            In web development, "props" and "state" are terms commonly used in
            the context of React, a popular JavaScript library for building user
            interfaces. "Props" is short for "properties," and they are used to
            pass data from a parent component to a child component. Props can be
            any JavaScript value, such as a string, number, object, or function.
            "State," on the other hand, refers to the internal data of a
            component that can change over time. Unlike props, state can be
            modified by the component itself using the setState() method. When
            state changes, React re-renders the component to reflect the new
            state.
          </p>
        </div>
      </div>
      <div className="card bg-blue-200 shadow-xl mt-10">
        <div className="card-body">
          <h2 className="card-title text-3xl">How does useState work?</h2>
          <p>
            In React, useState is a hook that allows to add state to functional
            components. The useState hook returns an array with two elements:
            the current state value and a function to update the state value.
            When the state is updated using setCount, React re-renders the
            component to reflect the new state value. The useState hook multiple
            times in a single component to manage multiple pieces of state. The
            first argument to useState is the initial state value, which can be
            any value, including an object or an array.
          </p>
        </div>
      </div>
      <div className="card bg-blue-200 shadow-xl mt-10">
        <div className="card-body">
          <h2 className="card-title text-3xl">
            What is the purpose of useEffect other than fetching data?
          </h2>
          <p>
            Although the most common use case of the useEffect hook in React is
            to fetch data from an API, it has several other purposes beyond
            that. <br />
            <u>
              <em>Setting up event listeners:</em>
            </u>
            You can use the useEffect hook to set up event listeners when the
            component mounts, and remove them when the component unmounts.
            <br />
            <u>
              <em>Animating components:</em>
            </u>
            You can use the useEffect hook to animate components by updating
            their styles over time.
          </p>
        </div>
      </div>
      <div className="card bg-blue-200 shadow-xl mt-10">
        <div className="card-body">
          <h2 className="card-title text-3xl">How Does React work?</h2>
          <p>
            <b>Here's a step-by-step overview of how React works:</b> <br />
            (a) A developer writes React components in JavaScript code.
            Components can be thought of as building blocks for a user
            interface, and they can be composed together to create complex UIs.
            <br />
            (b) When the application is run, React creates a virtual DOM, which
            is a lightweight representation of the actual DOM. The virtual DOM
            is a tree structure that reflects the state of the React components.
            <br />
            (c) When the state of a component changes, React updates the virtual
            DOM by creating a new version of it. React then calculates the
            minimal set of changes needed to update the actual DOM to match the
            new virtual DOM. <br />
            (d) React then updates the actual DOM with the minimal set of
            changes needed. Because React only updates the parts of the DOM that
            have changed, it can update the UI much more efficiently than
            traditional JavaScript DOM manipulation. <br />
            (e) React provides a unidirectional data flow, which means that data
            flows down from parent components to child components via props.
            <br />
            (f) React provides a number of built-in hooks, such as useState,
            useEffect, and useContext, which allow developers to manage state,
            side effects, and context in a declarative way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qna;
