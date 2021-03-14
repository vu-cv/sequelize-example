import { Component } from "react";
import axios from 'axios';
class UserEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBack = this.handleBack.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleBack(){
        this.props.history.push("/");
    }


    handleSubmit(e) {
        e.preventDefault();
        let { email, password } = this.state;
        let { id } = this.props.match.params
        if (id) {
            axios.put('http://localhost:8000/users/'+id, { email, password })
                .then(response => {
                    this.props.history.push("/");
                })
                .catch(function (error) {
                    alert(error)
                    console.log(error);
                })
        }

    }
    componentDidMount() {
        let { id } = this.props.match.params
        if (id) {
            axios.get('http://localhost:8000/users/' + id)
                .then(res => {
                    console.log('res.data', res.data);
                    
                    this.setState({
                        email: res.data.email,
                        password: res.data.password
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }

    render() {
        let { id } = this.props.match.params
        return (
            <>
                <div className="App">
                    <div className="mt-5">
                        <div className="container">
                            <div className="row">
                                <h1>Edit User ({id})</h1>
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
                                        <button type="button" className="btn btn-success ms-1" onClick={this.handleBack}>Back</button>
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

export { UserEdit }