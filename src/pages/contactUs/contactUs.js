import React, { useState, useRef } from 'react';
import './contactUs.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const ContactUs = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
  const navigate = useNavigate();
	const reRef = useRef();

	const Submit = async (e) => {
		e.preventDefault();

		// const captchaToken = await reRef.current.executeAsync();
		// reRef.current.reset();
    console.log(e);
		const data = { name, phone, email, message};
    await axios.post('https://xenia-mailer.herokuapp.com/api/contact-us', data)
    .then((response) => {
      // console.log(response);
      if (response.data.success) {
        window.alert("Thank You For Contacting Us");
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        navigate('/',{replace:true});
		  }
    })
    .catch((error) => {
      console.log(error);
    });
		
	};

	return (
		<div className="contactUs mb-4 mt-20">
			{/* <ReCaptcha
				sitekey="6LdP8iobAAAAAHHXrhWEJLuoQWruhsQiLq1AywMg"
				size="invisible"
				ref={reRef}
			/> */}
			<div className="contactForm mb-4">
				<h1 className='text-4xl font-mono font-bold '>Send us a message</h1>
				<form onSubmit={Submit} id="contactUsForm">
					<input
						type="text"
						placeholder="Your Name"
						id="nameInputId"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="contactFill"
						required={true}
					></input>
					<input
						type="email"
						placeholder="Email"
						id="emailInputId"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="contactFill"
						required={true}
					></input>
					<input
						type="number"
						min="7000000000"
						max="9999999999"
						placeholder="Phone"
						id="phoneInputId"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						className="contactFill"
					></input>
					<textarea
						placeholder="Message"
						id="messageInputId"
						className="contactFill"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>

					<button type="submit" className="bg-transparent hover:bg-blue-500 text-cyan-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >
						{/* <ThemeButton value="Submit" /> */}
            Submit
					</button>
				</form>
			</div>

			<div className="contactInfo mb-2 mt-8">
				<h1 className='text-2xl font-mono font-bold'>Contact info</h1>
				<div className="address">
					<h3 className='text-xl font-semibold'>Where to find us</h3>
					<p>Survey no. 27, </p>
					<p>Near Trimurti Chowk,</p>
					{/* <p>Bharati Vidyapeeth Campus,</p> */}
					<p>Dhankawadi, </p>
					<p>Pune-411043</p>
				</div>
				<div className="phoneAndMail">
					<p className='display: inline-block'>
						<i className="fa fa-phone text-left text-lg">  <span className='text-lg' >+91 7028929568 </span> </i>
					</p>
          <br></br>
					<p className='display: inline-block'>
						<i className="fa fa-envelope text-left text-lg"><span style={{ marginLeft: '5px' }} className='text-lg'>support@pictcsi.com</span></i>{' '}
						
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;