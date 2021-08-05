Math.PI

function area(raio) {
    return PI * raio ** 2;
}

function circunferencia(raio){
    return 2 * Math.PI * raio;
}

module.exports = {
    area,
    circunferencia
}