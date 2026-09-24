// Sales data

let sales = [

    {
        product: "Laptop",
        category: "Electronics",
        quantity: 2,
        price: 55000
    },

    {
        product: "Headphones",
        category: "Electronics",
        quantity: 5,
        price: 3000
    },

    {
        product: "T-Shirt",
        category: "Clothing",
        quantity: 10,
        price: 800
    },

    {
        product: "Jeans",
        category: "Clothing",
        quantity: 5,
        price: 1800
    },

    {
        product: "Pizza",
        category: "Food",
        quantity: 15,
        price: 450
    },

    {
        product: "Burger",
        category: "Food",
        quantity: 20,
        price: 250
    }

];


// Display sales when page loads

displaySales(sales);


// Main function

function displaySales(data) {

    // Get table

    let table = document.getElementById("salesTable");


    // Clear table

    table.innerHTML = "";


    // Total sales

    let totalSales = 0;


    // Total orders

    let totalOrders = 0;


    // Product sales

    let productSales = {};


    // Loop through sales

    data.forEach(function(item) {


        // Calculate item total

        let itemTotal = item.quantity * item.price;


        // Add to total sales

        totalSales += itemTotal;


        // Add order quantity

        totalOrders += item.quantity;


        // Product calculation

        if (productSales[item.product]) {

            productSales[item.product]
                += itemTotal;

        } else {

            productSales[item.product]
                = itemTotal;

        }


        // Create table row

        let row = document.createElement("tr");


        row.innerHTML = `

            <td>${item.product}</td>

            <td>${item.category}</td>

            <td>${item.quantity}</td>

            <td>₹${item.price}</td>

            <td>₹${itemTotal}</td>

        `;


        // Add row

        table.appendChild(row);

    });


    // Calculate average order

    let averageOrder = 0;


    if (totalOrders > 0) {

        averageOrder =
            totalSales / totalOrders;

    }


    // Find best product

    let bestProduct = "---";

    let highestSales = 0;


    for (let product in productSales) {

        if (
            productSales[product]
            > highestSales
        ) {

            highestSales =
                productSales[product];

            bestProduct =
                product;

        }

    }


    // Update dashboard

    document.getElementById("totalSales").innerText = totalSales.toLocaleString();


    document.getElementById("totalOrders").innerText = totalOrders;


    document.getElementById("averageOrder").innerText = averageOrder.toFixed(2);


    document.getElementById("bestProduct").innerText = bestProduct;

}



// Filter sales

function filterSales() {


    // Get selected category

    let category = document.getElementById("categoryFilter").value;


    // If All selected

    if (category === "All") {

        displaySales(sales);

        return;

    }


    // Filter array

    let filteredSales = sales.filter(function(item) {

            return item.category === category;

        });


    // Display filtered data

    displaySales(filteredSales);

}