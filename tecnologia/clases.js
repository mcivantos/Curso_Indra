class Libro {}

class LibroTecnico extends Libro {
 
	constructor(tematica, paginas) {
		super(tematica, paginas);
		this.capitulos = [];
		this.precio = "";
		// ...
	}
	
	metodo(pValor = "foo") {
		// ...
	}
}
