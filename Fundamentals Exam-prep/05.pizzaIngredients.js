function pizzaIngredients(array) {

    let ingredients = array[0].split(' ');
    let length = Number(array[1]);
    let pizza = [];
    let counter = 0;
    
    for (const element of ingredients) {
        if (element.length === length) {
            pizza.push(element);
            console.log(`Adding ${element}.`);
            counter++;
        }
        if (counter > 10) {
            break;
        }
    }
    console.log(`Made pizza with total of ${counter} ingredients.`);   
    console.log(`The ingredients are: ${pizza.join(', ')}.`);


}
pizzaIngredients(['cheese flour tomato bread olives salami pepperoni',
    '6'
])
pizzaIngredients(['cheese flour tomato bread olives salami pepperoni',
    '9'
])