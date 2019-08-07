import React, {Component} from 'react';
import axios from "axios";
import logo from './../logo.svg';
import '../App.css';
import LinearProgress from "@material-ui/core/LinearProgress";
import Detail from "./Detail";
import Review from "./Review";

const EndPoint = "https://developers.zomato.com/api/v2.1/restaurant?res_id=";
const ReviewEndPoint = "https://developers.zomato.com/api/v2.1/reviews?res_id=";
const zomatoKey = "adb4ddec3ea8eb880b2242985742f27d";


class Restaurant extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: null,
            restaurant: null,
            review: null
        };
    }

    componentDidMount() {
        // review
        axios.get(ReviewEndPoint + this.props.match.params.id, {'headers': {'user-key': zomatoKey}})
            .then(response => {
                console.info("review:", response.data);
                const state = Object.assign(this.state, {
                    review: response.data,
                });
                this.setState(state);

                // restaurant
                axios.get(EndPoint + this.props.match.params.id, {'headers': {'user-key': zomatoKey}})
                    .then(response => {
                        console.info("restaurant:", response.data);
                        const state = Object.assign(this.state, {
                            restaurant: response.data,
                            name: response.data.name
                        });
                        this.setState(state);
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));

    }

    render() {
        if (this.state.name != null) {
            return (
                <div className="App">
                    <header className="App-header">
                        <a href={"/"}>
                            <img src={logo} className="App-logo" alt="logo"/>
                        </a>
                        <h1 className="App-title">Find Restaurant</h1>
                    </header>
                    <Detail data={this.state.restaurant}/>
                    <Review data={this.state.review}/>
                </div>
            );
        } else {
            return (
                <div className="Loading">
                    <LinearProgress/>
                    <br/>
                    <LinearProgress color="secondary"/>
                </div>
            );
        }
    }

}

export default Restaurant;
