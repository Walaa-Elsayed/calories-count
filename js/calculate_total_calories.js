



let total_calories = 0; // this variable will use to count the total calories
let display_output = document.getElementById('display_total_calories'); // this variable will use to display the total calories in the footer


let str = []; // We will use this function to store name of food items added  
let i = 0;  // this variable will use in for loop 
let output_str = ""; // this variable will use to diplay output message in output_display() Function


str.length = 0; // Make sure string str empty


// let cal_display = document.getElementById("display_total_calories");



if (window.localStorage) {

    // Add Fruit calories values and number of each fruit added to count the total of calories
    localStorage.setItem('total_cal', 0);

    localStorage.setItem('apple', 44); // add 44 calories for apple in local storage 
    localStorage.setItem('orange', 40); // add 40 calories for orange in local storage 
    localStorage.setItem('banana', 107);
    localStorage.setItem('mango', 40);
    localStorage.setItem('strawberry', 2.5);
    localStorage.setItem('pear', 45);

    localStorage.setItem('tomato', 30);
    localStorage.setItem('aubergine', 40);
    localStorage.setItem('carrot', 14);
    localStorage.setItem('avocado', 150);
    localStorage.setItem('pepper', 6);
    localStorage.setItem('cucumber', 3);

    localStorage.setItem('item_selected', []);


    localStorage.setItem('apple_no', 0); // to describe how many apple added
    localStorage.setItem('orange_no', 0); // to describe how many orange added
    localStorage.setItem('banana_no', 0);
    localStorage.setItem('mango_no', 0);
    localStorage.setItem('strawberry_no', 0);
    localStorage.setItem('pear_no', 0);

    localStorage.setItem('tomato_no', 0); // to describe how many tomatoes added
    localStorage.setItem('aubergine_no', 0); // to describe how many aubergines added






} else {
    window.alert('Local storage not supported.');
}




// This function to clear the values of total calories

function clear_calories_value() {

    total_calories = 0; // to clear the total value 
    output_str = ""; // to clear the output display in added multiple value page 
    localStorage.setItem('total_cal', 0); // to clear the value that add in local storage 

    document.getElementById("demo1").innerHTML = output_str;
    document.getElementById("demo2").innerHTML = "Total Calories : " + total_calories; // to clear all the values in the page of adding multiple food items

    display_output.innerHTML = total_calories; // display empty value in the calories count in footer


}


/// Add fruits calories function

function apple_add_cal() {


    let apple_cal = document.getElementById('apple_cal').innerHTML; // Get the calories value from the html page 

    total_calories = total_calories + Number(apple_cal); // Calculate the total calories value 

    display_output.innerHTML = total_calories; // Display the total calories in the " calories count " at the footer

}

function orange_add_cal() {


    let orange_cal = document.getElementById('orange_cal').innerHTML; // Get the calories value from the html page

    total_calories = total_calories + Number(orange_cal); // Calculate the total calories value 

    display_output.innerHTML = total_calories; // Display the total calories in the " calories count " at the footer

}

function grapes_add_cal() {


    let grapes_cal = document.getElementById('grapes_cal').innerHTML; // Get the calories value from the html page

    total_calories = total_calories + Number(grapes_cal); // Calculate the total calories value 

    display_output.innerHTML = total_calories; // Display the total calories in the " calories count " at the footer

}

function pear_add_cal() {


    let pear_cal = document.getElementById('pear_cal').innerHTML; // Get the calories value from the html page

    total_calories = total_calories + Number(pear_cal); // Calculate the total calories value 

    display_output.innerHTML = total_calories; // Display the total calories in the " calories count " at the footer

}


function mango_add_cal() {


    let mango_cal = document.getElementById('mango_cal').innerHTML; // Get the calories value from the html page

    total_calories = total_calories + Number(mango_cal); // Calculate the total calories value 

    display_output.innerHTML = total_calories; // Display the total calories in the " calories count " at the footer

}


function strawberry_add_cal() {


    let strawberry_cal = document.getElementById('strawberry_cal').innerHTML;

    total_calories = total_calories + Number(strawberry_cal); // Calculate the total calories value 

    display_output.innerHTML = total_calories; // Display the total calories in the " calories count " at the footer

}




