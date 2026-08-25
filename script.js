/* =========================================================
   CA INTER REVISION APP
   UNIVERSAL SUBJECT / CHAPTER LOADER

   FUTURE RULE:
   Create the chapter .js file.
   No script.js modification required.
========================================================= */


let topicData = [];
let studyData = {};
let concepts = [];
let formulas = [];
let storyHTML = null;


/* =========================================================
   SUBJECT CONFIGURATION
========================================================= */

const CA_SUBJECTS = {

    paper1: {
        id: "paper1",
        paper: "Paper 1",
        title: "Advanced Accounting",
        icon: "📘",
        indexFile: "./data/advanced-accounting/index.js",
        variable: "CAAdvancedAccountingChapters"
    },

    paper2: {
        id: "paper2",
        paper: "Paper 2",
        title: "Corporate & Other Laws",
        icon: "⚖️",
        indexFile: "./data/corporate-law/index.js",
        variable: "CACorporateLawChapters"
    },

    incomeTax: {
        id: "incomeTax",
        paper: "Paper 3A",
        title: "Income-tax Law",
        icon: "🧮",
        indexFile: "./data/taxation/income-tax/index.js",
        variable: "CAIncomeTaxChapters"
    },

    gst: {
        id: "gst",
        paper: "Paper 3B",
        title: "Goods and Services Tax",
        icon: "🧾",
        indexFile: "./data/taxation/gst/index.js",
        variable: "CAGSTChapters"
    },

    paper4: {
        id: "paper4",
        paper: "Paper 4",
        title: "Cost & Management Accounting",
        icon: "📊",
        indexFile: "./data/cost-management-accounting/index.js",
        variable: "CACostManagementChapters"
    },

    paper5: {
        id: "paper5",
        paper: "Paper 5",
        title: "Auditing & Ethics",
        icon: "🔍",
        indexFile: "./data/auditing-ethics/index.js",
        variable: "CAAuditingEthicsChapters"
    },

    fm: {
        id: "fm",
        paper: "Paper 6A",
        title: "Financial Management",
        icon: "💰",
        indexFile: "./data/fm/index.js",
        variable: "CAFMChapters"
    },

    sm: {
        id: "sm",
        paper: "Paper 6B",
        title: "Strategic Management",
        icon: "🧠",
        indexFile: "./data/strategic-management/index.js",
        variable: "CAStrategicManagementChapters"
    }

};


/* =========================================================
   CURRENT STATE
========================================================= */

let currentSubject = null;
let currentChapters = [];
let currentChapter = null;


/* =========================================================
   BASIC UTILITIES
========================================================= */

function hideElement(id) {

    const element = document.getElementById(id);

    if (element) {
        element.classList.add("hidden");
    }

}


function showElement(id) {

    const element = document.getElementById(id);

    if (element) {
        element.classList.remove("hidden");
    }

}


function hideAllScreens() {

    const ids = [

        "homeScreen",
        "paper6Screen",
        "fmChapterScreen",
        "fmApp",
        "universalSubjectScreen",
        "universalChapterScreen"

    ];

    ids.forEach(id => hideElement(id));

}


/* =========================================================
   DYNAMIC UNIVERSAL SCREENS
========================================================= */

