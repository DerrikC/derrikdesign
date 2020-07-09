import { Component } from "react"
import TextareaAutosize from "react-autosize-textarea"
import { sendContactMail } from "../components/networking/mail-api" 
//[1]

class Contact extends Component {
    state = {
        formButtonDisabled: false,
        formButtonText: "Send",
        name: "",
        mail: "",
        formContent: ""
    }

    render() {    
        const { formButtonText, formButtonDisabled, name, mail, formContent } = this.state
        
        const btnClass = formButtonDisabled ? "disabled" : "" 
//[2]

        return (
            <div>               
                <div className="grid"> 

                    <div className="col-8">
                        <h2>Let's Get to Work</h2>
                        <p>derrikdesign@gmail.com</p>                    
                    </div>
                </div>
                <div className="grid">
                    <div className="col-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            name="fname"
                            onChange={this.onNameChange} />
                    </div>
                    <div className="col-4">
                        <input
                            type="email"
                            placeholder="E-Mail"
                            value={mail}
                            name="email"
                            onChange={this.onMailChange} />
                    </div>
                </div>
                <div className="grid">
                    <div className="col-8">
                        <TextareaAutosize
                            name="text"
                            placeholder="Message"
                            value={formContent}
                            onChange={this.onFormContentChange}
                            style={{
                                minHeight: "48px",
                                width: "100%",
                                border: "none",
                                borderRadius: "0px",
                                margin: "8px 0px",
                                resize: "none",
                                padding: "0px",
                                paddingBottom: "14px",
                                WebkitAppearance: "none",
                                MozAppearance: "none"
                            }} /> 

                    </div>
                    <div className="col-8">
                        <button
                            className={btnClass}
                            type="submit"
                            onClick={this.submitContactForm}
                            disabled={formButtonDisabled}>

                           {formButtonText}
                       </button>
                    </div>
                </div>

                <style jsx>{`

                `}</style>
            </div>
        )
    }

    

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
//[5]

    onMailChange = (event) => {
        this.setState({ mail: event.target.value })
    }

    onFormContentChange = (event) => {
        this.setState({ formContent: event.target.value })
    }

    submitContactForm = async (event) => {
        event.preventDefault()
//[6]

        const recipientMail = 'devpoubelle@outlook.com'
        const { name, mail, formContent } = this.state

        const res = await sendContactMail(recipientMail, name, mail, formContent)
        if (res.status < 300) {
            this.setState({
                formButtonDisabled: true,
                formButtonText: "Thanks for your message",
                name: "",
                mail: "",
                formContent: ""
            })

        } else {
            this.setState({ formButtonText: "Please fill out all fields." })
        }
//[7]
    }
}

export default Contact