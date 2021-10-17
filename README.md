# WEBPACK TYPESCRIPT REACT TEMPLATE

This template is a starting point for a React project with Typescript, this is an alternative to the create-react-app template configured with Webpack. This template was created with the intention of generate react applications that will be exported as static html files, which are supposedly to run without a nodejs server environment.

## DEPENDENCIES
This template is configured to create an web application with the following technologies, ready to use:
* [Webpack](https://webpack.js.org/)
* [Typescript](https://www.typescriptlang.org/)
* [ReactJS](https://reactjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [Jest](https://jestjs.io/)

**NOTE:** currenty working in find alternatives for React Testing

## HOW TO START
Download this template and open with an editor, then run the command to install the dependencies
```
npm install -D
```
During the developing, you can run the deveopment command to check the changes in real time
```
npm run dev
```
To build the static assets, run de build command, then the `index.html`, `main.js` and `styles.css` will be generated in the `dist` directory.
```
npm run build
```
To permform the tests using jest, put all your tests in the `__tests__` directory and run the test command.
```
npm run test
```

## License
[MIT](https://mit-license.org/)