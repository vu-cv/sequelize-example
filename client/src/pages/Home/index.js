import { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.getUsers = this.getUsers.bind(this)
        this.handleSearch = this.handleSearch.bind(this)

    }

    getUsers() {
        axios.get('http://localhost:8000/users')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleSearch(e) {
        let q = e.target.value
        axios.get('http://localhost:8000/users?q=' + q)
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    componentDidMount() {
        this.getUsers()
    }

    handleDelete(id) {
        let confirm = window.confirm(`Delete ${id}?`)
        if (confirm) {
            axios.delete('http://localhost:8000/users/' + id)
                .then(response => {
                    this.getUsers()
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }


    render() {
        let { users } = this.state
        console.log(users);

        return (
            <>
                <div className="App">
                    <div className="mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <Link to="/users/create">
                                        <button type="button" className="btn btn-success">Add New</button>
                                    </Link>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <input onChange={this.handleSearch} type="text" className="form-control" placeholder="Enter..." />
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleSearch}>Search</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Password</th>
                                                <th scope="col">Created At</th>
                                                <th scope="col">Updated At</th>
                                                <th scope="col" className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user, index) => {
                                                return (
                                                    <tr key={user.id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{user.email}</td>
                                                        <td>{user.password}</td>
                                                        <td>{user.createdAt}</td>
                                                        <td>{user.updatedAt}</td>
                                                        <td className="text-end">
                                                            <Link to={`/users/${user.id}/view`}>
                                                                <button type="button" className="btn btn-warning btn-sm ms-1">View</button>
                                                            </Link>
                                                            <Link to={`/users/${user.id}/edit`}>
                                                                <button type="button" className="btn btn-info btn-sm ms-1">Edit</button>
                                                            </Link>
                                                            <button onClick={() => this.handleDelete(user.id)} type="button" className="btn btn-danger btn-sm ms-1">Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export { Home }