export default {
	error: "",
    loader: "", 
    

    auth:{
        token: "",
        login: "",
        email: "",
	},
	
    user:{
        avatar:"",
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
		registerData:"",
	},

     quizInfo:{
       smokeYears: 0,
       cigarettePerDay: 0,
       cigarettePerTime: 0,
	   cigarettePackPrice: 0,
	},
	
    dayInfo:{
       cigaretteQuantity:0,
    },

    habits:[{
        createAt: "2020-09-01T01:07:23.330Z",
        data: [null, null, null ],
        planningTime: 0,
        efficiency : 0,
        id: "5f4d9edf6375b430bda8ce92",
        name: "My Habit",
        iteration:"//everyday,", //everyday, onceADay, onceInTwoDays, MonWedFri,TueThuSat,
	  },
	  
      {}
    ],
}

/*  dev: git checkout -b SBC-03;

SBC-03: git add .
        git commit -m "..."
        git push

        git pull origin dev

if(conflicts) {
    решаем конфликты
    git add .
    git commit -m "..."
    git push
} 

await pull request

SBC-03: git checkout dev

dev: git pull origin dev;

заново  */


