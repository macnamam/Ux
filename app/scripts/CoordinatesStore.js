import EventBus from './EventBus';
import xhr from 'xhr';
import Promise from 'promise';


// function fetchJSON({url}) {
//     var promise = new Promise(function(resolve, reject){
//         xhr({
//             uri: url,
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }, (err, resp, body) => {
//             if(err) {
//                 reject(err);
//                 return;
//             }
//             resolve(JSON.parse(body));
//         });
//     });
//
//     return promise;
// }


function getJSON(url,factor) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);

        if (req.response.length==4){
            // your code here.
            // console.log("no data on the server...");
            alert("No data appears on the Server - Please try again");
        }
        else{
          // console.log(req.response);
          LoadJSONandDraw(req.response,factor);
        }

        // mapClear();mapDraw(req.response);
        // console.log(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}


function onSelectItem(item) {

  // console.log('item selected', item);

  if(item=="vanilla"){
    // console.log('item selected', item);
    mapClear();mapDraw(g1);
  }
  if(item=="caramel"){
    // console.log('item selected', item);
    mapClear();mapDraw(g3);
  }
  else{
    mapClear();
  }

}

function LoadJSONandDraw(item,factor){

  mapClear();mapDraw(item,factor);
}

function onLoadData2json(item){
  // correct items have been added to the form
  // fired off a promise to return the json
  // console.log('item selected', item);

  // http://ca675.azurewebsites.net/query2.php?DRG=039&dbQuery=2011top
  // '../config/graphs/' + selectedChart +'.json'
  var _State = item[0];
  var _YEAR = item[1];
  var _DRG = ((item[2].length > 2) ? item[2] : "0"+item[2])

  if (_State=="ALL"){
  var urlquery = "http://ca675.azurewebsites.net/query2.php?DRG="+_DRG+"&dbQuery="+_YEAR;
  }
  else{
    var urlquery = "http://ca675.azurewebsites.net/query3.php?State="+_State+"&DRG="+_DRG+"&dbQuery="+_YEAR
  }
  console.log(urlquery);
  // console.log("9999");
  // console.log(urlquery);
  // http://ca675.azurewebsites.net/query2.php?DRG=039&dbQuery=2011top

  // var urlquery = "http://ca675.azurewebsites.net/query2.php?DRG="+_DRG+"&dbQuery="+_YEAR;

  // var tt = fetchJSON({ url: 'http://ca675.azurewebsites.net/query2.php?DRG=039&dbQuery=2011top' }).then(this.initActivity.bind(this));
  getJSON(urlquery,item[3]);
}

var CoordinatesStore = function() {
  this.initialize.apply(this, arguments);
};

Object.assign(CoordinatesStore.prototype, {
  initialize() {
    // console.log('inited!');
    EventBus.on('selectItem', onSelectItem, this);
    EventBus.on('LoadData2json', onLoadData2json, this);
    EventBus.on('LoadJSONandDraw', onLoadData2json, this);
  },

  onSelectItem(item) {
    // console.log('item selected', item);
    //fetch try using xhr -- fetchJSON   use promise fintan snippet
  },

  onLoadData2json(item){
    //
  },
  LoadJSONandDraw(item){
    //
  },
  onLoadData2json(item){
    //
  },

  onGet() {
    EventBus.emit('GET_COMPLETE', {});  // place the data in the {}
    // have a look at setstate method in the 'root' by setting the 'setstate' the the view should update
  }
});

module.exports = CoordinatesStore;
