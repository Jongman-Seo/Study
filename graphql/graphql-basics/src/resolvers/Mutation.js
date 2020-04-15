import uuidv4 from "uuid/v4";

const Mutation = {
  createUser(parent, args, { db }) {
    const emailTaken = db.users.some((user) => user.email === args.data.email);

    if (emailTaken) throw new Error('email taken');

    const user = {
      id: uuidv4(),
      ...args.data
    };

    db.users.push(user);
    return user;
  },
  deleteUser(parent, args, { db }) {

  },
  updateUser(parent, args, { db }, info) {
    const { id, data } = args;
    const user = db.users.find((user) => user.id === id);

    if (!user) throw new Error('User not found!');

    if (typeof data.email === 'string') {
      const emailTaken = db.users.some((user) => user.email === data.email);
      if (emailTaken) {
        throw new Error('Email taken');
      }

      user.email = data.email;
    }

    if (typeof data.name === 'string') {
      user.name = data.name;
    }

    if (typeof data.age !== 'undefined') {
      user.age = data.age;
    }

    return user;
  },
  createPost(parent, args, { db, pubsub }) {
    const userExists = db.users.some((user) => user.id === args.post.author);

    if (!userExists) throw new Error('User not found');

    const post = {
      id: uuidv4(),
      ...args.post
    };

    db.posts.push(post);
    pubsub.publish(`comment ${args.comment.post}`,  { comment: comment });

    return post;
  },
  deletePost(parent, args, { db }) {
    const postIndex = db.posts.findIndex((post) => post.id === args.id);

    if (postIndex === -1) throw new Error('Post not found');

    const deletedPosts = db.posts.splice(postIndex, 1);

    db.comments = db.comments.filter((comment) => comment.post !== args.id);
    return deletedPosts[0];
  },
  updatePost(parent, args, { db }, info) {
    const { id, data } = args;
    const post = db.posts.find((post) => post.id === id);

    if (!post) throw new Error('Post not found!');

    if (typeof data.title === 'string') {
      post.title = data.title;
    }

    if (typeof data.body === 'string') {
      post.body = data.body;
    }

    if (typeof data.published === 'boolean') {
      post.tipublishedtle = data.published;
    }

    return post;
  },
  createComment(parent, args, { db, pubsub }) {
    const userExists = db.users.some((user) => user.id === args.comment.author);

    if (!userExists) throw new Error('User not found');

    const post = db.posts.find(post => post.id === args.comment.post);
    const postExists = !!post;
    const postIsPublished = post.published;

    if (!postExists || !postIsPublished) throw new Error('post problem');

    const comment = {
      id: uuidv4(),
      ...args.comment
    };

    db.comments.push(comment);
    pubsub.publish(`comment ${args.comment.post}`,  { comment: comment });
    return comment;
  },
  deleteComment(parent, args, { db }) {
    const commentIndex = db.comments.findIndex((comment) => comment.id === args.id);

    if (commentIndex === -1) throw new Error('Comment not found');

    const deletedComments = db.comments.splice(commentIndex, 1);

    return deletedComments[0];
  },
  updateComment(parent, args, { db }, info) {
    const { id, data } = args;
    const comment = db.comments.find((comment) => comment.id === id);

    if (!comment) throw new Error('comment not found!');

    if (typeof data.text === 'string') {
      comment.text = data.text;
    }

    return comment;
  },
};

export { Mutation as default };