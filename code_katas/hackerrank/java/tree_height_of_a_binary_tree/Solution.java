package tree_height_of_a_binary_tree.java;
// This is not standalone code, it won't work if run as it is.

// Problem: hackerrank's "height of a binary tree" problem

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
   * class Node
   * int data;
   * Node left;
   * Node right;
   */
  public static int height(Node root) {
    // return node_heights(root, 0, 0);
    return node_height(root, 0);
  }

  // Didn't work :'(
  // public static int node_heights(Node node, int left, int right) {
  //   if (node.left != null) {
  //     left++;
  //     node_heights(node.left, left, right);
  //   }
  //   if (node.right != null) {
  //     right++;
  //     node_heights(node.right, left, right);
  //   }
  //   System.out.println("max for " + node.data + " is:");
  //   System.out.println(Math.max(right, left));
  //   return Math.max(right, left);
  // }

  // // Worked!! but it can be improved
  // public static int node_height(Node node, int count) {
  //   int right_count = 0;
  //   int leftCount = 0;
  //   if (node.left != null || node.right != null) {
  //     if (node.left != null) {
  //       leftCount = node_height(node.left, count + 1);
  //     }
  //     if (node.right != null) {
  //       right_count = node_height(node.right, count + 1);
  //     }
  //   } else {
  //     return count;
  //   }
  //   return Math.max(leftCount, right_count);
  // }

  // Worked!!.. and looks much better too!
  public static int node_height(Node node, int count) {
    // "count - 1" so I can start with count as "0"
    if (node == null)
      return count - 1;
    count++;
    return Math.max(node_height(node.left, count), node_height(node.right, count));
  }

  // Rest of the code ..

  // Next steps: Can this be solved with Dynamic Programming??? I bet it can.
}