function cone(radius, hight) {
    let volume = Math.PI * radius * radius * hight / 3;
    let circusArea = Math.PI * radius * radius;
    let slant = Math.sqrt(radius * radius  + hight * hight)
    let surfaceArea = Math.PI * radius * slant;
    let area = circusArea + surfaceArea;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5)
cone(3.3, 7.8)