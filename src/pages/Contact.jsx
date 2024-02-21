import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert, Card } from 'react-bootstrap'
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const styles = {
    card: {
        padding: "2%",
        background: "#D6FEFF",
        fontFamily: "monospace",
    },
};

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('please enter a valid email');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

return (
    <Card style={styles.card}>
        <h2 data-testid='h1tag' className="top-title">Contact Form</h2>
        <hr></hr>
        {errorMessage && (
            <div>
                <Alert key="danger" variant="danger">{errorMessage}</Alert>
            </div>
            )}
        <form className="justify-content-center contactForm"
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
        >
            <input type="hidden" name="form-name" value="contact" />
            <div className="mt-5" >
                <label htmlFor="name">Name:</label>
                <input className="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
            </div>
            <div className="mt-5" >
                <label htmlFor="email">Email Address:</label>
                <input className="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div className="mt-5" >
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
            </div> 

            <div className="mt-5 mb-5" >
            <button data-testid='button' className="btn btn-outline-dark " type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </Card>
    );
}
    
export default Contact;