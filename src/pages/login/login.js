import { useState } from 'react'
import axios from 'axios'
import "./login.css"

const Login = () => {

	const [loginDetails, setLoginDetails] = useState({
		email: "",
		password: ""
	})

	const [signUpDetails, setSignUpDetails] = useState({
		name: "",
		email: "",
		phone: "",
		college_name: "",
		password: ""
	})

	async function postDetailsToAPI(isSignUp) {
		if (isSignUp) {
			try {
				const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, JSON.stringify(signUpDetails), {
					headers: {
						"Content-Type": "application/JSON",
					}
				})
				// setLoggedInUser(response)
			} catch (error) {
				// toast.update(toastID, { render: error.response.data.msg, type: "fail", isLoading: false })
				console.log(error)
			}
		} else {
			try {
				const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, JSON.stringify(loginDetails), {
					headers: {
						"Content-Type": "application/JSON",
					}
				})
				// setTimeout(() => { setLoggedInUser(response) }, 800)
				// toast.update(toastID, { render: "Successfully authenticated !", type: "success", isLoading: false })
			} catch (error) {
				// toast.update(toastID, { render: error.data.msg, type: "fail", isLoading: false })
				console.log(error)
			}
		}
	}

	function handleSubmit(event, isSignUp) {
		console.log(loginDetails)
		if (signUpDetails.phone.length !== 10 && isSignUp) {
			alert("Phone no. should be 10 digit !")
		}
		else {
			// toastID = toast.loading("Authenticating...")
			// postDetailsToAPI(isSignUp)
		}
		event.preventDefault();
	}

	function handleInputFields(event, isSignUp) {
		console.log(event.target.value);
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
							<input className='input-lg' type="tel" name="phone" placeholder="Whatsapp Number" required onChange={(event) => handleInputFields(event, true)} value={signUpDetails.phone} />
							<input className='input-lg' type="text" name="college_name" placeholder="College" required onChange={(event) => handleInputFields(event, true)} value={signUpDetails.college_name} />
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