**About The Project**<br />
This project is POC for customer service module which help dealing with customers in different centres.<br />

**Built with**<br />
Dynamics365 CE , PowerApps.<br />

**URLs for Access**<br />
Environment:https://cstrial.crm4.dynamics.com/main.aspx?forceUCI=1&pagetype=apps <br />
PowerApps: https://make.powerapps.com/environments/ <br />
Admin Portal:https://admin.powerplatform.microsoft.com/environments <br />

**Credentials:**<br />

| Role        | Username           | Password  |
| ------------- |:-------------:| -----:|
| Admin      | TarekMostafa@TFL455.onmicrosoft.com | TFLP@ssW0rd |
|Basic user ContactCentres1 |    BUCC1@TFL455.onmicrosoft.com      |P@ssW0rddCC1|
|Manager ContactCentres1    |    MCC1@TFL455.onmicrosoft.com       |P@ssW0rdCC1|
|Basic User ContacCentres2  |    BUCC2@TFL455.onmicrosoft.com      |P@ssW0rdCC2|
|Manager ContactCentres2    |    MCC2@TFL455.onmicrosoft.com       |P@ssW0rdCC2|
|Basic user ContactCentres3 |     BUCC3@TFL455.onmicrosoft.com     |P@ssW0rdCC3|
|Manager ContactCentres3    |    MCC3@TFL455.onmicrosoft.com       |P@ssW0rdCC3|

**Assumptions**<br />
1. Documents will be uploaded on Timeline for Cases not Contact because each document is related to specefic case and contact maybe has many cases.
2. Timeline for cases are appeared on Follow-Up entity.
3. After Agent Create the case and move to second stage 'Research' he/she can add commet before assign case to Manager. Agent need to use Assign Button on Ribbon to assign case to Manager.

**Test Cases**<br />
Please follow test cases mentioned in Technical Design Document I have attached.

**Notes**<br />
1. I have used power automate flows instead of workflows or plugins as it's recommended from Microsoft
2. I'm following latest technologies i.e. Custom page, Power Automate flows.

                

