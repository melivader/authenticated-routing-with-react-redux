import * as React from "react";
import { connect } from "react-redux";

import { logIn } from "../../actions/current";

interface IProps {
  logInConnect: () => void;
}

class LogIn extends React.Component<IProps> {
    render() {
        let {logInConnect} = this.props;
        return (
            <>
                <p>Login page</p>
                <button onClick={logInConnect}>log me in</button>
            </>
        );
    }
}

const mapDispatchToProps = {
  logInConnect: logIn
};

export default connect(
  null,
  mapDispatchToProps,
)(LogIn);
