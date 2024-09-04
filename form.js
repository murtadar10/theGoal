
let playerdata = document.querySelectorAll(".team1players");
let playerdata2 = document.querySelectorAll(".team1players2");
let arryOfPlayerData = [];
let arryOfPlayerData2 = [];

for (let i = 1; i <= 11; i++) {
  arryOfPlayerData.push(`<tr>
            <td>${i}</td>
            <td><input class="name" type="text" placeholder="اسم اللاعب " /></td>
            <td>
              <select>
                <option value="Starting">اساسي</option>
                <option value="Entered">دخول</option>
                <option value="Exited">خروج</option>
              </select>
            </td>
            <td>
              <input type="button" class="addyellow" value="Add" />
            </td>
            <td>
              <input type="button" class="addred" value="Add" />
            </td>
            <td>
              <input type="button" class="addgoal" value="Add goal" />
            </td>

            
          </tr>`);
}
for (let i = 1; i <= 5; i++) {
  arryOfPlayerData2.push(`<tr>
            <td>${i}</td>
            <td><input class="name" type="text" placeholder="اسم اللاعب " /></td>
            <td>
              <select>
                <option value="Starting">  بديل  </option>
                <option value="Entered">دخول</option>
                <option value="Exited">خروج</option>
              </select>
            </td>
            <td>
              <input type="button" class="addyellow" value="Add" />
            </td>
            <td>
              <input type="button" class="addred" value="Add" />
            </td>
            <td>
              <input type="button" class="addgoal" value="Add goal" />
            </td>

            
          </tr>`);
}
/// اضافة اللاعبين الى الهيكل 
let n = arryOfPlayerData.join(" ");
playerdata[0].innerHTML = `${n}`;
playerdata[1].innerHTML = `${n}`;
let n2 = arryOfPlayerData2.join(" ");
playerdata2[0].innerHTML = `${n2}`;
playerdata2[1].innerHTML = `${n2}`;


// دالة الوقت 
function updateDateTime() {
  const dateElement = document.getElementById("current-date");
  const now = new Date();

  // استخراج تاريخ اليوم والوقت
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // الأشهر تبدأ من 0
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const dayweak = String(now.toLocaleDateString("ar-EG", { weekday: "long" }));

  // تنسيق التاريخ والوقت بالأرقام فقط
  const formattedDateTime = `${year}-${month}-${day} 
  ${hours}:${minutes}:${seconds}     ${dayweak}`;

  // تعيين النص في العنصر
  dateElement.innerHTML = ` <p> التاريخ :${year}-${month}-${day} </p> <span> ${dayweak}     </span> <span> /  الوقت : ${hours}:${minutes}:${seconds} </span>`;
}
/////////////////////////////////////////////////////


