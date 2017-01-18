/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

$(document).ready(function appendID() {
    "use strict";
    if (window.location.href.indexOf("CheckoutPaymentSubmission.aspx") > -1) {
        document.querySelector('td.ClearingConfigCell').id = 'formID';
    }
});

$(document).ready(function main() {
    "use strict";
    if (window.location.href.indexOf("CheckoutPaymentSubmission.aspx") > -1) {
        var mainDiv = document.getElementById('formID'),
            inputlbl = document.getElementById('ctl00_cphMainContent_ctlClearingUserData10005_lblCostCenter'),
            inputtxt = document.getElementById('ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter'),
            newdiv1 = document.createElement('div'),
            newdiv2 = document.createElement('div'),
            breakDiv = document.createElement('div'),
            breakDiv2 = document.createElement('div'),
            confirmBtn = document.createElement('div');
        inputlbl.style.display = 'none';
        //inputtxt.style.display = 'none';
        newdiv1.setAttribute("class", "divTest");
        newdiv1.innerHTML = '<label style="padding-right:3px;">This is a Test: </label><select id="mycc1" class="drpDwn"><option>Test1</option><option>DuggieDoo</option>';
        newdiv2.setAttribute("class", "divTest");
        newdiv2.innerHTML = '<label style="padding-right:3px;">This is a Test: </label><select id="mycc2" class="drpDwn"><option>Test1</option><option>DuggieDoo</option>';
        breakDiv.style.paddingTop = '10px';
        breakDiv2.style.paddingTop = '10px';
        confirmBtn.setAttribute("class", "newBtn");
        confirmBtn.innerHTML = '<button class="btn" onclick="f2(); return false;">This is a Test</button>';
        mainDiv.append(newdiv1);
        mainDiv.append(breakDiv);
        mainDiv.append(newdiv2);
        mainDiv.append(breakDiv2);
        mainDiv.append(confirmBtn);
    }
    function f2() {
        var result1 = document.getElementById("mycc1"),
            result2 = document.getElementById("mycc2");
        $('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter').val($('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter')).val(result1.value + " " + result2.value);
    }
});


function f2() {
    "use strict";
    var result1 = document.getElementById("mycc1"),
        result2 = document.getElementById("mycc2");
    $('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter').val($('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter')).val(result1.value + " " + result2.value);
}

function (f2) {
    
}