/// Add Vegetables calories function

function tomato_add_cal() {

    // alert('tomato');

    let tomato_cal = document.getElementById('tomato_cal').innerHTML; // Get the calories value from the html page

    total_calories = total_calories + Number(tomato_cal); // Calculate the total calories value 

    display_output.innerHTML = total_calories; // Display the total calories in the " calories count " at the footer

}



function aubergine_add_cal() {

    // alert('aubergine');

    let aubergine_cal = document.getElementById('aubergine_cal').innerHTML; // Get the calories value from the html page

    total_calories = total_calories + Number(aubergine_cal); // Calculate the total calories value 

    display_output.innerHTML = total_calories; // Display the total calories in the " calories count " at the footer

}

function carrot_add_cal() {

    // alert('carrot');

    let carrot_cal = document.getElementById('carrot_cal').innerHTML; // Get the calories value from the html page

    total_calories = total_calories + Number(carrot_cal); // Calculate the total calories value 

    display_output.innerHTML = total_calories; // Display the total calories in the " calories count " at the footer

}

function cucumber_add_cal() {

    // alert('cucumber');

    let cucumber_cal = document.getElementById('cucumber_cal').innerHTML; // Get the calories value from the html page

    total_calories = total_calories + Number(cucumber_cal); // Calculate the total calories value 

    display_output.innerHTML = total_calories; // Display the total calories in the " calories count " at the footer

}


function pepper_add_cal() {

    // alert('pepper');

    let pepper_cal = document.getElementById('pepper_cal').innerHTML;

    total_calories = total_calories + Number(pepper_cal);

    display_output.innerHTML = total_calories;

}


function avocado_add_cal() {

    // alert('avocado');

    let avocado_cal = document.getElementById('avocado_cal').innerHTML;

    total_calories = total_calories + Number(avocado_cal);

    display_output.innerHTML = total_calories;

}

function wholemeal_bread_add_cal() {

    // alert('wholemeal_bread');

    let wholemeal_bread_cal = document.getElementById('wholemeal_bread_cal').innerHTML;

    total_calories = total_calories + Number(wholemeal_bread_cal);

    display_output.innerHTML = total_calories;

}

function white_bread_add_cal() {

    // alert('white_bread');

    let white_bread_cal = document.getElementById('white_bread_cal').innerHTML;

    total_calories = total_calories + Number(white_bread_cal);

    display_output.innerHTML = total_calories;

}

function spaghetti_cal() {

    // alert('spaghetti');

    let spaghetti_cal = document.getElementById('spaghetti_cal').innerHTML;

    total_calories = total_calories + Number(spaghetti_cal);

    display_output.innerHTML = total_calories;

}


function digestive_biscuit_cal() {

    // alert('digestive_biscuit');

    let digestive_biscuit_cal = document.getElementById('digestive_biscuit_cal').innerHTML;

    total_calories = total_calories + Number(digestive_biscuit_cal);

    display_output.innerHTML = total_calories;

}

function potato_add_cal() {

    // alert('potato');

    let potato_cal = document.getElementById('potato_cal').innerHTML;

    total_calories = total_calories + Number(potato_cal);

    display_output.innerHTML = total_calories;

}

function rice_add_cal() {

    // alert('rice');
    let rice_cal = document.getElementById('rice_cal').innerHTML;

    total_calories = total_calories + Number(rice_cal);

    display_output.innerHTML = total_calories;

}

function chicken_add_cal() {

    // alert('chicken');
    let chicken_cal = document.getElementById('chicken_cal').innerHTML;

    total_calories = total_calories + Number(chicken_cal);

    display_output.innerHTML = total_calories;

}

function beef_add_cal() {

    // alert('beef');
    let beef_cal = document.getElementById('beef_cal').innerHTML;

    total_calories = total_calories + Number(beef_cal);

    display_output.innerHTML = total_calories;

}

function burger_add_cal() {

    // alert('burger');
    let burger_cal = document.getElementById('burger_cal').innerHTML;

    total_calories = total_calories + Number(burger_cal);

    display_output.innerHTML = total_calories;

}


