function appendValue(value) {
    const result = document.getElementById('result');
    const lastChar = result.value.slice(-1);
    
    // Daftar operator yang diperbolehkan
    const operators = ['+', '-', '*', '/', '%', '**'];

    // Cek jika input adalah operator dan karakter terakhir juga operator
    if (operators.includes(lastChar) && operators.includes(value)) {
        // Gantikan operator sebelumnya dengan yang baru
        result.value = result.value.slice(0, -1) + value;
    } else if (value === '^') {
        // Untuk pangkat menggunakan '**'
        result.value += '**';
    } else {
        result.value += value;
    }
}
