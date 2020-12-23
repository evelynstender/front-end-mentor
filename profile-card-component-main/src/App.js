import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import "./App.css";

// import React, { lazy, Suspense } from "react";
// const AvatarComponent = lazy(() => import("./AvatarComponent"));

function App() {
    const ProfileCard = lazy(() => import("./components/ProfileCard"));

    const renderLoader = () => <div></div>;

    return <div className="App">
        <Suspense fallback={renderLoader()}>
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/profile-card-component"
                        component={ProfileCard}
                    />
                    <Route path="/">
                        <Redirect to="/profile-card-component" />
                    </Route>
                </Switch>
            </BrowserRouter>
            ;
        </Suspense>
    </div>;
}

export default App;
