//your JS code here. If required.
const deletetext = document.getElementById("colorSelect");
let colors = []
for(let i=0;i<deletetext.length;i++)
	{
		colors[i] = deletetext[i];
	}
function deletion() {
	deletetext.classList.remove(colors);	
}
deletion();