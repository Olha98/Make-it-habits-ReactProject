const state = {
    auth: {
        access_token: '',
    },
    user: {
        firstName: "",
        lastName: "",
        email: "",
        registerData: "",
        avatar: "",
        phone: "",
        cards: [
            // {number: '', timeExpiration: ''},
        ],
        payments: [
            // {date, amount}
        ]
    },
    
    habits: {
        allHabits: [],
        currentHabits: [],
        doneHabits: [],
    },

    quize_info: {
        smokeYears: 0,
        cigarettePerDay: 0,
        cigarettePerTime: 0,
        cigarettePackPrice: 0
    },

    cigarettesInfo: {
        data: [],
        startedAt: ''
    },

    subscriptions: [
        // {type: '', dateStart: '', dateCancel: ''}
    ],
    
    error: "",
    loader: false,

}

// state.habits.filter(habit=> {
    
// })



// function chhoseData(habit){
//     switch (key) {
//         case "everyDays":
//             return getOnceOfTwoDays(habit)
//         default:
//             break;
//     }
// }
// function getOnceOfTwoDays{
//     const currentDay = Date.now();
//     const resultArray = [];
//     const staticTime = 57365276434;
//     for (let i = 0; i < 21; i += 1) {
//         resultArray.push(i);
//         i += staticTime * 2
//     } 
// }


// function getfgyusdgdf()
// {const currentHabits = habits.filter(habit=> {
//     const dateNow = Date.now();
//     const weekDay = dateNow.getDay();
//     const data = habits.planingTime.split(" ")//
//     if (habit.planningTime.includes(weekDay){
//     })

// })}