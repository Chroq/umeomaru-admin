import * as React from "react";
import {Datagrid, List, TextField} from 'react-admin';

export const MediaList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
        </Datagrid>
    </List>
);