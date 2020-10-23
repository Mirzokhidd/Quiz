function next() {
    document.getElementById("next").innerHTML = "Next";
    var theBreakFastClub = document.getElementById("theBreakFastClub");
    var raidersOfTheLostArk = document.getElementById("raidersOfTheLostArk");
    var starTrek = document.getElementById("starTrek");
    var starWars = document.getElementById("starWars");
    var titanic = document.getElementById("titanic");
    var forestGump = document.getElementById("forestGump");
    var pulpFiction = document.getElementById("pulpFiction");
    var homeAlone = document.getElementById("homeAlone");
    var fightClub = document.getElementById("fightClub");
    var toyStory = document.getElementById("toyStory");
    var theTrumanShows = document.getElementById("theTrumanShows");

    if (theBreakFastClub.style.display == 'block') {
        //Display Raiders of the lost ark
        raidersOfTheLostArk.style.display = 'block';
        theBreakFastClub.style.display = 'none';
    } else if (raidersOfTheLostArk.style.display == 'block') {
        //Dsiplay Star Trek
        starTrek.style.display = 'block';
        raidersOfTheLostArk.style.display = 'none';
    } else if (starTrek.style.display == 'block') {
        //Display Star Wars
        starWars.style.display = 'block';
        starTrek.style.display = 'none';
    } else if (starWars.style.display == 'block') {
        //Display Titanic
        titanic.style.display = 'block';
        starWars.style.display = 'none';
    } else if (titanic.style.display == 'block') {
        //Display ForestGump
        forestGump.style.display = 'block';
        titanic.style.display = 'none';
    } else if (forestGump.style.display == 'block') {
        //Display Pulp Fiction
        pulpFiction.style.display = 'block';
        forestGump.style.display = 'none';
    } else if (pulpFiction.style.display == 'block') {
        //Display Home Alone
        homeAlone.style.display = 'block';
        pulpFiction.style.display = 'none';
    } else if (homeAlone.style.display == 'block') {
        //Display Fight Club
        fightClub.style.display = 'block';
        homeAlone.style.display = 'none';
    } else if (fightClub.style.display == 'block') {
        //Display Toy Story
        toyStory.style.display = 'block';
        fightClub.style.display = 'none';
    } else if (toyStory.style.display == 'block'){
        //Display The Truman Shows
        theTrumanShows.style.display = 'block';
        toyStory.style.display = 'none';
    } else {
        theBreakFastClub.style.display = 'block';
        theTrumanShows.style.display = 'none';
    }

};


function points() {
    var score = 0;
    var scoreText = document.getElementById("score");
    var breakfastText = document.getElementById("theBreakFastClubText").value;
    var raidersText = document.getElementById("raidersOfTheLostArkText").value;
    var starTrekText = document.getElementById("starTrekText").value;
    var starWarsText = document.getElementById("starWarsText").value;
    var titanicText = document.getElementById("titanicText").value;
    var forestGumpText = document.getElementById("forestGumpText").value;
    var pulpFictionText = document.getElementById("pulpFictionText").value;
    var homeAloneText = document.getElementById("homeAloneText").value;
    var fightClubText = document.getElementById("fightClubText").value;
    var toyStoryText = document.getElementById("toyStoryText").value;
    var theTrumanShowText = document.getElementById("theTrumanShowText").value;

    if (breakfastText == "The BreakFast Club" || 
        breakfastText == "The Breakfast Club" || 
        breakfastText == "The breakfast club" || 
        breakfastText == "the breakfast club" ||
        breakfastText == "THE BREAKFAST CLUB") {score++;scoreText.innerHTML = score;};

    if (raidersText == "Raiders Of The Lost Ark" || 
        raidersText == "Raiders of the lost ark" || 
        raidersText == "raiders of the lost ark" ||
        raidersText == "RAIDERS OF THE LOST ARK") {score++;scoreText.innerHTML = score;};

    if (starTrekText == "Star Trek: The Motion Picture" || 
        starTrekText == "Star trek: the motion picture" || 
        starTrekText == "star trek: the motion picture" ||
        starTrekText == "STAR TREK: THE MOTION PICTURE") {score++;scoreText.innerHTML = score;};

    if (starWarsText == "Star Wars: A New Hope" || 
        starWarsText == "Star wars: a new hope" || 
        starWarsText == "star wars: a new hope" ||
        starWarsText == "STAR WARS: A NEW HOPE") {score++;scoreText.innerHTML = score;};

    if (titanicText == "Titanic" || 
        titanicText == "titanic" ||
        titanicText == "TITANIC") {score++;scoreText.innerHTML = score;};

    if (forestGumpText == "Forest Gump" || 
        forestGumpText == "Forest gump" || 
        forestGumpText == "forest Gump" ||
        forestGumpText == "FOREST GUMP") {score++;scoreText.innerHTML = score;};

    if (pulpFictionText == "Pulp Fiction" || 
        pulpFictionText == "pulp fiction" || 
        pulpFictionText == "Pulp fiction" ||
        pulpFictionText == "FOREST GUMP") {score++;scoreText.innerHTML = score;};

    if (homeAloneText == "Home Alone" || 
        homeAloneText == "Home alone" || 
        homeAloneText == "home alone" ||
        homeAloneText == "HOME ALONE") {score++;scoreText.innerHTML = score;};

    if (fightClubText == "Fight Club" || 
        fightClubText == "Fight club" || 
        fightClubText == "fight club" ||
        fightClubText == "FIGHT CLUB") {score++;scoreText.innerHTML = score;};
    
    if (toyStoryText == "Toy Story" || 
        toyStoryText == "Toy story" || 
        toyStoryText == "toy story" ||
        toyStoryText == "TOY STORY") {score++;scoreText.innerHTML = score;};

    if (theTrumanShowText == "The Truman Show" || 
        theTrumanShowText == "The truman show" || 
        theTrumanShowText == "the truman show" ||
        theTrumanShowText == "THE TRUMAN SHOW") {           
        score++;
        scoreText.innerHTML = score;     
        };

    if (theTrumanShows.style.display == 'block') {
        alert("You got " + score + " out of 11");
        score = 0;
        scoreText.innerHTML = score;     
    }
};


function execute() {
    points();
    next();
};
