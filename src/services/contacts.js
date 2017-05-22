let contacts = app => {	
	return app.firebase.database().ref('contatos');	
}
module.exports = contacts;