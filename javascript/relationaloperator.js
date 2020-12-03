 // when the code is written in script tag within body or head tag it is called as embeded javascript
        //Data type is considered only by strict equality operator

        // Equality operator ==
        // equality operator compares only values
        var a = 5;
        var b = 7;
        var c = "5";
        console.log(b == a);
        //console.log(c);
        console.log(c == a);
        console.log(5 == 5);

        console.log(true == 1);

        // strict equality operator
        //   It compares values as well as tye of operand
        console.log(b === a);
        console.log(c === a);
        console.log(true === 1); // value of true is 1 but its boolean variable and right side is number type.

        // not equal to !=
        // not equal to operator gives true if the values are not equal
        console.log(b != a);
        console.log(5 != a);


        //less than operator <
        console.log(b < a);

        //greater than operator >
        console.log(b > a);
        

        console.log(a <= b);
        console.log(a < c);
        console.log(a <= c);

        //greater than equal to >=
        //less than equal to <=
        console.log(5 < 5);
        console.log(5 > 5);
        console.log(5 <= 5);
        console.log(5 >= 55); //first it checks greater than comparison then equal to
