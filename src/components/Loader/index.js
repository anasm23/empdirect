import React from "react";
import "./style.css";
import Wrapper from "./Wrapper";
import {Container, Row, Col} from "./Grid"; 
class Loader extends React.Component {

    render() {
        return (
            <Wrapper>
            <Container>
            <div className="main">
                <div className="loader">

                    <div className="c0 c1 c2 c3 c4 c5 c6 c7 c8 c9">
                        {this.props.loadBar >= 0 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                    </div>
                    <div className="c1 c2 c3 c4 c5 c6 c7 c8 c9">
                        {this.props.loadBar >= 1 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                    </div>
                    <div className="c2 c3 c4 c5 c6 c7 c8 c9">
                        {this.props.loadBar >= 2 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                    </div>
                    <div className="c3 c4 c5 c6 c7 c8 c9">
                        {this.props.loadBar >= 3 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                    </div>
                    <div className="c4 c5 c6 c7 c8 c9">
                        {this.props.loadBar >= 4 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                    </div>
                    <div className="c5 c6 c7 c8 c9">
                        {this.props.loadBar >= 5 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                    </div>
                    <div className="c6 c7 c8 c9">
                        {this.props.loadBar >= 6 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                    </div>
                    <div className="c7 c8 c9">
                        {this.props.loadBar >= 7 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                    </div>
                    <div className="c8 c9">
                        {this.props.loadBar >= 8 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                    </div>
                    <div className="c9">
                        {this.props.loadBar >= 9 ? <div className="squaregrey"></div> : <div className="squarewhite"></div>}
                    </div>
                </div>
            </div>
            </Container>
            </Wrapper>
        );
    }
};
export default Loader;