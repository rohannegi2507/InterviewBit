function kthNode(A, B) {
    let temp = A;
    let size = 0;
    // Getting the Length of the linkedlist
    while (temp) {
        size++;
        temp = temp.next;
    }

    let move = Math.round(size / 2) - B;

    if (move < 0) {
        return -1;
    }
    
    while (move >= 1) {
        A = A.next;
        move--;
    }
    
    return A.data;
}
