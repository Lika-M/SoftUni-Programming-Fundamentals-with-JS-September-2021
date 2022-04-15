function triangleArea(a, b, c) {
    //  S = sqrt {p(p-a)(p-b)(p-c)}
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    console.log(area);
}
triangleArea(2, 3.5, 4)