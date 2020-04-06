module objects
{
    export class Cloud extends GameObject{
        private _verticalSpeed: number;
private _horizonSpeed : number;

        constructor(){
            super(config.Game.ASSETS.getResult("Cloud"),new Vector2(),true)
            this.Start();
        }


        private _move():void
        {
            this.position = Vector2.add(this.position, this.velocity);
        }

        protected _checkBounds(): void {
            if(this.position.y > config.Game.SCREEN_HEIGHT + this.height)
            {
                this.Reset
            }
        }        
              
        // PUBLIC METHODS
        public Start(): void 
        {
            this.alpha=0.5 // set transparency to 50$
            // this._verticalSpeed = 2; // 2 px per frame
            // this.velocity = new Vector2(0, this._verticalSpeed);
           
            this.Reset();
        }
        
        public Update(): void 
        {
            this._move();
            this._checkBounds();
        }
        public Reset(): void {
            this._verticalSpeed = util.Mathf.RandomRange(5,10); // 2 px per frame
            this._horizonSpeed = util.Mathf.RandomRange(-2,2);
            this.velocity = new Vector2(this._horizonSpeed, this._verticalSpeed);
            let randomX = util.Mathf.RandomRange(this.halfWidth,config.Game.SCREEN_WIDTH - this.halfWidth);
            let randomY = util.Mathf.RandomRange(-this.height*2,-this.height)
            this.position = new Vector2(randomX, randomY);
        }


    }
}