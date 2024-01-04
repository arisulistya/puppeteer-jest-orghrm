#!/bin/bash

# Run the command and capture its output in a variable
adminData=$(fony -t '{"name": "name", "password": "string"}' -c 2)

# Define the path to the AdminPage
AdminPage_path="src/pages/AdminPage"

# Export the result to a JSON file
echo "$adminData" > "$AdminPage_path/adminData.json"

# Print a message
echo "Result exported to json file"

# Run Test
npx jest