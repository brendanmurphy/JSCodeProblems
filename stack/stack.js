var Stack = function() {
    this.head = null;
    this.length = 0;
};

Stack.prototype.add = function(value) {
    var node = {
        value: value,
        next: null
    };

    if (!this.head) {
        this.head = node;
    } else {
        node.next = this.head;
        this.head = node;
    }

    return this.length += 1;
};

Stack.prototype.remove = function() {
    if (!this.head) {
        return;
    }

    var node = this.head;
    this.head = node.next;
    node.next = null;
    this.length -= 1;
    return node.value;
};