var formContext;

var casefields = {
    IsManager: "tfl_ismanager",
    ShowConfedential: "tfl_isconfidential"
}

function OnLoad(executionContext){
    formContext = executionContext.getFormContext();
    var managerLoggedin = CheckManagerLogged();
    if(managerLoggedin){
        formContext.getAttribute(casefields.IsManager).setValue(true);
        formContext.data.entity.save();
    }
    else {
        formContext.getAttribute(casefields.IsManager).setValue(false);
        formContext.data.entity.save();
    }

}

function CheckManagerLogged(){
 var roles = Xrm.Utility.getGlobalContext().userSettings.roles;
 
    if (roles === null) return false;
 
    var hasRole = false;
    roles.forEach(function (item) {
        if (item.name.toLowerCase() === "customer service manager" 
        || item.name.toLowerCase() === "system customizer" 
        ||  item.name.toLowerCase() === "system administrator") {
            hasRole = true;
        }
    });
 
    return hasRole;
}

function CallCustomPage (executionContext) {
    formContext = executionContext;
    var recordId = formContext.data.entity.getId();
    //Initiating Web Resource Parameter.
    var pageInput = {
    pageType: "custom",// Set pageType as "custom"
    name: "tfl_followupdialog_5b4ec", // Custom Page Name
    entityName: "incident", // Entity Name
    recordId : recordId // Input Parameter For Custom Page
    };
    //Declaring HTML Page Dimensions.
    var navigationOptions = {
        target: 2,
        position: 1,
        height: 520,
        width: 400,
        title: "Follow-Up Reasons" // Enter Title Of Your Choice
    };
    //Using navigateTo Client API.
    Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
    function success() {
        formContext.getAttribute("tfl_followup").setValue(true);
        formContext.data.entity.save();
    },
    function error() {
    // Handle errors
    formContext.data.refresh();
    }
    );
    }