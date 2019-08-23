//-------------------------------------------------Main Variables----------------------------------------------------------------//
// Total Dataset Response Data
let gridTotalResponseData;

//-------------------------------------------------FILTER Variables-------------------------------------------------------------//
//Filter set for all filter Columns, grabs all unique records within each set
const excludedValues = ["Year", "Region", "Market", "Facility", "Program", "Project", "CR", "Select All"];
let filterDataSet = {
    YearSet: [],
    RegionSet: [],
    MarketSet: [],
    FacilitySet: [],
    ProgramSet: [],
    ProjectSet: [],
    CRSet: []
}

//-------------------------------------------------FUNCTIONS------------------------------------------------------------------//

//Main funtion, called on page load, Fetches Chart data and creates Filter and Table. 
function createGantChart() {
    this.getChartData('', function(responseData) {
        this.createFilterForTable(responseData);
        this.addFormattedDataToTable(responseData);
    });
}
/**
* For this case, it is calling the php file and getting the response back.
Server --> Response --> Callback  --> 
*/
getChartData = function(options, callback) {
    let xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            response.splice(0,1);
            currentFilteredData = response;
            gridTotalResponseData = response;
            callback(response);
        }
    };
    xmlHttp.open("GET", "GantChartConnection.php", true);
    xmlHttp.send();
};

//Puts formatted Data in a table, using the response received
function addFormattedDataToTable(response) {
    let formattedTrData = '';
    response.forEach(function(record) {
        if (record.Primary_Key) {
            let newData =
                '<tr>' +
                '<td>' + record.Region + '</td>' +
                '<td>' + record.Market + '</td>' +
                '<td>' + record.Facility + '</td>' +
                '<td>' + record.Program + '</td>' +
                '<td>' + record.Project + '</td>' +
                '<td>' + record.Equipment_ID + '</td>' +
                '<td>' + record.Shipping_DT + '</td>' +
                '<td>' + record.Activation_Month + '</td>' +
                '<td>' + record.Migration_Month + '</td>' +
                '<td>' + record.CR_ID + '</td>' +
                '<td>' + record.EPA + '</td>' +
                getCharHighlightMonth(record)
            '</tr>'
            formattedTrData += newData;
        }
    }, formattedTrData);
    document.getElementById("gridTableContainer").innerHTML = "";
    document.getElementById("gridTableContainer").innerHTML = formattedTrData;
    document.getElementById('gridTableContainer').classList.remove('display-none');    
    document.getElementById('loader').classList.add('display-none');    
}

