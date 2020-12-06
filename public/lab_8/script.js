const umdio = 'https://api.umd.io/v0/courses/sections?semester=202008';
const courseElement= document.querySelector('.home');

async function NewRec() {
  const response = await fetch(umdio);
  const json = await response.json();
  console.log(json[0]);


  // selecting the courses
  json[0].forEach((course) => {
     // Course Code and Title Tile
    // <div class='course-title-home' > 
    const divElement = document.createElement('div');
    divElement.classList.add('course-title-home');

    // <div class="tile is-parent" >
    const tileElement = document.createElement('div');
    tileElement.classList.add('tile');
    divElement.appendChild(tileElement);

    // <div class="tile is-child box" id="course-code">
    const ctileElement = document.createElement('div');
    ctileElement.classList.add('tile');
    ctileElement.id = 'course-code';
    tileElement.appendChild(ctileElement);

    // <p class="title">INST612</p>
    const courseCode = document.createElement('p');
    courseCode.src = course;
    courseCode.classList.add('title');
    ctileElement.appendChild(courseCode);

    const courseTitle = document.createElement('p');
    courseCode.src = course;
    courseTitle.classList.add('subtitle');
    ctileElement.appendChild(courseTitle);

    courseElement.appendChild(divElement);

    // Course Stat Tiles
  
    // <div class="course-stats">
    const statElement = document.createElement('div');
    statElement.classList.add('course-stats');

    // <div class="tile is-ancestor">
    const statTileElement = document.createElement('div');
    statTileElement.classList.add('tile');
    statElement.appendChild(statTileElement);

    // <div class="tile is-parent">
    const pstatTileElement = document.createElement('div');
    pstatTileElement.classList.add('tile');
    statTileElement.appendChild(pstatTileElement);

    // <article class="tile is-child box" id="course-stat">
    const courseCredits = document.createElement('article');
    courseCredits.classList.add('tile');
    courseCredits.id = 'course-stat';
    pstatTileElement.appendChild(courseCredits);

    //  <p class="title">3</p>
    const Credits = document.createElement('p');
    Credits.classList.add('title');
    Credits.src = course;
    courseCredits.appendChild(Credits);

    // <p class="subtitle">Credits</p>
    const creditTitle = document.createElement('p');
    creditTitle.src = course;
    creditTitle.classList.add('subtitle');
    courseCredits.appendChild(creditTitle);

    courseElement.appendChild(divElement);

  });
}

NewRec();
