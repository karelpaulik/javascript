How to use react
//---------------------------------------------------------------------------------------
// 1. Directly in the html file
// just for testin
// Source: w3schools
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
//---------------------------------------------------------------------------------------------
// 2. create-react-app
// Toto je způsob, který byl doporučován dříve. Není nyní ani na "react.dev" stránkách.
// This procedure is since 2023 deprecated
// Source: w3schools, https://www.itnetwork.cz
npx create-react-app app  //Tímto se vytvoří aplikace, při instalaci ty vyhodí nějaké chyby
cd app
npm install web-vitals
npm start

Tímto by se měl spustit prohlížeč, ve kterém poběží nová react aplikace.
//---------------------------------------------------------------------------------------------
// 3. Frameworky (nuxt.js, Remix, Gatsby, Expo)

// 3a. nuxt - automatic installation
// Použiji: nuxt.js
npx create-next-app@latest

What is your project named? my-app              //Project name
Would you like to use TypeScript? No / Yes      //No
Would you like to use ESLint? No / Yes          //No
Would you like to use Tailwind CSS? No / Yes    //No
Would you like your code inside a `src/` directory? No / Yes                //No
Would you like to use App Router? (recommended) No / Yes                    //Yes
Would you like to use Turbopack for `next dev`?  No / Yes                   //No
Would you like to customize the import alias (`@/*` by default)? No / Yes   //
What import alias would you like configured? @/*                            //

// 3b. nuxt - manual installation
// Nevytváří adresáře: app, ...
// Nepoužívám
- md app
- cd app
- npm init --yes
- npm install next@latest react@latest react-dom@latest
