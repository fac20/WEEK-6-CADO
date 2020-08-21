const test = require('tape');
const supertest = require('supertest');
const router = require('./../router');

// testing for index.html
test('Home route', t => {
	supertest(router)
		.get('/')
		.expect(200)
		.expect('Content-Type', 'text/html')
		.end((err, res) => {
			t.error(err);
			t.equal(res.text.includes('Purr-lease'), true);
			t.end();
		});
});

// Test for CSS static page
test('Correctly gets CSS', t => {
	supertest(router)
		.get('/public/styles.css')
		.expect(200)
		.expect('Content-Type', 'text/css')
		.end((err, res) => {
			t.error(err);
			t.equal(res.text.includes('body'), true);
			t.end();
		});
});

// Test for missing handler
test('Correctly redirects to missing page', t => {
	supertest(router)
		.get('/wooooooooof')
		.expect(404)
		.expect('Content-Type', 'text/html')
		.end((err, res) => {
			t.error(err);
			t.equal(
				res.text.includes(
					'<h1>B!tch please! That does not exist!</h1>'
				),
				true
			);
			t.end();
		});
});
