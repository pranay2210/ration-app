function addItem() {
    let packetType = document.getElementById('packetType').value;
    let content = document.getElementById('content').value;
    let calories = document.getElementById('calories').value;
    let qty = document.getElementById('qty').value;
    let expiryDate = document.getElementById('expiryDate').value;
    let data = {
        packetType: packetType,
        calories: calories,
        content: content,
        qty: qty,
        expiryDate: expiryDate
    };

    $.ajax({
        url: '/item',
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (response) {
            console.log("Response",response)
            console.log("hellooo")
          $('#notification').show();
          console.log("Bye")
        }
    });
}

function listItems() {
    $.ajax({
        url: '/item',
        type: 'GET',
        success: function (response) {
            let tableHtml = "";
            console.log(response);
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            for (let i = 0; i < response.length; i++) {
                let item = response[i];
                let expiryDate  = new Date(item.expiryDate);
                tableHtml += `  <tr>
                                    <th scope="row">${i}</th>
                                    <td>${item.packetId}</td>
                                    <td>${item.packetType}</td>
                                    <td>${item.content}</td>
                                    <td>${item.calories}</td>
                                    <td>${item.qty}</td>
                                    <td>${expiryDate.toLocaleDateString("en-US")}</td>
                                </tr>`;
            }

            document.getElementById('items').innerHTML = "";
            document.getElementById('items').innerHTML = tableHtml;
        }
    });
}