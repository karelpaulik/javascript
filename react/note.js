How to use react
----------------
// 1. Directly in the html file
// just for testin
...........................
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>

    <div id="mydiv"></div>

    <script type="text/babel">
      function Hello() {
        return <h1>Hello World!</h1>;
      }

      const container = document.getElementById('mydiv');
      const root = ReactDOM.createRoot(container);
      root.render(<Hello />)
    </script>

  </body>
</html>
//----------------------------------------------
// 2. create-react-app
// This procedure is since 2023 deprecated
npx create-react-app app  //Tímto se vytvoří aplikace, při instalaci ty vyhodí nějaké chyby
cd app
npm install web-vitals
npm start
