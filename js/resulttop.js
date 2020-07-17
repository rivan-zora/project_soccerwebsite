var rank, stats, results, table;
var names=[];
var goals = [];
var teams =[];
var assists =[];
//We need to initiate a request to read the json file
    $.getJSON('data/topscores.json')
     .done(function(data){ // Once done do the below
 //   console.dir(data[0].statistics[0].goals.total)

 table =  document.getElementById('rank');
 //console.log(table)

    $.each(data, function(keyIndex) {
    //    console.log(keyIndex, value);
        names.push(data[keyIndex].player.name) //Get the names
        stats = data[keyIndex].statistics //put into stats object
        goals.push(stats[0].goals.total)      //grab the total goals
        assists.push(stats[0].goals.assists)  //grab the total assists
        teams.push(stats[0].team.name)         //grab the team 
        console.dir(assists.length)
     table.innerHTML = '<tr><td>' + assists[10] + '</td></tr>'
    });

})

// $.each(names, function(i){
//     console.log(names[i])
// })


// try{
//     console.log(data[i].statistics[i].goals.total)
// }  catch(e) {
//     console.log("yo", e)
// }
    // goals = getSafe(() => data[i].statistics[i].goals)
    // console.log(goals)
    // function getSafe(fn){
    //     try{
    //         return fn
    //     }catch(e){
    //         return undefined
    //     }