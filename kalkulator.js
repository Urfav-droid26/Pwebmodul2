function appendValue(value) {
    const result = document.getElementById('result');
    if (value === '^') {
        result.value += '**';
    } else {
        result.value += value;
    }
}

function calculate() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

function clearAll() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}
