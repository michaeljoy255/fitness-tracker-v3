"use strict"
////////////////////////////////////////////////////////////////////////////////
// *** Future data examples ***
////////////////////////////////////////////////////////////////////////////////

// Top level user profile
function Profile(username, email, routines, exercises) {
    this.username = username;
    this.email = email;
    this.routines = routines; // named exercises collection of past performances
    this.exercises = exercises; // completed exercises collection
};

// Routines are named exercise collections with previous performances
function Routine(name, exercises) {
    this.name = name;
    this.exercises = exercises;
};

// Workout contains all exercise data from a date
function Workout(date, bodyWeight, bodyFat, duration, exercises) {
    this.date = date; // MM/DD/YYYY string
    this. bodyWeight = bodyWeight;
    this.bodyFat = bodyFat;
    this.duration = duration; // total workout time
    this.exercises = exercises;
};

// A single exercise within a workout
function Exercise(category, name, desc, notes, intensity, duration, details) {
    this.category = category; // ENUM of exercise categories
    this.name = name;
    this.desc = desc;
    this.notes = notes;
    this.intensity = intensity; // ENUM of intensities
    this.duration = duration; // total time for specific exercise (timerable?)
    this.details = details;
};

// Details for resistence based exercises
function Details(rest, tempo, weightMax, weightMin, weightIncrement, sets) {
    this.rest = rest; // approximate rest time between sets
    this.tempo = tempo; // ENUM of tempos 
    this.weightMax = weightMax; // max weight for exercise
    this.weightMin = weightMin; // min weight for exercise
    this.weightIncrement = weightIncrement; // weight increments
    this.sets = sets;
};

// An individual exercise set
function WeightSet(weight, reps) {
    this.weight = weight;
    this.reps = reps;
};

// ENUMS
var CATEGORY = [
    "Chest",
    "Triceps",
    "Back",
    "Biceps",
    "Legs",
    "Shoulders",
    "Core",
    "Cardio",
    "Miscellanous"
];
var TEMPO = [
    "Slow",
    "Average",
    "Fast"
];
var INTENSITY = [
    "Low",
    "Medium",
    "High"
];
////////////////////////////////////////////////////////////////////////////////

