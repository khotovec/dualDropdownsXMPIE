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
            confirmBtn = document.createElement('div'),
            checkoutBtn = document.getElementById('ctl00_cphMainContentFooter_btnCheckout');
        inputlbl.style.display = 'none';
        inputtxt.style.display = 'none';
        checkoutBtn.style.display = 'none';
        newdiv1.setAttribute("class", "divTest");
        newdiv1.innerHTML = '<label style="padding-right:3px;">Select Your First Cost Center: </label><select id="mycc1" class="drpDwn"><option></option><option>10-81-700745 (Westminster Place-ADMIN)</option><option>10-87-700745 (Westminster Place-MKTG)</option><option>12-84-700745 (Central Office-OFFICE OF  PRESIDENT)</option><option>12-85-700745 (Central Office-HR)</option><option>12-86-700745 (Central Office-FINANCE)</option><option>12-89-700745 (Central Office-COMMUNICATIONS)</option><option>12-90-700745 (Central Office-PURCHASING)</option><option>13-88-700745 (Foundation)</option><option>14-81-700745 (Woodside Place-ADMIN)</option><option>14-81-700745 (Woodwell)</option><option>15-87-700745 (Woodside Place-MKTG)</option><option>16-54-700745 (Dietary Department)</option><option>16-58-700745 (Willows)</option><option>16-81-700745 (Willows-ADMIN)</option><option>16-87-700745 (Willows-MKTG)</option><option>17-81-700745 (SeniorCare Network)</option><option>20-81-700745 (Southminster Place-ADMIN)</option><option>20-87-700745 (Southminster Place-MKTG)</option><option>23-32-700745 (Southmont-Rehab)</option><option>23-53-700745 (Southmont Social Services)</option><option>23-81-700745 (Southmont-ADMIN)</option><option>23-85-700745 (Southmont-HR)</option><option>23-86-700745 (Washington - FINANCE)</option><option>23-87-700745 (Southmont-MKTG)</option><option>24-81-700745 (Erie Corporate-ADMIN)</option><option>24-87-700745 (Erie Corporate-MKTG)</option><option>25-81-700745 (Erie Marketing & Fundraising-ADMIN)</option><option>25-87-700745 (Erie Marketing & Fundraising-MKTG)</option><option>25-88-700745 (Erie Marketing & Fundraising-DEVELOPMENT)</option><option>26-81-700745 (Erie/Elmwood Gardens-ADMIN)</option><option>26-87-700745 (Erie/Elmwood Gardens-MKTG)</option><option>27-81-700745 (Oil City/Oakwood Heights-ADMIN)</option><option>27-87-700745 (Oil City/Oakwood Heights-MKTG)</option><option>28-81-700745 (Erie/Manchester Commons-ADMIN)</option><option>28-87-700745 (Erie/Manchester Commons-MKTG)</option><option>41-81-700745 (Longwood at Home-ADMIN)</option><option>41-87-700745 (Longwood at Home-MKTG)</option><option>50-81-700745 (Longwood at Oakmont-ADMIN)</option><option>50-87-700745 (Longwood at Oakmont-MKTG)</option><option>52-17-700745 (SeniorCare at Home - Home Health)</option><option>52-81-700745 (SeniorCare at Home-ADMIN)</option><option>55-81-700745 (Shenango on the Green-ADMIN)</option><option>55-87-700745 (Shenango on the Green-MKTG)</option><option>55-88-700745 (Shenango on the Green-DEVELOPMENT)</option></select>';
        newdiv2.setAttribute("class", "divTest");
        newdiv2.innerHTML = '<label style="padding-right:3px;">Select Your Second Cost Center: </label><select id="mycc2" class="drpDwn"><option></option><option>10-81-700745 (Westminster Place-ADMIN)</option><option>10-87-700745 (Westminster Place-MKTG)</option><option>12-84-700745 (Central Office-OFFICE OF  PRESIDENT)</option><option>12-85-700745 (Central Office-HR)</option><option>12-86-700745 (Central Office-FINANCE)</option><option>12-89-700745 (Central Office-COMMUNICATIONS)</option><option>12-90-700745 (Central Office-PURCHASING)</option><option>13-88-700745 (Foundation)</option><option>14-81-700745 (Woodside Place-ADMIN)</option><option>14-81-700745 (Woodwell)</option><option>15-87-700745 (Woodside Place-MKTG)</option><option>16-54-700745 (Dietary Department)</option><option>16-58-700745 (Willows)</option><option>16-81-700745 (Willows-ADMIN)</option><option>16-87-700745 (Willows-MKTG)</option><option>17-81-700745 (SeniorCare Network)</option><option>20-81-700745 (Southminster Place-ADMIN)</option><option>20-87-700745 (Southminster Place-MKTG)</option><option>23-32-700745 (Southmont-Rehab)</option><option>23-53-700745 (Southmont Social Services)</option><option>23-81-700745 (Southmont-ADMIN)</option><option>23-85-700745 (Southmont-HR)</option><option>23-86-700745 (Washington - FINANCE)</option><option>23-87-700745 (Southmont-MKTG)</option><option>24-81-700745 (Erie Corporate-ADMIN)</option><option>24-87-700745 (Erie Corporate-MKTG)</option><option>25-81-700745 (Erie Marketing & Fundraising-ADMIN)</option><option>25-87-700745 (Erie Marketing & Fundraising-MKTG)</option><option>25-88-700745 (Erie Marketing & Fundraising-DEVELOPMENT)</option><option>26-81-700745 (Erie/Elmwood Gardens-ADMIN)</option><option>26-87-700745 (Erie/Elmwood Gardens-MKTG)</option><option>27-81-700745 (Oil City/Oakwood Heights-ADMIN)</option><option>27-87-700745 (Oil City/Oakwood Heights-MKTG)</option><option>28-81-700745 (Erie/Manchester Commons-ADMIN)</option><option>28-87-700745 (Erie/Manchester Commons-MKTG)</option><option>41-81-700745 (Longwood at Home-ADMIN)</option><option>41-87-700745 (Longwood at Home-MKTG)</option><option>50-81-700745 (Longwood at Oakmont-ADMIN)</option><option>50-87-700745 (Longwood at Oakmont-MKTG)</option><option>52-17-700745 (SeniorCare at Home - Home Health)</option><option>52-81-700745 (SeniorCare at Home-ADMIN)</option><option>55-81-700745 (Shenango on the Green-ADMIN)</option><option>55-87-700745 (Shenango on the Green-MKTG)</option><option>55-88-700745 (Shenango on the Green-DEVELOPMENT)</option></select>';
        breakDiv.style.paddingTop = '10px';
        breakDiv2.style.paddingTop = '10px';
        confirmBtn.setAttribute("class", "newBtn");
        confirmBtn.innerHTML = '<button type="button" class=" btn btn-default XmpImageButton XmpieThemeColorButton" onclick="f2();" style="border:0;">Click Here to Confirm your Cost Centers</button><br><br>If you have multiple cost centers, please choose here. If you have more than two,<br>or need them split between multiple line items, please notate in the templates<br>comment section before checkout.';
        mainDiv.append(newdiv1);
        mainDiv.append(breakDiv);
        mainDiv.append(newdiv2);
        mainDiv.append(breakDiv2);
        mainDiv.append(confirmBtn);
    }
});

function f2() {
    "use strict";
    var result1 = document.getElementById("mycc1"),
        result2 = document.getElementById("mycc2"),
        checkoutBtnShow = document.getElementById('ctl00_cphMainContentFooter_btnCheckout');
    $('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter').val($('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter')).val(result1.value + " " + result2.value);
    checkoutBtnShow.style.display = 'block';
}
