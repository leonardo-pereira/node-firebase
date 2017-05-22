module.exports = function(app){

	let controller = app.controllers.contacts;

	app.get("/", controller.index);
	app.get("/novo", controller.novo);
	app.post("/enviar", controller.enviar);
	app.get("/ver/:id", controller.view);	
	app.get("/editar/:id", controller.editar);
	app.post("/editar/:id", controller.update);
	app.get("/remover/:id", controller.remover);
}