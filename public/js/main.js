
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
            console.log("Response", response)
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
            for (let i = 0; i < response.length; i++) {
                let item = response[i];
                let expiryDate = new Date(item.expiryDate);
                tableHtml += `  <tr>
                                    <th scope="row">${i}</th>
                                    <td>${item.packetId}</td>
                                    <td>${item.packetType}</td>
                                    <td>${item.content}</td>
                                    <td>${item.calories}</td>
                                    <td>${item.qty}</td>
                                    <td>${expiryDate.toLocaleDateString("en-US")}</td>
                                    <td><a onclick="delItem(this)" value="${item.packetId}"><i class="fas fa-trash-alt"></i></a></td>
                                </tr>`;
            }
            document.getElementById('items').innerHTML = "";
            document.getElementById('items').innerHTML = tableHtml;
        }
    });
}

function delItem(obj) {
    let packetId = $(obj).attr('value');
    $.ajax({
        url: '/item',
        type: 'DELETE',
        dataType: 'json',
        data: { packetId: packetId },
        success: function (response) {
            listItems();
        }
    });
}

function listScheduleItems() {
    $.ajax({
        url: '/item/schedule',
        type: 'GET',
        success: function (response) {
            let tableHtml = "";
            for (let i = 0; i < response.length; i++) {
                let item = response[i];
                let expiryDate = new Date(item.expiryDate);
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
            document.getElementById('scheduleitems').innerHTML = "";
            document.getElementById('scheduleitems').innerHTML = tableHtml;
        }
    });
}