module.exports = {
    // create /register end point
    register (req, res) {
        res.send({                      // when it gets this request, its going to send this response
            message: `Hello ${req.body.email}! Your user was registered! Have fun!.`
        })
    }
}
