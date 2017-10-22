const baseURL = 'https://jsonplaceholder.typicode.com';

const api = {
  posts: {
    async getPosts(page = 1) {
      const url = `${baseURL}/posts?_page=${page}`;

      const response = await fetch(url);
      const posts = await response.json();

      if (Math.random() > 0.5) {
        throw new Error('Boom!');
      }

      return posts;
    },
  },

  users: {
    async getUsers() {
      const url = `${baseURL}/users`;
      const response = await fetch(url);
      const users = await response.json();

      return users;
    },
  },

  comments: {
    async getComments(page = 1) {
      const url = `${baseURL}/comments?_page=${page}`;
      const response = await fetch(url);
      const comments = await response.json();

      return comments;
    },
  },
};

export default api;
