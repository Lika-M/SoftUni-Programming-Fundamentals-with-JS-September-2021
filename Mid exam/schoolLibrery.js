// this is not mine - не е проверена

function library(input){
    let bookshelf = input.shift().split('&')
 
    for(let element of input){
        let [activity, book1OrIndex, book2] = element.split(' | ')
        let [command, useless] = activity.split(' ')
        let checkBook1 = bookshelf.includes(book1OrIndex)
        let checkbook2 = bookshelf.includes(book2)
 
        if(command === 'Add'){
            if(!checkBook1){
             bookshelf.unshift(book1OrIndex)
            }else{ continue }
        }
 
        if(command === 'Take'){
            if(checkBook1){
                let index = bookshelf.indexOf(book1OrIndex)
                bookshelf.splice(index, 1)
            }else{ continue }
        }
 
        if(command === 'Swap'){
            if(checkBook1 && checkbook2){
                let index1 = bookshelf.indexOf(book1OrIndex)
                let index2 = bookshelf.indexOf(book2)
 
                let s = bookshelf[index1]
                bookshelf[index1] = bookshelf[index2]
                bookshelf[index2] = s
            }else{ continue }
        }
 
        if(command === 'Insert'){
            if(!checkBook1){
                bookshelf.push(book1OrIndex)
               }else{ continue }
        }
 
        if(command === 'Check'){
            book1OrIndex = Number(book1OrIndex)
            let bookshelfL = bookshelf.length
 
            if(book1OrIndex >= 0 && book1OrIndex < bookshelfL){
                console.log(bookshelf[book1OrIndex])
            }else{ continue }
        }
 
        if(command === 'Done'){
            console.log(bookshelf.join(', '))
            break;
        }
    }
}