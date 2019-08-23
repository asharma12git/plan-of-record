<?php
// Database Host Connection
$hostname_data = "localhost";
$database_data = "eps_report_data";
$username_data = "gcarol";
$password_data = "passw0rd";
$data = mysql_pconnect($hostname_data, $username_data, $password_data) or trigger_error(mysql_error(),E_USER_ERROR);
?>

<?php 
mysql_select_db($database_data, $data);

// Database Query
$query_porw = "SELECT 
COALESCE (EquipPlan_key, '') AS Primary_Key
,COALESCE (Fiscal_Year, '') AS Fiscal_Year
,COALESCE (Region_Abb, '') AS Region
,COALESCE (Market_Abb, '') AS Market
,COALESCE (Location_Cd, '') AS Facility
,COALESCE (program_Nm, '') AS Program
,COALESCE (EPSProject_Nm, '') AS Project
,COALESCE (EquipPlan_Id, '') AS  Equipment_ID
,COALESCE (CR_id, '') as CR_ID
,COALESCE (CASE
WHEN (ToEPA_Cd = 'NEW' AND CR_id IS NOT NULL) THEN 'New'
WHEN (ToEPA_Cd = 'UPDATE' AND CR_id IS NOT NULL) THEN 'Chg'
WHEN (ToEPA_Cd = 'INACTIVE'AND CR_id IS NOT NULL) THEN 'Del'
ELSE NULL END, '') AS EPA 
,CASE 
WHEN CR_id <> '' THEN 'All CRs'
ELSE 'Non CRs' END AS CRR
,COALESCE (DATE_FORMAT (FromShipping_Dt, '%m/%d/%Y'), '') AS From_Shipping_DT
,COALESCE (DATE_FORMAT (FromActivation_Dt, '%m/%d/%Y'), '') AS From_Activation_DT
,COALESCE (DATE_FORMAT (ToShipping_Dt, '%m/%d/%Y'), '') AS Shipping_DT
,COALESCE (DATE_FORMAT (ToActivation_Dt, '%m/%d/%Y'), '') AS Activation_DT
,COALESCE (DATE_FORMAT (ToMigration_Dt, '%m/%d/%Y'), '') AS Migration_DT
,COALESCE (DATE_FORMAT (ToActivation_Dt, '%b %Y'), '') AS Activation_Month
,COALESCE (DATE_FORMAT (ToMigration_Dt, '%b %Y'), '') AS Migration_Month
FROM por_mgt_eq_plan
WHERE EquipPlan_Id IN (
'CCAP SE_JHSNCAPC04'
,'RAR_DCY'
,'LC_PNS-100G Grow'
,'CB_ROUTER-NWOSLABO1NW'
,'CB_10GCARD-CV1XEWAA01'
,'CCAP SE_JHSNCAPC01'
,'LC_RMD-New Router'
,'BB_2019RIPRV_BBCAP51'
,'CVE RHD Server'
-- Case where range is not showing.
,'GRO_CA ORG AVJ Fiber Infrastructure Augment POR19'
,'REP_ NE CON ENF Replace EOL RXs Decom'
,'NS_FI NS WRB'
,'DE_FI MRTR SPC'

-- Cases where to Activation and Shippings do not match from AS
,'REP_MTCH SW LAS BLU Replace HDrx Decom POR19'
,'REP_MTCH SW LAS TEN Replace HDrx Decom POR19'
,'DDoS_Ipv6'
,'DDoS_vTMS'
,'REP_MTCH SW LAS HEN Replace HDrx Decom POR19'
,'NS_FI NS FTS'
,'DWDM_FI MTRN FTS'
)
-- AND  (ToActivation_Dt <> FromActivation_Dt) OR (FromShipping_Dt <> ToShipping_Dt)
GROUP BY 
EquipPlan_key
,program_Nm
,Region_Abb
,EPSProject_Nm
,EquipPlan_Id
,EPS_Location_Cd
ORDER by ToActivation_Dt DESC, CR_id DESC
";

$porw = mysql_query($query_porw, $data) or die(mysql_error());
// $totalRows_prow = mysql_num_rows($porw);
$json_array[] = array();

//Variable format & Output//
while( $rows = mysql_fetch_assoc ($porw)) {
    $json_array[] = $rows;
  } 
// echo count($json_array);
print(json_encode($json_array));
?>