import * as React from "react";

import { Link } from "react-router-dom";

class NotFound extends React.Component {
    render() {
        return (
            <>
                <p>404: Not Found</p>
                <Link to="/">Take me home</Link>
            </>
        );
    }
}

export default NotFound;
