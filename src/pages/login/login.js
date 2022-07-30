import React, { useState } from 'react'
import Requests from '../../utils/requests'
import "./login.css"

const Login = () => {

	const [loginDetails, setLoginDetails] = useState({})

	const [signUpDetails, setSignUpDetails] = useState({})

	function postDetailsToAPI(isSignUp) {
		if (isSignUp) {
			Requests.signUp(signUpDetails)
				.then(response => console.log(response.data))
				.catch(error => console.error(error));
		} else {
			Requests.login(loginDetails)
				.then(response => console.log(response.data))
				.catch(error => console.error(error));
		}
	}

	function handleSubmit(event, isSignUp) {
		event.preventDefault();

		if (signUpDetails.phone.length !== 10 && isSignUp) {
			alert("Phone no. should be 10 digit !")
		}
		else {
			// toastID = toast.loading("Authenticating...")
			postDetailsToAPI(isSignUp)
		}
	}

	function handleInputFields(event, isSignUp) {
		isSignUp ?
			setSignUpDetails(prevState => {
				return {
					...prevState,
					[event.target.name]: event.target.value
				}
			})
			:
			setLoginDetails(prevState => {
				return {
					...prevState,
					[event.target.name]: event.target.value
				}
			})
	}

	function confirmPassword(event) {
		if (signUpDetails.password !== event.target.value) {
			console.log("Password does not match!")
			let confirmPasswordBox = document.getElementsByClassName("confirm_password");
			confirmPasswordBox[0].classList.add("confirm_password_red");
		}
	}

	return (
		<div>
			<div class="body-lg">
				<div class="main-lg">
					<input type="checkbox" id="chk-lg" aria-hidden="true" />

					<div class="signup">
						<form className='lodu' onSubmit={(event) => handleSubmit(event, true)} >
							<label className='label-lg' htmlFor="chk-lg" aria-hidden="true">Sign up</label>
							<input className='input-lg' type="text" name="name" placeholder="Full Name" required onChange={(event) => handleInputFields(event, true)} value={signUpDetails.name} />
							<input className='input-lg' type="email" name="email" placeholder="Email" required onChange={(event) => handleInputFields(event, true)} value={signUpDetails.email} />
							<input className='input-lg' type="password" name="password" placeholder="Password" required onChange={(event) => handleInputFields(event, true)} value={signUpDetails.password} />
							<input className='input-lg confirm_password' type="password" name="confirm_password" placeholder="Confirm Password" required onChange={(event) => confirmPassword(event)} />
							<input className='input-lg' type="tel" name="mobile" placeholder="Whatsapp Number" required onChange={(event) => handleInputFields(event, true)} value={signUpDetails.phone} />
							{/* <input className='input-lg' type="text" name="college_name" placeholder="College" required onChange={(event) => handleInputFields(event, true)} value={signUpDetails.college_name} /> */}
							<input className='btn69' type='submit' name='sign-up' value='Sign Up' />
							{/* <button className='btn69' type='submit'>Sign Up</button> */}
						</form>
					</div>

					<div class="login">
						<form onSubmit={(event) => handleSubmit(event, false)} >
							<label className='label-lg' htmlFor="chk-lg" aria-hidden="true">Login</label>
							<input className='input-lg' type="email" name="email" placeholder="Email" required onChange={(event) => handleInputFields(event, false)} value={loginDetails.email} />
							<input className='input-lg' type="password" name="password" placeholder="Password" required onChange={(event) => handleInputFields(event, false)} value={loginDetails.password} />
							<input className='btn69' type='submit' name='login' value='Login' />
							{/* <button className='btn69' type='submit'>Login</button> */}
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login;