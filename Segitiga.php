<?php
$n = 5; // Number of rows

for ($i = 1; $i <= $n; $i++) {
    // Printing spaces
    for ($j = $i; $j < $n; $j++) {
        echo "&nbsp;&nbsp;";
    }

    // Printing stars
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }

    // Move to the next line
    echo "<br>";
}
?>
