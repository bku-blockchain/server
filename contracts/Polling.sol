pragma solidity ^0.4.17;

import { UtilsLib } from "./UtilsLib.sol";

contract Polling {

  address owner;

  bytes32 id;
  bytes32[] optionIDs;
  uint maxSelected;
  uint startDate;
  uint endDate;

  struct Voter {
    address addr;
    bytes32 userID;
    bytes32[] optionIDs;
  }

  uint totalVotes; // total vote from voter

  Voter[] voters; // index-0
  mapping (address => uint) mVoters; // index-1, default is 0

  modifier onlyOwner() {
    require(msg.sender == owner, "Only owner can access");
    _;
  }

  constructor(bytes32 _id, bytes32[] _optionIDs, uint _maxSelected, uint _startDate, uint _endDate) public {
    owner = msg.sender;
    id = _id;
    optionIDs = _optionIDs;
    maxSelected = _maxSelected;
    startDate = _startDate;
    endDate = _endDate;
  }

  modifier shouldBeInValidTerm() {
    require(
      now >= startDate && now <= endDate, 
      "Now is not valid time for voting"
    );
    _;
  }

  modifier shouldBeNewVoter() {
    require(
      mVoters[msg.sender] == 0,
      "Voter is existen"
    );
    _;
  }

  modifier shouldBeUniqueOptionIDs(bytes32[] _optionIDs) {
    require(
      UtilsLib.uniqueArrayOfBytes32(_optionIDs).length == optionIDs.length,
      "Option IDs should be unique"
    );
    _;
  }

  modifier shouldBeValidOptionIDs(bytes32[] _optionIDs) {
    require(
      UtilsLib.filterValidValuesArrayOfBytes32(optionIDs, _optionIDs).length == optionIDs.length,
      "Option IDs should be valid"
    );
    _;
  }

  modifier shouldBeInLimitSelectedOptionIDs(bytes32[] _optionIDs) {
    require(
      _optionIDs.length <= maxSelected,
      "Selected options exceeds the limit");
    _;
  }

  /**
   * Function: Transaction
   */
  function vote(bytes32 _userID, bytes32[] _optionIDs) public
    shouldBeInValidTerm()
    shouldBeNewVoter()
    shouldBeUniqueOptionIDs(optionIDs)
    shouldBeValidOptionIDs(optionIDs)
    shouldBeInLimitSelectedOptionIDs(_optionIDs) 
  {
    voters.push(Voter(msg.sender, _userID, _optionIDs));
    mVoters[msg.sender] = voters.length;
    totalVotes += _optionIDs.length;
  }


  /**
   * Functions: Message Call
   */
  function getTotalVotes() public view returns (uint) {
    return totalVotes;
  }

  function getNumOfVoter() public view returns (uint) {
    return voters.length;
  }

  function getTotalVoteOfOption(bytes32 _optionID) public view returns (uint) {
    uint res = 0;
    for (uint i = 0; i < voters.length; i++) {
      for (uint j = 0; j < voters[i].optionIDs.length; j++) {
        if (voters[i].optionIDs[j] == _optionID) res++;
      }
    }
    return res;
  }
}
