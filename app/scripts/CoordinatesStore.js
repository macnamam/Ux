import EventBus from './EventBus';
import xhr from 'xhr';
import Promise from 'promise';


function fetchJSON({url}) {
    var promise = new Promise(function(resolve, reject){
        xhr({
            uri: url,
            headers: {
                "Content-Type": "application/json"
            }
        }, (err, resp, body) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(JSON.parse(body));
        });
    });

    return promise;
}


function onSelectItem(item) {

  // console.log('item selected', item);

  if(item=="vanilla"){
    console.log('item selected', item);
    mapClear();mapDraw(g1);
  }
  if(item=="caramel"){
    console.log('item selected', item);
    mapClear();mapDraw(g3);
  }
  else{
    mapClear();
  }

}

function onLoadData2json(item){
  console.log('item selected', item);
  // http://ca675.azurewebsites.net/query2.php?DRG=039&dbQuery=2011top
  // '../config/graphs/' + selectedChart +'.json'
  // var tt = fetchJSON({ url: 'http://ca675.azurewebsites.net/query2.php?DRG=039&dbQuery=2011top' })
                // .then(this.initActivity.bind(this));

}

var CoordinatesStore = function() {
  this.initialize.apply(this, arguments);
};

Object.assign(CoordinatesStore.prototype, {
  initialize() {
    console.log('inited!');
    EventBus.on('selectItem', onSelectItem, this);
    EventBus.on('LoadData2json', onLoadData2json, this);
  },

  onSelectItem(item) {
    // console.log('item selected', item);
    //fetch try using xhr -- fetchJSON   use promise fintan snippet
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
