const words: string[] = [
    "CASA", "PERRO", "GATO", "COMPUTADORA", "ESCRITORIO", "SILLA", "LIBRO", "LAPIZ", "BOLIGRAFO", "CUADERNO",
    "TELEFONO", "CELULAR", "CAMARA", "FOTOGRAFIA", "LAPTOP", "ESCUELA", "COLEGIO", "UNIVERSIDAD", "PROFESOR", "ESTUDIANTE",
    "ESTABLECIMIENTO", "COMIDA", "BEBIDA", "RESTAURANTE", "BANCO", "DINERO", "AHORRO", "TARJETA", "CREDITO", "DEBITO",
    "INVERSION", "SEGURO", "FAMILIA", "AMIGO", "CONOCIDO", "COMPAÑERO", "PAREJA", "NOVIA", "NOVIO", "MATRIMONIO",
    "HIJO", "NIETO", "PADRE", "MADRE", "HERMANO", "HERMANA", "TIO", "TIA", "PRIMO", "PRIMA", "ABUELO", "ABUELA", "BISABUELO",
    "BISABUELA", "SOBRINO", "SOBRINA", "PRIMOGENITO", "SEGUNDO", "TERCERO", "CUARTO", "QUINTO", "SEXTO",
    "SEPTIMO", "OCTAVO", "NOVENO", "DECIMO", "VEHICULO", "AUTOMOVIL", "MOTOCICLETA", "BICICLETA", "TRANSPORTE", "AVION",
    "TREN", "BARCO", "AUTOBUS", "CAMION", "CAMPERO", "REMOLQUE", "CARAVANA", "VIAJE", "HOTEL", "HOSTAL",
    "APARTAMENTO", "PISO", "HABITACION", "SALA", "COCINA", "COMEDOR", "BAÑO", "DORMITORIO", "ARMARIO", "FELIPE", "ANA", "MARTHYNA",
    "MASAJE", "DEPORTE", "FUTBOL", "BASQUETBALL", "VOLEIBOL", "NATACION", "CAMA", "COMIDA", "MOTO", "JUGUETE", "VIAJE", "DICCIONARIO", "SOL", "MAR",
    "TIERRA", "LUNA", "ESTRELLA", "FLOR", "MARIPOSA", "PAJARO", "NUBE", "CIELO", "ESPACIO", "UNIVERSO", "DESTINO", "LEON", "MONO", "HERMANO",
    "BANANA", "ROSADO", "ROSA",
];

export class Word {
    private word!: string;

    // singleton
    private static instance: Word; 

    private constructor() {
        this.word = this.getRandomWord();
    }

    static getInstance(reset = false): Word {
        if (!Word.instance || reset) {
            Word.instance = new Word();
        }

        return Word.instance;
    }

    private getRandomWord(): string {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    public getWord(): string {
        return this.word;
    }
}