function createUniversalScreens() {

    if (!document.getElementById("universalSubjectScreen")) {

        const subjectScreen =
            document.createElement("div");

        subjectScreen.id =
            "universalSubjectScreen";

        subjectScreen.className =
            "selection-screen hidden";

        subjectScreen.innerHTML = `

            <button
                class="back-button"
                onclick="goHome()"
            >
                ← Back to Home
            </button>

            <div class="selection-header">

                <div class="selection-icon">
                    📚
                </div>

                <div>

                    <div
                        class="section-kicker"
                        id="universalSubjectKicker"
                    >
                        SUBJECT
                    </div>

                    <h1 id="universalSubjectTitle">
                        Select Subject
                    </h1>

                    <p id="universalSubjectDescription">
                        Select the section you want to study.
                    </p>

                </div>

            </div>

            <div
                id="universalSubjectGrid"
                class="section-selection-grid"
            ></div>

        `;

        document.body.appendChild(subjectScreen);

    }


    if (!document.getElementById("universalChapterScreen")) {

        const chapterScreen =
            document.createElement("div");

        chapterScreen.id =
            "universalChapterScreen";

        chapterScreen.className =
            "selection-screen hidden";

        chapterScreen.innerHTML = `

            <button
                class="back-button"
                id="universalChapterBack"
            >
                ← Back
            </button>

            <div class="selection-header">

                <div class="selection-icon">
                    📚
                </div>

                <div>

                    <div
                        class="section-kicker"
                        id="universalChapterKicker"
                    >
                        CHAPTERS
                    </div>

                    <h1 id="universalChapterTitle">
                        Select Chapter
                    </h1>

                    <p id="universalChapterDescription">
                        Select the chapter you want to study.
                    </p>

                </div>

            </div>

            <div
                id="universalChapterGrid"
                class="section-selection-grid"
            ></div>

        `;

        document.body.appendChild(chapterScreen);

    }

}


/* =========================================================
   SCRIPT LOADER
========================================================= */

function loadJavaScript(src) {

    return new Promise((resolve, reject) => {

        const script =
            document.createElement("script");

        script.src =
            src + "?v=" + Date.now();

        script.onload = () => {

            console.log(
                "LOADED:",
                src
            );

            resolve();

        };

        script.onerror = () => {

            console.error(
                "FAILED TO LOAD:",
                src
            );

            reject(
                new Error(
                    "Failed to load: " + src
                )
            );

        };

        document.body.appendChild(script);

    });

}


/* =========================================================
   CHECK WHETHER A FILE EXISTS
========================================================= */

async function fileExists(file) {

    try {

        const response =
            await fetch(
                file + "?check=" + Date.now(),
                {
                    method: "HEAD",
                    cache: "no-store"
                }
            );

        return response.ok;

    }

    catch (error) {

        /*
          If HEAD is blocked by the local environment,
          don't automatically mark the chapter as missing.
        */

        return null;

    }

}


/* =========================================================
   LOAD SUBJECT INDEX
========================================================= */

async function loadSubjectIndex(subject) {

    const variable =
        subject.variable;


    if (
        window[variable] &&
        Array.isArray(window[variable])
    ) {

        return window[variable];

    }


    await loadJavaScript(
        subject.indexFile
    );


    if (
        !window[variable] ||
        !Array.isArray(window[variable])
    ) {

        throw new Error(
            subject.variable +
            " was not loaded correctly."
        );

    }


    return window[variable];

}


/* =========================================================
   HOME
========================================================= */

function goHome() {

    hideAllScreens();

    showElement("homeScreen");

    currentSubject = null;
    currentChapters = [];
    currentChapter = null;

}


/* =========================================================
   OPEN PAPER
========================================================= */

async function openPaper(paper) {

    console.log(
        "OPEN PAPER:",
        paper
    );


    /*
       PAPER 3
       Separate Income-tax and GST
    */

    if (paper === "paper3") {

        openTaxationSelection();

        return;

    }


    /*
       PAPER 6
       Separate FM and SM
    */

    if (paper === "paper6") {

        openPaper6Selection();

        return;

    }


    const subject =
        CA_SUBJECTS[paper];


    if (!subject) {

        alert(
            "Subject configuration not found."
        );

        return;

    }


    await openChapterSelection(
        subject
    );

}


/* =========================================================
   PAPER 3 SELECTION
========================================================= */

