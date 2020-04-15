const users = [{
  id: '1',
  name: 'Andrew',
  email: 'andrew@example.com',
  age: 27
}, {
  id: '2',
  name: 'Sarah',
  email: 'sarah@example.com'
}, {
  id: '3',
  name: 'Mike',
  email: 'mike@example.com'
}];

const posts = [{
  id: '10',
  title: 'GraphQL 101',
  body: 'This is how to use GraphQL...',
  published: true,
  author: '1'
}, {
  id: '11',
  title: 'GraphQL 201',
  body: 'This is an advanced GraphQL post...',
  published: true,
  author: '1'
}, {
  id: '12',
  title: 'Programming Music',
  body: '',
  published: false,
  author: '2'
}];

const comments = [{
  id: '110',
  text: 'hi com',
  author: '1',
  post: '10'
}, {
  id: '111',
  text: 'nothx',
  author: '1',
  post: '10'
}, {
  id: '112',
  text: 'kk',
  author: '2',
  post: '12'
}, {
  id: '113',
  text: 'lol',
  author: '3',
  post: '12'
}];

const db = {
  users,
  posts,
  comments
};

export { db as default };