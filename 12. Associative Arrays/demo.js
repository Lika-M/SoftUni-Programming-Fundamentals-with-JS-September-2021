function comments(input) {
    // недовършена
    let comments = {};
    let articles = {};

    for (let line of input) {

        if (line.includes('user')) {
            let user = line.split(' ')[1];
            if (!comments[user]) {
                comments[user] = {};
            }

        } else if (line.includes('post')) {
            let [first, second] = line.split(': ');
            let [user, article] = first.split(' posts on ');
            let [title, content] = second.split(', ');
            if (comments[user] && articles[article]) {
                comments[user][article] = {};
                comments[user][article][title] = content;
                articles[article].push(user);
            }

        } else if (line.includes('article')) {
            let article = line.split(' ')[1];
            if (!articles[article]) {
                articles[article] = [];
            }
        }
    }

    let sorted = Object.entries(articles).sort((a, b) => b[1].length - a[1].length);
    for (let article of sorted) {
        console.log(`Comments on ${article[0]}`);
        let commentsFromUsers = Object.values(articles);

        if (commentsFromUsers.length > 0) {

            let sortedNames = article[1].sort((a, b) => a.localeCompare(b));
            for (let name of sortedNames) {
                let output = `--- From user ${name}: `
                let text = Object.entries(comments[name][article[0]]);
                output += `${text[0][0]} - ${text[0][1]}`
                console.log(output);
            }
        }
    }

}

comments(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'])

   