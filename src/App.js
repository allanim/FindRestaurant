import React, {Component} from 'react';
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import logo from './logo.svg';
import './App.css';

import List from "./components/List";

const EndPoint = "https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city&start=";
const zomatoKey = "adb4ddec3ea8eb880b2242985742f27d";
const theme = createMuiTheme();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: [],
            total: null,
            offset: null,
            limit: null
        };
    }

    componentDidMount() {
        this.handleClick(0);
    }

    handleClick(offset) {
        axios.get(EndPoint + offset, {'headers': {'user-key': zomatoKey}})
            .then(response => {
                console.info("response:", response.data);
                this.setState({
                    restaurants: response.data.restaurants,
                    total: response.data.results_found,
                    offset: response.data.results_start,
                    limit: response.data.results_shown
                });

            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Find Restaurant</h1>
                </header>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Pagination
                        limit={this.state.limit}
                        offset={this.state.offset}
                        total={100}
                        onClick={(e, offset) => this.handleClick(offset)}
                    />
                </MuiThemeProvider>
                <List restaurants={this.state.restaurants}/>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Pagination
                        limit={this.state.limit}
                        offset={this.state.offset}
                        total={100}
                        onClick={(e, offset) => this.handleClick(offset)}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
