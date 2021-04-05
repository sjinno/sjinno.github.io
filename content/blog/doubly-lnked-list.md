+++
title = "Doubly Linked List"
date = 2020-12-05
[taxonomies]
tags = ["linkedlist", "datastructures", "python"]
+++

Here is the implementation of doubly linked list. I sort of wanted to write myself a note on how to implement it because I somehow forget it all the time. 😂

Basically, doubly linked list has:

- `check_if_node_has_value` method
- `remove` method
- `remove_node_bindings` method to help remove method out
- `insert_before_node` method
- `insert_after` method
- `set_head` method
- `set_tail` method
- `insert_at_specific_position` method

and... that's about it.

So in total, we will need to write 8 methods, which isn't so bad.

Let's dive right into it!

Firstly, let us make a `Node` class.

```py
class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None
```

And, now let's also write an init method for our doubly linked list.

```py
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
```

Ok, so now I would like to start with **check if node has value** method, which returns `True` if there is a value(data) or `False` if `null`.

So inside `DoublyLinkedList` class, write

```py
    def node_has_value(self, value):
        # Set node to head.
        node = self.head
        # Iterate over each node to see if node has value.
        while node is not None and node.value != value:
            node = node.next
        # Should return `False` if there isn't.
        # Should return `True` if there is.
        return node is not None
```

Now, let's do a **remove** method.

```py
    def remove(self, node):
        if node == self.head:
            self.head = self.head.next
        if node == self.tail:
            self.tail == self.tail.prev
        self.remove_bindings(node)
```

...which now leads us to writing a helper method to the **remove** method we just wrote.

```py
    def remove_bindings(self, node):
        if node.prev is not None:
            node.prev.next = node.next
        if node.next is not None:
            node.next.prev = node.prev
        node.prev = None
        node.next = None
```

And now, we are going to remove a node that has a value.

```py
    def remove_node_with_value(self, value):
        node = self.head
        while node is not None:
            node_to_remove = node
            node = node.next
            if node_to_remove.value == value:
                self.remove(node_to_remove)
```

Cool!

Ok, so now... Let us write **insert before** method which takes two parameters --- `node` to insert before and `node_to_insert`.

```py
    def insert_before(self, node, node_to_insert):
        if node_to_insert == self.head and node_to_insert == self.tail:
            return
        self.remove(node_to_insert)
        node_to_insert.prev = node.prev
        node_to_insert.next = node
        if node.prev is None:
            self.head = node_to_insert
        else:
            node.prev.next = node_to_insert
        node.prev = node_to_insert
```

Very similarly, **insert after** method will look likw...

```py
    def insert_after(self, node, node_to_insert):
        if node_to_insert == self.head and node_to_insert == self.tail:
            return
        self.remove(node_to_insert)
        node_to_insert.prev = node
        node_to_insert.next = node.next
        if node.next is None:
            self.tail = node_to_insert
        else:
            node.next.prev = node_to_insert
        node.next = node_to_insert
```

Phew, almost there...

We are going to write **set head**, **set tail**, and finally **insert at position** method, and we are done!

**_Set head_**

```py
    def set_head(self, node):
        if self.head is None:
            self.head = node
            self.tail = node
            return
        self.insert_before(self.head, node)
```

**_Set tail_**

```py
    def set_tail(self, node):
        if self.tail is None:
            self.set_head(node)
            return
        self.insert_after(self.tail, node)
```

Finally... **_Inert at position_**

```py
    def insert_at_postion(self, position, node_to_insert):
        if position == 1:
            self.set_head(node_to_insert)
            return
        node = self.head
        current_position = 1
        while node is not None and current_position != position:
            node = node.next
            current_position += 1
        if node is not None:
            self.insert_before(node, node_to_insert)
        else:
            self.set_tail(node_to_insert)
```

And..., that's it!!

I would like to add a unittest, but I will do it later.

Thank you! &#128513;

**Final code**

```py
class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def set_head(self, node):
        if self.head is None:
            self.head = node
            self.tail = node
            return
        self.insert_before(self.head, node)

    def set_tail(self, node):
        if self.tail is None:
            self.set_head(node)
            return
        self.insert_after(self.tail, node)

    def insert_at_postion(self, position, node_to_insert):
        if position == 1:
            self.set_head(node_to_insert)
            return
        node = self.head
        current_position = 1
        while node is not None and current_position != position:
            node = node.next
            current_position += 1
        if node is not None:
            self.insert_before(node, node_to_insert)
        else:
            self.set_tail(node_to_insert)

    def insert_before(self, node, node_to_insert):
        if node_to_insert == self.head and node_to_insert == self.tail:
            return
        self.remove(node_to_insert)
        node_to_insert.prev = node.prev
        node_to_insert.next = node
        if node.prev is None:
            self.head = node_to_insert
        else:
            node.prev.next = node_to_insert
        node.prev = node_to_insert

    def insert_after(self, node, node_to_insert):
        if node_to_insert == self.head and node_to_insert == self.tail:
            return
        self.remove(node_to_insert)
        node_to_insert.prev = node
        node_to_insert.next = node.next
        if node.next is None:
            self.tail = node_to_insert
        else:
            node.next.prev = node_to_insert
        node.next = node_to_insert

    def remove_node_with_value(self, value):
        node = self.head
        while node is not None:
            node_to_remove = node
            node = node.next
            if node_to_remove.value == value:
                self.remove(node_to_remove)

    def remove(self, node):
        if node == self.head:
            self.head = self.head.next
        if node == self.tail:
            self.tail == self.tail.prev
        self.remove_bindings(node)

    def remove_bindings(self, node):
        if node.prev is not None:
            node.prev.next = node.next
        if node.next is not None:
            node.next.prev = node.prev
        node.prev = None
        node.next = None

    def node_has_value(self, value):
        node = self.head
        while node is not None and node.value != value:
            node = node.next
        return node is not None
```
