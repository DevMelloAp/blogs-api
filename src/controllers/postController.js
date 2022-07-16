const postService = require('../services/postService');
const { User } = require('../database/models');

 const postController = {
    createPost: async (req, res) => {
        const { title, content, categoryIds } = (req.body);

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const published = today.toUTCString();

        const updated = today.toUTCString();

        const userId = User.id;

        if (!title || !content) {
            return res.status(400)  
            .json({ message: 'Some required fields are missing' }); 
        }

        const post = await postService
        .createPost({ title, content, categoryIds, published, updated, userId });

        res.status(201).json(post);
    },
    listPosts: async (_req, res) => {
        const posts = await postService.listPosts();
            
        res.status(200).json(posts);
    },
    getPostById: async (req, res) => {
        const post = await postService.getPostById(req.params.id);

        res.status(200).json(post);
    }, 
};

module.exports = postController;