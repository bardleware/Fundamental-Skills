var sel = document.getElementById('whichEmail');
var btn_Select = document.getElementById('btn_Select');
var btn_generate = document.getElementById('generate');

var gen_email = document.getElementById('emailContainer');
var eml = document.getElementById('email');

var custName = document.getElementById('custName');
var custID = document.getElementById('custID');
var agent = document.getElementById('agentName');
var orderNum = document.getElementById('orderNum');

custName.style.display = 'none';
custID.style.display = 'none';
agent.style.display = 'none';
orderNum.style.display = 'none';


var emailOptionSelected = sel.options[sel.selectedIndex].value;

var _cName, _cID, _agent, oNum;
btn_Select.addEventListener("click", function (event) {
    emailOptionSelected = sel.options[sel.selectedIndex].value;
    if (emailOptionSelected == 1 || emailOptionSelected == 3) {
        custName.style.display = 'block';
        custID.style.display = 'none';
        agent.style.display = 'block';
        orderNum.style.display = 'block';
    }
    else if (emailOptionSelected == 2) {
        custName.style.display = 'block';
        custID.style.display = 'block';
        agent.style.display = 'block';
        orderNum.style.display = 'none';
    }
    else {
        alert("Please select an email to generate.")
    }
})

btn_generate.addEventListener('click', function (event) {
    //get and assign data
    _cName = custName.value;
    _agent = agent.value;
    _oNum = orderNum.value;
    _cID = custID.value;

   // console.log(_cName, _agent, _oNum, _cID);

    if (emailOptionSelected == 1) { //order deletion and authorization drop
        eml.innerText = emailGenerator.orderDeletion(_cName, _oNum, _agent);
    }
    else if (emailOptionSelected == 2) { //Directions to send in Rx
        eml.innerHTML="Dear " +_cName+ "<br><br>It would be great if you could fax, email or text us a copy of your prescription! You will just need to write your customer number " +_cID+ " directly on your prescription. Then you can fax it to 1-800-875-9851 without a cover sheet, email it as an attachment to Rx@1800contacts.com or text a picture to 41800 (kinda like voting for American Idol, except we won't be singing for you). <br><br>If we can be of any additional assistance, please don't hesitate to ask. We're available 24 hours a day, 7 days a week and will be delighted to help! We appreciate your business and I hope that you have a wonderful day " +_cName+ ".<br><br>Sincerely,<br><br>" +_agent+ "<br><br>1-800 CONTACTS Customer Service Representative<br>Phone: 1-800 CONTACTS (1-800-266-8228)<br>E-mail: info@1800contacts.com<br>Address: 51 West Center St, Orem, UT 84057<br>";
    }
    else if (emailOptionSelected == 3) { //information to access rebate
        eml.innerHTML="Dear " +_cName+ "<br><br> Thank you for contacting us about your mail in rebate. Here are the directions to redeem it, as requested. You can use the following link to access our Rebate page:<br><br>http://www.1800contacts.com/rebates<br><br>To begin, please enter your order number " +_oNum+ " to generate your form and mail it in! Your check will arrive in the mail at your billing address on file within 6 to 8 weeks.<br><br>If we can be of any additional assistance, please don't hesitate to ask. We're available 24 hours a day, 7 days a week and will be delighted to help! We appreciate your business and I hope that you have a wonderful day " +_cName+ ".<br><br>Sincerely,<br><br>" +_agent+ "<br><br>1-800 CONTACTS Customer Service Representative<br>Phone: 1-800 CONTACTS (1-800-266-8228)<br>E-mail: info@1800contacts.com<br>Address: 51 West Center St, Orem, UT 84057"
    }
    else {
        alert("Please select an email to generate.")
    }

})