function prawn_add_cal() {

    // alert('prawn');
    let prawn_cal = document.getElementById('prawn_cal').innerHTML;

    total_calories = total_calories + Number(prawn_cal);

    display_output.innerHTML = total_calories;

}

function lamb_add_cal() {

    // alert('lamb');
    let lamb_cal = document.getElementById('lamb_cal').innerHTML;

    total_calories = total_calories + Number(lamb_cal);

    display_output.innerHTML = total_calories;

}

function codFish_add_cal() {

    // alert('codFish');
    let codFish_cal = document.getElementById('codFish_cal').innerHTML;

    total_calories = total_calories + Number(codFish_cal);

    display_output.innerHTML = total_calories;

}


// these how to call the function when click on add buttons 
// they used to calculate the total calories and display on the footer section
document.getElementById('add_apple').addEventListener('click', apple_add_cal);
document.getElementById('add_orange').addEventListener('click', orange_add_cal);
document.getElementById('add_grapes').addEventListener('click', grapes_add_cal);
document.getElementById('add_pear').addEventListener('click', pear_add_cal);
document.getElementById('add_mango').addEventListener('click', mango_add_cal);
document.getElementById('add_strawberry').addEventListener('click', strawberry_add_cal);

document.getElementById('add_tomato').addEventListener('click', tomato_add_cal);
document.getElementById('add_aubergine').addEventListener('click', aubergine_add_cal);
document.getElementById('add_carrot').addEventListener('click', carrot_add_cal);
document.getElementById('add_cucumber').addEventListener('click', cucumber_add_cal);
document.getElementById('add_pepper').addEventListener('click', pepper_add_cal);
document.getElementById('add_avocado').addEventListener('click', avocado_add_cal);

document.getElementById('add_wholemeal_bread').addEventListener('click', wholemeal_bread_add_cal);
document.getElementById('add_white_bread').addEventListener('click', white_bread_add_cal);
document.getElementById('add_spaghetti').addEventListener('click', spaghetti_cal);
document.getElementById('add_digestive_biscuit').addEventListener('click', digestive_biscuit_cal);
document.getElementById('add_potato').addEventListener('click', potato_add_cal);
document.getElementById('add_rice').addEventListener('click', rice_add_cal);

document.getElementById('add_chicken').addEventListener('click', chicken_add_cal);
document.getElementById('add_beef').addEventListener('click', beef_add_cal);
document.getElementById('add_burger').addEventListener('click', burger_add_cal);
document.getElementById('add_prawn').addEventListener('click', prawn_add_cal);
document.getElementById('add_lamb').addEventListener('click', lamb_add_cal);
document.getElementById('add_codFish').addEventListener('click', codFish_add_cal);

// this to call clear all values when click on " clear all " button in the footer section
document.getElementById('clear_value').addEventListener('click', clear_calories_value);



// These functions used to calculate the calories of multiple food items in the same page 

// This function used to add apple calories value that saved in localstorage 

function calculate_calories_apple() {


    // first we get how many apple we added in local storage 
    // add one more apple in the localstorage
    let apples_number = parseInt(localStorage.getItem('apple_no'));
    apples_number = apples_number + 1;

    localStorage.setItem('apple_no', apples_number);

    // Set item in array list to display it 
    if (str.includes('apple') == false) {
        str.push('apple');
    }


    // set the total calories 

    let apple_calories = Number(localStorage.getItem('apple'));


    // calculate the total calories
    total_calories = apple_calories + total_calories;

    localStorage.setItem('total_cal', total_calories);

    // display the total value in the footer
    display_output.innerHTML = total_calories;

    // this function to display the food items added and the total calories in the same page
    output_display();



}


// This function used to remove apple calories 

function delete_calories_apple() {

   
    // set number of apples added 
    let apples_number = parseInt(localStorage.getItem('apple_no'));
    if (apples_number > 0) { /// we will remove apple value only if we added apple before 

       
        apples_number = apples_number - 1;
        localStorage.setItem('apple_no', apples_number);

        // change the total calories value
        // get the apple calories value from the localstorage to remove it from the total 

        let apple_calories = Number(localStorage.getItem('apple'));

        total_calories = total_calories - apple_calories;


        // Display the total value 
        display_output.innerHTML = total_calories;

        localStorage.setItem('total_cal', total_calories);


    } else {
        alert(" Sorry you didn't add any apple ! ");
    }

    if (apples_number == 0) {
        str.pop('apple');
    }

    output_display(); // this function to update the display output after remove  one apple 


}


