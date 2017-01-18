/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */


$(document).ready(function () {
    "use strict";
    var codes = ["TEST1", "TEST2"];
    if ($(".ClearingConfigCell")) {

        $('#ctl00_cphMainContent_ctlClearingUserData10005_lblCostCenter').hide();
        $('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter').hide();

        $(".ClearingConfigCell").append("Please Select Cost Center Code 1: ");
        if ($(".ClearingConfigCell").length > 0) {
            $(".ClearingConfigCell").parent().append("<select id='myCCselect' class='clearingConfigCell'/><br><br>");
            $.each(codes, function (i, val) {
                $('#myCCselect').append($('<option>', {value: val, text : val }));
            });
            $("#myCCselect").change(function () {
                if ($(this).val() === "Please Select Cost Center Code:") {
                    $(".ClearingConfigCell").val("#myCCselect1");
                }
            });
        }
        $(".ClearingConfigCell").append("Please Select Cost Center Code 2: ");
        if ($(".ClearingConfigCell").length > 0) {
            $(".ClearingConfigCell").parent().append("<select id='myCCselect2' class='clearingConfigCell'/>");
            $.each(codes, function (i, val) {
                $('#myCCselect2').append($('<option>', {value: val, text : val }));
            });
            $("#myCCselect2").change(function () {
                if ($(this).val() === "Please Select Cost Center Code:") {
                    $(".ClearingConfigCell").val("#myCCselect2");
                }
            });
        }
    }
    $(".customCostCenterField").keyup(function () {
        $("#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter").val($("#myCCselect").val() + "||" + $("#myCCselect2").val());
    });
});

