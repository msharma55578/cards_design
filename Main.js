const SecondComponent = (energy, time) => {

    let str = `
        <div style="background-color: black; margin: 15px; border-radius: 10px; padding: 35px;">

            <div style="font-size:larger; margin: 0 40px 40px 40px;">Your Monthly Achivements</div>

            <img style="border-radius: 60%; height: 160px;" src="Images/person.jpg" alt="Logo" width="160px">

            <div style="margin: 10px auto 20px auto;">BEST OUTPUT</div>

            <div>
                <font size="+7">${energy}</font><small>kj</small>
            </div>
            <hr style="width: 20%; margin: 25px auto 25px auto;">

            <div style="font-size:larger; margin:10px;">${time} min Flexible Ride</div>
            <div style="color: rgb(110, 109, 109);">Kendall Toole</div>
            <div style="color: rgb(110, 109, 109); margin-bottom: 15px;">Taken 09/03/21 @ 3:21 AM ET</div>
            <div><a style="margin: 10px; color: rgb(206, 131, 33);"><small>VIEW DETAILS</small></a></div>
        </div>`
    return str;
}

const calenderTemplate = (name, monthYear, WorkoutDays, fewerDays) => {
    let str = `<div style="margin: auto; margin-bottom: 12px;">
        <img style="border-radius: 7px;" src="Images/Logo.png" alt="Logo" width="50px">
        <b style="position: relative; bottom: 9px;">Flexnest</b>
    </div>


    <!-- Month Heading -->
    <div style="margin-bottom: 12px;">
        ${name} month in review
    </div>
    <div style="margin-bottom: 12px;">
        <b>${monthYear}</b>
    </div>
    <!-- Card Heading -->
    <div style="background-color: black; margin: 15px; border-radius: 10px; padding: 35px;">
        <div style="font-size:larger; margin: 0 40px 40px 40px;">
            You Worked Out With Us ${WorkoutDays} Days This Month
        </div>
        <table style="margin: auto;" cellspacing="20" cellpadding="20">

            <caption align="top">
                <!-- Here we have used the attribute
            that is style and we have colored
            the sentence to make it better
            depending on the web page-->
            </caption>

            <thead>
                <tr>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>sat</th>
                    <th>Sun</th>
                </tr>
            </thead>

            <tbody id="tableBody">
                
            </tbody>
        </table>
        <div>
            <img style="position: relative; top: 4px; border-radius: 60%; height: 20px; background-color: white;"
                src="Images/down-arrow.png" alt="Arrow" width="20px" />
            This is ${fewerDays} fewer days than last month
        </div>
    </div>`
    return str;
}

const calender = (day, totalDays, dayInMonth, colorArr) => {
    let count = 1, flag = false, index = 0;
    var tableBody = document.getElementById('tableBody'), tr, td, row, cell;

    for (row = 0; row < totalDays / 7; row++) {
        tr = document.createElement('tr');
        for (cell = 0; cell < 7; cell++) {
            td = document.createElement('td');
            let cellNo = row * 7 + cell + 1;
            console.log(row * 7 + cell + 1, " ", dayInMonth, " ", count)


            if ((cellNo - day) === dayInMonth) flag = false;
            if (cellNo === day || flag) {
                if (colorArr[index] === count) {
                    td.style.backgroundColor = 'rgb(206, 131, 33)';
                    td.style.borderRadius = '40px';
                    index++;
                }
                td.innerHTML = count++;
                flag = true;
            }

            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}
(function () {

    let FirstElement = document.getElementById("mainDiv");

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var date = new Date('5 Oct 1998');          //not provide then take current month
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var day = firstDay.getDay();
    day = (day === 0) ? 7 : day
    let totalDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear();


    let ReviewMonthNo=23,name='Raunaq',WorkoutDays=2,fewerDays=2;
    let calenderTemplateStr = calenderTemplate(`${name}${ReviewMonthNo}'s`, `${month} ${year}`, WorkoutDays, fewerDays);
    
    let energy=4,workoutTime=20;
    let secondComponentStr = SecondComponent(energy, workoutTime);

    let completeString = calenderTemplateStr + secondComponentStr
    FirstElement.innerHTML = completeString;


    calender(day, totalDays + day - 1, totalDays, [4, 6]);
    
})();