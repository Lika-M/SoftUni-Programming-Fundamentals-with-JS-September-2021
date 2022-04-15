
    function dic(data) {
        let dictionary = data.reduce((a, v) => {
            const letter = v.charAt(0)
            a[letter] = []
            return a
        }, {})
     
        data.forEach(x => {
            const letter = x.charAt(0)
            let formatted = x.split(" : ").join(": ")
            dictionary[letter].push(formatted)
        })
     
        dictionary = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]))
        dictionary.forEach(x => {
            console.log(`${x[0]} ${x[1].sort((a, b) => a.localeCompare(b)).join("\n  ")}`)
        })
    }
 
dic([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])
 
dic([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'

    ])

