import React from "react";

function Documentation() {
  return (
    <div className="container ">
      <article className="my-4">
        <text>
          <strong> A product management system</strong> is a web application that allows us to
          manage products and Categories . It includes login and register
          functionality that can help us to secure access to sensitive data and
          control who has access to the system and only the registered users
          will have the ability to perform CRUD (Create, Read, Update, and
          Delete ) operations.
        </text>

        <h1>Prerequisites</h1>
        <ol>
          <li>Vs code , Node.js and npm must be installed on a computer.</li>
        </ol>

        <h1>Installation</h1>
        <ol>
          <li>Clone the repository from GitHub using the following command:</li>

          <p>
            git clone{" "}
            <a href="https://github.com/AmytMan/Product-management-system">
              https://github.com/AmytMan/Product-management-system
            </a>
          </p>
          <li>
            Change the current working directory to the project directory:
          </li>
          <p>cd product-management-system</p>
          <li>Install all the dependencies using npm:</li>
          <p>npm install</p>
        </ol>
      </article>
      <article>
        <h1>Starting the server</h1>
        <ol>
          <li>Start the server using the following command in VS Code.</li>
          <p >npm run dev</p>
        </ol>
        <h1>Using the product management system</h1>
        <ol>
          <li>
            Open a web browser and go to the following URL:
            http://localhost:5173.
          </li>
          <li>
            It will redirect us to the HomePage which have Login and Register
            option. Click on the "Register" to create a new account
          </li>
          <li>
            Once we have registered, we will be redirected to the login page.
            Enter the login credentials to log in.
          </li>
          <li>
            After logged in, we will be redirected to the product management
            dashboard which shows the profile of user with image and name.And below it you find two buttons for Products and Categories .
          </li>
          <li>
            To create a new products and categories,we must click on the "Create + " button and
            fill in the product details.
          </li>
          <li>
            To see the product and Category we can click on View button , it will display
            individual products and Categories with all details.
          </li>
          <li>
            To update or delete an existing product,one must click on the
            corresponding buttons from the list table.
          </li>
          <li>To log out, there is Logout button in the header.</li>
        </ol>
      </article>

      <article>
        <h1>Conclusion</h1>
        <p>
          This is all about on how to run the product management system locally
          with login, register, and CRUD functionality. If you face any issues,
          please fell free to contact me.
        </p>
      </article>
    </div>
  );
}

export default Documentation;
