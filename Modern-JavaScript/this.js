//* ES5

// let list = {
//     category: "Tech",
//     names:["Apple","HP","Monster"],
//     call: function(){
//         let self = this;
//         this.names.map(function(name){
//             console.log(`${self.category} ${name}`)
//         }
//         )
//     }

// }

//* ES6

// let list = {
//   category: "Tech",
//   names: ["Apple", "HP", "Monster"],
//   call: function () {
//     this.names.map((name) => console.log(`${this.category} ${name}`));
//   },
// };

// list.call();


function Game(){
    this.live = 0;
    this.addLive = function(){
        let self = this ;
        // this.oneUp = setInterval(function(){
        //     console.log(++self.live);
        // }, 1000);       
        this.twoUp = setInterval(() => {
            console.log(self.live += 2)
        }, 1000);
    }
}

let player = new Game()
let player2 = new Game()

// player2.addLive();