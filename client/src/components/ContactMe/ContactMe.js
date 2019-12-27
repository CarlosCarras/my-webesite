import React from 'react';
import ContactForm from "./ContactForm";
import './ContactMe.css'

const name       = "Carlos Carrasquillo",
      university = "University of Florida",
      dept       = ["Dept. of Mechanical and Aerospace Engineering",
                    "Dept. of Computer and Electrical Engineering"],
      phone      = "(787) 668-8096",
      email      = "c.carrasquillo@ufl.edu";


class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    componentDidMount() {
        this.setState({isLoading: false})
    }


    getName() {
        return <span>{name}<br/></span>
    }
    getPhone() {
        return <span>{phone}<br/></span>
    }
    getEmail() {
        return <span>{email}<br/></span>
    }
    getUniversity() {
        return <span>{university}<br/></span>
    }
    getDept(n) {
        return <span>{dept[n]}<br/></span>
    }

    render(){
        return (
            <div className="contact-me-container">
                <div className="contact-me-row">
                    <div className="contact-me-column left-column">
                        <header className="contact-header">Contact Me</header>
                        <div className="summary">
                            {/*this.getName()*/}
                            <span className="university-name">{this.getUniversity()}</span>
                            <ul className="contact-list">
                                <li>{this.getDept(0)}</li>
                                <li>{this.getDept(1)}</li>
                            </ul>
                            <div className="signature">Carlos Carrasquillo</div>
                            <ul className="contact-list contact-info">
                                <li>Phone: {this.getPhone()}</li>
                                <li>Email: {this.getEmail()}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-me-column right-column">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMe;
