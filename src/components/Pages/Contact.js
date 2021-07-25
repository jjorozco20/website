import React from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name'},
            {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email address'},
            {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number'}
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message'}

        ]
    ]
}

function Contact (props){

    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form name="sentMessage" noValidate onSubmit={e=> this.props.handleSubmit}>
                            <div className="row">
                                {fields.sections.map((section, sectionIndex) => {
                                    console.log('Rendering section', sectionIndex, "with", section);
                                    return (
                                        <div className="col-md-6" key={sectionIndex}>
                                            {section.map((field, index) => {
                                                return <Field 
                                                {...field} 
                                                key = {index} 
                                                value = {props.values[field.name]}
                                                name = {field.name}
                                                onChange = {props.handleChange}
                                                onBlur = {props.handleBlur}
                                                touched = {(props.touched[field.name])}
                                                errors = {props.errors[field.name]} />
                                            })}
                                        </div>
                                    )
                                })}
                                <div className="clearfix"></div>errors
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button
                                        type="submit" 
                                        className="btn btn-primary btn-xl text-uppercase"
                                        >Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default withFormik({
    mapPropsToValues: () =>({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Come on, bud, your name is longer than that.').required('You must give us your name.'),
        email: Yup.string().email('You need to give us a valid email.').required('We need your email.'),
        phone: Yup.string()
        	.min(10, 'Please provide your 10 digit phone number.')
					.max(15, 'Your phone number is too long.')
        	.required('We need a phone number to reach you at.'),
        message: Yup.string()
					.min(30, 'You need to provide us more details.')
					.max(300, 'Enough explanation.')
					.required('Message is required.')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log("VALUES", values);
        alert("You have submitted the form", JSON.stringify(values));
				if (!values){
					setSubmitting(false);
				}else{
					setSubmitting(true);
				}
    }
})(Contact);