// All static horizontal Months for Gantt Chart ///
function getCharHighlightMonth(record) {
    let createcorrectDateTr =
        '<td class=' + getCorrectTdCss('10/07/2018', record) + '</td>' +
        '<td class=' + getCorrectTdCss('10/14/2018', record) + '</td>' +
        '<td class=' + getCorrectTdCss('10/21/2018', record) + '</td>' +
        '<td class=' + getCorrectTdCss('10/28/2018', record) + '</td>' +
        '<td class=' + getCorrectTdCss('11/04/2018', record) + '</td>' +
        '<td class=' + getCorrectTdCss('11/11/2018', record) + '</td>' +
        '<td class=' + getCorrectTdCss('11/18/2018', record) + '</td>' +
        '<td class=' + getCorrectTdCss('11/25/2018', record) + '</td>' +
        '<td class=' + getCorrectTdCss('12/02/2018', record) + '</td>' +
        '<td class=' + getCorrectTdCss('12/09/2018', record) + '</td>' +
        '<td class=' + getCorrectTdCss('12/16/2018', record) + '</td>' +
        '<td class=' + getCorrectTdCss('12/23/2018', record) + '</td>' +
        '<td class=' + getCorrectTdCss('12/30/2018', record) + '</td>' +
        '<td class=' + getCorrectTdCss('01/06/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('01/13/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('01/20/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('01/27/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('02/03/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('02/10/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('02/17/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('02/24/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('03/03/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('03/10/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('03/17/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('03/24/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('03/31/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('04/07/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('04/14/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('04/21/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('04/28/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('05/05/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('05/12/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('05/19/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('05/26/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('06/02/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('06/09/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('06/16/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('06/23/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('06/30/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('07/07/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('07/14/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('07/21/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('07/28/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('08/04/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('08/11/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('08/18/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('08/25/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('09/01/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('09/08/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('09/15/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('09/22/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('09/29/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('10/06/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('10/13/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('10/20/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('10/27/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('11/03/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('11/10/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('11/17/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('11/24/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('12/01/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('12/08/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('12/15/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('12/22/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('12/29/2019', record) + '</td>' +
        '<td class=' + getCorrectTdCss('01/05/2020', record) + '</td>' +
        '<td class=' + getCorrectTdCss('01/12/2020', record) + '</td>' +
        '<td class=' + getCorrectTdCss('01/19/2020', record) + '</td>' +
        '<td class=' + getCorrectTdCss('01/26/2020', record) + '</td>' +
        '<td class=' + getCorrectTdCss('02/02/2020', record) + '</td>' +
        '<td class=' + getCorrectTdCss('02/09/2020', record) + '</td>' +
        '<td class=' + getCorrectTdCss('02/16/2020', record) + '</td>' +
        '<td class=' + getCorrectTdCss('02/23/2020', record) + '</td>' +
        '<td class=' + getCorrectTdCss('03/01/2020', record) + '</td>' +
        '<td class=' + getCorrectTdCss('03/08/2020', record) + '</td>' +
        '<td class=' + getCorrectTdCss('03/15/2020', record) + '</td>' +
        '<td class=' + getCorrectTdCss('03/22/2020', record) + '</td>' +
        '<td class=' + getCorrectTdCss('03/29/2020', record) + '</td>';
    return createcorrectDateTr;
}
/*--------------------------------------------- Main CSS Function that calls the Dot and the colors ----------------------------------------------- */
function getCorrectTdCss(tableCellDate, record) {
    const toCss = this.getToShipmentActivationMigrationCSS(tableCellDate, record);
    const fromDot = this.getCorrectDot(tableCellDate, record);
    return toCss + '>' + fromDot;
}

// CSS 1: Function to compare Celldate vs Start Date, End Date, Migration Date and return color for Gantt.

function getToShipmentActivationMigrationCSS(tableCellDate, record) {
    const cellDate = new Date(tableCellDate + 'GMT-0500 (Eastern Standard Time)');
    const startDate = (record.Shipping_DT) ? new Date(record.Shipping_DT + 'GMT-0500 (Eastern Standard Time)') : null;
    const endDate = (record.Activation_DT) ? new Date(record.Activation_DT + 'GMT-0500 (Eastern Standard Time)') : null;
    const migrationDate = (record.Migration_DT) ? new Date(record.Migration_DT + 'GMT-0500 (Eastern Standard Time)') : null;
    let cellColor = "not-range-date";

    // Date beween Need By dt and Activation data, if cell date > start and CellDate < end for Grey color 
    if (cellDate && endDate && startDate) {
        if((cellDate >= startDate) && (cellDate <= endDate)) {
            cellColor = "range-date";
        }
    }

    // Start Date: Assuming it is prior to Activation and migration month
    if (cellDate && startDate) {
        if (cellDate.getYear() === startDate.getYear() && this.getWeekNumber(cellDate) == this.getWeekNumber(startDate)) {
            cellColor = "start-date";
        }
    }

    // End Month Fpr 
    if (cellDate && endDate) {
        if (cellDate.getYear() === endDate.getYear() && cellDate.getMonth() === endDate.getMonth()) {
            cellColor = "end-date";
        }
    }
    // Migration Month
    if (cellDate && migrationDate) {
        if (cellDate.getYear() === migrationDate.getYear() && cellDate.getMonth() === migrationDate.getMonth()) {
            cellColor = "migration-date";
        }
    }
    return cellColor;
}

// CSS 2: Function to compare Celldate vs FROM Start Date, FROM End Date, and  returns dot for the GANTT
function getCorrectDot(tableCellDate, record) {
    //For From Shipping and Activation CSS Dots
    const cellDate = new Date(tableCellDate + 'GMT-0500 (Eastern Standard Time)');
    const startFrom = (record.From_Shipping_DT) ? new Date(record.From_Shipping_DT + 'GMT-0500 (Eastern Standard Time)') : null;
    const endFrom = (record.From_Activation_DT) ? new Date(record.From_Activation_DT + 'GMT-0500 (Eastern Standard Time)') : null;
    let dot = "";
    
    // If CR is not Blank (if CR exists) then populate shipping and activation otherwise populate "blank"
    if (record.CR_ID != "" && (record.Activation_DT != record.From_Activation_DT) || (record.Shipping_DT != record.From_Shipping_DT) ) {
    
        // Range from Start From End
        if (cellDate && endFrom && startFrom) {
            if((cellDate >= startFrom) && (cellDate <= endFrom)) {
                dot = "<div class = 'dot'>.</div>";
            }
        }

        // fromstart : Year and week
        if (cellDate && startFrom) {
            if (cellDate.getYear() === startFrom.getYear() && this.getWeekNumber(cellDate) == this.getWeekNumber(startFrom)) {
                dot = "<div class = 'dot'>.</div>";
            }
        }

        // fromend year and month
        if (cellDate && endFrom) {
            if (cellDate.getYear() === endFrom.getYear() && cellDate.getMonth() === endFrom.getMonth()) {
                dot = "<div class = 'dot'>.</div>";
            }
        }
    }
    else { 
        dot = "";
    }
    return dot;
}

//----------------------------------------------------FILTERS------------------------------------------------------------------//

// Takes response and Creates Unique record per column Datasets(Region, Market, Facility, Program and Project)
function createFilterForTable(response) {
    //for each record from response, do below. 
    response.forEach(function(record) {
            (!filterDataSet.YearSet.includes(record.Fiscal_Year)) ? filterDataSet.YearSet.push((record.Fiscal_Year)): null;
            (!filterDataSet.RegionSet.includes(record.Region)) ? filterDataSet.RegionSet.push((record.Region)): null;
            (!filterDataSet.MarketSet.includes(record.Market)) ? filterDataSet.MarketSet.push((record.Market)): null;
            (!filterDataSet.FacilitySet.includes(record.Facility)) ? filterDataSet.FacilitySet.push((record.Facility)): null;
            (!filterDataSet.ProgramSet.includes(record.Program)) ? filterDataSet.ProgramSet.push((record.Program)): null;
            (!filterDataSet.ProjectSet.includes(record.Project)) ? filterDataSet.ProjectSet.push((record.Project)): null;
            (!filterDataSet.CRSet.includes(record.CRR)) ? filterDataSet.CRSet.push((record.CRR)): null;
    });
    this.createCombobox();
}

/* Onces the Set's are created above,  we create a combo box/dropdown, which holds keys and passed into HTML
1) Gridfiltercontainer holds an Id to pass on our HTML Div ID
2) Eachcombobox html stores the key, the substring of it
3) we take the filter key, holds all keys, and pass it with each comboboxhtml
4)eachcomboboxhtml then is looped and stored into totalhtml
*/

function createCombobox() {
    let gridFilterContainer = document.getElementById('grid-filter-container');
    let totalHtml = '';
    for (var key in filterDataSet) {
        //Combobox dropdown elements
        let eachComboBoxHtml =
            '<select class="combobox-cls" onchange=onComboBoxItemSelect(event) id=' + key + '>' +
            '<option selected disabled>' + key.substring(0, key.length - 3) + '</option>' +
            '<option>Select All</option>';
        let filterValues = filterDataSet[key];
        //Sorts in acending order FilterValues
        filterValues.sort();
        //Remaining list of values from key
        filterValues.forEach(function(record) {
            eachComboBoxHtml += '<option>' + record + '</option>'
        }, eachComboBoxHtml);

        eachComboBoxHtml += '</select>' + ' ';
        totalHtml += eachComboBoxHtml;
    }
    gridFilterContainer.innerHTML = totalHtml;
}

// Onclick Event listener function
function onComboBoxItemSelect() {
    const selectedFilters = this.getFilterSelection();
    const filteredResponse = this.getFilteredData(selectedFilters);
    this.addFormattedDataToTable(filteredResponse);
}

function getFilterSelection() {
    let appliedFilter = {
        YearSet: [],
        RegionSet: [],
        MarketSet: [],
        FacilitySet: [],
        ProgramSet: [],
        ProjectSet: [],
        CRSet: []
    }

    for (var key in filterDataSet) {
        const comboboxElement = document.getElementById(key);
        const comboboxValue = comboboxElement.value;
        if(!excludedValues.includes(comboboxValue)) {
            appliedFilter[key].push(comboboxValue);
        }
    }
    return appliedFilter;
}
// forMATCH: If the length of the set is not 0 then its true else its false, AFTERMATCH: if matched then populate record(true) 
function getFilteredData(selectedFilters) {
    let newFileredData = gridTotalResponseData.filter(function(record) {
        const matchYear = (selectedFilters.YearSet.length !== 0) ? true: false;
        const matchRegions = (selectedFilters.RegionSet.length !== 0) ? true: false;
        const matchMarket = (selectedFilters.MarketSet.length !== 0) ? true: false;
        const matchFacilities = (selectedFilters.FacilitySet.length !== 0) ? true: false;
        const matchProgram = (selectedFilters.ProgramSet.length !== 0) ? true: false;
        const matchProject = (selectedFilters.ProjectSet.length !== 0) ? true: false;
        const matchcr = (selectedFilters.CRSet.length !== 0) ? true: false;

        const yearMatched = (matchYear) ? ((selectedFilters.YearSet.includes(record.Fiscal_Year)) ? true: false): true
        const regionMatched = (matchRegions) ? ((selectedFilters.RegionSet.includes(record.Region)) ? true: false): true
        const marketMatched = (matchMarket) ? ((selectedFilters.MarketSet.includes(record.Market)) ? true: false): true
        const facilityMatched = (matchFacilities) ? ((selectedFilters.FacilitySet.includes(record.Facility)) ? true: false): true 
        const programMatched = (matchProgram) ? ((selectedFilters.ProgramSet.includes(record.Program)) ? true: false): true
        const projectMatched = (matchProject) ? ((selectedFilters.ProjectSet.includes(record.Project)) ? true: false): true
        const crMatched = (matchcr) ? ((selectedFilters.CRSet.includes(record.CRR)) ? true: false): true

        return yearMatched && regionMatched && marketMatched && facilityMatched && programMatched && projectMatched && crMatched;
    });
    return newFileredData;
}

// Takes total response data. If Primary key exist, use the combobox ID and push new record, or else return null
function fetchFilteredData(comboboxid, combovalue, totalNumberOfFilter) {
	
    let newFilterSet = [];
    for (var i = 0; i < gridTotalResponseData.length; i++) {
        let record = gridTotalResponseData[i];
        if (record.Primary_Key) {
            if (comboboxid === 'YearSet') {
                (record.Fiscal_Year === combovalue) ? newFilterSet.push(record): null;
            }
            if (comboboxid === 'RegionSet') {
                (record.Region === combovalue) ? newFilterSet.push(record): null;
            }
            if (comboboxid === 'MarketSet') {
                (record.Market === combovalue) ? newFilterSet.push(record): null;
            }
            if (comboboxid === 'FacilitySet') {
                (record.Facility === combovalue) ? newFilterSet.push(record): null;
            }
            if (comboboxid === 'ProgramSet') {
                (record.Program === combovalue) ? newFilterSet.push(record): null;
            }
            if (comboboxid === 'ProjectSet') {
                (record.Project === combovalue) ? newFilterSet.push(record): null;
            }
            if (comboboxid === 'CRSet') {
                (record.Project === combovalue) ? newFilterSet.push(record): null;
            }
        }
    }

    this.addFormattedDataToTable(newFilterSet);
}

//---------------------------------------------------------Clear All Filter Dataset----------------------------\\
function onResetFilterClick() {
    for (var key in filterDataSet) {
        document.getElementById(key).value = key.substring(0, key.length - 3);
    }
    this.addFormattedDataToTable(gridTotalResponseData);
};


//---------------------------------------------------------------------------Excel Import(StackOverflow)---------------------------------------------------------------------------------//

// https://stackoverflow.com/questions/22317951/export-html-table-data-to-excel-using-javascript-jquery-is-not-working-properl


function fnExcelReport() {
    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j=0;
    tab = document.getElementById('tablestyle'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // removes input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE "); 

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus(); 
        sa=txtArea1.document.execCommand("SaveAs",true,"Thank You.xls");
    }  
    else                 //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  

    return (sa);
}

//------------------------------------------------------------------------------Finds week of the month (StackOverflow)-------------------------------------------------------//

// https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php

function getWeekNumber(dateToCheck) {
    // Copy date so don't modify original
    dateToCheck = new Date(Date.UTC(dateToCheck.getFullYear(), dateToCheck.getMonth(), dateToCheck.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    dateToCheck.setUTCDate(dateToCheck.getUTCDate() + 4 - (dateToCheck.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(dateToCheck.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil((((dateToCheck - yearStart) / 86400000) + 1) / 7);
    return weekNo;
}

// -----------------------------------------------------------SORT Array in DESCENDING ORDER (Not used currently)------------------------------------------

/* use this fuction to sort array accending order */
function sortAccending(a, b) {
    let comparison = 0;
    if (a.Region > b.Region) {
      comparison = 1;
    } else if (a.Region < b.Region) {
      comparison = -1;
    }
    return comparison;
}