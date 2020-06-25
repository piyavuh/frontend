import React, { Component } from 'react'

export default class Map extends Component {
    render() {
        return (
            <div  >
                <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7961366.751750858!2d96.99460933379245!3d13.011066597376619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sth!4v1587135684697!5m2!1sen!2sth" 
                style={{width:'230px',height:'300px'}}
                >
                </iframe>
                
            </div>

        )
    }
}
