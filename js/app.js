////////////////////////////////////////////////////////////////////////////////
// *** Future data examples ***
////////////////////////////////////////////////////////////////////////////////

// Top level user profile
function _initProfile() {
    return {
        user: String,
        workouts: []
    };
};

// Workout contains all exercise data from a date
function _initWorkout() {
    return {
        date: Date,
        bodyWeight: Number,
        bodyFat: Number,
        duration: Number,
        exercises: []
    };
};

// A single exercise within a workout
function _initExercise() {
    return {
        type: String,
        name: String,
        desc: String,
        setBreaks: Number,
        setTempo: Number,
        sets: [],
        intensity: null,
        duration: null,
        notes: ""
    };
};

// An individual exercise set
function _initSet() {
    return {
        weight: Number,
        reps: Number
    };
};

// Routines are saved groups of exercises with a name and previous performance
function _initRoutine() {
    return {
        name: String,
        exercises: []
    };
};
////////////////////////////////////////////////////////////////////////////////

// Seed routines until a database solution is used
function seedRoutines() {
    let routines = [
        {name: "Chest and Triceps", exercises: []},
        {name: "Back and Biceps", exercises: []},
        {name: "Legs, Shoulders, and Core", exercises: []},
    ];

    routines.forEach(routine => {
        // *** Routine ***
        if (routine.name === "Chest and Triceps") {
            routine.exercises.push({
                type: "Cardio", name: "Warmup",
                duration: 7
            },{
                type: "Chest", name: "Smith Flat Bench Press",
                sets: [
                    {weight: 90, reps: 10},
                    {weight: 110, reps: 10},
                    {weight: 110, reps: 10},
                    {weight: 110, reps: 10}
                ]
            },{
                type: "Chest", name: "Smith Incline Bench Press",
                sets: [
                    {weight: 50, reps: 10},
                    {weight: 70, reps: 10},
                    {weight: 70, reps: 10},
                    {weight: 70, reps: 10}
                ]
            },{
                type: "Chest", name: "Smith Decline Bench Press",
                sets: [
                    {weight: 90, reps: 10},
                    {weight: 110, reps: 10},
                    {weight: 110, reps: 10},
                    {weight: 110, reps: 10}
                ]
            },{
                type: "Chest", name: "Fly Machine (Chest)",
                sets: [
                    {weight: 100, reps: 10},
                    {weight: 100, reps: 10},
                    {weight: 100, reps: 10}
                ]
            },{
                type: "Chest", name: "Cable Chest Side Pulls",
                sets: [
                    {weight: 15.5, reps: 10},
                    {weight: 15.5, reps: 10},
                    {weight: 15.5, reps: 10}
                ]
            },{
                type: "Triceps", name: "Tricep Press Machine",
                sets: [
                    {weight: 160, reps: 10},
                    {weight: 160, reps: 10},
                    {weight: 160, reps: 10}
                ]
            },{
                type: "Triceps", name: "Cable Rope Pulldowns",
                sets: [
                    {weight: 35, reps: 10},
                    {weight: 35, reps: 10},
                    {weight: 35, reps: 10}
                ]
            },{
                type: "Triceps", name: "Laying Tricep Extensions",
                sets: [
                    {weight: 40, reps: 10},
                    {weight: 40, reps: 10},
                    {weight: 40, reps: 10}
                ]
            },{
                type: "Miscellanous", name: "Post-Workout Stretch",
                duration: 8
            });
        };
        // *** Routine ***
        if (routine.name === "Back and Biceps") {
            routine.exercises.push({
                type: "Cardio", name: "Warmup",
                duration: 7
            },{
                type: "Back", name: "Smith Bent Over Rows",
                sets: [
                    {weight: 90, reps: 10},
                    {weight: 110, reps: 10},
                    {weight: 110, reps: 10},
                    {weight: 110, reps: 10}
                ]
            },{
                type: "Back", name: "Smith Shrugs",
                sets: [
                    {weight: 160, reps: 10},
                    {weight: 180, reps: 10},
                    {weight: 180, reps: 10},
                    {weight: 180, reps: 10}
                ]
            },{
                type: "Back", name: "Smith Stiff-Legged Deadlifts",
                sets: [
                    {weight: 70, reps: 10},
                    {weight: 90, reps: 10},
                    {weight: 90, reps: 10},
                    {weight: 90, reps: 10}
                ]
            },{
                type: "Back", name: "Assisted Pull-ups (3 versions)",
                sets: [
                    {weight: 45, reps: 10},
                    {weight: 45, reps: 10},
                    {weight: 45, reps: 10}
                ]
            },{
                type: "Back", name: "Fly Machine (Back)",
                sets: [
                    {weight: 80, reps: 10},
                    {weight: 80, reps: 10},
                    {weight: 80, reps: 10}
                ]
            },{
                type: "Biceps", name: "Barbell Underhand Curls",
                sets: [
                    {weight: 50, reps: 10},
                    {weight: 50, reps: 10},
                    {weight: 50, reps: 10}
                ]
            },{
                type: "Biceps", name: "Dumbbell Hammer Curls",
                sets: [
                    {weight: 25, reps: 10},
                    {weight: 25, reps: 10},
                    {weight: 25, reps: 10}
                ]
            },{
                type: "Biceps", name: "Barbell Overhand Curls",
                sets: [
                    {weight: 30, reps: 10},
                    {weight: 30, reps: 10},
                    {weight: 30, reps: 10}
                ]
            },{
                type: "Miscellanous", name: "Post-Workout Stretch",
                duration: 8
            });
        };
        // *** Routine ***
        if (routine.name === "Legs, Shoulders, and Core") {
            routine.exercises.push({
                type: "Cardio", name: "Warmup",
                duration: 7
            },{
                type: "Shoulders", name: "Seated Shoulder Press Machine",
                sets: [
                    {weight: 70, reps: 10},
                    {weight: 70, reps: 10},
                    {weight: 70, reps: 10}
                ]
            },{
                type: "Shoulders", name: "Dumbbell Side (Lateral) Raises",
                sets: [
                    {weight: 10, reps: 10},
                    {weight: 10, reps: 10},
                    {weight: 10, reps: 10}
                ]
            },{
                type: "Shoulders", name: "Dumbbell Front Raises",
                sets: [
                    {weight: 10, reps: 10},
                    {weight: 10, reps: 10},
                    {weight: 10, reps: 10}
                ]
            },{
                type: "Legs", name: "Leg Press Machine",
                sets: [
                    {weight: 160, reps: 10},
                    {weight: 160, reps: 10},
                    {weight: 160, reps: 10}
                ]
            },{
                type: "Legs", name: "Leg Curl Machine",
                sets: [
                    {weight: 75, reps: 10},
                    {weight: 75, reps: 10},
                    {weight: 75, reps: 10}
                ]
            },{
                type: "Legs", name: "Leg Extension Machine",
                sets: [
                    {weight: 75, reps: 10},
                    {weight: 75, reps: 10},
                    {weight: 75, reps: 10}
                ]
            },{
                type: "Legs", name: "Calf Extension Machine",
                sets: [
                    {weight: 160, reps: 10},
                    {weight: 160, reps: 10},
                    {weight: 160, reps: 10}
                ]
            },{
                type: "Legs", name: "Hip Abduction (Out) Machine",
                sets: [
                    {weight: 190, reps: 10},
                    {weight: 190, reps: 10},
                    {weight: 190, reps: 10}
                ]
            },{
                type: "Legs", name: "Hip Adduction (In) Machine",
                sets: [
                    {weight: 150, reps: 10},
                    {weight: 150, reps: 10},
                    {weight: 150, reps: 10}
                ]
            },{
                type: "Legs", name: "Standing Glute Press Machine",
                sets: [
                    {weight: 110, reps: 10},
                    {weight: 110, reps: 10},
                    {weight: 110, reps: 10}
                ]
            },{
                type: "Core", name: "Abdominal Crunch Machine",
                sets: [
                    {weight: 35, reps: 25},
                    {weight: 35, reps: 25},
                    {weight: 35, reps: 25},
                    {weight: 35, reps: 25}
                ]
            },{
                type: "Core", name: "Barbell Standing Core Twist",
                sets: [
                    {weight: 50, reps: 50},
                    {weight: 50, reps: 50}
                ]
            },{
                type: "Core", name: "Dumbbell Oblique Side Bend",
                sets: [
                    {weight: 45, reps: 25},
                    {weight: 45, reps: 25},
                    {weight: 45, reps: 25},
                    {weight: 45, reps: 25}
                ]
            },{
                type: "Miscellanous", name: "Post-Workout Stretch",
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
        bodyFat: null,
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

// ...
endWorkoutTimer(startTime, workout);