function openTaxationSelection() {

    hideAllScreens();

    const screen =
        document.getElementById(
            "universalSubjectScreen"
        );

    if (!screen) return;


    document.getElementById(
        "universalSubjectKicker"
    ).textContent =
        "PAPER 3 • TAXATION";


    document.getElementById(
        "universalSubjectTitle"
    ).textContent =
        "Taxation";


    document.getElementById(
        "universalSubjectDescription"
    ).textContent =
        "Select the section you want to study.";


    const grid =
        document.getElementById(
            "universalSubjectGrid"
        );


    grid.innerHTML = `

        <button
            class="section-selection-card"
            onclick="openChapterSelection(CA_SUBJECTS.incomeTax)"
        >

            <div class="selection-card-icon">
                🧮
            </div>

            <h2>
                Income-tax Law
            </h2>

            <p>
                Section A
            </p>

            <span>
                Open Income-tax →
            </span>

        </button>


        <button
            class="section-selection-card"
            onclick="openChapterSelection(CA_SUBJECTS.gst)"
        >

            <div class="selection-card-icon">
                🧾
            </div>

            <h2>
                Goods and Services Tax
            </h2>

            <p>
                Section B
            </p>

            <span>
                Open GST →
            </span>

        </button>

    `;


    screen.classList.remove("hidden");

}


/* =========================================================
   PAPER 6 SELECTION
========================================================= */

function openPaper6Selection() {

    hideAllScreens();

    const existing =
        document.getElementById(
            "paper6Screen"
        );


    /*
       Use the existing Paper 6 screen.
    */

    if (existing) {

        existing.classList.remove(
            "hidden"
        );

        return;

    }


    /*
       Fallback if the screen is missing.
    */

    const screen =
        document.getElementById(
            "universalSubjectScreen"
        );

    if (!screen) return;


    document.getElementById(
        "universalSubjectKicker"
    ).textContent =
        "PAPER 6";


    document.getElementById(
        "universalSubjectTitle"
    ).textContent =
        "Financial Management & Strategic Management";


    document.getElementById(
        "universalSubjectDescription"
    ).textContent =
        "Select the section you want to study.";


    const grid =
        document.getElementById(
            "universalSubjectGrid"
        );


    grid.innerHTML = `

        <button
            class="section-selection-card"
            onclick="openChapterSelection(CA_SUBJECTS.fm)"
        >

            <div class="selection-card-icon">
                💰
            </div>

            <h2>
                Financial Management
            </h2>

            <p>
                Paper 6A
            </p>

            <span>
                Open Financial Management →
            </span>

        </button>


        <button
            class="section-selection-card"
            onclick="openChapterSelection(CA_SUBJECTS.sm)"
        >

            <div class="selection-card-icon">
                🧠
            </div>

            <h2>
                Strategic Management
            </h2>

            <p>
                Paper 6B
            </p>

            <span>
                Open Strategic Management →
            </span>

        </button>

    `;


    screen.classList.remove(
        "hidden"
    );

}


/* =========================================================
   OPEN CHAPTER SELECTION
========================================================= */

