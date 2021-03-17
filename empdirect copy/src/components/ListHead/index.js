import React from "react";
import "./style.css";
import Card from '../Card';

class ListHead extends React.Component {

    state = {
        alphabetical: true,
        ascending: true,
        sortedEmployees: [],
        employees: []
    }

    componentDidMount() {
        if (this.state.sortedEmployees.length < 1) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.empList !== prevProps.empList) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    sortName = () => {
        let sortEmp = [];
        if (this.state.alphabetical) {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            alphabetical: !this.state.alphabetical,
            sortedEmployees: sortEmp

        })
    }

    render() {
        return (

            <div>
                <div className="header">
                    <div><p onClick={this.sortName} className="name">Name (A-Z)</p></div>
                    <div class="p">Photo</div>
                    <div class="S">State</div>
                    <div class="A">Age</div>
                    <div class="E">E-mail</div>
                    <div class="P">Phone</div>
                </div>

                {
                    this.state.sortedEmployees.length > 0 &&
                    this.state.sortedEmployees.map((item, index) => (

                            <Card
                                first={item.name.first}
                                last={item.name.last}
                                image={item.picture.medium}
                                title={item.name.title}
                                gender={item.location.state}
                                age={item.dob.age}
                                email={item.email}
                                phone={item.cell}
                            />
                    ))
                }
            </div>
        );
    }
}

export default ListHead;