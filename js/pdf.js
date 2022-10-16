function start() 
{ 
	document.getElementById("section1").style.display="block"; 
  	document.getElementById("login").style.display="none"; 
    document.getElementById("imageshow").style.display="none"; 

	document.getElementById("sessionid").innerHTML = document.getElementById("securityid");
    document.getElementById("companyname").innerHTML = document.getElementById("compname").value;
    document.getElementById("businesssec").innerHTML = document.getElementById("bussec").value;
    document.getElementById("numemployees").innerHTML = document.getElementById("noemp").value;
    document.getElementById("location").innerHTML = document.getElementById("comploc").value;
    document.getElementById("contact").innerHTML = document.getElementById("contname").value;
    document.getElementById("jobtitle").innerHTML = document.getElementById("conjt").value;
    document.getElementById("email").innerHTML = document.getElementById("conem").value;
    document.getElementById("tel").innerHTML = document.getElementById("contel").value;
}

function pdfclick()
{

    document.getElementById("raters").style.display="block"; 
  	document.getElementById("resultsform").style.display="none"; 

    var sessionid = document.getElementById("securityid").value;
    var companyname = document.getElementById("compname").value;
    var busi = document.getElementById("bussec").value;
    var numofemployees = document.getElementById("noemp").value;
    var location = document.getElementById("comploc").value;
    var contactname = document.getElementById("contname").value;
    var jobtitle = document.getElementById("conjt").value;
    var email = document.getElementById("conem").value;
    var telephone = document.getElementById("contel").value;

    var canvas = document.querySelector('#myChart');
    //creates image
    var canvasImg = canvas.toDataURL("image/png", 1.0);
  

    var doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(30,10, "Albatel Ltd: HR Report Generated Analysis");
    doc.text(10,30,"Session ID: " + sessionid);
    doc.text(10,40,"Company Name: " + companyname);
    doc.text(10,50,"Business Sector: " + busi);
    doc.text(10,60,"Number of Employees: " + numofemployees);
    doc.text(10,70,"Company Location: " + location);
    doc.text(10,80,"Contact Name: " + contactname);
    doc.text(10,90,"Contact Job Title: " + jobtitle);
    doc.text(10,100,"Contact Email: " + email);
    doc.text(10,110,"Contact Telephone: " + telephone);
    
    doc.text(10,140,"Here the overall results of the file");
    doc.addImage(canvasImg, 'PNG', 10, 150, 200, 100 );

    
    doc.addPage();
    doc.text(10,10, "Here is the responses for each thing you answered");
    doc.text(10,20, "Questions                                                                                                                                Answers")

    
    doc.text(10,30, "Section 1/13: Legal Compliance")
    doc.text(10,40, "1.1) Do you have a process in place to ensure that all" + "\n" + "        employees have the right to work in Ireland?" + "                                                                 " + document.querySelector("input[name='g1q1a']:checked").value);
    doc.text(10,50, "1.2) Do all of your employees have a contract providing" + "\n" + "       written terms and conditions of their employment?" + "                                                          " + document.querySelector("input[name='g1q2a']:checked").value)
    doc.text(10,60, "1.3) Do you issue an addendum for any changes in employment terms" + "\n" + "and conditions? Wage changes, hours of work etc?" + "                                                             " + document.querySelector("input[name='g1q3a']:checked").value);
    doc.text(10,70, "1.4) Do you ensure that you do not indirectly discriminate through poor" + "\n" +  "recruitment and selection procedures, and pay and incentive schemes?" + "                             " + document.querySelector("input[name='g1q4a']:checked").value);
    

    
    doc.text(10,80, "Section 2/13: Legal Compliance")
    doc.text(10,90, "2.1) Do Your employees receive breaks" + "\n" + "in line with Working Time Regulations?" + "                                                                                " + document.querySelector("input[name='g2q1a']:checked").value);
    doc.text(10,100, "2.2) Do all of your employees receive at least their statutory minimum" + "\n" + "       holidays and public holiday entitlements?" + "                                                                      " + document.querySelector("input[name='g2q2a']:checked").value)
    doc.text(10,110, "2.3) Are you complying with maternity, paternity, parental and other statutory" + "\n" + "     leave rights for your employees?" + "                                                                                    " + document.querySelector("input[name='g2q3a']:checked").value);
    doc.text(10,120, "2.4) Do you keep an accurate record of" + "\n" +  "each employees working hours including rest breaks?" + "                                                         " + document.querySelector("input[name='g2q4a']:checked").value);
    
  
    doc.text(10,130, "Section 3/13: Polcies and Practises");
    doc.text(10,140, "3.1) Do you have a set of clear and comprehensive" + "\n" + "employment policies (Employee Handbook)" + "     in place  that is accessible to" + "\n" + "managers and employees?" + "                                                                                                   " + document.querySelector("input[name='g3q1a']:checked").value);
    doc.text(10,160, "3.2) Do you feel confident about responding to a" + "\n" + "     request for flexible working?" + "                                                                                                   " + document.querySelector("input[name='g3q2a']:checked").value)
    doc.text(10,170, "3.3) Are staff and managers aware of how" + "\n" +"         to recognise and deal with bullying and harassment?    " + "                                                " + document.querySelector("input[name='g3q3a']:checked").value);
    doc.text(10,180, "3.4) Do you have adequate policies in place to protect your business" +"\n" + "      such as social media policies, confidentiality agreements" + "\n" +"     intellectual property and restrictive covenants?" + "                                                             " + document.querySelector("input[name='g3q4a']:checked").value);
    doc.text(10,200, "3.5)Do you have a written equal opportunities policy?" + "                                                         " + document.querySelector("input[name='g3q5a']:checked").value);
    

    
    doc.text(10,220, "Section 4/13: Employee Relations");
    doc.text(10,230, "4.1) Are you and your managers well equipped to handle an employee dispute" + "\n" +  "   grievance or disciplinary situation?" + "                                                                                        " + document.querySelector("input[name='g4q1a']:checked").value);
    doc.text(10,240, "4.2) Are you and your managers well equipped to handle an" + "\n" + "     employee dispute, grievance or disciplinary situation?" + "                                                        " + document.querySelector("input[name='g4q2a']:checked").value)
    doc.text(10,250, "4.3) Do you have to deal with a lot of employee grievances? " + "                                                  " + document.querySelector("input[name='g4q3a']:checked").value);
    

    doc.addPage();
    doc.text(10,10, "Here is the responses for each thing you answered");
    doc.text(10,20, "Questions                                                                                                                                Answers")

    
    doc.text(10,30, "Section 5/13: Performance Management")
    doc.text(10,40, "5.1) Do all employees have job descriptions"+ "\n" + "     and clearly defined roles?" + "                                                                                                    " + document.querySelector("input[name='g5q1a']:checked").value);
    doc.text(10,50, "5.2) Do you have a process for objectively assessing" + "\n" + "     the performance of your employees?" + "                                                                                  " + document.querySelector("input[name='g5q2a']:checked").value)
    doc.text(10,60, "5.3) Do you manage an employee’s probationary period" +"\n" + "       effectively with regular check ins and feedback?" + "                                                            " + document.querySelector("input[name='g5q3a']:checked").value);
    doc.text(10,70, "5.4) Do you have a persistent or long-term sickness" +"\n" + "       absence problem within your business?" + "                                                                      " + document.querySelector("input[name='g5q4a']:checked").value);
    doc.text(10,80, "5.5) Do you ensure that you do not indirectly discriminate through poor" + "\n" +  "recruitment and selection procedures, and pay and incentive schemes?" + "                               " + document.querySelector("input[name='g5q5a']:checked").value);
    doc.text(10,90, "5.6) Are you dealing with a lot of disciplinaries within your business?" + "                                                                                                                      " + document.querySelector("input[name='g5q6a']:checked").value);
    

    
    doc.text(10,100, "Section 6/13: Training and Development")
    doc.text(10,110, "6.1)  Do you have a method to identify the skills" +"\n" + "     gaps and development needs of your workforce?" + "                                                         " + document.querySelector("input[name='g6q1a']:checked").value);
    doc.text(10,120, "6.2)  Have your line managers been trained to deal withpeople issues?" + "                              " + document.querySelector("input[name='g6q2a']:checked").value)
    
    
    
    doc.text(10,130, "Section 7/13: Recruitment & Retention"); 
    doc.text(10,140, "7.1) Do you have high staff turnover rates?    "  + "                                                                      " + document.querySelector("input[name='g7q1a']:checked").value);
    doc.text(10,150, "7.2) Are you clear about why employees have left your business?" + "                                       " + document.querySelector("input[name='g7q2a']:checked").value)
    doc.text(10,160, "7.3)Do you gain enough quality candidates" + "\n" + "     through your recruitment methods? " + "                                                                                " + document.querySelector("input[name='g7q3a']:checked").value);
    doc.text(10,170, "7.4) Are you and your managers trained in interviewing" + "\n" + "      and selection techniques?"  + "                                                                                                 " + document.querySelector("input[name='g7q4a']:checked").value);
    doc.text(10,180, "7.5)Do you have a structured onboarding process?" + "                                                                 " + document.querySelector("input[name='g7q5a']:checked").value);
    

    
    doc.text(10,200, "Section 8/13: Change and Reorganisation")
    doc.text(10,210, "8.1)Are you aware of the employment law" + "\n" + "      implications of handling a business re-organisation?" + "                                                        " + document.querySelector("input[name='g8q1a']:checked").value);
    doc.text(10,220, "8.2) Do you have strong policies in place to manage" + "\n" + "      a downturn in the business and potential redundancies?" + "                                                " + document.querySelector("input[name='g8q2a']:checked").value)
    

    doc.addPage();
    doc.text(10,10, "Here is the responses for each thing you answered");
    doc.text(10,20, "Questions                                                                                                                                Answers")

    
    doc.text(10,30, "Section 9/13: Pay And Benefits")
    doc.text(10,40, "9.1) Do you have a process for assessing and reviewing" + "\n" +  "      the salary and other benefits of your employees?                             " + "                             "+ document.querySelector("input[name='g9q1a']:checked").value);
    doc.text(10,50, "9.2) Do your employees receive a statement of earnings? (Payslip)" + "                                       " + document.querySelector("input[name='g9q2a']:checked").value)
    doc.text(10,60, "9.3) Do you meet legal requirements such as" + "\n" + "      the National Minimum Wage and equal pay??" + "                                                                  " + document.querySelector("input[name='g9q3a']:checked").value);
    doc.text(10,70, "9.4) Do all of your employees have access to a PRSA?" + "                                                        " + document.querySelector("input[name='g9q4a']:checked").value);
    doc.text(10,80, "9.5) Do you ensure that you do not indirectly discriminate through poor" + "\n" +  "recruitment and selection procedures, and pay and incentive schemes?" + "                              " + document.querySelector("input[name='g9q5a']:checked").value);
 

    
    doc.text(10,100, "Section 10/13: Employee Communication & Engagement")
    doc.text(10,110, "10.1) Do you conduct a regular employee engagement survey?" + "                                            " + document.querySelector("input[name='g10q1a']:checked").value);
    doc.text(10,120, "10.2) Do you communicate with all of your employees£" + "\n" + "       regularly and allow for their input/contribution?" + "                                                                " + document.querySelector("input[name='g10q2a']:checked").value)
    doc.text(10,130, "10.3) Do you have a process for objectively assessing" + "\n" + "     the performance of your employees?" + "                                                                                 " + document.querySelector("input[name='g10q3a']:checked").value)
    
    
    doc.text(10,150, "Section 11/13: Health and Safety") 
    doc.text(10,160, "11.1) Does your business have a health and safety policy and statement" + "\n" +  "that is visible to all employees and reviewed annually?" + "                                                      " + document.querySelector("input[name='g11q1a']:checked").value);
    doc.text(10,170, "11.2) Are workplace accidents, near-misses," +"\n" + "      injuries, and illnesses reported and investigated?    " + "                                                      " + document.querySelector("input[name='g11q2a']:checked").value)
    doc.text(10,180, "11.3) Do you ensure that you are looking after" + "\n" + "     the employees mental as well as physical health?" + "                                                        " + document.querySelector("input[name='g11q3a']:checked").value)
    

    
      
    doc.text(10,200, "Section 12/13: Covid Related")
    doc.text(10,210, "12.1) Have all of your staff been through the Return-to-Work Covid Induction?" + "                      " + document.querySelector("input[name='g12q1a']:checked").value);
    doc.text(10,220, "12.2) Have you at least one Lead Worker Representative appointed?" + "                                   " + document.querySelector("input[name='g12q2a']:checked").value)
    doc.text(10,230, "12.3) Have risk assessments been carried out on homework" +"\n" + "     stations for employees working remotely?" + "                                                                          " + document.querySelector("input[name='g12q3a']:checked").value);
    
    doc.text(10,250, "Section 13/13: Employee Records and GDPR")
    doc.text(10,260, "13.1) Do you have a Data Protection Policy that is" + "\n" + "      compliant with the Data Protection Act 2018?" + "                                                                    " + document.querySelector("input[name='g13q1a']:checked").value);
    doc.text(10,270, "13.2) Do you have complete and up to date files of" + "\n" + "     record on every employee?" + "                                                                                                 " + document.querySelector("input[name='g13q2a']:checked").value)
    doc.text(10,280, "13.3)  Are you only retaining records for as long as you should and" + "\n" + "     securely destroying any data no longer required?" + "                                                             " + document.querySelector("input[name='g13q3a']:checked").value);

    doc.save("results.pdf");

}