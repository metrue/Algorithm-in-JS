

var numBusesToDestination = function(routes, source, target) {
// 1. get list of circles which has the source    
// 2.0 start with circles[i] with the source station
// 2.1  iterate each connected circles[j] (it self included)
//      if the connected circles[j] has the target station, put the circle into path, and finish one search
//      if not find, bfs(circiles[j]
  const starts = routes.find(s => s === source)
  if (starts.length === 0) {
    return -1
  }
};

const bfs = (circle, target, path = []) => {
  if (circle.include(target)) {
    path.push(circle) 
    return
  }

  const connected = getConnected(routes, circle, path)
  
}
