// main.js

// POST request using fetch()
fetch("https://jsonplaceholder.typicode.com/posts", {
	
	// Adding method type
	method: "POST",
	
	// Adding body or contents to send
	body: JSON.stringify({
		title: "foo",
		body: "bar",
		userId: 1
	}),
	
	// Adding headers to the request
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})

// Converting to JSON
.then(response => response.json())

// Displaying results to console
.then(json => console.log(json));


// GET request using fetch()
fetch("https://jsonplaceholder.typicode.com/users")

	// Converting received data to JSON
	.then(response => response.json())
	.then(json => {

		// Create a variable to store HTML
		let li = `<tr><th>Name</th><th>Email</th><th>username</th></tr>`;
	
		// Loop through each data and add a table row
		json.forEach(user => {
			li += `<tr>
				<td>${user.name} </td>
				<td>${user.email}</td>		
				<td>${user.username}</td>		
			</tr>`;
		});

	// Display result
	document.getElementById("users").innerHTML = li;
});
