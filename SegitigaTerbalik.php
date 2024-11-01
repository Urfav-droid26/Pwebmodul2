<?php
$n = 5; // Number of rows

for ($i = $n; $i >= 1; $i--) {
    // Printing spaces
    for ($j = $n; $j > $i; $j--) {
        echo "&nbsp;&nbsp;";
    }

    // Printing stars
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "#";
    }

    // Move to the next line
    echo "<br>";
}
?>