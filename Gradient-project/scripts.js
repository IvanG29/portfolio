const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const angle = document.getElementById('angle');
const box = document.getElementById('gradient-box');
const output = document.getElementById('css-code');
const gradientType = document.getElementById("gradient-type");

gradientType.addEventListener("change", updateGradient);

function updateGradient() {
    const c1 = color1.value;
    const c2 = color2.value;
    const ang = angle.value;
    const type = gradientType.value; 

    let gradientCSS;

    if (type === 'linear') {
        gradientCSS = `linear-gradient(${ang}deg, ${c1}, ${c2})`;
    } else if (type === 'radial') {
        gradientCSS = `radial-gradient(circle at center, ${c1}, ${c2})`;
    }

    gradientBox.style.background = gradientCSS;
}

[color1, color2, angle, gradientType].forEach(el => 
    el.addEventListener("input", updateGradient)
);

updateGradient();

function updateGradient() {
    const css = `linear-gradient(${angle.value}deg, ${color1.value}, ${color2.value})`;

    box.style.background = css;
    output.textContent = `background: ${css};`;
}

[color1,color2,angle].forEach(el => {
    el.addEventListener('input', updateGradient);
});


