import { HiBookmark, HiChartSquareBar, HiOutlineDocumentDuplicate, HiPaperClip, HiPlus, HiUser } from "react-icons/hi";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const determineDefaultOpenKeys = (location) => {
  if (
    ["/account/tree"].includes(
      location?.pathname
    )
  ) {
    return ["/account"];
  }
  if (["/voucherentry/income", "/voucherentry/purchase","/voucherentry/journal","/voucherbook/payment","/voucherbook/receipt"].includes(location?.pathname)) {
    return ["/voucherentry"];
  }
  if (["/voucherbook/income", "/voucherbook/purchase","/voucherbook/journal","/voucherbook/payment","/voucherbook/receipt","/voucherbook/budget"].includes(location?.pathname)) {
    return ["voucherbook"];
  }
  if (["/ledger/main", "/ledger/multiple","/ledger/sub","/ledger/details","/ledger/mass","/ledger/voucher"].includes(location?.pathname)) {
    return ["/ledger"];
  }
  if (["/accountanalysis/monthly", "/accountanalysis/costcenter","/accountanalysis/account","/accountanalysis/level", "/accountanalysis/tds"].includes(location?.pathname)) {
    return ["/accountanalysis"];
  }
  if (["/managerial/monthly", "/managerial/aging","/managerial/comparative", "/managerial/transaction","/managerial/month/wise", "/managerial/department","/managerial/department/revenue","/accountsetup/user"].includes(location?.pathname)) {
    return ["/managerial",];
  }
  if (["/reconcilation/bank"].includes(location?.pathname)) {
    return ["/reconcilation",];
  }
  if (["/accountsetup/setup", "/accountsetup/rules","/accountsetup/printsetup","/accountsetup/user"].includes(location?.pathname)) {
    return ["/accountsetup",];
  }
  if (["/accountlogs/status","/accountlogs/modufy" ].includes(location?.pathname)) {
    return ["/accountlogs",];
  }
  return [];
};
export const accountitems = [

  getItem("Dashboard", "/", <HiChartSquareBar color="white"/>),

  getItem("Account Heads", "/account", <HiUser color="white" />, [
    getItem("Account Tree", "/account/tree"),
  ]),

  getItem("Voucher Entry", "/voucherentry", <HiBookmark color="white"/>, [
    getItem("Income Voucher", "/voucherentry/income"),
    getItem("Purchase Voucher", "/voucherentry/purchase"),
    getItem("Journal Voucher", "/voucherentry/journal"),
    getItem("Payment Voucher", "/voucherentry/payment"),
    getItem("Receipt Voucher", "/voucherentry/receipt"),
    getItem("Budget Voucher", "/voucherentry/budget"),

  ]),

  getItem("Voucher Book", "/voucherbook", <HiOutlineDocumentDuplicate color="white"/>, [
    getItem("Income Voucher Book", "/voucherbook/income"),
    getItem("Purchase Voucher Book", "/voucherbook/purchase"),
    getItem("Journal Voucher Book", "/voucherbook/journal"),
    getItem("Payment Voucher Book", "/voucherbook/payment"),
    getItem("Receipt Voucher Book", "/voucherbook/receipt"),
    getItem("Budget Book", "/voucherbook/budget"),

  ]),

  getItem("Ledger Analysis", "/ledger", <HiPaperClip color="white"/>, [
    getItem("Main Ledger Analysis", "/ledger/main"),
    getItem("Multiple Ledger Analysis", "/ledger/multiple"),
    getItem("Sub Analysis", "/ledger/sub"),
    getItem("Ledger Details Analysis", "/ledger/details"),
    getItem("Mass Ledger Analysis", "/ledger/mass"),
    getItem("Voucher Summary", "/ledger/voucher"),

  ]),

  getItem("Account Analysis", "/accountanalysis", <HiPlus color="white"/>, [
    getItem("Monthly Account Analysis", "/accountanalysis/monthly"),
    getItem("Cost Center Analysis", "/accountanalysis/costcenter"),
    getItem("Account Analysis", "/accountanalysis/account"),
    getItem("Level Wise Analysis", "/accountanalysis/level"),
    getItem("TDS Report", "/accountanalysis/tds"),

  ]),
  getItem("Managerial Analysis", "/managerial", <HiPlus color="white"/>, [
    getItem("Monthly Aging  Analysis", "/managerial/monthly"),
    getItem("Aging Analysis", "/managerial/aging"),
    getItem("Comparative Analysis", "/managerial/comparative"),
    getItem("Transaction Analysis", "/managerial/transaction"),
    getItem("Month Wise Analysis", "/managerial/month/wise"),
    getItem("Department Wise Summary", "/managerial/department"),
    getItem("Department Revenue", "/managerial/department/revenue"),
    getItem("Budget Forecast", "/managerial/budget"),


  ]),
  getItem("Reconcilation", "/reconcilation", <HiPlus color="white"/>, [
    getItem("Bank Reconcilation", "/reconcilation/bank"),
  ]),
  getItem("Account Setup", "/accountsetup", <HiPlus color="white"/>, [
    getItem("Account Setup", "/accountsetup/setup"),
    getItem("Account Rules", "/accountsetup/rules"),
    getItem("Cheque Print Setup", "/accountsetup/printsetup"),
    getItem("User Permission Setup", "/accountsetup/user"),

  ]),
  getItem("Account Logs", "/accountlogs", <HiPlus color="white"/>, [
    getItem("Voucure Status Log", "/accountlogs/status"),
    getItem("Voucher Modify Log", "/accountlogs/modufy"),

  ]),


];



