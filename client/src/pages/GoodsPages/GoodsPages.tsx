import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import { StoreProvider } from './store';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { WohnzimmermoebelContent } from './content/WohnzimmermoebelContent';
import { SchlafzimmermoebelContent } from './content/SchlafzimmermoebelContent';
import { EsszimmermoebelContent } from './content/EsszimmermoebelContent';
import styles from './GoodsPages.module.css';

export const GoodsPage = () => {
    const {path} = useRouteMatch();

    return (
        <StoreProvider>
            <div className={styles.page}>
                <Header className={styles.additionalPadding}/>
                <Sidebar className={styles.additionalPadding}/>
                <Switch>
                    <Route path={`${path}/wohnzimmermoebel`}>
                        <WohnzimmermoebelContent />
                    </Route>
                    <Route path={`${path}/schlafzimmermoebel`}>
                        <SchlafzimmermoebelContent />
                    </Route>
                    <Route path={`${path}/esszimmermoebel`}>
                        <EsszimmermoebelContent />
                    </Route>
                    {/*...*/}
                </Switch>
                <Footer className={styles.additionalPadding}/>
            </div>
        </StoreProvider>
    )
}
