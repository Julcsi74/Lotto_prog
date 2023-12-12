import axios from 'axios';

export function adat() {
    axios.get("http://localhost:3002/api/usercoint")
        .then(function(res) {
            return res.data
        })
        .then(function(data) {
            this.setState({
                list: data
            })
        })
}