// Orange function


function calculate_calories_orange() {

    // first we get how many orange we added in local storage 
    // add one more orange in the localstorage
    let orange_number = parseInt(localStorage.getItem('orange_no'));
    orange_number = orange_number + 1;

    localStorage.setItem('orange_no', orange_number);

    // Set item in array list
    if (str.includes('orange') == false) {
        str.push('orange');
    }






    // set the total calories 

    let orange_calories = Number(localStorage.getItem('orange')); // get the orange calories value from local storage


    total_calories = orange_calories + total_calories; // calculate the total calories 

    localStorage.setItem('total_cal', total_calories);
     
    // display the total calories in the footer section
    display_output.innerHTML = total_calories;




    output_display(); // this function to display the food items added and the total calories in the same page

}


// This function used to remove orange calories 

function delete_calories_orange() {

    let orange_number = parseInt(localStorage.getItem('orange_no'));
    if (orange_number > 0) {

        orange_number = orange_number - 1; // remove one orange value if we have orange already in the localstorage 
        localStorage.setItem('orange_no', orange_number); // set new values after remove one orange in localstorage 

        // change the total calories value
        let orange_calories = Number(localStorage.getItem('orange')); // get the orange calories value from localstorage  

        total_calories = total_calories - orange_calories; // set the total value after remove one orange

        localStorage.setItem('total_cal', total_calories);
        
        // display the values on the footer section
        display_output.innerHTML = total_calories;

        

    } else {
        alert(" Sorry you didn't add any Orange ! ");
    }

    if (orange_number == 0) {
        str.pop('orange');  // remove the 'orange' from str if there are no more orange 
    }

    // display the update of the output in the same html page 
    output_display();

}



// Banana function


function calculate_calories_banana() {
    // set number of banana added 
    let banana_number = parseInt(localStorage.getItem('banana_no'));
    banana_number = banana_number + 1;

    localStorage.setItem('banana_no', banana_number);


    // set the total calories 

    let banana_calories = Number(localStorage.getItem('banana'));

    total_calories = total_calories + banana_calories;

    localStorage.setItem('total_cal', total_calories);

    display_output.innerHTML = total_calories;



    if (str.includes('banana') == false) {
        str.push('banana');
    }

    output_display();

}



// This function used to remove banana calories 

function delete_calories_banana() {

    // set number of banana after removed one item

    let banana_number = parseInt(localStorage.getItem('banana_no'));
    if (banana_number > 0) {
        banana_number = banana_number - 1;
        localStorage.setItem('banana_no', banana_number);

        // change the total calories value after removed one item
        let banana_calories = Number(localStorage.getItem('banana'));


        total_calories = total_calories - banana_calories;

        localStorage.setItem('total_cal', total_calories);

        display_output.innerHTML = total_calories;

       

    } else {
        alert(" Sorry you didn't add any Banana ! ");
    }

    if (banana_number == 0) {
        str.pop('banana');
    }
    output_display();

}

// Mango function


function calculate_calories_mango() {
    // set number of mango added 
    let mango_number = parseInt(localStorage.getItem('mango_no'));
    mango_number = mango_number + 1;

    localStorage.setItem('mango_no', mango_number);


    // set the total calories 

    let mango_calories = Number(localStorage.getItem('mango'));

    total_calories = total_calories + mango_calories;

    localStorage.setItem('total_cal', total_calories);

    display_output.innerHTML = total_calories;


   

    if (str.includes('mango') == false) {
        str.push('mango');
    }

    output_display();

}




// This function used to remove mango calories 

