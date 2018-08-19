pragma solidity ^0.4.17;

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
            uniqueArrayOfBytes32(_optionIDs).length == optionIDs.length,
            "Option IDs should be unique"
        );
        _;
    }

    modifier shouldBeValidOptionIDs(bytes32[] _optionIDs) {
        require(
            filterValidValuesArrayOfBytes32(optionIDs, _optionIDs).length == optionIDs.length,
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
