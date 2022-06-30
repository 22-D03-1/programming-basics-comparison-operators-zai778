const apples = 20;
const oranges = 30;
const mangoes = 5;

const frage0 = `Prüfe, ob "Äpfel" und "Orangen" gleich sind.`;
console.log(frage0);
//********/
const istappelsgleichoranges = apples === oranges;
console.log(istappelsgleichoranges);
//++++++\
const frage1 = `Prüfe, ob "Äpfel" und "Orangen" *nicht* gleich sind.`;
console.log(frage1);
//*******/
const istappelsNichtgleichoranges = apples !== oranges;
console.log(istappelsNichtgleichoranges);
//++++++\
const frage2 = `Prüfe, ob "Äpfel" größer ist als "Orangen".`;
console.log(frage2);
//*********/
const istappelsgroßerAlsoranges = apples > oranges;
console.log(istappelsgroßerAlsoranges);
//++++++\
const frage3 = "Prüfe, ob `Äpfel` kleiner oder gleich `Orangen` ist.";
console.log(frage3);
//********/
const istappelsKleinerAlsoranges = apples <= oranges;
console.log(istappelsKleinerAlsoranges);
//++++++\
const frage4 = "Prüfe, ob `Orangen` größer ist als `Äpfel`.";
console.log(frage4);
//*********/
const istorangesgroßerAlsappels = oranges > apples;
console.log(istorangesgroßerAlsappels);
//+++++\
const frage5 =
  "Erkläre eine weitere Variable `Mangos` und gib ihr den Wert 5. Multipliziere `mangoes` mit `apples` und prüfe, ob das Ergebnis größer ist als `mangoes` addiert mit `oranges`.";
console.log(frage5);
//********/
const applesxmangoes = apples * mangoes;
console.log(applesxmangoes);
const mangoesplusoranges = mangoes + oranges;
console.log(mangoesplusoranges);
const istapplesxmangoesgroßeralsmangoesplusoranges =
  applesxmangoes > mangoesplusoranges;
console.log(istapplesxmangoesgroßeralsmangoesplusoranges);
//+++++++\
const frage6 =
  "Subtrahiere `Mangos` von `Äpfeln` und prüfe, ob das Ergebnis kleiner ist als `Orangen` dividiert durch `Mangos`.";
console.log(frage6);
//********/
const applesminusmangoes = apples - mangoes;
console.log(applesminusmangoes);
const orangesdividmangoes = oranges / mangoes;
console.log(orangesdividmangoes);
const istapplesminusmangoeskleineralsorangesdividmangoes =
  applesminusmangoes < orangesdividmangoes;
console.log(istapplesminusmangoeskleineralsorangesdividmangoes);
//+++++++\
const frage7 = "Prüfe, ob `Mangos`, `Äpfel` und `Orangen` gleich sind.";
console.log(frage7);
//*********/
const istmangoesapplesorangesgleich = (apples === oranges) === mangoes;
console.log(istmangoesapplesorangesgleich);
//+++++++\
const frage8 = `Prüfe, ob der Rest von "Äpfeln" geteilt durch "Mangos" und der Rest von "Orangen" geteilt durch "Mangos" gleich sind.`;
console.log(frage8);
//**********/
const applesdividmangoes = apples / mangoes;
console.log(applesdividmangoes);
const istapplesdividmangoesgleichorangesdividmangoes =
  applesdividmangoes === orangesdividmangoes;
console.log(istapplesdividmangoesgleichorangesdividmangoes);
//++++++++\
const frage9 =
  "Prüfe, ob `Mangos` addiert mit `Äpfeln` größer ist als `Orangen` minus `Mangos`. Wenn nicht, finde einen Operator, der das Ergebnis `wahr` liefert.";
console.log(frage9);
const applesplusmangoes = apples + mangoes;
console.log(applesplusmangoes);
const orangesminusmangoes = oranges - mangoes;
console.log(orangesminusmangoes);
const istapplesplusmangoesgleichorangesminusmangoes =
  applesplusmangoes === orangesminusmangoes;
console.log(istapplesplusmangoesgleichorangesminusmangoes);
//BONUSHERAUSFORDERUNG: Versuchen Sie, die Lesbarkeit des Skripts zu erhöhen, indem Sie vor jedem Ergebnis Frageüberschriften in die Ausgabe einfügen
