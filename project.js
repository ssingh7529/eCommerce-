<html>
    <head>
        <title>The Truth</title>
    <style>
         img{
             width:140px;

        }
        input{
            width:60px

        }

        body {
            background-color:red;
}

        h1 {
            color:whitesmoke;
            text-align: top;
        }

        p {
            font-family: verdana;
            font-size: 15px;
        }

        .button {
            padding: 15px 25px;
            font-size: 24px;
            text-align: center;
            cursor: pointer;
            outline: none;
            color: #fff;
            background-color: #4CAF50;
            border: none;
            border-radius: 15px;
            box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
        }
   
        
        </style>
     <script>

        function purchase(){
            var quantity1 = document.getElementById("quantity1")
            var quantity2 = document.getElementById("quantity2")
            var quantity3 = document.getElementById("quantity3")
            var price1 = 80.00
            var price2 = 120.00
            var price3 = 55.00
            var subtotal = (price1 * quantity1) + (price2 * quantity2) + (price3 * quantity3)
            var shipping = 0.00
            if (subtotal<=85.00)
                shipping = 10.00;
            if (subtotal>50.00 && subtotal<=200)
                shipping = 5.00;
            if (subtotal>=200)
                shipping = 0.00;
            
            var total = (subtotal.value + shipping.value) * 1.0875
            var output = document.getElementById("output")
            build += "subtotal:" + subtotal.value + "<br>";
            build += "shipping:" + shipping.value + "<br>";
            build += "---------------------------<br>";
            build += "Total: " + total;

            output.innerHTML = build;
        

    </script>
        
    <body>
        <select>
            <option value="Choose Size Below">
            <option value="XS">Extra small</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
            <option value="XXL">Extra extra Large</option>
        </select>


        <input id="subtotal" type = "text" placeholder= "Enter Subtotal">
        <button> Checkout </button>
           
        </button>
        <div id="output"></div>
            <h2>
               <font-size: 40pt>
            </h2>               
                
        <h1>The Truth</h1>
        <p>Only The Best.</p>

        </script>
    </head> 
    <body>
        <div>
            <h3> The Truth Stiched Shirt <h3>
            <img src="stitched shirt.jpg"><br>
            <span>$80.00</span>
            <p>
            Great Quality, Extreme Comfort,True to Size,AMazing Look,The Truth,
            </p>
            <input id= "quantity1" type="text"> 
            <button>Add To Bag</button>
    <input/>


     <body>
        <select>
            <option value="XS">Extra Small</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
            <option value="XXL">Extra Exra Large</option>
        </select>


        <input id="subtotal" type = "text" placeholder= "Enter Subtotal">
        

         </div>
         <div>
            <h3> The Truth Winter Sweater <h3>
            <img src="sweater.jpg"><br>
            <span>$120.00</span>
            <p>
            Great Quality,True to Size, Extreme Comfort,Puma,Extreme Warmth
            </p>
            <input id= "quantity1" type="text">

            <button>Add To Bag</button>
            <div id="invoice"></div>
    <body>
        <select>
            <option value="XS">Extra Small</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
            <option value="XXL">Extra extra Large</option>
        </select>


        <input id="subtotal" type = "text" placeholder= "Enter Subtotal">
        
        
        </div>
        <div>
            <h3> The Truth Mens Denim Jeans <h3>
            <img src="jeans.jpg"><br>
            <span>$55.00</span>
            <p>
            Great Quality,True to Size, Great fit,The Truth,
            </p>
            <input id= "quantity1" type="text">

            <button>Add To Bag</button>
            <div id="invoice"></div>
        
    <body>
        <select>
            <option value="Xs">Extra Small</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
            <option value="XXL">Extra extra Large</option>
        </select>


        <input id="subtotal" type = "text" placeholder= "Enter Subtotal">
        
        </div> 
        <div id = "output"></div>
        
        <h1>PROSPECT</h1>
        <p>Thank You For Shopping Here! Please Come Again</p>

    </script>
        
    <body>

        
        
    <body>
    
    </body>