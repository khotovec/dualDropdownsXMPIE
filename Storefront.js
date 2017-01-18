/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

$(document).ready(function main() {
    "use strict";
    if ($(".clearingConfigCell")) {
        $('#ctl00_cphMainContent_ctlClearingUserData10005_lblCostCenter').hide();
        $('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter').hide();
        $(".ClearingConfigCell").append("Please Try This: ");
    }
});