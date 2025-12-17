document.addEventListener(
	"DOMContentLoaded",
	function () {
		éléments = document.querySelectorAll("table");
		total = éléments.length;
		occurrences = {};
		éléments.forEach(
			function (élément) {
				classe = élément.getAttribute("class");
				if (classe) {if (!occurrences[classe]) {occurrences[classe] = 1;} else {occurrences[classe]++;}}
			}
		);
		tableau = document.getElementById("table-légende");
		tableau.insertRow().insertCell(0).outerHTML = "<th>Classe</th><th>Occurrences</th><th>Proportion</th>";
		for (classe in occurrences) {nouvelleLigne(classe, occurrences[classe], total);}
		nouvelleLigne("table-Total", total, total);
	}
);

function nouvelleLigne(classe, occurrences, total) {
	nomClasse = classe.split("-")[1];
	ligne = tableau.insertRow();
	ligne.insertCell(0).outerHTML =
		"<th><table class = '" + classe + "'><td>" +
			nomClasse.charAt(0).toUpperCase() + nomClasse.slice(1) +
		"</td></table><th>";
	ligne.insertCell(1).textContent = occurrences;
	ligne.insertCell(2).textContent = ((occurrences / total) * 100).toFixed(1).replace(".", ",") + " %";
}
