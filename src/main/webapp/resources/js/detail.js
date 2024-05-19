function restProductList(product_number){

    // GET : http://localhost:8081/restful/api/products/{id}

    fetch("http://localhost:8081/restful/api/products/" + product_number)
        .then(response => response.json())
        .then(function (product) {
            let productDetails = document.getElementById("productDetails");
            productDetails.innerHTML = "";
            let tempHtml = "<table class='table table-bordered'>";
            tempHtml += "<tr>";
            tempHtml += "<td>제품번호</td>"
            tempHtml += "<td>" + product.product_number + "</td>";
            tempHtml += "</tr>";
            tempHtml += "<tr>";
            tempHtml += "<td>제품이름</td>"
            tempHtml += "<td>" + product.product_name + "</td>";
            tempHtml += "</tr>";
            tempHtml += "<tr>";
            tempHtml += "<td>가격</td>"
            tempHtml += "<td>" + product.price + "</td>";
            tempHtml += "</tr>";
            tempHtml += "<tr>";
            tempHtml += "<td>제조사</td>"
            tempHtml += "<td>" + product.manufacturer + "</td>";
            tempHtml += "</tr>";
            tempHtml += "</table>";
            productDetails.innerHTML=tempHtml;
        })
        .catch(function (error) {
            console.log("Error", error);
        })

}

