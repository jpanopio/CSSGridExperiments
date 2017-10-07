var grids = document.getElementsByClassName('container');
var subgrids = document.getElementsByClassName('subgrid');

var gridColorSetup = function() {
  var intervalTimer = 1000;
  var delay = 100;

  for (var i = 0; i < subgrids.length; i += 1) {
    var gridChildren = subgrids[i].getElementsByClassName('grid-item');
    initializeColors(gridChildren, 'blue');

    (function(gridChildren, delay) {
      setTimeout(
        function() {
          colorChange(gridChildren, intervalTimer);
        },
        delay,
      );
    })(gridChildren, delay);

    delay += 100;
  }
};

var initializeColors = function(nodes, initialColor) {
  for (var i = 0; i < nodes.length; i += 1) {
    nodes[i].style.backgroundColor = initialColor;
  }
};

var colorChange = function(nodes, interval) {
  for (var i = 0; i < nodes.length; i += 1) {
    (function(node) {
      setInterval(
        function() {
          if (node.style.backgroundColor === 'blue') {
            node.style.backgroundColor = 'red';
          } else {
            node.style.backgroundColor = 'blue';
          }
        },
        interval,
      );
    })(nodes[i]);
  }
};

var gapChange = function(node, interval) {
    (function(node) {
      setInterval(
        function() {
          var activeIndex = node.className.indexOf('active');

          if (activeIndex > -1) {
            node.className = node.className.substring(
              0,
              activeIndex - 1,
            );
          } else {
            node.className += ' active';
          }
        },
        interval,
      );
    })(node);
};

var gridGapSetup = function() {
  var delay = 100;

  for (var i = 0; i < grids.length; i += 1) {
    (function(grid) {
      setTimeout(
        function() {
          gapChange(grid, 1000);
        },
        delay,
      );
    })(grids[i]);

    delay += 100;
  }
};

gridColorSetup();
gridGapSetup();
