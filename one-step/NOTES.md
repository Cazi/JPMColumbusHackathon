GUIDE
------
npx create-react-app one-step --template typescript
nvm install 14
nvm use 14
cd <app directory>
npm install styled-components
npm start
//in src directory
touch components, atoms, molecule, organisms, pages
within organisms, touch folder for <component>

npm i --save-dev @types/styled-components
//@6 means install at version 6
npm install react-router-dom@6
//Manages history of pages visted, allows moving forwards and backwards between pages
npm install history
npm install react-router-dom@5.3.0
npm i --save-dev @types/react-router-dom


NOTES
--------
primary in render means true
Optional fifth folder: template
<></> react fragments
@types means spec. to typescript
named imports, grab piece of a library rather than the whole thing
...props => spread operator
padding => inside container
margin => outside container
//view width => vw, see NavBar.tsx, refers to the size of the browser, used on parent-most div
Single Page Applications:  SPAs
cmd/ctl . => auto imports
//? means optional property, see App