

    function displayData() {
        var fName = document.getElementById("fname").value
        document.getElementById("DisplayFname").innerHTML = "Firstname :" + fName

        var stream = document.getElementById("stream").value
        document.getElementById("stream-name").innerHTML = "Stream :" + stream

        var scie=document.getElementById("SciMarks").value
        document.getElementById("DisplaysMarks").innerHTML="firstvalue :"+scie

        
        var phy=document.getElementById("Physicsmarks").value
        document.getElementById("Displayphy").innerHTML="secondvalue :"+phy

        
        var che=document.getElementById("Chemistrymarks").value
        document.getElementById("diva").innerHTML="3rdvalue :"+che

        
        var maths=document.getElementById("Mathsmarks").value
        document.getElementById("Rutu").innerHTML="4rdvalue :"+maths
        
        
        var Bio=document.getElementById("Biologymarks").value
        document.getElementById("Run").innerHTML="5thdvalue :"+Bio

                
        var zoo=document.getElementById("zoologymarks").value
        document.getElementById("Ram").innerHTML="6thdvalue :"+zoo

        var total=scie+phy+che+maths+Bio+zoo

       var totalgreads = parseFloat(scie)+ parseFloat(phy)+parseFloat(che)+parseFloat(maths)+ parseFloat(Bio)+parseFloat(zoo);
       return totalgreads;
       
       alert(total);
       

    }

    function calcy() {
        
        let total=displayData()
        document.getElementById("total-marks").innerHTML="Your total is: "+total;
        let percentage = (total/600)*100
        alert(percentage);
       document.getElementById("data3").innerHTML="Your Total percentage are"+percentage;
        

       if (percentage>75){
           document.getElementById("grade").innerHTML=" Your Grade is : A+"
       }
       else if(percentage>=60 && percentage<=75){
        document.getElementById("grade").innerHTML=" Your Grade is :A"
       }
       else if(percentage>=50 && percentage<60){
        document.getElementById("grade").innerHTML=" Your Grade :B"
       }
       else if(percentage>=40 && percentage<50){
        document.getElementById("grade").innerHTML=" Your Grade :C"
       }
       else{
        document.getElementById("grade").innerHTML=" Your Grade :D"
       }
        
    }
