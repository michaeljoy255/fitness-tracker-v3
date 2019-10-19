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
function Set(weight, reps) {
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

// Seed routines until a database solution is used
function seedRoutines() {
    let routines = [
        {name: "Chest and Triceps", exercises: []},
        {name: "Back and Biceps", exercises: []},
        {name: "Legs, Shoulders, and Core", exercises: []},
    ];

    routines.forEach(routine => {
        // First Routine --------------------------
        if (routine.name === "Chest and Triceps") {
            routine.exercises.push({
                category: "Cardio", name: "Warmup",
                duration: 7
            },{
                category: "Chest", name: "Smith Flat Bench Press",
                resistenceDetails: {
                    sets: [
                        {weight: 70, reps: 5},
                        {weight: 110, reps: 10},
                        {weight: 112.5, reps: 10},
                        {weight: 112.5, reps: 10},
                        {weight: 112.5, reps: 10}
                    ]
                }
            },{
                category: "Chest", name: "Smith Incline Bench Press",
                resistenceDetails: {
                    sets: [
                        {weight: 50, reps: 10},
                        {weight: 70, reps: 10},
                        {weight: 70, reps: 10},
                        {weight: 70, reps: 10}
                    ]
                }
            },{
                category: "Chest", name: "Smith Decline Bench Press",
                resistenceDetails: {
                    sets: [
                        {weight: 90, reps: 10},
                        {weight: 110, reps: 10},
                        {weight: 110, reps: 10},
                        {weight: 112.5, reps: 10}
                    ]
                }
            },{
                category: "Chest", name: "Fly Machine (Chest)",
                resistenceDetails: {
                        sets: [
                        {weight: 100, reps: 10},
                        {weight: 100, reps: 10},
                        {weight: 100, reps: 10}
                    ]
                }
            },{
                category: "Chest", name: "Cable Chest Side Pulls",
                resistenceDetails: {
                        sets: [
                        {weight: 15.5, reps: 10},
                        {weight: 15.5, reps: 10},
                        {weight: 15.5, reps: 10}
                    ]
                }
            },{
                category: "Triceps", name: "Cable Rope Pulldowns",
                resistenceDetails: {
                        sets: [
                        {weight: 35, reps: 10},
                        {weight: 35, reps: 10},
                        {weight: 35, reps: 10}
                    ]
                }
            },{
                category: "Triceps", name: "Tricep Press Machine",
                resistenceDetails: {
                        sets: [
                        {weight: 160, reps: 10},
                        {weight: 160, reps: 10},
                        {weight: 160, reps: 10}
                    ]
                }
            },{
                category: "Triceps", name: "Laying Tricep Extensions",
                resistenceDetails: {
                        sets: [
                        {weight: 40, reps: 10},
                        {weight: 40, reps: 10},
                        {weight: 40, reps: 10}
                    ]
                }
            },{
                category: "Miscellanous", name: "Post-Workout Stretch",
                duration: 8
            });
        };
        // Second Routine -----------------------
        if (routine.name === "Back and Biceps") {
            routine.exercises.push({
                category: "Cardio", name: "Warmup",
                duration: 7
            },{
                category: "Back", name: "Smith Bent Over Rows",
                resistenceDetails: {
                    sets: [
                        {weight: 70, reps: 5},
                        {weight: 110, reps: 10},
                        {weight: 110, reps: 10},
                        {weight: 110, reps: 10},
                        {weight: 110, reps: 10}
                    ]
                }
            },{
                category: "Back", name: "Smith Shrugs",
                resistenceDetails: {
                    sets: [
                        {weight: 160, reps: 10},
                        {weight: 180, reps: 10},
                        {weight: 180, reps: 10},
                        {weight: 180, reps: 10}
                    ]
                }
            },{
                category: "Back", name: "Smith Stiff-Legged Deadlifts",
                resistenceDetails: {
                    sets: [
                        {weight: 70, reps: 10},
                        {weight: 90, reps: 10},
                        {weight: 90, reps: 10},
                        {weight: 90, reps: 10}
                    ]
                }
            },{
                category: "Back", name: "Assisted Pull-ups (3 versions)",
                resistenceDetails: {
                    sets: [
                        {weight: 45, reps: 10},
                        {weight: 45, reps: 10},
                        {weight: 45, reps: 10}
                    ]
                }
            },{
                category: "Back", name: "Fly Machine (Back)",
                resistenceDetails: {
                    sets: [
                        {weight: 80, reps: 10},
                        {weight: 80, reps: 10},
                        {weight: 80, reps: 10}
                    ]
                }
            },{
                category: "Biceps", name: "Barbell Underhand Curls",
                resistenceDetails: {
                    sets: [
                        {weight: 50, reps: 10},
                        {weight: 50, reps: 10},
                        {weight: 50, reps: 10}
                    ]
                }
            },{
                category: "Biceps", name: "Dumbbell Hammer Curls",
                resistenceDetails: {
                    sets: [
                        {weight: 25, reps: 10},
                        {weight: 25, reps: 10},
                        {weight: 25, reps: 10}
                    ]
                }
            },{
                category: "Biceps", name: "Barbell Overhand Curls",
                resistenceDetails: {
                    sets: [
                        {weight: 30, reps: 10},
                        {weight: 30, reps: 10},
                        {weight: 30, reps: 10}
                    ]
                }
            },{
                category: "Miscellanous", name: "Post-Workout Stretch",
                duration: 8
            });
        };
        // Third Routine ----------------------------------
        if (routine.name === "Legs, Shoulders, and Core") {
            routine.exercises.push({
                category: "Cardio", name: "Warmup",
                duration: 7
            },{
                category: "Shoulders", name: "Seated Shoulder Press Machine",
                resistenceDetails: {
                    sets: [
                        {weight: 70, reps: 10},
                        {weight: 70, reps: 10},
                        {weight: 70, reps: 10}
                    ]
                }
            },{
                category: "Shoulders", name: "Dumbbell Side (Lateral) Raises",
                resistenceDetails: {
                    sets: [
                        {weight: 10, reps: 10},
                        {weight: 10, reps: 10},
                        {weight: 10, reps: 10}
                    ]
                }
            },{
                category: "Shoulders", name: "Dumbbell Front Raises",
                resistenceDetails: {
                    sets: [
                        {weight: 10, reps: 10},
                        {weight: 10, reps: 10},
                        {weight: 10, reps: 10}
                    ]
                }
            },{
                category: "Legs", name: "Leg Press Machine",
                resistenceDetails: {
                    sets: [
                        {weight: 160, reps: 10},
                        {weight: 160, reps: 10},
                        {weight: 160, reps: 10}
                    ]
                }
            },{
                category: "Legs", name: "Leg Curl Machine",
                resistenceDetails: {
                    sets: [
                        {weight: 75, reps: 10},
                        {weight: 75, reps: 10},
                        {weight: 75, reps: 10}
                    ]
                }
            },{
                category: "Legs", name: "Leg Extension Machine",
                resistenceDetails: {
                    sets: [
                        {weight: 75, reps: 10},
                        {weight: 75, reps: 10},
                        {weight: 75, reps: 10}
                    ]
                }
            },{
                category: "Legs", name: "Calf Extension Machine",
                resistenceDetails: {
                    sets: [
                        {weight: 160, reps: 10},
                        {weight: 160, reps: 10},
                        {weight: 160, reps: 10}
                    ]
                }
            },{
                category: "Legs", name: "Hip Abduction (Out) Machine",
                resistenceDetails: {
                    sets: [
                        {weight: 190, reps: 10},
                        {weight: 190, reps: 10},
                        {weight: 190, reps: 10}
                    ]
                }
            },{
                category: "Legs", name: "Hip Adduction (In) Machine",
                resistenceDetails: {
                    sets: [
                        {weight: 155, reps: 10},
                        {weight: 155, reps: 10},
                        {weight: 155, reps: 10}
                    ]
                }
            },{
                category: "Legs", name: "Standing Glute Press Machine",
                resistenceDetails: {
                    sets: [
                        {weight: 110, reps: 10},
                        {weight: 110, reps: 10},
                        {weight: 110, reps: 10}
                    ]
                }
            },{
                category: "Core", name: "Abdominal Crunch Machine",
                resistenceDetails: {
                    sets: [
                        {weight: 35, reps: 25},
                        {weight: 35, reps: 25},
                        {weight: 35, reps: 25},
                        {weight: 35, reps: 25}
                    ]
                }
            },{
                category: "Core", name: "Barbell Standing Core Twist",
                resistenceDetails: {
                    sets: [
                        {weight: 50, reps: 50},
                        {weight: 50, reps: 50}
                    ]
                }
            },{
                category: "Core", name: "Dumbbell Oblique Side Bend",
                resistenceDetails: {
                    sets: [
                        {weight: 45, reps: 25},
                        {weight: 45, reps: 25},
                        {weight: 45, reps: 25},
                        {weight: 45, reps: 25}
                    ]
                }
            },{
                category: "Miscellanous", name: "Post-Workout Stretch",
                duration: 8
            });
        };
    });

    return routines;
};

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