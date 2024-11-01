<?php
include "controllers/ProductController.php";

use controller\ProductController;

header('Content-Type: application/json');

$productController = new ProductController();

// Memastikan output JSON rapi
echo json_encode($productController->getAllProduct(), JSON_PRETTY_PRINT);