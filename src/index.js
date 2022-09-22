const table = document.getElementById("tbody");
const url1 =
  "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
const url2 =
  "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";

getDataCountry();
async function getDataCountry() {
  const urlData = await fetch(url1);
  const urlData2 = await fetch(url2);
  const data = await urlData.json();
  const data4 = await urlData2.json();
  const dataNew = data.dataset.dimension.Alue.category.label;
  const dataNew2 = data.dataset.value;
  const dataNew4 = data4.dataset.value;
  Object.values(dataNew).forEach((value) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = value;
    tr.appendChild(td1);
    for (let i = 0; i <= table.rows.length; ++i) {
      if (i === table.rows.length) {
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        td2.innerText = dataNew2[i];
        td3.innerText = dataNew4[i];
        var percent = parseFloat((dataNew4[i] / dataNew2[i]) * 100).toFixed(2);
        td4.innerText = percent + "%";
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        if (percent > 45) {
          tr.style.backgroundColor = "#abffbd";
        } else if (percent < 25) {
          tr.style.backgroundColor = "#ff9e9e";
        }
      }
    }
    table.appendChild(tr);
  });
}
