module objects
{
    export class Island extends GameObject{
        private _verticalSpeed: number;


        constructor(){
            super(config.Game.ASSETS.getResult("island"),new Vector2(),true)
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
            this._verticalSpeed = 5; // 5 px per frame
            this.velocity = new Vector2(0, this._verticalSpeed);
            this.Reset();
        }
        
        public Update(): void 
        {
            this._move();
            this._checkBounds();
        }
        public Reset(): void {
            this.position = new Vector2(0, -960);
        }


    }
}