$(document).ready(function () {
  const informal = [

    "dammn",
    "wheels",
    "dope",
    "cheap",
    "hell",
    "cash",
    "bro",
    "ewww",
    "ugaly",
    "baggy",
    "bis",
    "junks",
    "spend",
    "craved",
    "noob"
  ];

  const formal = [
    "art",
    "fabulous",
    "perspectives",
    "recommand",
    "read",
    "article",
    "major",
    "company",
    "promotions",
    "polite",
    "elderly",
    "treat",
    "respect",
    "parents",
    "politicians"
  ];


  const male = [

    "dammn",
    "wheels",
    "dope",
    "car",
    "hell",
    "bro",
    "man",
    "worked",
    "bis",
    "struggle",
    "lifting",
    "junks",
    "wall",
    "risk",
    "stocks",
    "company",
    "blaming",
    "field",
    "workers",
    "promotions",
    "exercising",
    "noob",
    "level",
    "game",
    "stupied",
    "handle",
    "moron",
    "spilled",
    "doller",
    "camel",
    "jackie",
    "money",
    "animal",
    "terroriest",
    "God",
    "god",
    "politicians",
    "whsh",
    "wash-up",
    "respected",
    "minds"

  ];

  const female = [

    "fancy",
    "show off",
    "baggy",
    "skirt",
    "wear",
    "size",
    "emberrassed",
    "yourself",
    "perfecetly",
    "picture",
    "art",
    "love",
    "fabulous",
    "kitchen",
    "cooking",
    "dinner",
    "read",
    "spend",
    "home",
    "alone",
    "daily",
    "routine",
    "making",
    "breakfast",
    "craved",
    "period",
    "crchet",
    "easier",
    "rubbish",
    "polite",
    "parents"
  ];

  let ageLowFormal = [
    "dammn",
    "wheels",
    "dope",
    "bro",
    "ewww",
    "ugaly",
    "school",
    "junks",
    "noob",
    "game",
    "stupied",
    "level",
    "handle",
    "camel",
    "filthy"
  ];
  let ageMiddleFormal = [
    "dope",
     "car",
     "cheap",
     "makes",
     "bro",
     "especially",
     "ugaly",
     "job",
     "man",
     "struggle",
     "lifting",
     "junks",
     "piece",
     "wall",
     "perspectives",
     "recommand",
     "read",
     "article",
     "again",
     "cannot",
     "risk",
     "stocks",
     "spend",
     "home",
     "routine",
     "exercising",
     "morning",
     "respected",
     "teenagers",
     "politicians"
   ];
  let ageHighFormal = [
    "struggle",
    "wall",
    "issue",
    "crochet",
    "grandparents"
  ];


  let resultsFormal = { ageLow: 0, ageHigh: 0, ageMiddle: 0 };
  let resultsInFormal = { ageLow: 0, ageHigh: 0, ageMiddle: 0 };

  $("#analyse").on("click", () => AutherWords());

  $("#clear").on("click", function () {
    $("#textarea").val("");
    $("#totalWord").text("");
    $("#error").text("");

    $("#informal").text("");
    $("#female").text("");
    $("#male").text("");
    $("#language").text("")
    $("#gender").text("")
    $("#ageFormal").text("");
    $("#ageFormal-15-25").text("")
    $("#ageFormal-25-40").text("")
    $("#ageFormal-40-60").text("")
    $("#formal").text("");

  });

  function AutherWords() {
    let MaleInformal = 0;
    let MaleFormal = 0;
    let FemaleInformal = 0;
    let FemaleFormal = 0;

    let formalPrecent = 0
    let inFormalPercent = 0
    let malePrecent = 0
    let femalePercent = 0

    Words = $("#textarea").val().toLowerCase();

    var TextArray = Words.split(/[^a-zA-Z]+/);

    if (TextArray[TextArray.length - 1] == "") {
      TextArray.length--;
    }

    const totalWords = "Total words: " + TextArray.length + "\n";
    $("#totalWord").text(totalWords);

    if (TextArray.length < 200) {
      $("#error").text(
        "You should enter more than 200 words to have an accurate result"
      );
    }

    // every word has its own value to add it
    // ignore the word if it’s not included in the dictionary

    TextArray.forEach((word) => {
        if (informal.includes(word)) {
          inFormalPercent += 1;
        }
        if (formal.includes(word)) {
          formalPrecent += 1;
        }

        if (male.includes(word)) {
          malePrecent += 1;
        }
        if (female.includes(word)) {
          femalePercent += 1;
        }

      if (ageLowFormal.includes(word)) {
        resultsFormal.ageLow += 1;
      } else if (ageMiddleFormal.includes(word)) {
        resultsFormal.ageMiddle += 1;
      } else if (ageHighFormal.includes(word)) {
        resultsFormal.ageHigh += 1;
      }

    });

    // Display results
    let Percent;
    let Weak = 0;


    $("#language").text(`Language Type Result:`)
    $("#gender").text(`Gender Result:`)
// $("#informal").text("Analysing result based on Language style: Informal\n");
    $("#informal").text(`InFormal : ${(inFormalPercent*100)/(inFormalPercent+formalPrecent)}%`)
    $("#formal").text(`Formal : ${(formalPrecent*100)/(inFormalPercent+formalPrecent)}%`)

    $("#female").text(`  Female = ${(femalePercent*100)/(femalePercent+malePrecent)}%\n`);
    $("#male").text(`  Male = ${(malePrecent*100)/(femalePercent+malePrecent)}% \n`);

    $("#ageFormal").text("Age Group Result:\n");
    $("#ageFormal-15-25").text(
      `Age Between 15 and 25 = ${
        (resultsFormal.ageLow /
          (resultsFormal.ageLow +
            resultsFormal.ageMiddle +
            resultsFormal.ageHigh)) *
        100
      }%`
    );
    $("#ageFormal-25-40").text(
      `Age Between 25 and 40 = ${
        (resultsFormal.ageMiddle /
          (resultsFormal.ageLow +
            resultsFormal.ageMiddle +
            resultsFormal.ageHigh)) *
        100
      }%`
    );
    $("#ageFormal-40-60").text(
      `Age Between 40 and 60 = ${
        (resultsFormal.ageHigh /
          (resultsFormal.ageLow +
            resultsFormal.ageMiddle +
            resultsFormal.ageHigh)) *
        100
      }%`
    );


    resultsFormal = { ageLow: 0, ageHigh: 0, ageMiddle: 0 };
    resultsInFormal = { ageLow: 0, ageHigh: 0, ageMiddle: 0 };

    result = "";
    return;
  }
});
