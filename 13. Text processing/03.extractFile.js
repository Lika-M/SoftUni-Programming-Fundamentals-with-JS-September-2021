function extractFile(string) {
    let path = string.split('\\');
    let file = path[path.length - 1];
    let index = file.lastIndexOf('.')
    let name = file.slice(0, index);
    let ext = file.slice(index + 1);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${ext}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')