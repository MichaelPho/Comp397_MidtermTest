module objects
{
    export abstract class GameObject extends createjs.Bitmap
    {
        // PRIVATE INSTANCE MEMBERS
        private _width:number;
        private _height:number;
        private _halfWidth:number;
        private _halfHeight:number;
        private _position:Vector2;
        private _velocity:Vector2;
        private _isColliding:boolean;
        private _isCentered:boolean;
        
        // PUBLIC PROPERTIES
        get width():number
        {
            return this._width;
        }

        set width(newWidth:number)
        {
            this._width = newWidth;
            this._halfWidth = this._computeHalfWidth();
        }

        get height():number
        {
            return this._height;
        }

        set height(newHeight:number)
        {
            this._height = newHeight;
            this._halfHeight = this._computeHalfHeight();
        }

        get halfWidth():number
        {
            return this._halfWidth;
        }

        get halfHeight():number
        {
            return this._halfHeight;
        }

        get position():Vector2
        {
            return this._position;
        }

        set position(newPosition:Vector2)
        {
            this._position = newPosition;
            this.x = newPosition.x;
            this.y = newPosition.y;
        }

        get velocity():Vector2
        {
            return this._velocity;
        }

        set velocity(newVelocity:Vector2)
        {
            this._velocity = newVelocity;
        }

        get isColliding():boolean
        {
            return this._isColliding;
        }

        set isColliding(newState:boolean)
        {
            this._isColliding = newState;
        }

        get isCentered():boolean
        {
            return this._isCentered;
        }

        set isCentered(newState:boolean)
        {
            this._isCentered = newState;
            if(newState)
            {
                this._centerGameObject();
            }
        }

        /**
         * 
         * @param imageString  
         * @param x 
         * @param y 
         * @param centered 
         */
        // CONSTRUCTOR
        constructor(imageString:Object, x:number, y:number, centered:boolean )
        constructor(imageString:Object, position: Vector2, centered:boolean )
        constructor(first:Object= config.Game.ASSETS.getResult("placeholder"), second:Vector2| number =0  , third:  boolean| number=0, fourth: boolean=false)
        {
            super(first);

            // initialization
            this._width = 0;
            this._height = 0;
            this._halfWidth = 0;
            this._halfHeight = 0;
            this._position = new Vector2(0, 0, this);
            this._velocity = new Vector2(0, 0);
            this._isColliding = false;
            this._isCentered = false;
            
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            if(typeof third =="boolean")
            this.isCentered=third;
            
            if(fourth)
            this.isCentered = fourth;
            if(second instanceof Vector2){
                this.position = new Vector2(second.x,second.y,this)
            }
            else if(typeof third =="number")
            this.position = new Vector2(second,third, this);

        }

        // PRIVATE METHODS
        private _computeHalfWidth():number
        {
            return this.width * 0.5;
        }

        private _computeHalfHeight():number
        {
            return this.height * 0.5;
        }

        private _centerGameObject():void
        {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }

        protected abstract _checkBounds():void;


        // PUBLIC METHODS

        public abstract Start():void;

        public abstract Update():void;
        
        public abstract Reset():void;

    }

}