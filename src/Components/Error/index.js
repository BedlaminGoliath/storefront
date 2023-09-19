import { useRouteError} from "react-router-dom";
import React from "react";

export default function Error(){
    const error = useRouteError();

    return(
        <main>
            <h3>I.. a mere robot cannot do that</h3>
            <p>
                <i>{error.statusText||error.message}</i>
            </p>
        </main>
    );
}