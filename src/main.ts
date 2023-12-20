class Cancion {
    private autor: string; 

    constructor(private titulo: string, private genero: string) {
        
        this.autor = ""; 
    }

    
    getAutor(): string {
        return this.autor;
    }

    
    setAutor(autor: string): void {
        this.autor = autor;
    }

    
    mostrarDatos(): void {
        console.log("Título:", this.titulo);
        console.log("Género:", this.genero);
        console.log("Autor:", this.autor);
    }
}


const miCancion = new Cancion("Shape of You", "Pop");


miCancion.setAutor("Ed Sheeran");


miCancion.mostrarDatos();
