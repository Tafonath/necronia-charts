var models = [];

models["Clubs"] = [[
   { key: 29,   text: "Bone Club",                       color: "#0B242D",  img: "images/Bone_Club.gif" },
   { key: 30,   text: "Giant Bone Club",                 color: "#0B242D",  img: "images/Giant_Bone_Club.gif" },
   { key: 31,   text: "Stonetop Mace",                   color: "#0B242D",  img: "images/Stonetop_Mace.gif" },
   { key: 32,   text: "Stonehead",                       color: "#0B242D",  img: "images/Stonehead.png" },
   { key: 1,    text: "Basic Mace",                      color: "#0B242D",  img: "images/Basic_Mace.gif" },
   { key: 2,    text: "Basic Mace II",                   color: "#0B242D",  img: "images/Basic_Mace_II.gif" },
   { key: 3,    text: "Basic Mace III",                  color: "#0B242D",  img: "images/Basic_Mace_III.gif" },
   { key: 4,    text: "Silverspade Mace",                color: "#0B242D",  img: "images/Silverspade_Mace.gif" },
   { key: 5,    text: "Silverspade Double Mace",         color: "#0B242D",  img: "images/Silverspade_Double_Mace.gif" },
   { key: 6,    text: "Mace of Spades",                  color: "#0B242D",  img: "images/Mace_of_Spades.gif" },
   { key: 7,    text: "Studded Club",                    color: "#0B242D",  img: "images/Studded_Club.gif" },
   { key: 8,    text: "Steel Mottler",                   color: "#0B242D",  img: "images/Steel_Mottler.gif" },
   { key: 9,    text: "Steelspiked Mottler",             color: "#0B242D",  img: "images/Steelspiked_Mottler.gif" },
   { key: 10,   text: "Metal Mace",                      color: "#0B242D",  img: "images/Metal_Mace.gif" },
   { key: 11,   text: "Great Steelspiked Mottler",       color: "#0B242D",  img: "images/Great_Steelspiked_Mottler.gif" },
   { key: 12,   text: "Dark Spike",                      color: "#0B242D",  img: "images/Dark_Spike.gif" },
   { key: 13,   text: "Heavy Spiked Club",               color: "#0B242D",  img: "images/Heavy_Spiked_Club.gif" },
   { key: 14,   text: "Iron Hammer",                     color: "#0B242D",  img: "images/Iron_Hammer.gif" },
   { key: 15,   text: "Battle Hammer",                   color: "#0B242D",  img: "images/Battle_Hammer.gif" },
   { key: 16,   text: "Primal Club",                     color: "#0B242D",  img: "images/Primal_Club.gif" },
   { key: 17,   text: "Tourturer's Squelcher",           color: "#0B242D",  img: "images/Torturer's_Squelcher.gif" },
   { key: 18,   text: "Heavy Battle Hammer",             color: "#0B242D",  img: "images/Heavy_Battle_Hammer.gif" },
   { key: 19,   text: "Firmwood Hammer",                 color: "#0B242D",  img: "images/Firmwood_Hammer.gif" },
   { key: 20,   text: "Ironpeak Rockcrusher",            color: "#0B242D",  img: "images/Ironpeak_Rockcrusher.gif" },
   { key: 21,   text: "Heavy War Hammer",                color: "#0B242D",  img: "images/Heavy_War_Hammer.gif" },
   { key: 22,   text: "Ivory Club",                      color: "#0B242D",  img: "images/Ivory_Club.gif" },
   { key: 23,   text: "Ivory Stellballer",               color: "#0B242D",  img: "images/Ivory_Steelballer.png" },
   { key: 24,   text: "Metaltwister Ivory Club",         color: "#0B242D",  img: "images/Metaltwister_Ivory_Club.png" },
   { key: 25,   text: "Double Metaltwister Ivory Club",  color: "#0B242D",  img: "images/Double_Metaltwister_Ivory_Club.png" },
   { key: 26,   text: "Spiked Ivory Stellballer",        color: "#0B242D",  img: "images/Spiked_Ivory_Steelballer.png" },
   { key: 27,   text: "Corporal Swingmasher",            color: "#0B242D",  img: "images/Corporal_Swingmasher.gif" },
   { key: 28,   text: "Spiked Ivory Hard-Stellballer",   color: "#0B242D",  img: "images/Spiked_Ivory_Hard-Steelballer.png" }
 ],[
   { from: 29/*Bone Club*/,                 to: 30/*"Giant Bone Club"*/,                 ingredients: ['10x Tight Bone','8x Big Bone'] },
   { from: 31/*Stonetop Mace*/,             to: 32/*"Stonehead"*/,                       ingredients: ['6x Heavier Stone','20x Little Stone'] },
   { from: 1/*Basic Mace*/,                 to: 2/*"Basic Mace II"*/,                    ingredients: ['2x Metal Spike','4x Iron Ore'] },
   { from: 1/*Basic Mace*/,                 to: 7/*"Studded Club"*/,                     ingredients: ['3x Wood','3x Metal Spike'] },
   { from: 2/*Basic Mace II*/,              to: 3/*"Basic Mace III"*/,                   ingredients: ['3x Kalemyte Ore','3x Metal Spike', '3x Thorn', '4x Iron Ore'] },
   { from: 3/*Basic Mace III*/,             to: 4/*"Silverspade Mace"*/,                 ingredients: ['1x Metal Twist', '4x Orymine Ore', '8x Silverine Ore'] },
   { from: 4/*Silverspade Mace*/,           to: 5/*"Silverspade Double Mace"*/,          ingredients: ['2x Metal Twist', '6x Orymine Ore', '16x Silverine Ore'] },
   { from: 5/*Silverspade Double Mace*/,    to: 6/*"Mace of Spades"*/,                   ingredients: ['3x Metal Twist', '10x Orymine Ore', '50x Bola', '32x Silverine Ore'] },
   { from: 7/*Studded Club*/,               to: 8/*"Steel Mottler"*/,                    ingredients: ['2x Silverine Ore', '1x Metal Spike', '2x Piece of Steel'] },
   { from: 8/*Steel Mottler*/,              to: 9/*"Steelspiked Mottler"*/,              ingredients: ['2x Lump of Dark Matter', '2x Metal Spike', '1x Spiked Iron Ball', '4x Silverine Ore'] },
   { from: 8/*Steel Mottler*/,              to: 10/*"Metal Mace"*/,                      ingredients: ['1x Rough Branch', '1x Spiked Iron Ball', '20x Piece of Steel'] },
   { from: 9/*Steelspiked Mottler*/,        to: 11/*"Great Steelspiked Mottler"*/,       ingredients: ['4x Lump of Dark Matter', '3x Metal Spike', '2x Spiked Iron Ball', '6x Piece of Steel'] },
   { from: 11/*Great Steelspiked Mottler*/, to: 12/*"Dark Spike"*/,                      ingredients: ['10x Lump of Dark Matter', '6x Metal Spike', '1x Essence of Nightmare', '4x Spiked Iron Ball', '1x Huge Crunk of Crude Iron'] },
   { from: 7/*Studded Club*/,               to: 13/*"Heavy Spiked Club"*/,               ingredients: ['10x Brown Firm Wood', '4x Metal Spike'] },
   { from: 14/*Iron Hammer*/,               to: 15/*"Battle Hammer"*/,                   ingredients: ['20x Brassy Ore', '10x Brown Leather', '10x String'] },
   { from: 13/*Heavy Spiked Club*/,         to: 15/*"Battle Hammer"*/,                   ingredients: ['20x Brassy Ore', '10x Brown Leather', '10x String'] },
   { from: 13/*Heavy Spiked Club*/,         to: 16/*"Primal Club"*/,                     ingredients: ['8x Bunch of Brown Hair', '1x Rough Branch', '4x Frost Giant Pelt', '8x Werewolf Fur'] },
   { from: 13/*Heavy Spiked Club*/,         to: 17/*"Tourturer's Squelcher"*/,           ingredients: ['1x Huge Crunk of Crude Iron', '6x Nail', '20x Fang'] },
   { from: 15/*Battle Hammer*/,             to: 18/*"Heavy Battle Hammer"*/,             ingredients: ['30x Brassy Ore', '1x Huge Crunk of Crude Iron'] },
   { from: 18/*Heavy Battle Hammer*/,       to: 19/*"Firmwood Hammer"*/,                 ingredients: ['100x Brown Firm Wood', '1x Behemoth Claw'] },
   { from: 18/*Heavy Battle Hammer*/,       to: 20/*"Ironpeak Rockcrusher"*/,            ingredients: ['50x Iron Ore', '3x Diamond (2)'] },
   { from: 19/*Firmwood Hammer*/,           to: 21/*"Heavy War Hammer"*/,                ingredients: ['1x Huge Crunk of Crude Iron', '10x Aulorian Ore', '1x Super-polish Dust'] },
   { from: 22/*Ivory Club*/,                to: 24/*"Metaltwister Ivory Club"*/,         ingredients: ['1x Metal Twist', '3x Metal Ore'] },
   { from: 22/*Ivory Club*/,                to: 23/*"Ivory Stellballer"*/,               ingredients: ['2x Piece of Steel', '1x Spiked Iron Ball'] },
   { from: 24/*Metaltwister Ivory Club*/,   to: 25/*"Double Metaltwister Ivory Club"*/,  ingredients: ['2x Metal Twist', '8x Piece of Steel', '5x Metal Ore'] },
   { from: 23/*Ivory Stellballer*/,         to: 26/*"Spiked Ivory Stellballer"*/,        ingredients: ['5x Piece of Steel', '4x Iron Ore'] },
   { from: 26/*Spiked Ivory Stellballer*/,  to: 28/*"Spiked Ivory Hard-Stellballer"*/,   ingredients: ['4x Brassy Ore', '4x Piece of Steel', '1x Spiked Iron Ball'] },
   { from: 23/*Ivory Stellballer*/,         to: 27/*"Corporal Swingmasher"*/,            ingredients: ['15x Diamond (1)', '10x Bony Tail', '20x Pale Wood'] }
 ]];

