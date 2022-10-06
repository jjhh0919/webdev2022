/*
배열 : 각 데이트 엘리먼트들은 위치가 지정, 인덱스(번호) 부여
연결 리스트 : 인덱스 없이 다수의 데이터 엘리먼트들로 구성

head : 연결 리스트의 시작 노드
tail : 연결 리스트의 마지막 노드
length : 연결 리스트의 길이

인덱스 없이 하나의 노드들은 각각 다음 노드를 카리키는 식
*/

// 단방향 연결 리스트
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("first");
list.push("second");
list.push("third");
list.pop();
list.shift();
list.unshift("fourth");
list.unshift("fifth");

console.log(list);
