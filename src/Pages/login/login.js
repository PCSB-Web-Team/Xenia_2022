import React from 'react'
import "./login2.css"

const Index2 = () => {
  return (
    <div>
        <div class="body-lg">
	        <div class="main-lg">
		        <input type="checkbox" id="chk-lg" aria-hidden="true"/>

			        <div class="signup">
				        <form className='lodu'>
					        <label className='label-lg' for="chk-lg" aria-hidden="true">Sign up</label>
					        <input className='input-lg' type="text" name="txt" placeholder="Full Name" required=""/>
					        <input className='input-lg' type="email" name="email" placeholder="Email" required=""/>
					        <input className='input-lg' type="password" name="pswd" placeholder="Password" required=""/>
                            <input className='input-lg' type="password" name="cnf pswd" placeholder="Confirm Password" required=""/>
                            <input className='input-lg' type="text" name="wno." placeholder="Whatsapp Number" required=""/>
                            <input className='input-lg' type="text" name="clg" placeholder="College" required=""/>
					        <button className='btn69'>Sign up</button>
				        </form>
			        </div>

			<div class="login">
				<form>
					<label className='label-lg' for="chk-lg" aria-hidden="true">Login</label>
					<input className='input-lg' type="email" name="email" placeholder="Email" required=""/>
					<input className='input-lg' type="password" name="pswd" placeholder="Password" required=""/>
					<button className='btn69'>Login</button>
				</form>
			</div>
	    </div>
        </div>
    </div>
  )
}

export default Index2