models["Shields"] = [[
   { key: 1,    text: "Wooden Shield",                   color: "#0B242D",  img: "images/Wooden_Shield.gif" },
   { key: 2,    text: "Wood-steel Targa",                color: "#0B242D",  img: "images/Wood-steel_Targa.gif" },
   { key: 3,    text: "Studded Woodshield",              color: "#0B242D",  img: "images/Studded_Woodshield.gif" },
   { key: 4,    text: "Steel Kite",                      color: "#0B242D",  img: "images/Steel_Kite.gif" },
   { key: 5,    text: "Megasteel Shield",                color: "#0B242D",  img: "images/Megasteel_Shield.gif" },
   { key: 6,    text: "Concrete Steel Reflector",        color: "#0B242D",  img: "images/Concrete_Steel_Reflector.gif" },
   { key: 7,    text: "Spiked Woodshield",               color: "#0B242D",  img: "images/Spiked_Woodshield.gif" },
   { key: 8,    text: "Plate Shield",                    color: "#0B242D",  img: "images/Plate_Shield.gif" },
   { key: 9,    text: "Empowered Plate Shield",          color: "#0B242D",  img: "images/Empowered_Plate_Shield.gif" },
   { key: 10,   text: "Runic Plate Shield",              color: "#0B242D",  img: "images/Runic_Plate_Shield.gif" },
   { key: 11,   text: "Dark Shield",                     color: "#0B242D",  img: "images/Dark_Shield.gif" },
   { key: 12,   text: "Medusa Shield",                   color: "#0B242D",  img: "images/Medusa_Shield.gif" },
   { key: 13,   text: "Devious Shield",                  color: "#0B242D",  img: "images/Devious_Shield.gif" },
   { key: 14,   text: "Nordic Shield",                   color: "#0B242D",  img: "images/Nordic_Shield.gif" },
   { key: 15,   text: "Dragon Shield",                   color: "#0B242D",  img: "images/Dragon_Shield.gif" },
   { key: 16,   text: "Golden Plate Shield",             color: "#0B242D",  img: "images/Golden_Plate_Shield.gif" },
   { key: 17,   text: "Perseid Shield",                  color: "#0B242D",  img: "images/Perseid_Shield.gif" },
   { key: 18,   text: "Smith Shield",                    color: "#0B242D",  img: "images/Smith_Shield.gif" },

   { key: 19,   text: "Turtleshell Shield",              color: "#0B242D",  img: "images/Turtleshell_Shield.gif" },
   { key: 20,   text: "Thornshell Turtle Shield",        color: "#0B242D",  img: "images/Thornshell_Turtle_Shield.gif" },
   { key: 21,   text: "Tough Thornshell Shield",         color: "#0B242D",  img: "images/Tough_Thornshell_Shield.gif" },
   { key: 22,   text: "Spiked Thornshell Shield",        color: "#0B242D",  img: "images/Spiked_Thornshell_Shield.gif" },

   { key: 23,   text: "Bone Shield",                     color: "#0B242D",  img: "images/Bone_Shield.gif" },
   { key: 24,   text: "Tusk Shield",                     color: "#0B242D",  img: "images/Tusk_Shield.gif" },

   { key: 25,   text: "Knight Shield",                   color: "#0B242D",  img: "images/Knight_Shield.gif" },
   { key: 26,   text: "Black Knight Shield",             color: "#0B242D",  img: "images/Black_Knight_Shield.gif" }
 ],[
   { from: 1,                 to: 2,                 ingredients: ['4x Metal Ore', '4x Wood'] },
   { from: 2,                 to: 3,                 ingredients: ['5x Kalemyte Ore', '10x Brown Firm Wood', '5x Metal Spike'] },
   { from: 2,                 to: 4,                 ingredients: ['15x Piece of Steel', '5x Metal Ore'] },
   { from: 4,                 to: 5,                 ingredients: ['12x Piece of Steel', '7x Silverine Ore'] },
   { from: 5,                 to: 6,                 ingredients: ['1x Huge Crunk of Crude Iron', '50x Piece of Steel', '10x Aulorian Ore'] },
   { from: 3,                 to: 7,                 ingredients: ['6x Fang', '6x Brown Firm Wood' ] },
   { from: 3,                 to: 8,                 ingredients: ['15x Brassy Ore', '10x Pale Wood' ] },
   { from: 3,                 to: 14,                ingredients: ['2x Red Dragon Scale', '20x Brown Firm Wood', '20x Red Enchanting Dust'] },
   { from: 3,                 to: 16,                ingredients: ['5x Gold Ingot', '5x Spiked Shoulderpad', '15x Kalemyte Ore'] },
   { from: 3,                 to: 18,                ingredients: ['25x Piece of Steel', '40x Cyclops Toe', '35x Brown Firm Wood', '15x Nail'] },
   { from: 8,                 to: 9,                 ingredients: ['15x Brassy Ore', '8x Lump of Earth', '10x Pelvis Bone'] },
   { from: 8,                 to: 10,                ingredients: ['20x Brassy Ore', '6x Pale Wood', '10x Lump of Earth'] },
   { from: 9,                 to: 11,                ingredients: ['50x Lump of Dark Matter', '16x Orymine Ore', '2x Long Horn'] },
   { from: 9,                 to: 12,                ingredients: ['2x Giant Eye', '25x Strand of Medusa Hair', '60x Eye', '20x Mord Ore', '50x Brassy Ore'] },
   { from: 10,                to: 11,                ingredients: ['50x Lump of Dark Matter', '16x Orymine Ore', '2x Long Horn'] },
   { from: 10,                to: 12,                ingredients: ['2x Giant Eye', '25x Strand of Medusa Hair', '60x Eye', '20x Mord Ore', '50x Brassy Ore'] },
   { from: 11,                to: 13,                ingredients: ['20x Stone Wing', '20x Gold Ingot', '30x Mord Ore', '50x Lump of Dark Matter'] },
   { from: 14,                to: 15,                ingredients: ['30x Red Dragon Scale', '4x Orymine Ore', '10x Red Leather', '1x Topaz (3)'] },
   { from: 16,                to: 17,                ingredients: ['10x Essence of Wonder', '2x Sapphire (3)', '4x Gold Ingot', '10x Mord Ore', '2x Turquoise (3)'] },

   { from: 19,                to: 20,                ingredients: ['20x Turtle Shell', '10x Thorn' ] },
   { from: 20,                to: 21,                ingredients: ['20x Thorn', '35x Turtle Shell', '20x Crocodile Leather' ] },
   { from: 21,                to: 22,                ingredients: ['40x Thorn', '50x Turtle Shell', '40x Crocodile Leather', '1x Heap of Pollen Powder' ] },

   { from: 23,                to: 24,                ingredients: ['20x Striped Fur', '20x Tusk', '20x Spiked Shoulderpad' ] },

   { from: 25,                to: 26,                ingredients: ['30x Lump of Dark Matter', '100x Demonic Essence', '3x Distorded Lump of Darkness' ] }
 ]];


