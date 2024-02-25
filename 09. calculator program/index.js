const keys = document.getElementsByClassName("key");
const equalBtn = document.getElementById("equal-btn");
const clearBtn = document.getElementById("clear-btn");
const display = document.getElementById("display");


clearBtn.onclick = () => {
    display.textContent = "";
}

for(let i = 0; i < keys.length; i++)
    keys[i].onclick = () => {
        display.textContent += keys[i].textContent.trim();
    }

equalBtn.onclick = () => {
    if(display.textContent != "")
    {
        try {
            let result = String(eval(display.textContent));
            display.textContent = result;

        }
        catch(error) {
            console.error(error);
            display.textContent = "Error";
        }
    }
}