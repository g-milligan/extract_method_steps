module.exports = (app) => {

    app.post('/samplepost', (req,res) => { 
        const ret = {message: req.body.message + ' back from the server'};
        res.send(JSON.stringify(ret));
    });

    app.get('/sampleget', (req, res) => {
        const ret = {message: 'GET message back from the server'};
        res.send(JSON.stringify(ret));
    });

};
