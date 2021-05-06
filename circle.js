const circleArea  = (r) => {
    let pi = Math.PI;
    let area = pi * (r*r);
    console.log(`Dairenin Alanı: ${area.toFixed(2)}`);
};

const circleCircumference = (r) => {
    let pi = Math.PI;
    let circumference = 2 * pi * r;
    console.log(`Dairenin Çevresi: ${circumference.toFixed(2)}`);
}

module.exports = {
    circleArea,
    circleCircumference
}