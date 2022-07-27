import React from 'react'
import "./login2.css"

const Index2 = () => {
  return (
    <div>
        <div class="body">
	        <div class="main">
		        <input type="checkbox" id="chk" aria-hidden="true"/>

			        <div class="signup">
				        <form className='lodu'>
					        <label for="chk" aria-hidden="true">Sign up</label>
					        <input type="text" name="txt" placeholder="Full Name" required=""/>
					        <input type="email" name="email" placeholder="Email" required=""/>
					        <input type="password" name="pswd" placeholder="Password" required=""/>
                            <input type="password" name="cnf pswd" placeholder="Confirm Password" required=""/>
                            <input type="text" name="wno." placeholder="Whatsapp Number" required=""/>
                            <input type="text" name="clg" placeholder="College" required=""/>
					        <button>Sign up</button>
				        </form>
			        </div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	    </div>
        </div>
    </div>
  )
}

export default Index2