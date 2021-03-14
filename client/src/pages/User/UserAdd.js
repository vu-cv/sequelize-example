import { Component } from "react";
import axios from 'axios';
class UserAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleSubmit(e) {
        e.preventDefault();
        let { email, password } = this.state;
        axios.post('http://localhost:8000/users', { email, password })
            .then(response => {
                this.props.history.push("/");
            })
            .catch(function (error) {
                alert(error)
                console.log(error);
            })

    }

    render() {
        return (
            <>
                <div className="App">
                    <div className="mt-5">
                        <div className="container">
                            <div className="row">
                                <h1>Add User</h1>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input name="email" type="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input name="password" type="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export { UserAdd }