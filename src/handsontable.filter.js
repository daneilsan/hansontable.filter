window.HandsontableFilter = function (hansontable_id, filter_function, rowHeader) {
    var recalculateColWidth = function() {
        var colOffset = 0;
        if (rowHeader) {
            document.getElementById(hansontable_id + "_filter_span").style.width = cols[0].offsetWidth + "px";
            colOffset += 1;
        }

        for (var i = 0; i < colNumber; i++) {
            document.getElementById(hansontable_id + "_filter_col" + i).style.width = cols[i + colOffset].offsetWidth - 6 + "px";
        }
    };

    var cols = document.querySelectorAll("#" + hansontable_id + " > div.ht_clone_top.handsontable > div > div > div > table > thead > tr > th");
    var colNumber = cols.length;
    if (rowHeader === undefined) rowHeader = false;
    if (rowHeader) colNumber -= 1;

    // create UI
    var tableDiv = document.getElementById(hansontable_id);
    var searchDiv = hansontable_id + "_filter";

    var div = document.createElement('div');
    div.setAttribute("id", hansontable_id + "_filter");
    if (rowHeader) {
        var span = document.createElement("span");
        span.setAttribute('id', hansontable_id + "_filter_span");
        span.style = "display: inline-block; width: 20px";
        div.appendChild(span);
    }
    for (var j=0; j < colNumber; j++) {
        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id',   hansontable_id + "_filter_col" + j);
        input.setAttribute("style", "border: 1px solid #AAAABB;margin: 0; padding: 2px;");
        input.setAttribute("class", "hansontable_filter");
        div.appendChild(input);
    }
    tableDiv.parentElement.insertBefore(div, tableDiv);

    recalculateColWidth();

    return {
        table_element: tableDiv,
        filter: function () {
            var values = [];
            var input_array = document.querySelectorAll("#" + hansontable_id + "_filter > input");
            for (var i = 0; i < input_array.length; i++) {
                values.push(input_array[i].value);
            }
            filter_function(values);
        },
        resize: recalculateColWidth
    };
};

