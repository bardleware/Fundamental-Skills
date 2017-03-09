var emailGenerator = {
    orderDeletion : function (cName, oNum, agent ){
        return "Dear " + cName + ",\n\n Order number " + oNum + " has been canceled for you. Your credit card was temporarily authorized at the time it was placed, but this will be automatically removed within 3 to 10 business days. \n\nIf there is anything else I can do for you, please don't hesitate to let me know. We're available 24 hours a day, 7 days a week and look forward to hearing from you again " + cName + "! \n\n Sincerely, \n\n" + agent + " \n\n1-800 CONTACTS Customer Service Representative \nPhone: 1-800 CONTACTS (1-800-266-8228) \nE-mail: info@1800contacts.com \nAddress: 51 West Center St, Orem, UT 84057"
    }
}

//this module was created to make a possible "objectivity" to the Email Generator app