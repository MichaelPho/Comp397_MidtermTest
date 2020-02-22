





module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
 
        private background: createjs.Bitmap;

//start with 2 dice and 2 Label
private result1: objects.Label;
private result2: objects.Label;
private dice1:objects.Button;
private dice2:objects.Button;

//start with 2 button
private roll:objects.Button;
private expand:objects.Button;
        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {  
            this.background= new createjs.Bitmap(config.Game.ASSETS.getResult("background"));
            this.addChild(this.background);
            //label section
            this.result1= new objects.Label("blank","12px","Consolas","#000000",200,300,true);
            this.result2= new objects.Label("blank","12px","Consolas","#000000",430,300,true);
            //dice and roll button
             this.roll= new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
             this.dice1= new objects.Button(config.Game.ASSETS.getResult("diceBlank"),200,200,true);
             
            this.dice2= new objects.Button(config.Game.ASSETS.getResult("diceBlank"),430,200,true);
//          this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 430, true);
            
            
             this.Main();
        }        
        
        public Update(): void 
        {
            
        }
        
        public Main(): void 
        {
              //background 1400x790
        
       // Button and number result section
      this.addChild(this.roll);
        this.addChild(this.result1);
        this.addChild(this.result2);

        //dice section
        this.addChild(this.dice1);
       this.addChild(this.dice2);
      
    
       this.roll.on("click", () =>{
        let outCome =[1,1];
        
         for (let spin = 0; spin < 300; spin++) {
        for (let spin = 0; spin < 2; spin++) {
            let result = Math.floor((Math.random() * 6) + 1);

            
            switch (result) {
                case 1:  
                   outCome[spin]=1;
                    break;
                case 2: 
                    outCome[spin]=2;
                    break;
                case 3: 
                outCome[spin]=3;
                    break;
                case 4: 
                outCome[spin]=4;
                case 5: 
                outCome[spin]=5;
                case 6: 
                outCome[spin]=6;
                }}
            }
            
                this.result1.setText(outCome[0].toString());
                this.removeChild(this.dice1);
                this.dice1= new objects.Button(config.Game.ASSETS.getResult("dice"+outCome[0].toString()),200,200,true);
                this.addChild(this.dice1);
       
                this.result2.setText(outCome[1].toString());
                this.removeChild(this.dice2);
                this.dice2= new objects.Button(config.Game.ASSETS.getResult("dice"+outCome[1].toString()),430,200,true);
                this.addChild(this.dice2);
       }
    );
        
        //function
        


    }
    }
}