async function openChapterSelection(
    subject
) {

    try {

        hideAllScreens();


        currentSubject =
            subject;


        const chapters =
            await loadSubjectIndex(
                subject
            );


        currentChapters =
            chapters;


        const screen =
            document.getElementById(
                "universalChapterScreen"
            );


        if (!screen) {

            throw new Error(
                "Universal chapter screen is missing."
            );

        }


        document.getElementById(
            "universalChapterKicker"
        ).textContent =
            subject.paper;


        document.getElementById(
            "universalChapterTitle"
        ).textContent =
            subject.title;


        document.getElementById(
            "universalChapterDescription"
        ).textContent =
            "Select the chapter you want to study.";


        document.getElementById(
            "universalChapterBack"
        ).onclick =
            () => {

                if (
                    subject.id === "incomeTax" ||
                    subject.id === "gst"
                ) {

                    openTaxationSelection();

                }

                else if (
                    subject.id === "fm" ||
                    subject.id === "sm"
                ) {

                    openPaper6Selection();

                }

                else {

                    goHome();

                }

            };


        await renderUniversalChapters(
            chapters
        );


        screen.classList.remove(
            "hidden"
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    catch (error) {

        console.error(
            "CHAPTER LIST ERROR:",
            error
        );


        alert(
            "Chapter list could not be loaded.\n\n" +
            error.message
        );

    }

}


/* =========================================================
   RENDER CHAPTER LIST
========================================================= */

async function renderUniversalChapters(
    chapters
) {

    const container =
        document.getElementById(
            "universalChapterGrid"
        );


    if (!container) return;


    container.innerHTML = `

        <div
            style="
                width:100%;
                text-align:center;
                padding:30px;
            "
        >
            Loading chapters...
        </div>

    `;


    let html = "";


    for (
        const chapter of chapters
    ) {

        let exists =
            await fileExists(
                chapter.file
            );


        /*
           available:true always means available.

           If available:false but the file
           actually exists, we also allow it.
        */

        const available =
            chapter.available === true ||
            exists === true;


        /*
           UNIT-BASED CHAPTER
        */

        if (
            available &&
            chapter.hasUnits
        ) {

            html += `

                <button
                    class="section-selection-card"
                    onclick="
                        openChapterUnits(
                            '${chapter.id}'
                        )
                    "
                >

                    <div class="selection-card-icon">
                        📚
                    </div>

                    <h2>
                        Chapter ${chapter.number}
                    </h2>

                    <p>
                        ${chapter.title}
                    </p>

                    <span>
                        Select Units →
                    </span>

                </button>

            `;

            continue;

        }


        /*
           NORMAL AVAILABLE CHAPTER
        */

        if (available) {

            html += `

                <button
                    class="section-selection-card"
                    onclick="
                        openUniversalChapter(
                            '${chapter.id}'
                        )
                    "
                >

                    <div class="selection-card-icon">
                        📖
                    </div>

                    <h2>
                        Chapter ${chapter.number}
                    </h2>

                    <p>
                        ${chapter.title}
                    </p>

                    <span>
                        Open Chapter →
                    </span>

                </button>

            `;

            continue;

        }


        /*
           COMING SOON
        */

        html += `

            <div
                class="section-selection-card"
                style="
                    opacity:0.55;
                    cursor:not-allowed;
                "
            >

                <div class="selection-card-icon">
                    🔒
                </div>

                <h2>
                    Chapter ${chapter.number}
                </h2>

                <p>
                    ${chapter.title}
                </p>

                <span>
                    Coming Soon
                </span>

            </div>

        `;

    }


    container.innerHTML =
        html;

}


/* =========================================================
   OPEN UNIT LIST
========================================================= */

async function openChapterUnits(
    chapterId
) {

    const chapter =
        currentChapters.find(
            item =>
                item.id === String(chapterId)
        );


    if (!chapter) {

        alert(
            "Chapter not found."
        );

        return;

    }


    if (!chapter.hasUnits) {

        openUniversalChapter(
            chapterId
        );

        return;

    }


    try {

        let units;


        /*
           If unitsFile exists, use it.
           Otherwise use file.
        */

        const unitsFile =
            chapter.unitsFile ||
            chapter.file;


              /*
    Determine the global variable
    from the subject.
*/

let unitVariable =
    null;

if (
    currentSubject.id ===
    "incomeTax"
) {

    unitVariable =
        "CAIncomeTaxChapter3Units";

}

else if (
    currentSubject.id ===
    "fm"
) {

    unitVariable =
        "CAFMChapter9Units";

}

if (!unitVariable) {

    throw new Error(
        "Unit configuration is not defined for this chapter."
    );

}


        if (
            !window[unitVariable]
        ) {

            await loadJavaScript(
                unitsFile
            );

        }


        units =
            window[unitVariable];


        if (
            !Array.isArray(units)
        ) {

            throw new Error(
                "Unit list was not loaded correctly."
            );

        }


        currentChapters =
            units;


        const screen =
            document.getElementById(
                "universalChapterScreen"
            );


        document.getElementById(
            "universalChapterKicker"
        ).textContent =
            currentSubject.paper;


        document.getElementById(
            "universalChapterTitle"
        ).textContent =
            "Chapter " +
            chapter.number +
            " — " +
            chapter.title;


        document.getElementById(
            "universalChapterDescription"
        ).textContent =
            "Select the unit you want to study.";


        document.getElementById(
            "universalChapterBack"
        ).onclick =
            () => {

                openChapterSelection(
                    currentSubject
                );

            };


        await renderUniversalUnits(
            units
        );


        screen.classList.remove(
            "hidden"
        );


    }

    catch (error) {

        console.error(
            "UNIT LOAD ERROR:",
            error
        );


        alert(
            "Units could not be loaded.\n\n" +
            error.message
        );

    }

}


/* =========================================================
   RENDER UNITS
========================================================= */

async function renderUniversalUnits(
    units
) {

    const container =
        document.getElementById(
            "universalChapterGrid"
        );


    if (!container) return;


    let html = "";


    for (
        const unit of units
    ) {

        const exists =
            await fileExists(
                unit.file
            );


        const available =
            unit.available === true ||
            exists === true;


        if (available) {

            html += `

                <button
                    class="section-selection-card"
                    onclick="
                        openUniversalUnit(
                            '${unit.id}'
                        )
                    "
                >

                    <div class="selection-card-icon">
                        📖
                    </div>

                    <h2>
                        Unit ${unit.number}
                    </h2>

                    <p>
                        ${unit.title}
                    </p>

                    <span>
                        Open Unit →
                    </span>

                </button>

            `;

        }

        else {

            html += `

                <div
                    class="section-selection-card"
                    style="
                        opacity:0.55;
                        cursor:not-allowed;
                    "
                >

                    <div class="selection-card-icon">
                        🔒
                    </div>

                    <h2>
                        Unit ${unit.number}
                    </h2>

                    <p>
                        ${unit.title}
                    </p>

                    <span>
                        Coming Soon
                    </span>

                </div>

            `;

        }

    }


    container.innerHTML =
        html;

}


/* =========================================================
   OPEN UNIT
========================================================= */

async function openUniversalUnit(
    unitId
) {

    const unit =
        currentChapters.find(
            item =>
                item.id === String(unitId)
        );


    if (!unit) {

        alert(
            "Unit not found."
        );

        return;

    }


    const exists =
        await fileExists(
            unit.file
        );


    if (
        unit.available !== true &&
        exists !== true
    ) {

        alert(
            "This unit is coming soon."
        );

        return;

    }


    await loadAndDisplayChapter(
        unit.file,
        {
            number:
                unit.number,

            title:
                unit.title,

            unit:
                true
        }
    );

}


/* =========================================================
   OPEN NORMAL CHAPTER
========================================================= */

async function openUniversalChapter(
    chapterId
) {

    const chapter =
        currentChapters.find(
            item =>
                item.id === String(chapterId)
        );


    if (!chapter) {

        alert(
            "Chapter not found."
        );

        return;

    }


    /*
       If this chapter has units,
       show unit selection.
    */

    if (chapter.hasUnits) {

        await openChapterUnits(
            chapterId
        );

        return;

    }


    const exists =
        await fileExists(
            chapter.file
        );


    if (
        chapter.available !== true &&
        exists !== true
    ) {

        alert(
            "This chapter is coming soon."
        );

        return;

    }


    await loadAndDisplayChapter(
        chapter.file,
        chapter
    );

}


/* =========================================================
   LOAD + DISPLAY CHAPTER
========================================================= */

async function loadAndDisplayChapter(
    file,
    chapter
) {

    try {

        hideAllScreens();


        currentChapter =
            chapter;


        updateCurrentChapter(
            chapter
        );


        await loadSelectedChapter(
            file
        );


        showElement(
            "fmApp"
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    catch (error) {

        console.error(
            "CHAPTER LOAD ERROR:",
            error
        );


        alert(
            "Chapter could not be loaded.\n\n" +
            error.message
        );

    }

}


/* =========================================================
   LOAD SELECTED CHAPTER FILE
========================================================= */

function loadSelectedChapter(
    file
) {

    return new Promise(
        (resolve, reject) => {

            console.log(
                "Loading chapter:",
                file
            );


            /*
               Remove old chapter script.
            */

            const oldScript =
                document.getElementById(
                    "activeChapterScript"
                );


            if (oldScript) {

                oldScript.remove();

            }


            /*
               Clear old data.
            */

            window.CAChapterData =
                null;


            /*
               Create new script.
            */

            const script =
                document.createElement(
                    "script"
                );


            script.id =
                "activeChapterScript";


            script.src =
                file +
                "?v=" +
                Date.now();


            script.onload =
                function () {

                    console.log(
                        "Chapter loaded:",
                        file
                    );


                    if (
                        !window.CAChapterData
                    ) {

                        reject(
                            new Error(
                                "The chapter file loaded, but CAChapterData was not created."
                            )
                        );

                        return;

                    }


                    /*
                       Transfer chapter data.
                    */

                    topicData =
                        window.CAChapterData.topicData ||
                        [];

                    studyData =
                        window.CAChapterData.studyData ||
                        {};

                    concepts =
                        window.CAChapterData.concepts ||
                        [];

                    formulas =
                        window.CAChapterData.formulas ||
                        [];

                    storyHTML =
                        window.CAChapterData.storyHTML ||
                        null;


                    /*
                       Render everything.
                    */

                    init();


                    renderMindMap();


                    resolve();

                };


            script.onerror =
                function () {

                    reject(
                        new Error(
                            "Could not load chapter file:\n" +
                            file
                        )
                    );

                };


            document.body.appendChild(
                script
            );

        }
    );

}


/* =========================================================
   UPDATE CURRENT CHAPTER INFORMATION
========================================================= */

function updateCurrentChapter(
    chapter
) {

    const number =
        chapter.number || "";


    const title =
        chapter.title ||
        "Chapter";


    const chapterTitle =
        document.querySelector(
            ".chapter-title"
        );


    const chapterName =
        document.querySelector(
            ".chapter-name"
        );


    if (chapterTitle) {

        chapterTitle.textContent =
            "Chapter " +
            number;

    }


    if (chapterName) {

        chapterName.textContent =
            title;

    }


    const crumb =
        document.querySelector(
            ".crumb"
        );


    if (crumb) {

        const subjectName =
            currentSubject
                ? currentSubject.title
                : "Financial Management";


        const paperName =
            currentSubject
                ? currentSubject.paper
                : "Paper 6A";


        crumb.textContent =
            paperName +
            " / " +
            subjectName +
            " / Chapter " +
            number;

    }


    const heading =
        document.querySelector(
            ".page-heading h1"
        );


    if (heading) {

        heading.textContent =
            title;

    }


    const formulaDescription =
        document.querySelector(
            "#formulaeSection .section-head p"
        );


    if (formulaDescription) {

        formulaDescription.textContent =
            "All relationships appearing in this chapter, with symbols and interpretation.";

    }


    const storyDescription =
        document.querySelector(
            "#storySection .section-head p"
        );


    if (storyDescription) {

        storyDescription.textContent =
            "A complete business case with values, decisions, problems and all chapter concepts connected.";

    }


    const mindMapDescription =
        document.querySelector(
            "#mindmapSection .section-head p"
        );


    if (mindMapDescription) {

        mindMapDescription.textContent =
            "Expand each branch to revise the complete chapter structure.";

    }


    const footer =
        document.querySelector(
            ".app-footer"
        );


    if (footer) {

        const spans =
            footer.querySelectorAll(
                "span"
            );


        if (spans.length >= 2) {

            const subjectName =
                currentSubject
                    ? currentSubject.title
                    : "Financial Management";


            const paperName =
                currentSubject
                    ? currentSubject.paper
                    : "Paper 6A";


            spans[0].textContent =
                "CA Inter • " +
                paperName +
                " • " +
                subjectName;


            spans[1].textContent =
                "Chapter " +
                number;

        }

    }


    document.title =
        "CA Inter — " +
        title;

}


/* =========================================================
   STUDY
========================================================= */

function renderTopicList() {

    const list =
        document.getElementById(
            "topicList"
        );


    if (!list) return;


    list.innerHTML =
        topicData
            .map(
                (topic, index) => {

                    return `

                        <button
                            class="topic-btn ${
                                index === 0
                                    ? "active"
                                    : ""
                            }"
                            data-topic="${topic.id}"
                        >

                            <span class="topic-num">
                                ${
                                    String(
                                        index + 1
                                    ).padStart(
                                        2,
                                        "0"
                                    )
                                }
                            </span>

                            ${topic.title}

                        </button>

                    `;

                }
            )
            .join("");


    list.querySelectorAll(
        ".topic-btn"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    list.querySelectorAll(
                        ".topic-btn"
                    )
                    .forEach(
                        btn =>
                            btn.classList.remove(
                                "active"
                            )
                    );


                    button.classList.add(
                        "active"
                    );


                    const content =
                        document.getElementById(
                            "studyContent"
                        );


                    if (content) {

                        content.innerHTML =
                            studyData[
                                button.dataset.topic
                            ] || "";

                    }


                    const section =
                        document.getElementById(
                            "studySection"
                        );


                    if (section) {

                        section.scrollIntoView({
                            behavior:
                                "smooth",
                            block:
                                "start"
                        });

                    }


                    const sidebar =
                        document.getElementById(
                            "sidebar"
                        );


                    if (sidebar) {

                        sidebar.classList.remove(
                            "open"
                        );

                    }

                }
            );

        }
    );

}


/* =========================================================
   CONCEPTS
========================================================= */

function renderConcepts() {

    const container =
        document.getElementById(
            "conceptsContent"
        );


    if (!container) return;


    container.innerHTML = `

        <div class="concepts-grid">

            ${concepts
                .map(
                    (concept, index) => `

                        <div class="concept-card">

                            <h3>
                                ${index + 1}.
                                ${concept[0]}
                            </h3>

                            <p>
                                ${concept[1]}
                            </p>

                        </div>

                    `
                )
                .join("")}

        </div>

    `;

}


/* =========================================================
   FORMULAE
========================================================= */

function renderFormulae() {

    const container =
        document.getElementById(
            "formulaeContent"
        );


    if (!container) return;


    container.innerHTML =
        formulas
            .map(
                (formula, index) => `

                    <div class="formula-card">

                        <div class="formula-title">
                            ${index + 1}.
                            ${formula.title}
                        </div>

                        <div class="formula-box">
                            ${formula.formula}
                        </div>

                        <div class="formula-note">
                            ${formula.note}
                        </div>

                    </div>

                `
            )
            .join("");

}


/* =========================================================
   TABS
========================================================= */

function bindTabs() {

    const tabButtons =
        [
            ...document.querySelectorAll(
                ".tab"
            )
        ];


    const sections = {

        study:
            document.getElementById(
                "studySection"
            ),

        concepts:
            document.getElementById(
                "conceptsSection"
            ),

        formulae:
            document.getElementById(
                "formulaeSection"
            ),

        story:
            document.getElementById(
                "storySection"
            ),

        mindmap:
            document.getElementById(
                "mindmapSection"
            )

    };


    tabButtons.forEach(
        button => {

            button.onclick =
                () => {

                    tabButtons.forEach(
                        tab =>
                            tab.classList.remove(
                                "active"
                            )
                    );


                    button.classList.add(
                        "active"
                    );


                    Object.values(
                        sections
                    )
                    .forEach(
                        section => {

                            if (section) {

                                section.classList.remove(
                                    "active-section"
                                );

                            }

                        }
                    );


                    const selected =
                        sections[
                            button.dataset.section
                        ];


                    if (selected) {

                        selected.classList.add(
                            "active-section"
                        );

                    }


                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                };

        }
    );

}


/* =========================================================
   EXTRA BUTTONS
========================================================= */

function bindExtras() {

    const focusButton =
        document.getElementById(
            "focusBtn"
        );


    if (focusButton) {

        focusButton.onclick =
            () => {

                document.body.classList.toggle(
                    "focus-mode"
                );

            };

    }


    const menuButton =
        document.getElementById(
            "menuBtn"
        );


    if (menuButton) {

        menuButton.onclick =
            () => {

                const sidebar =
                    document.getElementById(
                        "sidebar"
                    );


                if (sidebar) {

                    sidebar.classList.toggle(
                        "open"
                    );

                }

            };

    }


    const printButton =
        document.getElementById(
            "storyPrintBtn"
        );


    if (printButton) {

        printButton.onclick =
            () => window.print();

    }


    const expandButton =
        document.getElementById(
            "expandMindMap"
        );


    const collapseButton =
        document.getElementById(
            "collapseMindMap"
        );


    if (expandButton) {

        expandButton.onclick =
            () => {

                const container =
                    document.getElementById(
                        "mindmapContent"
                    );


                if (!container) return;


                container
                    .querySelectorAll(
                        "details"
                    )
                    .forEach(
                        detail =>
                            detail.open =
                                true
                    );

            };

    }


    if (collapseButton) {

        collapseButton.onclick =
            () => {

                const container =
                    document.getElementById(
                        "mindmapContent"
                    );


                if (!container) return;


                container
                    .querySelectorAll(
                        "details"
                    )
                    .forEach(
                        detail =>
                            detail.open =
                                false
                    );

            };

    }

}


/* =========================================================
   MIND MAP
========================================================= */

function renderMindMap() {

    const container =
        document.getElementById(
            "mindmapContent"
        );


    if (!container) return;


    if (
        !window.CAChapterData ||
        !window.CAChapterData.mindMapHTML
    ) {

        container.innerHTML = `

            <div class="empty-state">
                Mind Map is not available for this chapter.
            </div>

        `;

        return;

    }


    container.innerHTML =
        window.CAChapterData.mindMapHTML;

}


/* =========================================================
   INITIALISE CONTENT
========================================================= */

function init() {

    if (!window.CAChapterData) {

        console.error(
            "CAChapterData is missing."
        );

        return;

    }


    topicData =
        window.CAChapterData.topicData ||
        [];


    studyData =
        window.CAChapterData.studyData ||
        {};


    concepts =
        window.CAChapterData.concepts ||
        [];


    formulas =
        window.CAChapterData.formulas ||
        [];


    storyHTML =
        window.CAChapterData.storyHTML ||
        null;


    renderTopicList();

    renderConcepts();

    renderFormulae();


    const studyContent =
        document.getElementById(
            "studyContent"
        );


    if (studyContent) {

        studyContent.innerHTML =
            studyData.intro ||
            "";

    }


    const storyContent =
        document.getElementById(
            "storyContent"
        );


    if (storyContent) {

        if (
            typeof storyHTML ===
            "function"
        ) {

            storyContent.innerHTML =
                storyHTML();

        }

        else {

            storyContent.innerHTML =
                storyHTML || "";

        }

    }


    bindTabs();

    bindExtras();

    renderMindMap();

}


/* =========================================================
   OLD FM COMPATIBILITY
   These functions remain so your existing HTML
   does not break.
========================================================= */

function openFM() {

    openChapterSelection(
        CA_SUBJECTS.fm
    );

}


function goToPaper6() {

    openPaper6Selection();

}


/* =========================================================
   START APPLICATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createUniversalScreens();


        /*
           We deliberately do NOT automatically
           load Chapter 1.

           User chooses:
           Paper → Subject → Chapter.
        */


        console.log(
            "CA Inter Universal App Ready."
        );

    }
);