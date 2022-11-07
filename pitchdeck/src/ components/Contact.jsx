import React from "react";

export default function Contact() {
	return(
		<div className="ct-form">
		<h2 className="heading">
	Contact Us
</h2>
		<div className="contact">
<form class="forms" action="https://formsubmit.co/dev.marvel.avengers@gmail.com" method="post" autocomplete="off">
		
	<label for="name" >Your Name</label>
	<input type="text" name="name" className="input" placeholder="Your Name" required/>

	<label for="email">Email</label>
	<input type="email" className="input" name="email" placeholder="Email" required/>

	<label for="message">Message</label>
	<textarea name="message" placeholder="Message" required />
	{/*</textarea required>*/}

	<input className="input" type="submit" value="Submit"/>

</form>
</div>
</div>
	)
}