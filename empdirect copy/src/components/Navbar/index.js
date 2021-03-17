import React from "react";
import "./style.css";
import ListHead from '../ListHead';

class Navbar extends React.Component {

    state = {
        searchTerm: "",
        filteredEmployees: []
    };

    componentDidMount() {
        if (this.state.filteredEmployees.length < 1) {
            this.setState({
                filteredEmployees: this.props.employees
            })
        }
    }


    handleInputChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
        let userTyped = event.target.value;
        const filteredList = this.props.employees.filter((item) => {
            let values = item.name.first + item.name.last + item.location.state + item.dob.age + item.email + item.cell;
            return values.indexOf(userTyped) !== -1;

        });

        this.setState({
            filteredEmployees: filteredList

        });
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark indigo mb-4"></nav>
                <form className="search">
                    <input
                        value={this.state.searchTerm}
                        className = "fa fa-search"
                        name="searchTerm"
                        onChange={event => this.handleInputChange(event)}
                        type="text"
                        placeholder="Search by name"
                    />
                </form>
                {this.state.filteredEmployees.length > 0 &&
                    <ListHead empList={this.state.filteredEmployees} />
                }
            </div>

        );
    }
}


export default Navbar;