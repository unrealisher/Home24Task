import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { GOODS_PAGES_PATH, GoodsPage } from './pages/GoodsPages';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <Redirect to={`${GOODS_PAGES_PATH}/wohnzimmermoebel`}/>
                </Route>
                <Route path={GOODS_PAGES_PATH}>
                    <GoodsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
