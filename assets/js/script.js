// Función para solicitar el número y validar el rango
const solicitarNumero = () => {
    let numero = parseInt(prompt("Ingrese un número entre 1 y 20:"));
    
    // Validar el rango del número ingresado
    if (numero < 1 || numero > 20 || isNaN(numero)) {
        console.log("Número fuera del rango");
        return;
    }
    
    // Mostrar las tablas de multiplicar
    for (let i = 1; i <= numero; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`);
    }
    
    // Función para calcular el factorial de un número
    const calcularFactorial = (n) => {
        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    };

    // Mostrar los factoriales
    for (let i = 1; i <= numero; i++) {
        console.log(`Factorial de ${i} es: ${calcularFactorial(i)}`);
    }
};

// Llamar a la función para iniciar el proceso
solicitarNumero();
