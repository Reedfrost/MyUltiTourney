//Insert jquery
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script); 

function ClearDiv(elementID) {
	document.getElementById("description").innerHTML = "Made it in";
	$('#allResults').empty();
}

function GenerateTable() {

	var hashName = location.hash.substr(1);
	
	var db = firebase.database();
				
	var ref = db.ref('tournaments/' + hashName);
	ref.on('value', function(snapshot) {
		var snapVal = snapshot.val();
		document.getElementById("tourneyName").innerHTML = hashName.replace(/_/g, ' ');
		document.getElementById("description").innerHTML = snapVal.Description;
		document.getElementById("PoolAtxt").innerHTML = "Pool A";
		var poolA = new Array();
		poolA.push(["ROUNDS", "GAMES"]);		
		poolA.push(["Round 1: ", snapVal.PoolA.Round_1]);
		if (snapVal.PoolA.numRounds > 1) {
			poolA.push(["Round 2: ", snapVal.PoolA.Round_2]);
		}
		if (snapVal.PoolA.numRounds > 2) {
			poolA.push(["Round 3: ", snapVal.PoolA.Round_3]);
		}
		if (snapVal.PoolA.numRounds > 3) {
			poolA.push(["Round 4: ", snapVal.PoolA.Round_4]);
		}
		if (snapVal.PoolA.numRounds > 4) {
			poolA.push(["Round 5: ", snapVal.PoolA.Round_5]);
		}
		
		//Create a HTML Table element.
		var table = document.createElement("TABLE");
		table.border = "1";
	 
		//Get the count of columns.
		var columnCount = poolA[0].length;
	 
		//Add the header row.
		var row = table.insertRow(-1);
		for (var i = 0; i < columnCount; i++) {
			var headerCell = document.createElement("TH");
			headerCell.innerHTML = poolA[0][i];
			row.appendChild(headerCell);
		}
	 
		//Add the data rows.
		for (var i = 1; i < poolA.length; i++) {
			row = table.insertRow(-1);
			for (var j = 0; j < columnCount; j++) {
				var cell = row.insertCell(-1);
				cell.innerHTML = poolA[i][j];
			}
		}
	 
		var dvTable = document.getElementById("dvTable");
		dvTable.innerHTML = "";
		dvTable.appendChild(table);
		
		
		//POOL B
		if (snapVal.numPools > 1)
		{
			document.getElementById("PoolBtxt").innerHTML = "Pool B";
			var PoolB = new Array();
			PoolB.push(["ROUNDS", "GAMES"]);		
			PoolB.push(["Round 1: ", snapVal.PoolB.Round_1]);
			if (snapVal.PoolB.numRounds > 1) {
				PoolB.push(["Round 2: ", snapVal.PoolB.Round_2]);
			}
			if (snapVal.PoolB.numRounds > 2) {
				PoolB.push(["Round 3: ", snapVal.PoolB.Round_3]);
			}
			if (snapVal.PoolB.numRounds > 3) {
				PoolB.push(["Round 4: ", snapVal.PoolB.Round_4]);
			}
			if (snapVal.PoolB.numRounds > 4) {
				PoolB.push(["Round 5: ", snapVal.PoolB.Round_5]);
			}
			
			//Create a HTML Table element.
			var table = document.createElement("TABLE");
			table.border = "1";
		 
			//Get the count of columns.
			var columnCount = PoolB[0].length;
		 
			//Add the header row.
			var row = table.insertRow(-1);
			for (var i = 0; i < columnCount; i++) {
				var headerCell = document.createElement("TH");
				headerCell.innerHTML = PoolB[0][i];
				row.appendChild(headerCell);
			}
		 
			//Add the data rows.
			for (var i = 1; i < PoolB.length; i++) {
				row = table.insertRow(-1);
				for (var j = 0; j < columnCount; j++) {
					var cell = row.insertCell(-1);
					cell.innerHTML = PoolB[i][j];
				}
			}
		 
			var dvTable2 = document.getElementById("dvTable2");
			dvTable2.innerHTML = "";
			dvTable2.appendChild(table);
		}
		
		//POOL C
		if (snapVal.numPools > 2)
		{
			document.getElementById("PoolCtxt").innerHTML = "Pool C";
			var PoolC = new Array();
			PoolC.push(["ROUNDS", "GAMES"]);		
			PoolC.push(["Round 1: ", snapVal.PoolC.Round_1]);
			if (snapVal.PoolC.numRounds > 1) {
				PoolC.push(["Round 2: ", snapVal.PoolC.Round_2]);
			}
			if (snapVal.PoolC.numRounds > 2) {
				PoolC.push(["Round 3: ", snapVal.PoolC.Round_3]);
			}
			if (snapVal.PoolC.numRounds > 3) {
				PoolC.push(["Round 4: ", snapVal.PoolC.Round_4]);
			}
			if (snapVal.PoolC.numRounds > 4) {
				PoolC.push(["Round 5: ", snapVal.PoolC.Round_5]);
			}
			
			//Create a HTML Table element.
			var table = document.createElement("TABLE");
			table.border = "1";
		 
			//Get the count of columns.
			var columnCount = PoolC[0].length;
		 
			//Add the header row.
			var row = table.insertRow(-1);
			for (var i = 0; i < columnCount; i++) {
				var headerCell = document.createElement("TH");
				headerCell.innerHTML = PoolC[0][i];
				row.appendChild(headerCell);
			}
		 
			//Add the data rows.
			for (var i = 1; i < PoolC.length; i++) {
				row = table.insertRow(-1);
				for (var j = 0; j < columnCount; j++) {
					var cell = row.insertCell(-1);
					cell.innerHTML = PoolC[i][j];
				}
			}
		 
			var dvTable3 = document.getElementById("dvTable3");
			dvTable3.innerHTML = "";
			dvTable3.appendChild(table);
		}
		
		//POOL D
		if (snapVal.numPools > 3)
		{
			document.getElementById("PoolDtxt").innerHTML = "Pool D";
			var PoolD = new Array();
			PoolD.push(["ROUNDS", "GAMES"]);		
			PoolD.push(["Round 1: ", snapVal.PoolD.Round_1]);
			if (snapVal.PoolD.numRounds > 1) {
				PoolD.push(["Round 2: ", snapVal.PoolD.Round_2]);
			}
			if (snapVal.PoolD.numRounds > 2) {
				PoolD.push(["Round 3: ", snapVal.PoolD.Round_3]);
			}
			if (snapVal.PoolD.numRounds > 3) {
				PoolD.push(["Round 4: ", snapVal.PoolD.Round_4]);
			}
			if (snapVal.PoolD.numRounds > 4) {
				PoolD.push(["Round 5: ", snapVal.PoolD.Round_5]);
			}
			
			//Create a HTML Table element.
			var table = document.createElement("TABLE");
			table.border = "1";
		 
			//Get the count of columns.
			var columnCount = PoolD[0].length;
		 
			//Add the header row.
			var row = table.insertRow(-1);
			for (var i = 0; i < columnCount; i++) {
				var headerCell = document.createElement("TH");
				headerCell.innerHTML = PoolD[0][i];
				row.appendChild(headerCell);
			}
		 
			//Add the data rows.
			for (var i = 1; i < PoolD.length; i++) {
				row = table.insertRow(-1);
				for (var j = 0; j < columnCount; j++) {
					var cell = row.insertCell(-1);
					cell.innerHTML = PoolD[i][j];
				}
			}
		 
			var dvTable4 = document.getElementById("dvTable4");
			dvTable4.innerHTML = "";
			dvTable4.appendChild(table);
		}
		
		//CROSSOVER
		if (snapVal.crossBool)
		{
			document.getElementById("Crossovertxt").innerHTML = "Crossovers";
			var Crossover = new Array();
			Crossover.push(["ROUNDS", "GAMES"]);		
			Crossover.push(["Round 1: ", snapVal.Crossover.Crossover_Round_1]);
			if (snapVal.Crossover.numRounds > 1) {
				Crossover.push(["Round 2: ", snapVal.Crossover.Crossover_Crossover_Round_2]);
			}
			if (snapVal.Crossover.numRounds > 2) {
				Crossover.push(["Round 3: ", snapVal.Crossover.Crossover_Round_3]);
			}
			if (snapVal.Crossover.numRounds > 3) {
				Crossover.push(["Round 4: ", snapVal.Crossover.Crossover_Round_4]);
			}
			if (snapVal.Crossover.numRounds > 4) {
				Crossover.push(["Round 5: ", snapVal.Crossover.Crossover_Round_5]);
			}
			
			//Create a HTML Table element.
			var table = document.createElement("TABLE");
			table.border = "1";
		 
			//Get the count of columns.
			var columnCount = Crossover[0].length;
		 
			//Add the header row.
			var row = table.insertRow(-1);
			for (var i = 0; i < columnCount; i++) {
				var headerCell = document.createElement("TH");
				headerCell.innerHTML = Crossover[0][i];
				row.appendChild(headerCell);
			}
		 
			//Add the data rows.
			for (var i = 1; i < Crossover.length; i++) {
				row = table.insertRow(-1);
				for (var j = 0; j < columnCount; j++) {
					var cell = row.insertCell(-1);
					cell.innerHTML = Crossover[i][j];
				}
			}
		 
			var dvTable5 = document.getElementById("dvTable5");
			dvTable5.innerHTML = "";
			dvTable5.appendChild(table);
		}
	 
		
	});
}