function delete_calories_mango() {

    // set number of mango after removed one item

    let mango_number = parseInt(localStorage.getItem('mango_no'));
    if (mango_number > 0) {
        mango_number = mango_number - 1;
        localStorage.setItem('mango_no', mango_number);

        // change the total calories value after removed one item
        let mango_calories = Number(localStorage.getItem('mango'));


        total_calories = total_calories - mango_calories;

        localStorage.setItem('total_cal', total_calories);

        display_output.innerHTML = total_calories;

       
    } else {
        alert(" Sorry you didn't add any Mango ! ");
    }

    if (mango_number == 0) {
        str.pop('mango');
    }
    output_display();

}
// Pear function


function calculate_calories_pear() {
    // set number of pear added 
    let pear_number = parseInt(localStorage.getItem('pear_no'));
    pear_number = pear_number + 1;

    localStorage.setItem('pear_no', pear_number);


    // set the total calories 

    let pear_calories = Number(localStorage.getItem('pear'));

    total_calories = total_calories + pear_calories;

    localStorage.setItem('total_cal', total_calories);

    display_output.innerHTML = total_calories;

   

    if (str.includes('pear') == false) {
        str.push('pear');
    }

    output_display();

}


// This function used to remove pear calories 

function delete_calories_pear() {

    // set number of banana after removed one item

    let pear_number = parseInt(localStorage.getItem('pear_no'));
    if (pear_number > 0) {
        pear_number = pear_number - 1;
        localStorage.setItem('pear_no', pear_number);

        // change the total calories value after removed one item
        let pear_calories = Number(localStorage.getItem('pear'));

        total_calories = total_calories - pear_calories;

        localStorage.setItem('total_cal', total_calories);

        display_output.innerHTML = total_calories;

        

    } else {
        alert(" Sorry you didn't add any Pear ! ");
    }

    if (pear_number == 0) {
        str.pop('pear');
    }
    output_display();
}



// strawberry function


function calculate_calories_strawberry() {
    // set number of strawberry added 
    let strawberry_number = parseInt(localStorage.getItem('strawberry_no'));
    strawberry_number = strawberry_number + 1;

    localStorage.setItem('strawberry_no', strawberry_number);


    // set the total calories 

    let strawberry_calories = Number(localStorage.getItem('strawberry'));

    total_calories = total_calories + strawberry_calories;

    localStorage.setItem('total_cal', total_calories);

    display_output.innerHTML = total_calories;


   

    if (str.includes('strawberry') == false) {
        str.push('strawberry');
    }

    output_display();

}


// This function used to remove strawberry calories 

function delete_calories_strawberry() {

    // set number of strawberry after removed one item

    let strawberry_number = parseInt(localStorage.getItem('strawberry_no'));
    if (strawberry_number > 0) {
        strawberry_number = strawberry_number - 1;
        localStorage.setItem('strawberry_no', strawberry_number);

        // change the total calories value after removed one item
        let strawberry_calories = Number(localStorage.getItem('strawberry'));

        total_calories = total_calories - strawberry_calories;

        localStorage.setItem('total_cal', total_calories);

        display_output.innerHTML = total_calories;

      

    } else {
        alert(" Sorry you didn't add any Strawberry ! ");
    }

    if (strawberry_number == 0) {
        str.pop('strawberry');
    }

    output_display();
}


// Aubergine function


function calculate_calories_aubergine() {


    // set number of aubergine added 
    let aubergine_number = parseInt(localStorage.getItem('aubergine_no'));
    aubergine_number = aubergine_number + 1;

    localStorage.setItem('aubergine_no', aubergine_number);

    // Set item in array list
    if (str.includes('aubergine') == false) {
        str.push('aubergine');
    }



    // set the total calories 

    let aubergine_calories = Number(localStorage.getItem('aubergine'));

    total_calories = total_calories + aubergine_calories;

    localStorage.setItem('total_cal', total_calories);

    display_output.innerHTML = total_calories;


  

    output_display();

}


// This function used to remove aubergine calories 

function delete_calories_aubergine() {

    let aubergine_number = parseInt(localStorage.getItem('aubergine_no'));
    if (aubergine_number > 0) {

        // Get the calories value of the item
        let aubergine_calories = Number(localStorage.getItem('aubergine'));

        aubergine_number = aubergine_number - 1;
        localStorage.setItem('aubergine_no', aubergine_number);

        // change the total calories value

        total_calories = total_calories - aubergine_calories;

        localStorage.setItem('total_cal', total_calories);

        display_output.innerHTML = total_calories;

        // alert(" You have removed one aubergine  ");

        // alert(" Total Calories : " + localStorage.getItem('total_cal'));

    } else {
        alert(" Sorry you didn't add any aubergine ! ");
    }

    if (aubergine_number == 0) {
        str.pop('aubergine');
    }

    output_display();

}



