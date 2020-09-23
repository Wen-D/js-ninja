(function () {
  function randomizeTenQuestions(modal) {
    positions = [];
    questions = [];
    //create a list of position numbers equal to the number of questions in modal. Could be fixed at 30 but this is more flexible.
    for (var i = 0; i < modal.length; i++) {
      positions.push(i);
    }
    /* Iterate over the positions list 10 times.
     *  Pull a random number from the positions list.
     *  Use that number to copy a question obj with that index into questions arr.
     *  Eliminate that number from the pool to eliminate repeat picks.
     */
    for (var i = 0; i < 10; i++) {
      randomNum = positions[Math.floor(Math.random() * positions.length)];
      modal[randomNum].answered = ko.observable(modal[randomNum].answered);
      modal[randomNum].userAnswer = ko.observable(modal[randomNum].userAnswer);
      questions.push(modal[randomNum]);
      index = positions.indexOf(randomNum);
      positions.splice(index, 1);
     
    }
    return questions;
  }

  function AppViewModel() {
    const self = this,
      COUNT = 10;
    self.states = ["home", "trivia", "result", "mark-sheet"];

    // Place All Observables here
    /**
     * jsNinja: User
     * currentState: current route
     * currentTrivia: current question
     * chosenItem: Clicked radio button of the trivia
     * chosenItems: Store all user's answers list
     */
    self.jsNinja = ko.observable();
    self.currentState = ko.observable();
    self.currentTrivia = ko.observable();
    self.chosenItem = ko.observable();
    self.chosenItems = [];
    self.length = ko.observable(0);
    self.direction = ko.observable();
    self.data = ko.observableArray(randomizeTenQuestions(modal));
    
    self.score = ko.observable(0);
    self.rank = ko.observable(null);

    self.toState = function (ctx, event) {
      if (!!event.target.dataset && !!event.target.dataset.value) {
        if (!!self.jsNinja()) {
          if (
            event.target.dataset.direction !== "backwards" &&
            self.length() >= COUNT
          ) {
            switch (event.target.dataset.value) {
              case "trivia":
                self.chosenItems.forEach(checkItems);
                self.data.valueHasMutated();
                self.currentState("result");
                self.chosenItems[self.length()] = self.chosenItem();
                self.score(getScorePercentage());
                self.rank(getRank());

                break;

              case "try-again":
                self.chosenItem(null);
                self.chosenItems = [];
                self.currentState("trivia");
                self.currentTrivia(self.data()[0]);
                self.length(1);
                break;

              case "reset":
                self.jsNinja("");
                self.chosenItem(null);
                self.chosenItems = [];
                self.currentState("home");
                self.currentTrivia(self.data()[0]);
                self.length(0);
                self.data(randomizeTenQuestions(modal));
                break;

              default:
                self.currentState(event.target.dataset.value);
                break;
            }
          } else if (event.target.dataset.value === "reset") {
            self.jsNinja("");
            self.chosenItem(null);
            self.chosenItems = [];
            self.currentState("home");
            self.currentTrivia(self.data()[0]);
            self.length(0);
            self.data(randomizeTenQuestions(modal));
          } else {
            self.currentState(event.target.dataset.value);
            var pos = self.length();
            if (pos > 0) {
              self.chosenItems[pos - 1] = self.chosenItem();
              self.chosenItem(null);
            }

            if (event.target.dataset.direction === "backwards" && pos >= 1) {
              pos = pos - 1;
            }
            if (event.target.dataset.direction === "forwards") {
              pos = pos + 1;
            }
            if (!!pos) {
              self.currentTrivia(self.data()[pos - 1]);
              self.length(pos);
            } else {
              self.currentTrivia(self.data()[0]);
              self.length(1);
            }
          }
        } else {
          alert("Please enter your name");
        }
        console.log(self.chosenItems);
      } else {
        if (event.isTrusted) {
          // case for skip button
          if (self.length() >= COUNT) {
            self.chosenItems.forEach(checkItems);
            self.data.valueHasMutated();
            self.currentState("result");
            self.chosenItems[self.length()] = self.chosenItem();
            self.score(getScorePercentage());
            self.rank(getRank());
          } else {
            var pos = self.length();
            pos = pos + 1;
            self.currentTrivia(self.data()[pos - 1]);
            self.length(pos);
          }
        }
      }
    };

    self.currentState("home");

    function calculateScore() {
      return self.chosenItems.filter((e) => e).filter((e) => !!e.isCorrect)
        .length;
    }

    function checkItems(item) {
      console.log("self.data");
      //console.log(self.data());
      if (null != item && item.isCorrect) {
        for (var i = 0; i < 10; i++) {
          for (var j = 0; j < 4; j++) {
            if (self.data()[i].options[j].name == item.name) {   
              self.data()[i].answered(true);
              break;
            }
            
          }

        }
      }
      //////////////////////////////////
      if (null != item) {
        for (var i = 0; i < 10; i++) {
          for (var j = 0; j < 4; j++) {
            if (self.data()[i].options[j].name == item.name) {   
              self.data()[i].userAnswer(item.name);
              break;
            }
            
          }

        }
      }
      ////////////////////////////////////

    }
    function getRank() {
      var calculatedScore = calculateScore();

      if (calculatedScore > 7) {
        return "Expert";
      } else if (calculatedScore > 5) {
        return "Novice";
      } else {
        return "Beginner";
      }
    }

    function getScorePercentage() {
      return calculateScore() * 10;
    }

    window.onbeforeunload = function () {
      if (self.currentState() !== "home") {
        return true;
      }
    };
  }

  // knockout Binding
  ko.applyBindings(new AppViewModel());
})();
