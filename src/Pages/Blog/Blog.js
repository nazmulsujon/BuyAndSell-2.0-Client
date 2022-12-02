import React from "react";

const Blog = () => {
  return (
    <div className="my-20 w-5/6 mx-auto">
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
        <div className="collapse-title text-xl font-medium ">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p className="text-left">
            There are four main types of state you need to properly manage in your React apps:
            <br />
            <br />
            1. Local state - Local state is most often managed in React using the useState hook.
            <br />
            <br />
            2. Global state - Global state is data we manage across multiple components.
            <br />
            <br />
            3. Server state - Data that comes from an external server that must be integrated with our UI state.
            <br />
            <br />
            4. URL state - Data that exists on our URLs, including the pathname and query parameters.
          </p>
        </div>
      </div>

      <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
        <div className="collapse-title text-xl font-medium">How does prototypical inheritance work?</div>
        <div className="collapse-content">
          <p className="text-left">
            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a
            method by which an object can inherit the properties and methods of another object.
          </p>
        </div>
      </div>

      <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
        <div className="collapse-title text-xl font-medium">What is a unit test? Why should we write unit tests?</div>
        <div className="collapse-content">
          <p>
            A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a
            system. In most programming languages, that is a function, a subroutine, a method or property.
            <br />
            Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable
            engineering environment where quality is paramount. Over the course of the product development life cycle,
            unit testing saves time and money, and helps developers write better code, more efficiently
          </p>
        </div>
      </div>

      <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
        <div className="collapse-title text-xl font-medium">React vs. Angular vs. Vue?</div>
        <div className="collapse-content">
          <p>
            1. React : React is a JavaScript library developed by Facebook which, among other things, was used to build
            Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and
            applications alike. The main concept of React. js is virtual DOM
            <br />
            2. Angular: Angular is a platform and framework for building single-page client applications using HTML and
            TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of
            TypeScript libraries that you import into your applications.
            <br />
            3. Vue : Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS,
            and JavaScript and provides a declarative and component-based programming model that helps you efficiently
            develop user interfaces, be they simple or complex.
            <br />
            Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an
            overlap with Angular and React with respect to their functionality like the use of components. Hence, the
            transition to Vue from either of the two is an easy option
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
