<?php
// Read the raw POST data from 2Checkout
$post_data = file_get_contents('php://input');

// Decode the POST data into an associative array
$post_array = json_decode($post_data, true);

// Log the incoming data to a file
file_put_contents('ipn.log', print_r($post_array, true), FILE_APPEND);

// Send a response back to 2Checkout
http_response_code(200);
?>

