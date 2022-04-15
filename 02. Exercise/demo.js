function solve(arr) {

    let newArr = []

    arr.map((el) => {
        el = Number(el)
        if (el < 0) {
            return newArr.unshift(el)
        } else return newArr.push(el)
    })
    console.log(newArr)
}
solve(['7', '-2', '8', '9'])