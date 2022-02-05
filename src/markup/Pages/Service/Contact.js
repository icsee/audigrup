import axios  from "axios";
import React from "react";
import { API } from '../../Constants';



class Contact extends React.Component {

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            token: [],
            dataisLoaded: false
        };
    }

    saveContact3 = (token) => {

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'
            }
        };

        axios.get(`${API.BOLLETINS}`, {axiosConfig})
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }

    saveContact2 = (token) => {


        var postData = {
            'email': 'ja.silvarojas@gmail.com',
            'fullName': 'José Silva',
            'phoneNumber': 1231231234,
            'issue': 'Asunto cotización abogados audigrup äéíó'
        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token
            }
        };

        axios.post(`${API.CONTACTS}`, JSON.stringify(postData), axiosConfig)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }

    saveContact = async (token) => {
        await fetch(`${API.CONTACTS}`, {
            method: 'post',
            headers: new Headers({
                'X-CSRF-TOKEN': token
            }),
            //credentials: "same-origin",
            //mode:'no-cors',
            body: JSON.stringify({
                'email': 'ja.silvarojas@gmail.com',
                'fullName': 'José Silva',
                'phoneNumber': 1231231234,
                'issue': 'Asunto cotización abogados audigrup äéíó'
            })
        })
            .then(res => {
                console.log('res', res)
            })
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(`${API.TOKEN}`)
            .then(res => res.json())
            .then((json) => {
                console.log('token', json)
                this.setState({
                    token: json.token,
                    dataisLoaded: true
                });

                this.saveContact2(json.token)

            })
    }

    render() {
        const { dataisLoaded, bolletinList } = this.state;
        if (!dataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div className="App">
                <h1> CONTACTS </h1>
            </div>
        );
    }
}

export default Contact;
