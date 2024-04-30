const formatCheckInput = (content) => {
    // 1 remove all non-alphanumeric characters (punctuation, spaces and symbols)
    // ted  466 _hhfr --jijfi
    let newContent = [];
    const regex = /[a-z]/g;
    for (c of content) {
        if (c.match(regex)) {
            newContent.push(c);
        }
    }
    return (newContent);
    // 2 turn all to LowerCase
}

console.log(formatCheckInput("dgegfeifg"));