function calculate()
            {
                    var first = parseInt(document.getElementById("first").value);
                    var second = parseInt(document.getElementById("second").value);
                    var third = parseInt(document.getElementById("third").value);
                    var four = parseInt(document.getElementById("four").value);
                    var five = parseInt(document.getElementById("five").value);
                    var six = parseInt(document.getElementById("six").value);
                    var seven = parseInt(document.getElementById("seven").value);
                    var eight = parseInt(document.getElementById("eight").value);
                    var Total = (first+second+third+four+five+six+seven+eight)/8;
                   document.getElementById("Total").innerHTML ="Total CGPA =  "+ Total;
                   console.log( document.getElementById("Total"))
                   
            }
function reset()
{
    document.getElementById("first").innerHTML ="";
    document.getElementById("second").innerHTML ="";
    document.getElementById("three").innerHTML ="";
    document.getElementById("four").innerHTML ="";
    document.getElementById("five").innerHTML ="";

    document.getElementById("six").innerHTML ="";
    document.getElementById("seven").innerHTML ="";

    document.getElementById("eight").innerHTML ="";

    document.getElementById("Total").innerHTML ="Total CGPA="
}            
