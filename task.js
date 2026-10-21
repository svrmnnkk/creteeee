function verify() {
    console.log("a");

    let a = parseFloat(elementA.value);
    console.log(a);

    if (elementA.value.trim() === "" || isNaN(a)) {
        result = "Введите число A";
        check = false;
    }
    else {
        let x;

        if (a < 10) {
            x = a ** 4;
        }
        else if (a > 61) {
            x = a;
        }
        else {
            x = a - Math.sin(a ** 2);
        }

        result = x;
        check = true;
    }

    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    }
    else {
        alert("Сначала проверьте введённое число!");
    }
}

let result;
let check = false;

const elementA = document.getElementById("a");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener("click", verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener("click", send);