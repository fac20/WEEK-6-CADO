const logoutBtn = document.querySelector('#logout-button');
const submitBtn = document.querySelector('input[type=submit]');

// fetchin for json data
function getPosts() {
	return fetch('/get-posts')
		.then(res => {
			if (!res.ok) {
				throw new Error('Server error');
			} else {
				return res;
			}
		})
		.then(res => res.json())
		.then(data => {
			const posts = data.map(object => {
				// creating the post using the createPost function with the data
				return createPosts(object);
			});
		})
		.catch(error => console.log(error));
}

function createPosts(object) {
	// variables to plug into new posts from the object
	let username = object.username;
	let postTitle = object.post_title;
	let textContent = object.text_content;
	let time = object.posted_at;
	let imgSrc = object.image_link;

	// cloning the template on index.html
	const messageBoard = document.querySelector('.messages');
	const template = document.querySelector('template');
	const content = template.content.querySelector('article');
	const newPost = content.cloneNode(true);

	//selecting pieces of template
	const h3 = newPost.querySelector('.dogpost__msgtitle');
	const message = newPost.querySelector('.dogpost__message');
	const postedBy = newPost.querySelector('.dogpost__details__name');
	const timePosted = newPost.querySelector('.dogpost__details__time');
	const portrait = newPost.querySelector('.dogpost__image');

	//inserting database values to template
	h3.textContent = postTitle;
	message.textContent = textContent;
	postedBy.textContent = username;
	timePosted.textContent = time;
	portrait.src = imgSrc;

	//place template on page
	messageBoard.appendChild(newPost);
}

// event listener for reload
window.addEventListener('load', getPosts);
