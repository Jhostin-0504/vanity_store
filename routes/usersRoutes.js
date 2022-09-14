const UserController = require('../controllers/usersController');
module.exports=(app) => {


    app.get('/api/users/getAll',UserController.getAll);

    app.post('/api/users/create',UserController.register);
    
}
