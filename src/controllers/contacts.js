module.exports = function(app){

	let service = require('../services/contacts')(app);

	return {
		index: (req, res) => {
			service.on('value', snapshot => {
				res.render('index', {contacts: snapshot.val() || [] });
			});
		},
		novo: (req, res) => {
			res.render('form');
		},
		enviar: (req, res) => {
			let contatos = service.push();
			contatos.set({
				nome: req.body.nome,
				email: req.body.email
			});
			res.redirect('/');
		},
		view: (req, res) => {
			let child = service.child(req.params.id);
			child.on('value', snapshot => {
				res.render('view', { id: req.params.id, contato: snapshot.val() || [] });
			});
		},
		editar: (req, res) => {
			let child = service.child(req.params.id);
			child.on('value', snapshot => {
				res.render('edit', { id: req.params.id, contato: snapshot.val() || [] });
			});
		},
		update: (req, res) => {
			console.log(req.params.id);
			let child = service.child(req.params.id);
			child.update({
				nome: req.body.nome,
				email: req.body.email
			});
			res.redirect('/');
		},
		remover: (req, res) => {
			let child = service.child(req.params.id);
			child.set(null);
			res.redirect('/');
		},
	}
}