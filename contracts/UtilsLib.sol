pragma solidity ^0.4.17;

library UtilsLib {

  /**
   * Unique items of an array of bytes32
   * Return array of unique items
   * @param arr array of bytes32 should be uniqued
   */
  function uniqueArrayOfBytes32(bytes32[] arr) public returns (bytes32[]) {
    bytes32[] res;
    for (uint i = 0; i < arr.length; i++) {
      bool existen = false;
      for (uint j = 0; j < res.length; j++) {
        if (arr[i] == res[j]) {
          existen = true;
          break;
        }
      }
      if (!existen) res.push(arr[i]);
    }
    return res;
  }

  /**
   * Filter items of an array of bytes32 which each item
   * should be valid in a pattern array.
   * Return array of items which each item is existen in pattern array
   * @param pattern origin array
   * @param arr array of bytes32 should be filtered
   */
  function filterValidValuesArrayOfBytes32(bytes32[] pattern, bytes32[] arr) public returns (bytes32[]) {
    bytes32[] res;
    for (uint i = 0; i < arr.length; i++) {
      bool valid = false;
      for (uint j = 0; j < pattern.length; j++) {
        if (arr[i] == pattern[j]) {
          valid = true;
          break;
        }
      }
      if (valid) res.push(arr[i]);
    }
    return res;
  }

}
