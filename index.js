
var LinkedList = require('singly-linked-list');
var _ = require('lodash');
 
const defaultData1 = [4,1,8,4,5];
const defaultData2 = [10, 11, 17,5,0,1,8,4,5];

const findIntersectionNode = function(list1, list2, gap) {
  var secondCurrentNode = list2.getHeadNode();
  var secondNextNode = list2.findAt(gap+1) === -1 ? list2.getTailNode() : list2.findAt(gap+1);
  var node = list1.getHeadNode();
  var i = 1;
  while (node != null) {
    while(secondCurrentNode != null && secondCurrentNode != secondNextNode) {      
      if (_.isEqual(node, secondCurrentNode)) {
        return node;
      }
      secondCurrentNode = secondCurrentNode.next;
    }
    i++;
    if (secondNextNode != null) {
      secondNextNode = list2.findAt(gap*i + 1) === -1 ? list2.getTailNode() : list2.findAt(gap*i + 1);
    }
    node = node.next;
  }
  return null;
};

exports.find = function(initialData1, initialData2) { 
  // I choose to set default data instead of return an error
  var list1 = new LinkedList(initialData1 || defaultData1);  
  var list2 = new LinkedList(initialData2 || defaultData2);

  const n = list1.getSize()
  const m = list2.getSize()

  var intersectionNode = null;
  if (n < m) {
    intersectionNode = findIntersectionNode(list1, list2, m-n);
  } else {
     intersectionNode = findIntersectionNode(list2, list1, n-m);
  }
  return ('intersectionNode is: ', intersectionNode)
}