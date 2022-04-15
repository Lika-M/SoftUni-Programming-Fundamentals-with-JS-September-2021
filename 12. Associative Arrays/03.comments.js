function comments(input) {
  // 100/100
    let list = {};
    let articles = {};

    for (let line of input) {
        let token = line.split(' ');

        if (token[0] === 'user') {
            if (!list[token[1]]) {
                list[token[1]] = {};
            }
        } else if (token[0] === 'article') {
            if (!articles[token[1]]) {
                articles[token[1]] = 0;
            }
        } else {
            let [user, info] = line.split(' posts on ');
            let [article, comment] = info.split(': ');
            let [title, content] = comment.split(', ');

            if (list[user] && articles.hasOwnProperty(article)) {
                if (!list[user][article]) {
                    list[user][article] = []
                }
                let commentInfo = `${title} - ${content}`;
                list[user][article].push(commentInfo);
                articles[article] += 1;

            }
        }
    }
    if (articles && list) {
        let sortArticles = Object.entries(articles).sort((a, b) => b[1] - a[1]);

        for (let item of sortArticles) {
            console.log(`Comments on ${item[0]}`);

            let sortComments = Object.entries(list) .sort((a, b) => a[0].localeCompare(b[0]));

            for (let user of sortComments) {
                let commentArr = user[1][item[0]]
                if (commentArr) {
                    for (let comment of commentArr){
                        let output = `--- From user ${user[0]}: ${comment}`;
                        console.log(output);
                    }
                }
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
    'someUser posts on Movies: tralalalalll, huy',
    'someUser posts on Movies: Like, I also like movies very much'])
console.log(' ');

comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])