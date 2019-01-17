# hoc_nodejs
Học web Nodejs
>https://www.codingame.com/playgrounds/1064/building-a-basic-todo-list-rest-api-in-node-js-with-express/persistence

## t1.js USING HTTP VERBS
As you may know, HTTP is using some methods (also know as "verbs") such as GET, POST, PUT, DELETE. Each method represents a kind of actions that can be executed on a resource (~ something designed by an URI).

When a HTTP client (such as a web browser) makes a request this request has three main parts:

the request line that contains the method (a.k.a verb), the path and the HTTP version
the headers that provides information about the request
the message body
In Node.js, this informations are available in the request object. Some of this information can be easily retrieved:

request.method to retrieve the HTTP verb
request.url to retrieve the path
request.rawHeaders to retrieve an array of the headers
request.httpVersion to retrieve the HTTP version ...

## t2.js express
NPM - The Node Package Manager
NPM is a tool shipped with Node.js that helps the user to manage packages of Node.js applications.

Here is a quick (non-exhaustive) recap of some of the main commands:

npm init [-f|--force|-y|--yes] initializes your package and generates the package.json file
npm install [--save | --save-dev | --save-optional| --save-optional]
--save (default for npm 5.x), install your dependencies in your dependecies section of the package.json
--save-dev, install a package and update the package.json but set the information in the devDependencies section
--save-optional, install the dependency and update the package.json but set the information in optionalDependencies section
npm uninstall , uninstall a package
npm update [-g] [...], update npm version (globally)
npm ls [[<@scope>/] ...] lists all the packages installed in the current directory
npm search [search terms]

```
npm install --save express
npm install --save body-parser
npm install --save express
```

