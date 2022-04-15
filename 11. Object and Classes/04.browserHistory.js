function browserHistory(obj, array) {

    let history = {
        'Browser Name': obj["Browser Name"],
        "Open Tabs": [...obj["Open Tabs"]],
        "Recently Closed": [...obj["Recently Closed"]],
        "Browser Logs": [...obj["Browser Logs"]]
    };
    let commands = array;

    for (let line of commands) {
        if (line !== "Clear History and Cache") {

            let [command, tab] = line.split(' ');
            if (command === 'Open') {

                history["Open Tabs"].push(tab);
                history["Browser Logs"].push(line);

            } else if (command === 'Close') {

                let index = history["Open Tabs"].indexOf(tab);
                if (index !== - 1) {
                    history["Open Tabs"].splice(index, 1);
                    history["Recently Closed"].push(tab);
                    history["Browser Logs"].push(line);
                }
            }
        } else {
            history["Open Tabs"] = [];
            history["Recently Closed"] = [];
            history["Browser Logs"] = [];
        }
    }
    console.log(history["Browser Name"]);
    console.log(`Open Tabs: ${history["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${history['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${history['Browser Logs'].join(', ')}`);
}



// browserHistory({
//     "Browser Name": "Google Chrome",
//     "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
// },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"])
browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)