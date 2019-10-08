#  👨‍🎤 Jorge Ferreiros's hackathon template

When we won a hackathon organized by Facebook, I spent the night before setting up a good dev environment, so we could focus on building features, rather than wasting time setting up the local dev.

I got some messages from people asking me if I use any template for hackathons, so I decided to extract the template from our Hackathon project, so everybody interested can fork and use it.

## How to install and develop locally?

1. Clone this repo locally:

    ```$ git clone https://github.com/ferreiro/facebook-hackathon.git```

2. Go to the project folder and run:

    ```yarn install```

3. Now in order to develop locally you simply need to run:

    ```yarn dev```
    
   This will create two servers, one of the backend servers and the other one a dev server for the react application.

### Hot reload

In development, all your frontend assets and the app will be automatically rebuilt! Also, it will automatically reload the browser! Yay.

*Note* If you do changes to the backend, you will need to manually refresh the website. Sorry guys didn't have time to do this (and it's late now)! haha.

## Tech stack

* **React:** A JavaScript library for building user interfaces
* **Webpack:** is an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding plugins are included. 
* **Express:** is a web application framework for Node.js. It is designed for building web applications and APIs.

## Architecture: Yarn Workspaces

To organize the project I'm using Yarn Workspaces. 
Yarn workspaces let you organize your project codebase using a monolithic repository (monorepo). I wrote an article about [Yarn Workspaces](https://www.smashingmagazine.com/2019/07/yarn-workspaces-organize-project-codebase-pro/) in case you are interested.

## Follow me

* Twitter: [https://www.twitter.com/jgferreiro](https://www.twitter.com/jgferreiro)
* Linkedin: [https://www.linkedin.com/in/jgferreiro/](https://www.linkedin.com/in/jgferreiro/)
* Instagram: [https://www.instagram.com/jgferreiro/](https://www.instagram.com/jgferreiro/)

