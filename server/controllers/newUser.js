const userController = require('./user')

// Controle para os novos usuários
userController.newUser = (req, res) => {
    // O req.body representa o corpo da requisição 
    if(req.body.username && req.body.password){
        // se precisar mudar algo lembra q depois do req.body, você pode lidar com as vars

        // Se a senha q foi enviada for igual a senha da confirmação, procura se o nome de usuário está disponivel 
        if(req.body.password2 && req.body.password == req.body.password2){

            modelUser.findOne({'username': req.body.username})

                .then(user => {

                    if(user){
                        // Se der ruim vai retornar um json com até um emoji :p
                        res.json({ success: false, message: 'Esse nome não está disponível (._ .)'});
    
                    } else {
                        //Se der bão, executa isso aqui ó:
                        
                        // Bó encriptografar essa senha ae lek?
                        bcrypt.hash(req.body.password, 10)
                            .then(hash => {
                                // Senha com criptografia
                                let encryptedPassword = hash;

                                let newUser = new modelUser({
                                    username: req.body.username,
                                    password: encryptedPassword,
                                    email: req.body.email,
                                    isAdmin: req.body.isAdmin
                                });
                                // Manda pro Mongo
                                newUser.save()
                                        // Se o processo estiver correto 
                                    .then(() => req.json({
                                        success: true,
                                        message: 'Cadastro feito com sucesso!',
                                        statusCode: 201
                                        }))
                                        // Se der erro:
                                    .catch(err => res.json({
                                        success: false,
                                        message: err,
                                        statusCode: 500
                                        }));      
                                })
                                    .catch(err => res.json({
                                        success: false,
                                        message: err,
                                        statusCode: 500
                                    }));
                            }
                })
            
        }   else {

            res.json({
                success: false,
                message: 'A senha está incorreta',
                statusCode: 400
            });
        }
    } else {
        res.json({
            success: false,
            message: 'Nome de usuário e a senha são necessários para fazer login',
            statusCode: 400
        });
    }
}
