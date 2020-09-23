const modal = [
  {
    id: "1",
    question: "Is Javascript an interpreted or compiled language?",
    options: [
      {
        name: "Interpreted",
        isCorrect: true,
      },
      {
        name: "Compiled",
        isCorrect: null,
      },
      {
        name: "Both",
        isCorrect: null,
      },
      {
        name: "Neither",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "2",
    question:
      "Which Javascript data type is the variable in the example below? Example:\n<pre>var x = 3.14;<pre>",
    options: [
      {
        name: "Interpreted",
        isCorrect: true,
      },
      {
        name: "Compiled",
        isCorrect: null,
      },
      {
        name: "Both",
        isCorrect: null,
      },
      {
        name: "Neither",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "3",
    question: "Which symbol does Javascript use to concatenate strings?",
    options: [
      {
        name: "-",
        isCorrect: true,
      },
      {
        name: "*",
        isCorrect: null,
      },
      {
        name: "+",
        isCorrect: null,
      },
      {
        name: "&",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "4",
    question:
      "Which of these would you use to compare var a and var b for absolutely matching values?",
    options: [
      {
        name: "===",
        isCorrect: true,
      },
      {
        name: "==",
        isCorrect: null,
      },
      {
        name: "=",
        isCorrect: null,
      },
      {
        name: "!=",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "5",
    question:
      "Statements that make the JavaScript interpreter execute or skip other statements depending on the value of an expression.",
    options: [
      {
        name: "Loops",
        isCorrect: null,
      },
      {
        name: "Jumps",
        isCorrect: null,
      },
      {
        name: "Conditionals",
        isCorrect: true,
      },
      {
        name: "Functions",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "6",
    question:
      "Which of these keywords doesn’t belong in JavaScript reserved words according to ECMAScript 5/6 standard?",
    options: [
      {
        name: "False",
        isCorrect: null,
      },
      {
        name: "Typeof",
        isCorrect: null,
      },
      {
        name: "With",
        isCorrect: null,
      },
      {
        name: "Int",
        isCorrect: true,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "7",
    question: "In JavaScript, what is an ordered collection of values?",
    options: [
      {
        name: "Float",
        isCorrect: null,
      },
      {
        name: "Double",
        isCorrect: null,
      },
      {
        name: "Index",
        isCorrect: null,
      },
      {
        name: "Array",
        isCorrect: true,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "8",
    question:
      "In JavaScript, what is a set of objects that inherit properties from the same prototype object?",
    options: [
      {
        name: "Class",
        isCorrect: true,
      },
      {
        name: "Prototype object",
        isCorrect: null,
      },
      {
        name: "Instance",
        isCorrect: null,
      },
      {
        name: "Factory",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "9",
    question:
      "What is a technique for initializing the elements of an array from or based on the elements of another array or iterable object?",
    options: [
      {
        name: "Array dissemination",
        isCorrect: null,
      },
      {
        name: "Array description",
        isCorrect: null,
      },
      {
        name: "Array comprehension",
        isCorrect: true,
      },
      {
        name: "Array initialization",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "10",
    question:
      "In JavaScript, what is a composite value that allows you to store and retrieve those values by name?",
    options: [
      {
        name: "Variable",
        isCorrect: null,
      },
      {
        name: "Object",
        isCorrect: true,
      },
      {
        name: "Function",
        isCorrect: null,
      },
      {
        name: "Property",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "11",
    question:
      "JavaScript functions can be invoked in four ways, which of the following is not the right way to invoke a function?",
    options: [
      {
        name: "As functions",
        isCorrect: null,
      },
      {
        name: "As methods",
        isCorrect: null,
      },
      {
        name: "As expressions",
        isCorrect: true,
      },
      {
        name: "As constructors",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "12",
    question:
      "In JavaScript, what are those that bend the path back upon itself to repeat portions of code?",
    options: [
      {
        name: "While",
        isCorrect: null,
      },
      {
        name: "Loops",
        isCorrect: true,
      },
      {
        name: "For loops",
        isCorrect: null,
      },
      {
        name: "For each",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "13",
    question:
      "What is the statement within a function that specifies the value of invocations of that function?",
    options: [
      {
        name: "Throw",
        isCorrect: null,
      },
      {
        name: "Continue",
        isCorrect: null,
      },
      {
        name: "Increment",
        isCorrect: null,
      },
      {
        name: "Return",
        isCorrect: true,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "14",
    question:
      "The try block is followed by a ____ clause, which is a block of statements that are invoked when an exception occurs anywhere within the try block.",
    options: [
      {
        name: "Trap",
        isCorrect: null,
      },
      {
        name: "Catch",
        isCorrect: true,
      },
      {
        name: "Capture",
        isCorrect: null,
      },
      {
        name: "Try",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "15",
    question:
      "Which one in the following is the right way to create an object in JavaScript?",
    options: [
      {
        name: "var empty =  [ ];",
        isCorrect: null,
      },
      {
        name: "var book = { “title:“author”: “name”: “David” };",
        isCorrect: null,
      },
      {
        name:
          "var book = { “main title”: “JavaScript”, author: { name: “David” } };",
        isCorrect: true,
      },
      {
        name: "var book = { “main title”, author: { name: “David” } };",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "16",
    question: "The values passed in to a javascript function are called:",
    options: [
      {
        name: "Parameters",
        isCorrect: true,
      },
      {
        name: "Values",
        isCorrect: null,
      },
      {
        name: "Extensions",
        isCorrect: null,
      },
      {
        name: "Traits",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "17",
    question:
      "A variable that is available throughout the code and has no scope is called a:",
    options: [
      {
        name: "Parameter",
        isCorrect: null,
      },
      {
        name: "Constant",
        isCorrect: null,
      },
      {
        name: "Global",
        isCorrect: true,
      },
      {
        name: "Namespace",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "18",
    question:
      "A reserved keyword that protects functions and variables from conflicting if another function or variable is declared with the same name is called a:",
    options: [
      {
        name: "Global",
        isCorrect: null,
      },
      {
        name: "Namespace",
        isCorrect: true,
      },
      {
        name: "Class",
        isCorrect: null,
      },
      {
        name: "Method",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "19",
    question:
      "A javascript string’s length can be counted with this library method:",
    options: [
      {
        name: "index()",
        isCorrect: null,
      },
      {
        name: "subStr()",
        isCorrect: null,
      },
      {
        name: "size()",
        isCorrect: null,
      },
      {
        name: "length()",
        isCorrect: true,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "20",
    question: "A keyword used to refer to an object from where it is called:",
    options: [
      {
        name: "$",
        isCorrect: null,
      },
      {
        name: "this",
        isCorrect: true,
      },
      {
        name: "obj",
        isCorrect: null,
      },
      {
        name: "var",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "21",
    question: "A variable or object that has no value will return as:",
    options: [
      {
        name: "empty",
        isCorrect: null,
      },
      {
        name: "null",
        isCorrect: true,
      },
      {
        name: "void",
        isCorrect: null,
      },
      {
        name: "blank",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "22",
    question:
      "A javascript statement that tests for matching cases is called a:",
    options: [
      {
        name: "boolean",
        isCorrect: null,
      },
      {
        name: "if/else statement",
        isCorrect: null,
      },
      {
        name: "switch statement",
        isCorrect: true,
      },
      {
        name: "case statement",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "23",
    question: "Which of the following is a valid array creation statement?",
    options: [
      {
        name: "var arr = [];",
        isCorrect: null,
      },
      {
        name: "var arr = [4,2,5,9,1];",
        isCorrect: null,
      },
      {
        name: "var arr = new Array(6,2,5,3,7,8,2);",
        isCorrect: null,
      },
      {
        name: "All of the above.",
        isCorrect: true,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "24",
    question: "Which of the following is a valid object creation statement?",
    options: [
      {
        name: "var obj = {}",
        isCorrect: null,
      },
      {
        name: "var obj = {fname:”John”,lname:”Doe”,dob:”01/01/1990”}",
        isCorrect: null,
      },
      {
        name: "A and B",
        isCorrect: true,
      },
      {
        name: "None of the above.",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "25",
    question: "What is the syntax for ‘not equal’ in Javascript?",
    options: [
      {
        name: "!=",
        isCorrect: true,
      },
      {
        name: "!==",
        isCorrect: null,
      },
      {
        name: "!===",
        isCorrect: null,
      },
      {
        name: "!",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "26",
    question:
      "Which statement will return true if the value of var x is false?",
    options: [
      {
        name: "if(!x){ return true}",
        isCorrect: true,
      },
      {
        name: "if(x!=”false”){ return true}",
        isCorrect: null,
      },
      {
        name: "if(x is not true){ return true}",
        isCorrect: null,
      },
      {
        name: "None of the above",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "27",
    question:
      "Which syntax is correct for an increment operation in Javascript?",
    options: [
      {
        name: "+",
        isCorrect: null,
      },
      {
        name: "**",
        isCorrect: null,
      },
      {
        name: "&&",
        isCorrect: null,
      },
      {
        name: "++",
        isCorrect: true,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "28",
    question:
      "Which string operation will return “Re” from the string “Do Re Me Fa So La Ti Do” (the value of the variable named str below)?",
    options: [
      {
        name: "var re = str.substr(2);",
        isCorrect: null,
      },
      {
        name: "var re = str.slice(4,5);",
        isCorrect: null,
      },
      {
        name: "var re = str.indexOf(“Re”);",
        isCorrect: null,
      },
      {
        name: "var re = str.substr(3,4);",
        isCorrect: true,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "29",
    question: "What is the syntax for a single line comment in Javascript?",
    options: [
      {
        name: "<!-- comment -->",
        isCorrect: null,
      },
      {
        name: "// comment",
        isCorrect: null,
      },
      {
        name: "-- comment",
        isCorrect: true,
      },
      {
        name: "/* comment */",
        isCorrect: null,
      },
    ],
    answered: null,
    userAnswer: "",
  },
  {
    id: "30",
    question:
      "What is the syntax for a multi line comment block in Javascript?",
    options: [
      {
        name: "<!-- comment block -->",
        isCorrect: null,
      },
      {
        name: "// comment block",
        isCorrect: null,
      },
      {
        name: "-- comment block",
        isCorrect: null,
      },
      {
        name: "/* comment block */",
        isCorrect: true,
      },
    ],
    answered: null,
    userAnswer: "",
  },
];
