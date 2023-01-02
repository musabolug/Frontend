import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import Contact from "./routes/contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
        },
      ],
    },
  ]);
function App_route() {
    return (
        <>
          <div id="sidebar">
            <h1>React Router Contacts</h1>
            <div>
              <form id="search-form" role="search">
                <input
                  id="q"
                  aria-label="Search contacts"
                  placeholder="Search"
                  type="search"
                  name="q"
                />
                <div
                  id="search-spinner"
                  aria-hidden
                  hidden={true}
                />
                <div
                  className="sr-only"
                  aria-live="polite"
                ></div>
              </form>
              <form method="post">
                <button type="submit">New</button>
              </form>
            </div>
            <nav>
              <ul>
                <li>
                  <a href={`contacts/1`}>Your Name</a>
                </li>
                <li>
                  <a href={`contacts/2`}>Your Friend</a>
                </li>
              </ul>
            </nav>
          </div>
          <div id="detail"></div>
        </>
      );
}

export default App_route