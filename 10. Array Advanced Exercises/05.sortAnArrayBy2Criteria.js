function sortAnArrayBy2Criteria(array) {
    // double sorted
    let sorted = array.sort((a, b) => a.length - b.length || a.localeCompare(b))

    console.log(sorted.join('\n'));
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"])
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])