import React from 'react'



let myHeaders = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain'
});

class Shiguduofa extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentWillMount(){
        console.log('hehe');
        fetch('http://127.0.0.1/shiguduofa.jspx',{
        method: 'GET',
        mode: 'cors',
      })
        .then(function(response) {
            return response.text()
        }).then(function(body) {
            document.body.innerHTML = body
        })
        
    }

    render(){
        return <div>duofa</div>
    }
}

export default Shiguduofa