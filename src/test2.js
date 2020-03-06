

<Router>
    <Link to=”/path-name>Path Name</link>
    <Link to=”/path-name>Path Name</link>

    <Route path=”/path-name”>

        <Component-path1 />

    </Route>


    <Route path=”/path-name”>

        <Component-path1 />

    </Route>

    <Route path=”/path-name/:id” render={({ match })} => {
        <Component article={match.params.id} />
    };
</Router>
