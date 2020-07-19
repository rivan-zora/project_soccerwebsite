var rank= 0;
var stats; 
var results = {name : [], goals: [], assists: [] , team: []};
var newCell;
var newText;

//We need to initiate a request to read the json file
    $.getJSON('data/topscores.json')
     .done(function(data){ // Once done do the below

// table =  document.getElementById('rank').getElementsByTagName('tbody')[0]  //Grabbing first contents of table body
// var tableHeading = table.getElementsByTagName('th').length //Get the table heading
//var newRow = table.insertRow(table.rows.length)  //Creating a new row
// var newCell = newRow.insertCell(0)
// var newText = document.createTextNode('hello - first cell')
// newCell.appendChild(newText)

  $.each(data, function(keyIndex) {
        results.name[keyIndex] = (data[keyIndex].player.name);
        stats = data[keyIndex].statistics;
        results.goals[keyIndex] = (stats[0].goals.total);
        results.assists[keyIndex] = (stats[0].goals.assists);
        results.team[keyIndex] = (stats[0].team.name);
        });

    });

    

    const titles = ['name' , 'goals', 'assists' , 'team']; // Create a titles array to store the headings

    const createElement = document.createElement.bind(document);
    const querySelector = document.querySelector.bind(document);

    const table = querySelector('table');
    const titleTr = createElement('tr');
    table.append(titleTr);


    titles.forEach(title => {
        const th = createElement('th');
        th.textContent = title.replace(/\w/, l => l.toUpperCase()); //Pass the first character of heading and upperacse it
        titleTr.append(th);
        });


        console.log((results));
        Object.keys(Object.values(results)[0]).forEach(i => {
            const tr = createElement('tr');
            titles.forEach(title => {
              const td = createElement('td');
              td.textContent = results[title][i];
              tr.append(td);
            });
    
            table.append(tr);
          });

     //   results = Object.entries(results); // converted object results to array


        
        // for(var i = 0 ; i<results.name.length;i++){
        //     var row = document.createElement('tr');
        //     console.log(results)
        //         for(var j =0; i<tableHeading;j++){
        //             var cell = document.createElement('td')
        //             console.log(results.name[i][j])
        //             // var textNode = document.createTextNode(results.name[i][j])
        //             // cell.appendChild(textNode)
        //             // row.appendChild(cell)
        //             // console.log(results[i].name)
        //         }          
        //         // table.appendChild(row)
        // }
        // for (var key in results.name.length) {
        //     var row = document.createElement('tr');
        //         Object.values(res).forEach(text => {
        //            var cell = document.createElement('td')
        //            var textNode = document.createTextNode(text)
        //            cell.appendChild(textNode)
        //            row.appendChild(cell)
        //         });
        //         table.appendChild(row)
        // }


   
        //insert 20 rows beginning of the loop
        //Another loop for cells, determined by length of the heading

    //  for(var i = 0; i < data.lengthlength; i++ ){ //Outer loop
    //     var newRow = table.insertRow(table.rows.length)
    //     rank  = rank + 1 
    //          for(var j=0; j<tableHeading;j++){ //Inner loop
    //              newCell = newRow.insertCell(j) //I can insert all elements under insert cell
    //   //          newCell.innerHTML = results.assists[i][j]
      
    //          }
    //  }


    // $.each(data, function(keyIndex) {
    // //    console.log(keyIndex, value);
    //     names.push(data[keyIndex].player.name) //Get the names
    //     stats = data[keyIndex].statistics //put into stats object
    //     goals.push(stats[0].goals.total)      //grab the total goals
    //     assists.push(stats[0].goals.assists)  //grab the total assists
    //     teams.push(stats[0].team.name)         //grab the team     
    //     // console.log(data.length)
    // });