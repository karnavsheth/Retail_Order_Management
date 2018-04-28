

$(document).ready(function () {
    //Add button click event
    $('#add').click(function () {
        alert("Click");

        rowId = parseInt($('#count').val()) + 1;
        $.ajax({
            type: 'GET',
            url: '/home/GetRow?rowId=' + rowId,
            cache: false,
            success: function (data) {
                $('.main').find("tbody").append(data);
                $('#count').val(rowId);
            },
            error: function (error) {
                console.log(error);
                $('#submit').text('Save');
            }
        });
    });


    $(document).on("change", ".pc", function () {
        var $sel = $(this);
        var selection = $sel.closest(".mycontainer").find(".pc option:selected").val();
        $sel.closest(".mycontainer").find(".product").val("Dummy Product Name");
        $.ajax({
            type: 'GET',
            url: '/home/GetServicetax?category=' + selection,
            cache: false,
            success: function (data) {
                $sel.closest(".mycontainer").find(".stax").text(data);
                $sel.closest(".mycontainer").find(".rate").prop("disabled", false);
                SetAmount($sel);
            },
            error: function (error) {
                console.log(error);
                $sel.closest(".mycontainer").find(".rate").prop("disabled",true);
                $('#submit').text('Save');
            }
        });

    });

    $(document).on("change", ".rate", function () {
        var $sel = $(this);
        SetAmount($sel);
    })

    var SetAmount = function (element) {
        var $sel = element;
        var selection = $sel.closest(".mycontainer").find(".stax").text();
        alert(selection);
        var subtotal = parseFloat(($sel.closest(".mycontainer").find(".quantity").val()) * ($sel.closest(".mycontainer").find(".rate").val()) * (1 + (selection / 100))).toFixed(2);
        $sel.closest(".mycontainer").find(".subtotal").text(subtotal);
        $sel.closest(".mycontainer").find(".staxval").text(parseFloat(($sel.closest(".mycontainer").find(".quantity").val()) * ($sel.closest(".mycontainer").find(".rate").val()) * (selection / 100)).toFixed(2));
        
        var totalamount = 0;
        var totaltax = 0;
        $(".subtotal").each(function (index, element) {
            totalamount = parseFloat(totalamount) + parseFloat($(element).text());
        });
        $(".staxval").each(function (index, element) {
            totaltax = parseFloat(totaltax) + parseFloat($(element).text());
        });
        $('.lbltotal').text("Rs. " + totalamount);
        $('.lblstax').text("Rs. " + totaltax);
        
    }


});

