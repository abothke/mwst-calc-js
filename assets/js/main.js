// Div anzeigen/verstecken
const divToggle = () => {
  const netAmountDiv = document.getElementById("netAmount"); // Div , welche angezeigt wird, wenn #netAmount checked ist
  const grossAmountDiv = document.getElementById("grossAmount"); // Div , welche angezeigt wird, wenn #grossAmount checked ist
  // Wenn #netAmount checked ist, dann #netAmount anzeigen, sonst #grossAmount anzeigen. #netAmount ist per default checked und wird angezeigt
  if (netAmountDiv.style.display === "none") {
    netAmountDiv.style.display = "flex";
    grossAmountDiv.style.display = "none";
  } else {
    netAmountDiv.style.display = "none";
    grossAmountDiv.style.display = "flex";
  }
};
// Brutto und Nettobetrag ausrechnen und ausgeben in jeweils #netAmount und #grossAmount per innerHTML
const calcNetAndGross = () => {
  const netAmountDiv = document.getElementById("netAmount"); // Div , welche angezeigt wird, wenn #netAmount checked ist
  const netAmountStyle = window.getComputedStyle(netAmountDiv).display; // Displaywert von #netAmount um auszugeben, welcher container angezeigt wird
  const netAmount = document.getElementById("netInput").value; // Wert von #netInput - Userinput
  const grossAmount = document.getElementById("grossInput").value; // Wert von #grossInput - Userinput
  const standardVatValue = document.getElementById("standardVat").value; // Wert von #standardVat (19)
  const reducedVatValue = document.getElementById("reducedVat").value; // Wert von #reducedVat (7)
  const isStandardVat = document.getElementById("standardVat").checked; // Checked-Status von #standardVat (19%)
  const outputVat = document.getElementById("vatValueOutput"); // Outputfeld für MwSt. Betrag
  const outputTotal = document.getElementById("totalValueOutput"); // Outputfeld für Gesamtbetrag
  const vatPercentage = isStandardVat ? standardVatValue : reducedVatValue; // Wenn #standardVat checked ist, dann 19%, sonst 7%
  const netToGrossFormular = netAmount * (1 + vatPercentage / 100); // Formel für Netto zu Brutto
  const netToVatFormular = netAmount * (1 + vatPercentage / 100) - netAmount; // Formel für Netto zu MwSt.
  const grossToNetformular = grossAmount / (1 + vatPercentage / 100); // Formel für Brutto zu Netto
  const grossToVatFormular =
    (grossAmount / (1 + vatPercentage / 100)) * (vatPercentage / 100); // Formel für Brutto zu MwSt.
  // Wenn #netAmount angezeigt wird, dann Netto zu Brutto und MwSt. ausgeben, sonst Brutto zu Netto und MwSt. ausgeben.
  // die MwSt. wird in beiden Fällen ausgegeben
  if (netAmountStyle === "flex") {
    outputTotal.innerHTML = netToGrossFormular.toFixed(2);
    vatValueOutput.innerHTML = netToVatFormular.toFixed(2);
  } else {
    outputTotal.innerHTML = grossToNetformular.toFixed(2);
    vatValueOutput.innerHTML = grossToVatFormular.toFixed(2);
  }
};