let start = false;
      let timerInterval;
      let timerSeconds = 0;

      function startTimer() {
        if (start) return;
        start = true;
        timerInterval = setInterval(() => {
          timerSeconds++;
          let minutes = Math.floor(timerSeconds / 60);
          let seconds = timerSeconds % 60;
          document.getElementById("timer").textContent = `${String(
            minutes
          ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        }, 1000);
      }



// تحديث التاريخ والوقت عند تحميل الصفحة
window.onload = updateDateTime;



function getTeamPlayersData(teamId) {
  const playersData = [];
  const rows = document.querySelectorAll(`#${teamId} tr`);
  rows.forEach((row) => {
    const name = row.cells[0].querySelector("input").value;
    const status = row.cells[1].querySelector("select").value;
    const yellowCards = row.cells[2].querySelector("input").value;
    const redCards = row.cells[3].querySelector("input").value;
    const goals = row.cells[4].querySelector("input").value;
    playersData.push(`${name},${status},${yellowCards},${redCards},${goals}`);
  });
  return playersData;
}

// function saveMatchSummary() {
//   // الحصول على بيانات المباراة
//   const team1Name = document.getElementById("team1").value;
//   const team1Score = document.getElementById("score1").value;
//   const team2Name = document.getElementById("team2").value;
//   const team2Score = document.getElementById("score2").value;

//   // حفظ قسم النتيجة والأزرار للتأكد من استرجاعها لاحقًا
//   const scoreSectionHTML = document.querySelector("div > div").innerHTML; // يحتفظ بالنتيجة والأزرار
//   const scoreSectionHTML2 = document.querySelector(".dontsave").innerHTML;
//   // إزالة النتيجة والأزرار من الواجهة
//   document.querySelector("div > div").innerHTML = "";
//   document.querySelector(".dontsave").innerHTML = "";

//   //  الحصول على هيكلية الواجهة بعد إزالة العناصر 
//   const matchDetailsHTML = document.querySelector(".container").innerHTML;

//   // استرجاع قسم النتيجة والأزرار
//   document.querySelector("div > div").innerHTML = scoreSectionHTML;
//   document.querySelector(".dontsave").innerHTML = scoreSectionHTML2;

//   // إنشاء ملخص المباراة
//   const matchSummary = `${team1Name},${team1Score},${team2Name},${team2Score},${matchDetailsHTML}`;

//   // تخزين ملخص المباراة في Local Storage
//   let matchSummaries = localStorage.getItem("matchSummaries") || "";
//   matchSummaries += matchSummary + ";";
//   localStorage.setItem("matchSummaries", matchSummaries);

//   // إظهار رسالة تأكيد وتفريغ الحقول
//   alert("Match summary saved successfully!");
//   document.querySelectorAll("input, select").forEach((el) => (el.value = ""));
// }

// function displayMatchSummaries() {
//   const matchSummaries = localStorage.getItem("matchSummaries") || "";
//   const summaryList = document.getElementById("match-summary-list");
//   summaryList.innerHTML = "";

//   if (!matchSummaries) {
//     summaryList.innerHTML = "<p>No match summaries available.</p>";
//     return;
//   }

//   matchSummaries.split(";").forEach((summary, index) => {
//     if (summary.trim()) {
//       const [team1Name, team1Score, team2Name, team2Score, matchDetailsHTML] =
//         summary.split(",");

//       const matchBrief = document.createElement("div");
//       matchBrief.innerHTML = `
//         <p>Match ${index + 1}:</p>
//         <p> ${team1Name} ${team1Score} -  ${team2Name} ${team2Score}</p>
//         <button onclick="toggleDetails(${index})">Show Details</button>
//         <div id="match-details-${index}" style="display:none;">
        
//           <div>${matchDetailsHTML}</div>
//         </div>
//         <hr />
//       `;
//       summaryList.appendChild(matchBrief);
//     }
//   });
// }



// function displayMatchSummaries() {
//   // الحصول على محتوى الصفحة المخزن في localStorage
//   const matchSummary = localStorage.getItem('matchSummary');

//   if (matchSummary) {
//       // إنشاء نافذة منبثقة
//       const popupWindow = window.open('', '_blank', 'width=800,height=600');

//       // ضبط محتوى النافذة المنبثقة
//       popupWindow.document.open();
//       popupWindow.document.write(`
//           <html>
//           <head>
//               <title>ملخص المباراة</title>
//               <style>
//                   body {
//                       font-family: Arial, sans-serif;
//                       margin: 20px;
//                   }
//               </style>
//           </head>
//           <body>
//               ${matchSummary}
//           </body>
//           </html>
//       `);
//       popupWindow.document.close();
//   } else {
//       alert('لا توجد ملخصات محفوظة للعرض.');
//   }
// }




// function toggleDetails(index) {
//   const detailsDiv = document.getElementById(`match-details-${index}`);
//   if (detailsDiv.style.display === "none") {
//     detailsDiv.style.display = "block";
//   } else {
//     detailsDiv.style.display = "none";
//   }
// }


 let timerDisplay = document.getElementById("timer");

document.addEventListener("DOMContentLoaded", function () {
  let i = 0 ;
  // إضافة مستمع للاصفر addyellow
  document.querySelectorAll(".addyellow").forEach((button) => {
    button.addEventListener("click", function () {
      const cell = this.closest("td");
      const p = document.createElement("p");
      const currentTime = timerDisplay.textContent; // الحصول على وقت المؤقت
      i++
      if(i==2){
        button.style.display="none";
      }

      p.innerHTML = ` <span class="yellow" > <img src="y.png" alt=""> </span> </span> ${currentTime}`;; // النص مع الوقت

      // إضافة العنصر <span> بجانب الزر
      cell.appendChild(p);
   
    



    });
  });

  // إضافة مستمع للاحمر
  document.querySelectorAll(".addred").forEach((button) => {
    button.addEventListener("click", function () {
      const cell = this.closest("td");
      const p = document.createElement("p");
      const currentTime = timerDisplay.textContent; // الحصول على وقت المؤقت
button.style.display="none";
      p.innerHTML = ` <span class="red" > <img src="red.png" alt=""> ${currentTime}`; // النص مع الوقت

      // إضافة العنصر <p> بجانب الزر
      cell.appendChild(p);
    });
  });

  // إضافة مستمع للاهداف
  document.querySelectorAll(".addgoal").forEach((button) => {
    button.addEventListener("click", function () {
      const cell = this.closest("td");
      const p = document.createElement("p");
      const currentTime = timerDisplay.textContent; // الحصول على وقت المؤقت

      p.innerHTML = ` <span class="goal" >  <img class="go" src="go.png" alt=""> </span> </span> ${currentTime}`; // النص مع الوقت

      // إضافة العنصر <p> بجانب الزر
      cell.appendChild(p);
    });
  });
});
////////////////////////////// دالة للحفظ والتخزين 
function saveAndAbdate() {
  updateScores() ;
saveMatchSummary(); 
}

// -----------================================================================


// ===================دالة خزن النتائج وارشفتها ========================


function saveMatchSummary() {
  // الحصول على بيانات المباراة
  const team1Name = document.getElementById("team1").value;
  const team1Score = document.getElementById("score1").value;
  const team2Name = document.getElementById("team2").value;
  const team2Score = document.getElementById("score2").value;

  const hkm1 = document.getElementById("referee1").value;
  const hkm2 = document.getElementById("referee2").value;
  const hkm3 = document.getElementById("referee3").value;
  const hkm4 = document.getElementById("referee4").value;

  const date = new Date();
  const formattedDate = date.toLocaleDateString('ar-IQ'); 
  // نسخ المحتوى من قسم النتيجة بدون الأزرار
  const matchDetailsElement = document.querySelector(".container").cloneNode(true);

  matchDetailsElement.querySelectorAll("select").forEach(select => {
    select.remove();  // حذف عنصر select من النسخة
  });

  // تغيير حقول الإدخال إلى عناصر نصية غير قابلة للتعديل
  matchDetailsElement.querySelectorAll("input ,button").forEach(inputs => {
    const span = document.createElement("span");
    span.textContent = inputs.value;
    span.className = "readonly-field";
    inputs.replaceWith(span);
  });

  // الحصول على HTML المحدث بدون الأزرار
  const matchDetailsHTML = matchDetailsElement.innerHTML;

  // إنشاء ملخص المباراة مع إخفاء التفاصيل وإضافة زر لعرض التفاصيل
  const matchSummary = `
      <div class="match-summary">
      <span> <h3>تاريخ المباراة:${formattedDate}</h3>
          <h2>${team1Name} ${team1Score} - ${team2Score} ${team2Name}</h2>
          <h3>حكام المباراة:</h3>
          <p> الحكم الاول ${hkm1} \\ الحكم الثاني ${hkm2} \\ الحكم الثالث ${hkm3} \\ الحكم الرابع ${hkm4} </p>
          <button class="show-details-button">عرض التفاصيل</button>
          <div class="match-details" style="display:none;">${matchDetailsHTML}</div>
      </div>
  `;

  // تخزين ملخص المباراة في Local Storage
  let matchSummaries;
  try {
    matchSummaries = JSON.parse(localStorage.getItem("matchSummaries")) || [];
  } catch (e) {
    matchSummaries = [];
  }

  matchSummaries.push(matchSummary);
  localStorage.setItem("matchSummaries", JSON.stringify(matchSummaries));

  // إظهار رسالة تأكيد وتفريغ الحقول
  alert("تم حفظ ملخص المباراة بنجاح!");
  document.querySelectorAll("input, select").forEach((el) => (el.value = ""));
}

function displayMatchSummaries() {
  // الحصول على ملخصات المباريات المخزنة في Local Storage
  let matchSummaries;
  try {
    matchSummaries = JSON.parse(localStorage.getItem('matchSummaries'));
  } catch (e) {
    matchSummaries = [];
  }

  if (matchSummaries && matchSummaries.length > 0) {
      // إنشاء طبقة التغطية
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      overlay.id = 'overlay'
      document.body.appendChild(overlay);

      // إنشاء عنصر لإظهار ملخصات المباريات
      const summariesContainer = document.createElement('div');
      summariesContainer.className = 'popup-container';

      // إضافة زر لإغلاق النافذة المنبثقة
      const closeButton = document.createElement('button');
      closeButton.textContent = 'إغلاق';
      closeButton.className = 'popup-close-button';
      let cls = document.getElementById("overlay"); 
cls.onclick = closeButton.onclick = function() {
          document.body.removeChild(summariesContainer);
          document.body.removeChild(overlay);
      };
      summariesContainer.appendChild(closeButton);

      // إضافة ملخصات المباريات
      matchSummaries.forEach(summary => {
          const summaryElement = document.createElement('div');
          summaryElement.innerHTML = summary;
          summaryElement.className = 'match-summary';

          // إضافة معالج للزر "عرض التفاصيل"
          summaryElement.querySelector('.show-details-button').onclick = function() {
              const details = this.nextElementSibling;
              if (details.style.display === "none") {
                  details.style.display = "block";
                  this.textContent = "إخفاء التفاصيل";
              } else {
                  details.style.display = "none";
                  this.textContent = "عرض التفاصيل";
              }
          };

          summariesContainer.appendChild(summaryElement);
      });

      // إضافة العنصر إلى الجسم
      document.body.appendChild(summariesContainer);
  } else {
      alert('لا توجد ملخصات محفوظة للعرض.');
  }
}

document.getElementById("downloadImage").addEventListener("click", function() {
  html2canvas(document.getElementById("capture")).then(function(canvas) {
      var link = document.createElement('a');
      link.download = 'interface.png';
      link.href = canvas.toDataURL("image/png");
      link.click();
  });
});

document.getElementById("downloadPDF").addEventListener("click", function() {
  html2canvas(document.getElementById("capture")).then(function(canvas) {
      var imgData = canvas.toDataURL('image/png');
      var pdf = new jspdf.jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("interface.pdf");
  });
});


