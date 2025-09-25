CALLBACK
//Normální funkce------------------------------------------------
function add(a,b) {
	return a+b
}

const soucet = add(1,2)
//Callback------------------------------------------------

function add(a,b,callback) {
	res = a+b;
	callback(res);
}

Buď:
add(1,2, function(res){console.log(res)});
Nebo:
add(1,2, res => soucet=res)


//RETURN VE FUNKCÍCH-------------------------------------------
//Jakmile funkce narazí na return, vrátí hodnotu, a ukončí pokračování funkce.
//Kód po return se NIKDY nespustí:

function soucet(a, b) {
  return a + b;
  console.log("Tento kód se nikdy nespustí.");
}

//----------------------------------------------------------------------
//Return ve funkcích není potřeba, ale je potřeba pokud mám funkci a uvnitř funkce if.
//Pokud by v uvedeném kódu nebyl return uvnitř if, pak by se druhý if provádělo vždy. 

  const handleRemoveFile = async (fileToRemove: StoredFile) => {
    if (!docIdRef.value || docIdRef.value === 'new') {
      notify('Dokument není platný, nelze smazat soubor.', 'warning');
      return;
    }
    if (confirm(`Opravdu chcete smazat soubor '${fileToRemove.origName}'?`)) {
      try {
        await useDeleteFile(fileToRemove.url);
        filesRef.value = filesRef.value.filter(file => file.url !== fileToRemove.url);
        await updateDocInFirestore({ files: filesRef.value });

        notify('Soubor byl úspěšně smazán a odstraněn z dokumentu.', 'positive');
      } catch (e: any) {
        notifyError('Mazání souboru selhalo:', e);
      }
    }
  };

//Promises--------------------------------------------------------------  
  
function divide(a,b) {
	return new Promise((resolve, reject) => {
		if (b!==0) {
			resolve(a/b);
		} else {
			reject("nulou nelze dělit");
		}
	});
}

divide(10,2)
	.then(data=>console.log("OK", data))
	.catch(err=>console.log("NOK", err));

// async/await
// async function - vrací Promise

// Volání async funkce přes: await------------------------

async function divide(a,b) {
	if (b!==0) {
		return (a/b);
	} else {
		throw new Error("nulou nelze dělit");
	}
}

async function run() {
	const res = await divide(10,2);
	console.log("vysl: ", res);
}

run();

// Volání async funkce přes: then--------------------------

async function divide(a,b) {
	if (b!==0) {
		return (a/b);
	} else {
		throw new Error("nulou nelze dělit");
	}
}

divide(10,2)
	.then(data=>console.log("OK", data))
	.catch(err=>console.log("NOK", err));

--------------------------------------------------

// Asynchronní funkce, bez parametrů
async function getNumberAsync() {
    return 42;
}

async function asRes() {
	const res = await getNumberAsync();
	console.log("vysl: ", res);
}

asRes()
