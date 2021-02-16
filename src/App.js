// in src/App.js
import * as React from "react";
import {Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "./users";

const dataProvider = jsonServerProvider('https://127.0.0.1:8001/api');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="costumes" list={UserList}/>
    </Admin>
);

export default App;
