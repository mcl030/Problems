/*

"Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
Implement the LRUCache class.
LRUCache(int capacity) - Initialize the LRU cache with positive size capacity.
int get(string key) - Return the value of the key if the key exists, otherwise return -1.
void put(string key, int value) - Update the value of the key if the key exists. Otherwise add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
We want these functions to have a runtime of O(1).

1: cache = LRUCache(2);
2: cache.put(“a”, 1);
3: cache.put(“b”, 2);
4: cache.get(“a”); // returns 1

5: cache.put(“c”, 3); // replaces “b”
6: cache.put(“d”, 4); // replaces “a”
"

*/

// Create LRUCache class that is a LinkedList, has an object cache, and keeps track of its current and max capacities
// More recently used items are closer to the head of the LinkedList
// Less recently used items are closer to the tail of the LinkedList
const LRUCache = function(capacity) {
  this.cache = {};
  this.maxCapacity = capacity;
  this.curCapacity = 0;
  this.head = null;
  this.tail = null;
};

const Node = function(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.previous = null;
}

LRUCache.prototype.get = function(key) {
  // If key exists in cache
  if (this.cache[key]) {
    const selectedNode = this.cache[key];
    
    // Connect the previous and next nodes to each other, essentially disconnecting the selectedNode
    if (selectedNode.previous) {
      selectedNode.previous.next = selectedNode.next; 
    }
    if (selectedNode.next) {
      selectedNode.next.previous = selectedNode.previous || selectedNode.next.previous;
    }

    // If the selectedNode is the least recently used item (tail), set new tail to the next least recently used item
    if (this.tail === selectedNode) {
      this.tail = selectedNode.previous || selectedNode;
    }

    // selectedNode's previous becomes null because it is the most recently used item now
    selectedNode.previous = null;

    // Old head becomes selectedNode's next node
    if (this.head !== selectedNode) {
      selectedNode.next = this.head;
      this.head.previous = selectedNode;
    }
    
    // selectedNode becomes the new head
    this.head = selectedNode;

    // Return selectedNode's value
    return selectedNode.value;
  }

  // If key does not exist in cache, return -1
  return -1;
};

LRUCache.prototype.put = function(key, value) {
  // If key exists in cache, re-assign value and invoke get method to re-order LinkedList and return value
  if (this.cache[key] !== undefined) {
    this.cache[key].value = value;
    this.get(key);
  } else {

    // Create new Node for new key's value in cache object
    this.cache[key] = new Node(key, value);
    const insertedNode = this.cache[key];

    // Old head becomes insertedNode's next node
    if (this.head) {
      insertedNode.next = this.head;
      this.head.previous = insertedNode;
    }

    // insertedNode becomes the new head
    this.head = insertedNode;

    // If this.tail is still null, assign insertedNode as tail as well
    if (!this.tail) {
      this.tail = insertedNode;
    }

    // Increate curCapicity count by 1
    this.curCapacity += 1;
  }
  
  // If cache is over maxCapacity, we must remove least recently used item
  if (this.curCapacity > this.maxCapacity) {
    const removedNode = this.tail;
    
    // If removedNode at the tail has a previous node, that previous node becomes the new tail
    if (removedNode.previous) {
      removedNode.previous.next = null;
      this.tail = removedNode.previous;
    }

    // Delete the removedNode from the cache object
    delete this.cache[removedNode.key];
    
    // Decrease curCapacity count by 1
    this.curCapacity -= 1;
  }
};