function calculate_calories_tomato() {



    // set number of tomatoes added 
    let tomato_number = parseInt(localStorage.getItem('tomato_no'));
    tomato_number = tomato_number + 1;

    localStorage.setItem('tomato_no', tomato_number);

    // Set item in array list
    if (str.includes('tomato') == false) {
        str.push('tomato');
    }




    // set the total calories 

    let tomato_calories = Number(localStorage.getItem('tomato'));

    total_calories = total_calories + tomato_calories;

    localStorage.setItem('total_cal', total_calories);

    display_output.innerHTML = total_calories;


    

    output_display();



}



// This function used to remove tomato calories 

function delete_calories_tomato() {

    let tomato_number = parseInt(localStorage.getItem('tomato_no'));
    if (tomato_number > 0) {

        tomato_number = tomato_number - 1;

        localStorage.setItem('tomato_no', tomato_number);

        // change the total calories value
        let tomato_calories = Number(localStorage.getItem('tomato'));

        total_calories = total_calories - tomato_calories;

        localStorage.setItem('total_cal', total_calories);

        display_output.innerHTML = total_calories;

      

    } else {
        alert(" Sorry you didn't add any tomato ! ");
    }

    if (tomato_number == 0) {
        str.pop('tomato');
    }

    output_display();

}




function output_display() {

// We used "for" loop to get the "food items" added in "str"  string 
// Then we used those to get the numbers of each food item added in localstorage
// Then we display the total calories value stored in localstorage


    for (i = 0; i < str.length; i++) {
        if (str[i] != null) {
            item_name = str[i]; // get the food item name
            item_v = str[i] + '_no'; // add _no to string to use it to get the numbers of each of food item added like : apple_no = 3 , orange_no = 1


            output_str = output_str + '</br>' + localStorage.getItem(item_v) + ' x ' + item_name + '</br>';
        }

    }


    document.getElementById("demo1").innerHTML = output_str; // display numbers of each food item like : 3 X apple , 1 X  orange
    document.getElementById("demo2").innerHTML = "Total Calories : " + localStorage.getItem('total_cal'); // display the total calories saved

    output_str = []; // empty all the output string to use it again in display without repeat what we displayed before 

}



// these call function for Add and Delete Fruit items

window.document.getElementById("apple_add_btn").addEventListener("click", calculate_calories_apple);
window.document.getElementById("orange_add_btn").addEventListener("click", calculate_calories_orange);
window.document.getElementById("banana_add_btn").addEventListener("click", calculate_calories_banana);
window.document.getElementById("mango_add_btn").addEventListener("click", calculate_calories_mango);
window.document.getElementById("Pear_add_btn").addEventListener("click", calculate_calories_pear);
window.document.getElementById("strawberry_add_btn").addEventListener("click", calculate_calories_strawberry);
window.document.getElementById("tomato_add_btn").addEventListener("click", calculate_calories_tomato);
window.document.getElementById("aubergine_add_btn").addEventListener("click", calculate_calories_aubergine);


window.document.getElementById("apple_delete_btn").addEventListener("click", delete_calories_apple);
window.document.getElementById("orange_delete_btn").addEventListener("click", delete_calories_orange);
window.document.getElementById("banana_delete_btn").addEventListener("click", delete_calories_banana);
window.document.getElementById("mango_delete_btn").addEventListener("click", delete_calories_mango);
window.document.getElementById("Pear_delete_btn").addEventListener("click", delete_calories_pear);
window.document.getElementById("strawberry_delete_btn").addEventListener("click", delete_calories_strawberry);
window.document.getElementById("tomato_delete_btn").addEventListener("click", delete_calories_tomato);
window.document.getElementById("aubergine_delete_btn").addEventListener("click", delete_calories_aubergine);