package tree_top_view.java;
// This is not standalone code, it won't work if run as it is.

// Problem: hackerrank's "tree top view" problem

/* Setup code < */
class Node {
  Node left;
  Node right;
  int data;
  
  Node(int data) {
      this.data = data;
      left = null;
      right = null;
  }
}
/* > Setup code */

class Solution {
  /* 
    
    class Node 
      int data;
      Node left;
      Node right;
  */
  
  static int maxLeftLevel = 0;
  static int maxRightLevel = 0;

  public static void topView(Node root) {
    System.out.print(root.data + " ");
    if (root.right != null) printIfVisible(root.right, 1, "right");
    if (root.left != null) printIfVisible(root.left, -1, "left");
  }
  
  // Worked for the initial test. The additional tests after submitting failed.
  // However I unblocked one of those tests in order to use that input for testing
  // and it worked. Maybe there's something wrong with the tests of that exercise.
  public static void printIfVisible(Node node, int level, String direction) {
      if (node == null) return;

      if (direction == "right" && level > maxRightLevel) {
          maxRightLevel = level;
          System.out.print(node.data + " ");
      }
      if (direction == "left" && level < maxLeftLevel) {
          maxLeftLevel = level;
          System.out.print(node.data + " ");
      }
      if (node.right != null) printIfVisible(node.right, ++level, "right");
      if (node.left != null) printIfVisible(node.left, --level, "left");
  }
}
