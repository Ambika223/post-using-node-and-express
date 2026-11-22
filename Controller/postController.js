const posts = require("../Data/data");

const getAllPost = (req, res) => {
    try {
        res.status(200).json({
            message: `Post Data Fetched successfully`,
            body: posts,
            success: true
        })
    }
    catch (err) {
        res.status(500).json({
            message: `Something went wrong on server side while fetching all data`,
            error: err.message,
            success: false
        })
    }
}

//singlePost
const getSinglePost = (req, res) => {
    try {
        const postid = req.params.id;
        let post = posts.find(p => p.id === postid);
        if (!post) {
            return res.status(404).json({
                message: `Something went wrong while fetching single data`,
                success: false
            })
        }
        res.status(200).json({
            message: `Single Data get Successfully`,
            success: true,
            body: post
        })
    }
    catch (err) {
        res.status(500).json({
            message: `Something Went Wrong while getting single post`,
            success: false,
            error: err.message
        })
    }
}


//create
const createPost = (req, res) => {
    try {
        const data = req.body;
        if (!data.title || !data.content) {
            return res.status(401).json({
                message: `The Tilte or Content is not found`,
                success: false
            })
        }
        const newObj = {
            title: data.title,
            content: data.content,
            id: Date.now()
        }
        posts.unshift(newObj)
        res.status(201).json({
            message: `New Post is created successfully`,
            success: true,
            data: newObj
        })
    }
    catch (err) {
        res.status(500).json({
            message: `Something Went Wrong while creating post`,
            success: false,
            error: err.message
        })
    }
}


//remove
const removePost = (req, res) => {
    try {
        const removeId = req.params.id;
        const removeIndex = posts.findIndex(p => p.id === removeId);
        if (removeIndex == -1) {
            return res.status(404).json({
                message: `The Post is not found while updating`,
                success: false
            })

        }
        const RemovePost = posts.splice(removeIndex, 1);
        res.status(200).json({
            message: `The Post  with ${removeId} is Removed successfully`,
            success: true,
            data: RemovePost
        })

    }
    catch (err) {
        res.status(500).json({
            message: `Something Went Wrong while removing post on serverside`,
            success: false,
            error: err.message
        })
    }
}
//Update
const updatePost = (req, res) => {
    try {
        let body = req.body
        const updateId = req.params.id;
        const getIndex = posts.findIndex(p => p.id === updateId);
        if (getIndex === -1) {
            return res.status(404).json({
                message: `Data is not found while Updating the post`,
                success: false
            })
        }
            const updatedObj = {
                title: body.title,
                content: body.content,
                id: updateId
            }
            posts[getIndex] = updatedObj;
            res.status(200).json({
                message: `Post data with id ${updateId} is updated successfully `,
                success: true,
                body: updatedObj
            })
        
    }
    catch (err) {
        res.status(500).json({
            message: `Something Went Wrong while updating post on serverside`,
            success: false,
            error: err.message
        })
    }
}

module.exports = {
    getAllPost,
    getSinglePost,
    createPost,
    updatePost,
    removePost
}