let defaultProfile = new Profile("Guest", "example@example.com", [
    new Routine("Chest and Triceps", [
        new Exercise("Cardio", "Elliptical", "", "", "", 7),
        new Exercise("Chest", "Flat Bench Press", "", "", "", null, new Details(
            "", "", 400, 20, 2.5, [
                new WeightSet(70, 8),
                new WeightSet(110, 10),
                new WeightSet(112.5, 10),
                new WeightSet(112.5, 10),
                new WeightSet(112.5, 10)
            ]
        )),
        new Exercise("Chest", "Incline Bench Press", "", "", "", null, new Details(
            "", "", 400, 20, 2.5, [
                new WeightSet(50, 10),
                new WeightSet(70, 10),
                new WeightSet(70, 10),
                new WeightSet(70, 10)
            ]
        )),
        new Exercise("Chest", "Decline Bench Press", "", "", "", null, new Details(
            "", "", 400, 20, 2.5, [
                new WeightSet(90, 10),
                new WeightSet(110, 10),
                new WeightSet(110, 10),
                new WeightSet(110, 10)
            ]
        )),
        new Exercise("Chest", "Fly Machine (Chest)", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(100, 10),
                new WeightSet(100, 10),
                new WeightSet(100, 10)
            ]
        )),
        new Exercise("Chest", "Cable Chest Side Pulls", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(15.5, 10),
                new WeightSet(15.5, 10),
                new WeightSet(15.5, 10)
            ]
        )),
        new Exercise("Triceps", "Cable Rope Pulldowns", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(35, 10),
                new WeightSet(35, 10),
                new WeightSet(35, 10)
            ]
        )),
        new Exercise("Triceps", "Tricep Press Machine", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(160, 10),
                new WeightSet(160, 10),
                new WeightSet(160, 10)
            ]
        )),
        new Exercise("Triceps", "Laying Tricep Extensions", "", "", "", null, new Details(
            "", "", 120, 5, 5, [
                new WeightSet(40, 10),
                new WeightSet(40, 10),
                new WeightSet(40, 10)
            ]
        )),
        new Exercise("Miscellanous", "Stretching", "", "", "", 8)
    ]),
    new Routine("Back and Biceps", [
        new Exercise("Cardio", "Elliptical", "", "", "", 8),
        new Exercise("Back", "Bent Over Rows", "", "", "", null, new Details(
            "", "", 400, 20, 2.5, [
                new WeightSet(70, 8),
                new WeightSet(110, 10),
                new WeightSet(110, 10),
                new WeightSet(110, 10),
                new WeightSet(110, 10)
            ]
        )),
        new Exercise("Back", "Shrugs", "", "", "", null, new Details(
            "", "", 400, 20, 2.5, [
                new WeightSet(160, 10),
                new WeightSet(180, 10),
                new WeightSet(180, 10),
                new WeightSet(180, 10)
            ]
        )),
        new Exercise("Back", "Stiff-Legged Deadlifts", "", "", "", null, new Details(
            "", "", 400, 20, 2.5, [
                new WeightSet(70, 10),
                new WeightSet(90, 10),
                new WeightSet(90, 10),
                new WeightSet(90, 10)
            ]
        )),
        new Exercise("Back", "Assisted Pull-up Machine (3 versions)", "", "", "", null, new Details(
            "", "", 200, 0, 5, [
                new WeightSet(70, 10),
                new WeightSet(90, 10),
                new WeightSet(90, 10),
                new WeightSet(90, 10)
            ]
        )),
        new Exercise("Back", "Fly Machine (Back)", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(80, 10),
                new WeightSet(80, 10),
                new WeightSet(80, 10)
            ]
        )),
        new Exercise("Biceps", "Underhand Curls", "", "", "", null, new Details(
            "", "", 120, 5, 5, [
                new WeightSet(50, 10),
                new WeightSet(50, 10),
                new WeightSet(50, 10)
            ]
        )),
        new Exercise("Biceps", "Hammer Curls", "", "", "", null, new Details(
            "", "", 120, 5, 5, [
                new WeightSet(25, 10),
                new WeightSet(25, 10),
                new WeightSet(25, 10)
            ]
        )),
        new Exercise("Biceps", "Overhand Curls", "", "", "", null, new Details(
            "", "", 120, 5, 5, [
                new WeightSet(30, 10),
                new WeightSet(30, 10),
                new WeightSet(30, 10)
            ]
        )),
        new Exercise("Miscellanous", "Stretching", "", "", "", 8)
    ]),
    new Routine("Legs, Shoulders, and Core", [
        new Exercise("Cardio", "Elliptical", "", "", "", 8),
        new Exercise("Shoulders", "Shoulder Press Machine", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(70, 10),
                new WeightSet(70, 10),
                new WeightSet(70, 10)
            ]
        )),
        new Exercise("Shoulders", "Side Raises", "", "", "", null, new Details(
            "", "", 60, 2.5, 2.5, [
                new WeightSet(10, 10),
                new WeightSet(10, 10),
                new WeightSet(10, 10)
            ]
        )),
        new Exercise("Shoulders", "Front Raises", "", "", "", null, new Details(
            "", "", 60, 2.5, 2.5, [
                new WeightSet(10, 10),
                new WeightSet(10, 10),
                new WeightSet(10, 10)
            ]
        )),
        new Exercise("Legs", "Leg Press Machine", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(160, 10),
                new WeightSet(160, 10),
                new WeightSet(160, 10)
            ]
        )),
        new Exercise("Legs", "Leg Curl Machine", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(75, 10),
                new WeightSet(75, 10),
                new WeightSet(75, 10)
            ]
        )),
        new Exercise("Legs", "Leg Extension Machine", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(75, 10),
                new WeightSet(75, 10),
                new WeightSet(75, 10)
            ]
        )),
        new Exercise("Legs", "Calf Extension Machine", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(160, 10),
                new WeightSet(160, 10),
                new WeightSet(160, 10)
            ]
        )),
        new Exercise("Legs", "Hip Abduction (Out) Machine", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(190, 10),
                new WeightSet(190, 10),
                new WeightSet(190, 10)
            ]
        )),
        new Exercise("Legs", "Hip Adduction (In) Machine", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(155, 10),
                new WeightSet(155, 10),
                new WeightSet(155, 10)
            ]
        )),
        new Exercise("Legs", "Standing Glute Machine", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(110, 10),
                new WeightSet(110, 10),
                new WeightSet(110, 10)
            ]
        )),
        new Exercise("Core", "Abdominal Crunch Machine", "", "", "", null, new Details(
            "", "", 200, 5, 5, [
                new WeightSet(35, 25),
                new WeightSet(35, 25),
                new WeightSet(35, 25),
                new WeightSet(35, 25)
            ]
        )),
        new Exercise("Core", "Barbell Standing Core Twist", "", "", "", null, new Details(
            "", "", 60, 10, 10, [
                new WeightSet(50, 50),
                new WeightSet(50, 50)
            ]
        )),
        new Exercise("Core", "Oblique Side Bend", "", "", "", null, new Details(
            "", "", 60, 5, 5, [
                new WeightSet(45, 25),
                new WeightSet(45, 25),
                new WeightSet(45, 25),
                new WeightSet(45, 25)
            ]
        )),
        new Exercise("Miscellanous", "Stretching", "", "", "", 8)
    ])
]);

console.log(defaultProfile);

// Returns string with MM/DD/YYYY date format
function getDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return (month + "/" + day + "/" + year); 
};

function createWorkout() {
    return {
        date: getDate(),
        bodyWeight: null,
        duration: 0,
        exercises: []
    };
};

function startWorkoutTimer() {
    return new Date();
};

function endWorkoutTimer(startTime, workout) {
    const endTime = new Date();
    let timeDiff = endTime - startTime; // in ms
    timeDiff /= 1000; // strip the ms 
    let seconds = Math.round(timeDiff); // get seconds
    
    // @TODO
    console.log(seconds + " seconds");
    workout.duration = seconds;
};

// -----BEGIN HERE-----
var routines = seedRoutines();
var workout = createWorkout();
var startTime = startWorkoutTimer();

// material design js example
mdc.ripple.MDCRipple.attachTo(document.querySelector('.ripple-button'));