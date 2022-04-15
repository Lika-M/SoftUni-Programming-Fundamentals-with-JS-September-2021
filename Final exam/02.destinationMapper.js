function destinationMapper(string) {

    let pattern = /([=\/])(?<dest>[A-Z][A-Za-z]{2,})\1/g;
    let trip = [];

    let destinations = pattern.exec(string);
    while (destinations !== null) {
        trip.push(destinations.groups.dest);

        destinations = pattern.exec(string);
    }
    let output = `Destinations: `;
    let sum = 0;
    if (trip.length > 0) {
        output += `${trip.join(', ')}`;
        for (place of trip) {
            sum += place.length;
        }
    }
    console.log(output);
    console.log(`Travel Points: ${sum}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput")