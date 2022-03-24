"use strict";
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
class TrieNode {
    value;
    children = new Map();
    isWord = false;
    constructor(value) {
        this.value = value;
    }
}
class Trie {
    root;
    constructor() {
        this.root = new TrieNode('');
    }
    insert(word) {
        let curr = this.root;
        let prefix = '';
        if (!curr)
            return;
        else {
            for (let char of word) {
                prefix += char;
                if (!curr?.children.has(char))
                    curr?.children.set(char, new TrieNode(prefix));
                curr = curr?.children.get(char);
            }
            curr.value = prefix;
            curr.isWord = true;
        }
    }
    search(word) {
        let curr = this.root;
        for (let char of word) {
            if (curr.children.has(char)) {
                curr = curr.children.get(char);
            }
            else {
                return false;
            }
        }
        return curr.value === word && curr.isWord;
    }
    startsWith(prefix) {
        let curr = this.root;
        let sb = '';
        for (let char of prefix) {
            if (curr.children.has(char)) {
                curr = curr.children.get(char);
            }
            else {
                return false;
            }
        }
        return curr?.value === prefix;
    }
}
const t = new Trie();
t.insert('hello');
t.insert('hi');
t.insert('hey');
console.log(t.search('hey'));
//# sourceMappingURL=Trie.js.map