// Load this model on site entry
var nodeArray = models["Clubs"][0];
var linkDataArray = models["Clubs"][1];

$( document ).ready(function() {

    var $ = go.GraphObject.make;  // for conciseness in defining templates

    function ArrangedLayeredDigraphLayout() {
      go.LayeredDigraphLayout.call(this);
      this.arrangementSpacing = 50;  // some space between the sub graphs
    }
    go.Diagram.inherit(ArrangedLayeredDigraphLayout, go.LayeredDigraphLayout);

    ArrangedLayeredDigraphLayout.prototype.doLayout = function(coll) {
      var net = this.makeNetwork(coll);
      var subnets = net.splitIntoSubNetworks();
      var initorig = this.arrangementOrigin.copy();
      var orig = this.initialOrigin(initorig).copy();
      var diagram = this.diagram;
      diagram.startTransaction();
      // layout each subnetwork
      // you could sort these in a different order, if you like
      var lay = this;
      subnets.each(function(n) {
        lay.network = n;
        lay.arrangementOrigin = orig;
        go.LayeredDigraphLayout.prototype.doLayout.call(lay, coll);
        var bnds = diagram.computePartsBounds(n.findAllParts());
        if (lay.direction === 0 || lay.direction === 180) {
          orig.y += bnds.height + lay.arrangementSpacing;
        } else {
          orig.x += bnds.width + lay.arrangementSpacing;
        }
      })
      // now layout any singleton nodes left over from splitIntoSubNetworks()
      // you could also sort these in a different order
      net.vertexes.each(function(v) {
        var node = v.node;
        if (node !== null) {
          node.move(orig);
          var bnds = node.actualBounds;
          if (lay.direction === 0 || lay.direction === 180) {
            orig.y += bnds.height + lay.arrangementSpacing;
          } else {
            orig.x += bnds.width + lay.arrangementSpacing;
          }
        }
      });
      this.arrangementOrigin = initorig;
      diagram.commitTransaction("ArrangedLayeredDigraphLayout");
    };

    myDiagram =
      $(go.Diagram, "myDiagramDiv", // must be the ID or reference to div
        {
          initialAutoScale: go.Diagram.UniformToFill,
          padding: 10,
          contentAlignment: go.Spot.Center,
          maxSelectionCount: 2
        });

    myDiagram.layout = new ArrangedLayeredDigraphLayout();
    myDiagram.layout.direction = 90;

    // define the Node template
    myDiagram.nodeTemplate =
      $(go.Node, "Horizontal",
        { locationSpot: go.Spot.Center,  // Node.location is the center of the Shape
          locationObjectName: "SHAPE",
          selectionAdorned: false,
          selectionChanged: nodeSelectionChanged },          
        $(go.Panel, "Auto",
          $(go.Shape, "RoundedRectangle",
            { name: "SHAPE",
              fill: "lightgray",  // default value, but also data-bound
              stroke: "transparent",  // modified by highlighting
              strokeWidth: 2,
              desiredSize: new go.Size(50, 35),
              portId: "" },  // so links will go to the shape, not the whole node
            new go.Binding("fill", "isSelected", function(s, obj) { return s ? "#1E90FF" : obj.part.data.color; }).ofObject()),
          $(go.Picture,
            { margin: 10, width: 32, height: 32 },
            new go.Binding("source", "img"))
          // ,$(go.TextBlock,
          //   new go.Binding("text", "distance", function(d) { if (d === Infinity) return "No Path"; else return d | 0; }), { stroke: "white" })
        ),
        $(go.TextBlock,
          new go.Binding("text")));

    // define the Link template
    myDiagram.linkTemplate =
      $(go.Link,
        {
          selectable: false,      // links cannot be selected by the user
          curve: go.Link.Orthogonal,
          layerName: "Background"  // don't cross in front of any nodes
        },
        $(go.Shape,  // this shape only shows when it isHighlighted
          { isPanelMain: true, stroke: null, strokeWidth: 5 },
          new go.Binding("stroke", "isHighlighted", function(h) { return h ? "#1E90FF" : null; }).ofObject()),
        $(go.Shape,
          // mark each Shape to get the link geometry with isPanelMain: true
          { isPanelMain: true, stroke: "black", strokeWidth: 1 },
          new go.Binding("stroke", "color")),
        $(go.Shape, { toArrow: "Standard" })
      );

    // Override the clickSelectingTool's standardMouseSelect
    // If less than 2 nodes are selected, always add to the selection
    myDiagram.toolManager.clickSelectingTool.standardMouseSelect = function() {
      var diagram = this.diagram;
      if (diagram === null || !diagram.allowSelect) return;
      var e = diagram.lastInput;
      var count = diagram.selection.count;
      var curobj = diagram.findPartAt(e.documentPoint, false);
      if (curobj !== null) {
        if (count < 2) {  // add the part to the selection
          if (!curobj.isSelected) {
            var part = curobj;
            if (part !== null) part.isSelected = true;
          }
        } else {
          if (!curobj.isSelected) {
            var part = curobj;
            if (part !== null) diagram.select(part);
          }
        }
      } else if (e.left && !(e.control || e.meta) && !e.shift) {
        // left click on background with no modifier: clear selection
        diagram.clearSelection();
      }
    }

    // select two nodes that connect from the first one to the second one
    var num = myDiagram.model.nodeDataArray.length;
    var node1 = null;
    var node2 = null;
    for (var i = 0; i < num; i++) {
      node1 = myDiagram.findNodeForKey(i);
      var distances = findDistances(node1);
      for (var j = 0; j < num; j++) {
        node2 = myDiagram.findNodeForKey(j);
        var dist = distances.getValue(node2);
        if (dist > 1 && dist < Infinity) {
          node1.isSelected = true;
          node2.isSelected = true;
          break;
        }
      }
      if (myDiagram.selection.count > 0) break;
    }
    // Generate graph  
    myDiagram.model = new go.GraphLinksModel(nodeArray, linkDataArray);

  // There are three bits of functionality here:
  // 1: findDistances(Node) computes the distance of each Node from the given Node.
  //    This function is used by showDistances to update the model data.
  // 2: findShortestPath(Node, Node) finds a shortest path from one Node to another.
  //    This uses findDistances.  This is used by highlightShortestPath.
  // 3: collectAllPaths(Node, Node) produces a collection of all paths from one Node to another.
  //    This is used by listAllPaths.  The result is remembered in a global variable
  //    which is used by highlightSelectedPath.  This does not depend on findDistances.

  var pathArray = [];
  var ingredientsArray = [];

  // Returns a Map of Nodes with distance values from the given source Node.
  // Assumes all links are unidirectional.
  function findDistances(source) {
    var diagram = source.diagram;
    // keep track of distances from the source node
    var distances = new go.Map(go.Node, "number");
    // all nodes start with distance Infinity
    var nit = diagram.nodes;
    while (nit.next()) {
      var n = nit.value;
      distances.add(n, Infinity);
    }
    // the source node starts with distance 0
    distances.add(source, 0);
    // keep track of nodes for which we have set a non-Infinity distance,
    // but which we have not yet finished examining
    var seen = new go.Set(go.Node);
    seen.add(source);

    // keep track of nodes we have finished examining;
    // this avoids unnecessary traversals and helps keep the SEEN collection small
    var finished = new go.Set(go.Node);
    while (seen.count > 0) {
      // look at the unfinished node with the shortest distance so far
      var least = leastNode(seen, distances);
      var leastdist = distances.getValue(least);
      // by the end of this loop we will have finished examining this LEAST node
      seen.remove(least);
      finished.add(least);
      // look at all Links connected with this node
      var it = least.findLinksOutOf();
      while (it.next()) {
        var link = it.value;
        var neighbor = link.getOtherNode(least);
        // skip nodes that we have finished
        if (finished.contains(neighbor)) continue;
        var neighbordist = distances.getValue(neighbor);
        // assume "distance" along a link is unitary, but could be any non-negative number.
        var dist = leastdist + 1;  //Math.sqrt(least.location.distanceSquaredPoint(neighbor.location));
        if (dist < neighbordist) {
          // if haven't seen that node before, add it to the SEEN collection
          if (neighbordist === Infinity) {
            seen.add(neighbor);
          }
          // record the new best distance so far to that node
          distances.add(neighbor, dist);
        }
      }
    }

    return distances;
  }

  // This helper function finds a Node in the given collection that has the smallest distance.
  function leastNode(coll, distances) {
    var bestdist = Infinity;
    var bestnode = null;
    var it = coll.iterator;
    while (it.next()) {
      var n = it.value;
      var dist = distances.getValue(n);
      if (dist < bestdist) {
        bestdist = dist;
        bestnode = n;
      }
    }
    return bestnode;
  }


  // Find a path that is shortest from the BEGIN node to the END node.
  // (There might be more than one, and there might be none.)
  function findShortestPath(begin, end) {
    // compute and remember the distance of each node from the BEGIN node
    distances = findDistances(begin);

    // now find a path from END to BEGIN, always choosing the adjacent Node with the lowest distance
    var path = new go.List();
    path.add(end);
    while (end !== null) {
      var next = leastNode(end.findNodesInto(), distances);
      if (next !== null) {
        if (distances.getValue(next) < distances.getValue(end)) {
          path.add(next);  // making progress towards the beginning
        } else {
          next = null;  // nothing better found -- stop looking
        }
      }
      end = next;
    }
    // reverse the list to start at the node closest to BEGIN that is on the path to END
    // NOTE: if there's no path from BEGIN to END, the first node won't be BEGIN!
    path.reverse();
    return path;
  }


  // Recursively walk the graph starting from the BEGIN node;
  // when reaching the END node remember the list of nodes along the current path.
  // Finally return the collection of paths, which may be empty.
  // This assumes all links are unidirectional.
  function collectAllPaths(begin, end) {
    var stack = new go.List(go.Node);
    var coll = new go.List(go.List);

    function find(source, end) {
      source.findNodesOutOf().each(function(n) {
        if (n === source) return;  // ignore reflexive links
        if (n === end) {  // success
          var path = stack.copy();
          path.add(end);  // finish the path at the end node
          coll.add(path);  // remember the whole path
        } else if (!stack.contains(n)) {  // inefficient way to check having visited
          stack.add(n);  // remember that we've been here for this path (but not forever)
          find(n, end);
          stack.removeAt(stack.count - 1);
        }  // else might be a cycle
      });
    }

    stack.add(begin);  // start the path at the begin node
    find(begin, end);
    return coll;
  }

  // Return a string representation of a path for humans to read.
  function pathToString(path) {
    var pathArray = []; // pathArray
    var pathArrayKey = [];
    var s = path.length + ": ";
    for (var i = 0; i < path.length; i++) {
      if (i > 0) s += " -- ";
      s += path.elt(i).data.text;
      pathArray.push({text: path.elt(i).data.text, key:path.elt(i).data.key });
    }
    getLinkDataBetweenNodes(pathArray);
    return s;
  }

  function getLinkDataBetweenNodes(array){
    var tempArray = [];
    for (var i = 0; i < array.length - 1; i++) {
      for (var j = 0; j < linkDataArray.length; j++) {
        if ((array[i].key == linkDataArray[j].from) && (array[i+1].key == linkDataArray[j].to))
        {
          tempArray.push(linkDataArray[j].ingredients);
        }
      }
    }
    displayIngredientsList(array,tempArray);
  }

  // When a node is selected show distances from the first selected node.
  // When a second node is selected, highlight the shortest path between two selected nodes.
  // If a node is deselected, clear all highlights.
  function nodeSelectionChanged(node) {
    var diagram = node.diagram;
    if (diagram === null) return;
    diagram.clearHighlighteds();
    if (node.isSelected) {
      // when there is a selection made, always clear out the list of all paths
      var sel = document.getElementById("myPaths");
      sel.innerHTML = "";

      // show the distance for each node from the selected node
      var begin = diagram.selection.first();
      showDistances(begin);

      if (diagram.selection.count === 2) {
        var end = node;  // just became selected

        // highlight the shortest path
        highlightShortestPath(begin, end);

        // list all paths
        listAllPaths(begin, end);
      }
    }
  }


  // Have each node show how far it is from the BEGIN node.
  function showDistances(begin) {
    // compute and remember the distance of each node from the BEGIN node
    distances = findDistances(begin);

    // show the distance on each node
    var it = distances.iterator;
    while (it.next()) {
      var n = it.key;
      var dist = it.value;
      myDiagram.model.setDataProperty(n.data, "distance", dist);
    }
  }


  // Highlight links along one of the shortest paths between the BEGIN and the END nodes.
  // Assume links are unidirectional.
  function highlightShortestPath(begin, end) {
    highlightPath(findShortestPath(begin, end));
  }


  // List all paths from BEGIN to END
  function listAllPaths(begin, end) {
    // compute and remember all paths from BEGIN to END: Lists of Nodes
    paths = collectAllPaths(begin, end);

    // update the Selection element with a bunch of Option elements, one per path
    var sel = document.getElementById("myPaths");
    sel.innerHTML = "";  // clear out any old Option elements
    paths.each(function(p) {
      var opt = document.createElement("option");
      opt.text = pathToString(p);
      sel.add(opt, null);
    });
    sel.onchange = highlightSelectedPath;
  }

  // A collection of all of the paths between a pair of nodes, a List of Lists of Nodes
  var paths = null;
  // This is only used for listing all paths for the selection onchange event.

  // When the selected item changes in the Selection element,
  // highlight the corresponding path of nodes.
  function highlightSelectedPath() {
    var sel = document.getElementById("myPaths");
    var idx = sel.selectedIndex;
    var opt = sel.options[idx];
    var val = opt.value;
    highlightPath(paths.elt(sel.selectedIndex));
  }

  // Highlight a particular path, a List of Nodes.
  function highlightPath(path) {
    myDiagram.clearHighlighteds();
    for (var i = 0; i < path.count - 1; i++) {
      var f = path.elt(i);
      var t = path.elt(i + 1);
      f.findLinksTo(t).each(function(l) { l.isHighlighted = true; });
    }
  }

  function displayIngredientsList(pathArray,linksArray){ // first contain nodes, second links between them
    var displayThisShit = pathArray[0].text + " -> " + pathArray[pathArray.length - 1].text + "<br>"; // First node and Last node of path

    // Splits Strings into arrays
    var tempArray = [];
    for (var i = 0; i < linksArray.length; i++) {
      for (var j = 0; j < linksArray[i].length; j++) {
        var number = parseInt(linksArray[i][j].substr(0,linksArray[i][j].indexOf(' ')).replace('x',''));
        var string = linksArray[i][j].substr(linksArray[i][j].indexOf(' ')+1);
        tempArray.push([number,string]);
      };
    };
    //Eliminate duplicates
    var ingredientsArray = [];
    for (var i = 0; i < tempArray.length; i++) 
    {
      if(ingredientsArray.length >= 1)
      {
        for (var j = 0; j < ingredientsArray.length; j++) 
        {
          if (tempArray[i] != null) {
            if(tempArray[i][1] == ingredientsArray[j][1])
            {
              ingredientsArray[j][0] = ingredientsArray[j][0] + tempArray[i][0];
             tempArray.splice(i, 1);
            }
          }
        }
      }

      if (tempArray[i] != null) {
        ingredientsArray.push([tempArray[i][0],tempArray[i][1]]);
      }
      
    }
    // Display items
    var temp = "";
    for (var i = 0; i < ingredientsArray.length; i++) {
        temp += ingredientsArray[i][0] + "x " + ingredientsArray[i][1] + "<br>"; 
    }
    document.getElementById("ingredientsList").innerHTML = displayThisShit + temp;
  }

});